type Position = { start?: { line?: number } };

type JsxAttribute = {
  type: string;
  name?: string;
  value?: string | null | { value: string };
};

type HastNode = {
  type: string;
  tagName?: string;
  name?: string | null;
  value?: string;
  properties?: Record<string, unknown>;
  attributes?: JsxAttribute[];
  children?: HastNode[];
  position?: Position;
};

const VARIANTS = ["default", "compact", "matrix"] as const;
type Variant = (typeof VARIANTS)[number];

type TableOptions = {
  variant: Variant;
  caption?: string;
  captionHidden: boolean;
  stickyHeader: boolean;
  stack: boolean | "auto";
  nowrap: number[];
};

const TABLE_PROPS = [
  "variant",
  "caption",
  "captionHidden",
  "stickyHeader",
  "stack",
  "nowrap",
] as const;
type TableProp = (typeof TABLE_PROPS)[number];

const SHORT_CELL_CHARS = 12;
const LONG_CELL_CHARS = 60;
const STICKY_ROW_COUNT = 15;
const FALLBACK_LABEL = "Bảng dữ liệu";

// ---------------------------------------------------------------------------
// HAST helpers
// ---------------------------------------------------------------------------

const isVariant = (value: string): value is Variant =>
  (VARIANTS as readonly string[]).includes(value);

const isTableProp = (name: string): name is TableProp =>
  (TABLE_PROPS as readonly string[]).includes(name);

const isElement = (node: HastNode | undefined, tagName: string) =>
  node?.type === "element" && node.tagName === tagName;

const isTableJsx = (node: HastNode) =>
  node.type === "mdxJsxFlowElement" && node.name === "Table";

const isLineBreak = (node: HastNode) =>
  isElement(node, "br") ||
  (node.type === "mdxJsxTextElement" && node.name === "br");

/** Text của node; <br> tính là khoảng trắng để nhãn cột không dính chữ. */
function toText(node: HastNode): string {
  if (node.type === "text") return node.value ?? "";
  if (isLineBreak(node)) return " ";
  return (node.children ?? []).map(toText).join("");
}

const cleanText = (node: HastNode) => toText(node).replace(/\s+/g, " ").trim();

function childElements(node: HastNode | undefined, tagName: string) {
  return (node?.children ?? []).filter((child) => isElement(child, tagName));
}

function cellsOf(row: HastNode | undefined) {
  return (row?.children ?? []).filter(
    (child) => isElement(child, "th") || isElement(child, "td"),
  );
}

function propsOf(node: HastNode) {
  return (node.properties ??= {});
}

function addClass(node: HastNode, className: string) {
  const properties = propsOf(node);
  const current = properties.className;
  const list = Array.isArray(current)
    ? current
    : current
      ? [String(current)]
      : [];
  properties.className = [...list, className];
}

// ---------------------------------------------------------------------------
// <Table> props
// ---------------------------------------------------------------------------

function fail(node: HastNode, message: string): never {
  const line = node.position?.start?.line;
  throw new Error(`<Table>${line ? ` (dòng ${line})` : ""}: ${message}`);
}

function attributeValue(attribute: JsxAttribute): string {
  const raw = attribute.value;
  if (raw == null) return "true";
  if (typeof raw === "string") return raw;
  return raw.value.trim().replace(/^(["'`])(.*)\1$/, "$2");
}

function parseBoolean(node: HastNode, name: string, value: string) {
  if (value === "true") return true;
  if (value === "false") return false;
  return fail(node, `${name} chỉ nhận true / false (đang là "${value}").`);
}

function parseColumns(node: HastNode, value: string) {
  const list = value.replace(/^\[|\]$/g, "").trim();
  if (!/^\d+(\s*,\s*\d+)*$/.test(list)) {
    fail(
      node,
      `nowrap="${value}" không hợp lệ. Dùng số cột từ 1, vd. nowrap="1,3".`,
    );
  }
  const columns = list.split(",").map(Number);
  if (columns.includes(0)) fail(node, `nowrap đánh số cột từ 1.`);
  return columns;
}

function readOptions(jsx?: HastNode): TableOptions {
  const options: TableOptions = {
    variant: "default",
    captionHidden: false,
    stickyHeader: false,
    stack: "auto",
    nowrap: [],
  };
  if (!jsx) return options;

  for (const attribute of jsx.attributes ?? []) {
    if (attribute.type !== "mdxJsxAttribute" || !attribute.name) {
      fail(jsx, `không hỗ trợ spread props ({...props}).`);
    }
    const { name } = attribute;
    if (!isTableProp(name)) {
      fail(
        jsx,
        `prop "${name}" không được hỗ trợ. Dùng: ${TABLE_PROPS.join(", ")}.`,
      );
    }

    const value = attributeValue(attribute);
    switch (name) {
      case "variant":
        if (!isVariant(value)) {
          fail(
            jsx,
            `variant "${value}" không hợp lệ. Dùng: ${VARIANTS.join(", ")}.`,
          );
        }
        options.variant = value;
        break;
      case "caption":
        if (!value.trim()) fail(jsx, `caption không được để trống.`);
        options.caption = value.trim();
        break;
      case "captionHidden":
        options.captionHidden = parseBoolean(jsx, name, value);
        break;
      case "stickyHeader":
        options.stickyHeader = parseBoolean(jsx, name, value);
        break;
      case "stack":
        options.stack = parseBoolean(jsx, name, value);
        break;
      case "nowrap":
        options.nowrap = parseColumns(jsx, value);
        break;
    }
  }

  if (options.captionHidden && !options.caption) {
    fail(jsx, `captionHidden cần đi kèm caption="…".`);
  }
  if (options.variant === "matrix" && options.stack === true) {
    fail(
      jsx,
      `variant="matrix" không dùng được với stack (cột đầu phải đứng yên).`,
    );
  }
  return options;
}

// ---------------------------------------------------------------------------
// Enhance
// ---------------------------------------------------------------------------

function enhanceTable(
  table: HastNode,
  options: TableOptions,
  heading: string,
): HastNode {
  const thead = childElements(table, "thead")[0];
  const tbody = childElements(table, "tbody")[0];
  const headRow = childElements(thead, "tr")[0];
  const headCells = cellsOf(headRow);
  const bodyRows = childElements(tbody, "tr");
  const labels = headCells.map(cleanText);

  const maxLength = labels.map(() => 0);
  const totalLength = labels.map(() => 0);
  for (const row of bodyRows) {
    cellsOf(row).forEach((cell, column) => {
      const length = cleanText(cell).length;
      maxLength[column] = Math.max(maxLength[column] ?? 0, length);
      totalLength[column] = (totalLength[column] ?? 0) + length;
    });
  }

  const isMatrix = options.variant === "matrix";
  const nowrapColumns = new Set(options.nowrap.map((column) => column - 1));
  maxLength.forEach((length, column) => {
    if (length > 0 && length <= SHORT_CELL_CHARS) nowrapColumns.add(column);
  });
  const wideColumns = new Set(
    totalLength.flatMap((total, column) =>
      total / Math.max(bodyRows.length, 1) > LONG_CELL_CHARS ? [column] : [],
    ),
  );
  const stack =
    !isMatrix &&
    (options.stack === "auto"
      ? labels.length >= 3 && wideColumns.size > 0
      : options.stack);
  const sticky = options.stickyHeader || bodyRows.length > STICKY_ROW_COUNT;

  headCells.forEach((cell, column) => {
    propsOf(cell).scope = "col";
    if (wideColumns.has(column)) addClass(cell, "col-wide");
  });

  for (const row of bodyRows) {
    cellsOf(row).forEach((cell, column) => {
      if (isMatrix && column === 0) {
        cell.tagName = "th";
        propsOf(cell).scope = "row";
        return;
      }
      propsOf(cell).dataLabel = labels[column] ?? "";
      if (nowrapColumns.has(column)) addClass(cell, "col-nowrap");
    });
  }

  if (stack) {
    propsOf(table).role = "table";
    for (const group of [thead, tbody]) {
      if (group) propsOf(group).role = "rowgroup";
    }
    for (const row of [headRow, ...bodyRows]) {
      if (!row) continue;
      propsOf(row).role = "row";
      for (const cell of cellsOf(row)) {
        const isRowHeader = propsOf(cell).scope === "row";
        propsOf(cell).role =
          cell.tagName === "td"
            ? "cell"
            : isRowHeader
              ? "rowheader"
              : "columnheader";
      }
    }
  }

  if (options.caption) {
    table.children = [
      {
        type: "element",
        tagName: "caption",
        properties: options.captionHidden
          ? { className: ["itfs-sr-only"] }
          : {},
        children: [{ type: "text", value: options.caption }],
      },
      ...(table.children ?? []),
    ];
  }

  const classes = ["table-wrapper"];
  if (options.variant !== "default")
    classes.push(`table-wrapper--${options.variant}`);
  if (sticky) classes.push("table-wrapper--sticky");
  if (stack) classes.push("table-wrapper--stack");

  return {
    type: "element",
    tagName: "div",
    properties: {
      className: classes,
      role: "region",
      tabIndex: 0,
      ariaLabel: options.caption || heading || FALLBACK_LABEL,
    },
    children: [table],
  };
}

export default function rehypeItfsTable() {
  return (tree: HastNode) => {
    let heading = "";

    const visit = (parent: HastNode) => {
      const children = parent.children ?? [];
      children.forEach((node, index) => {
        if (node.type === "element" && /^h[1-6]$/.test(node.tagName ?? "")) {
          heading = cleanText(node);
        }

        if (isTableJsx(node)) {
          const tables = (node.children ?? []).filter((child) =>
            isElement(child, "table"),
          );
          if (tables.length !== 1) {
            fail(
              node,
              `phải chứa đúng 1 bảng Markdown, có dòng trống sau thẻ mở và trước thẻ đóng (đang có ${tables.length}).`,
            );
          }
          children[index] = enhanceTable(tables[0], readOptions(node), heading);
        } else if (isElement(node, "table")) {
          children[index] = enhanceTable(node, readOptions(), heading);
        } else {
          visit(node);
        }
      });
    };

    visit(tree);
  };
}
