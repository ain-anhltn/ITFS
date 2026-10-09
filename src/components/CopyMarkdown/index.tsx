import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import clsx from "clsx";
import { useLocation } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { IconCheck, IconChevron, IconCopy, IconMarkdown } from "./icons";
import styles from "./styles.module.css";

const labels = {
  toggle: "Mở Markdown",
  view: "Xem dạng Markdown",
  viewDescription: "Mở nội dung trang dưới dạng Markdown thuần.",
  copy: "Sao chép trang dạng Markdown",
  copyDescription: "Sao chép nội dung trang dạng Markdown để dùng lại.",
  copying: "Đang sao chép…",
  copied: "Đã sao chép!",
  failed: "Không sao chép được, thử lại",
};

type CopyStatus = "idle" | "copying" | "copied" | "failed";

const STATUS_RESET_MS = 1600;

function toMarkdownUrl(pathname: string, baseUrl: string) {
  const route = pathname.startsWith(baseUrl)
    ? pathname.slice(baseUrl.length)
    : pathname.replace(/^\//, "");
  const clean = route.replace(/\/$/, "");
  return `${baseUrl}${clean || "index"}.md`;
}

async function fetchText(url: string) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.text();
}

function legacyCopy(text: string) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  try {
    return document.execCommand("copy");
  } finally {
    textarea.remove();
  }
}

async function copyFromUrl(url: string) {
  const text = fetchText(url);
  try {
    if (typeof ClipboardItem !== "undefined" && navigator.clipboard?.write) {
      const blob = text.then(
        (value) => new Blob([value], { type: "text/plain" }),
      );
      await navigator.clipboard.write([
        new ClipboardItem({ "text/plain": blob }),
      ]);
    } else {
      await navigator.clipboard.writeText(await text);
    }
  } catch (error) {
    if (!legacyCopy(await text)) throw error;
  }
}

type ActionItemProps = {
  icon: ReactNode;
  title: string;
  description: string;
  tone?: "success" | "danger";
  busy?: boolean;
  onClick: () => void;
  itemRef: (element: HTMLButtonElement | null) => void;
};

function ActionItem({
  icon,
  title,
  description,
  tone,
  busy,
  onClick,
  itemRef,
}: ActionItemProps) {
  return (
    <li role="none">
      <button
        ref={itemRef}
        type="button"
        role="menuitem"
        tabIndex={-1}
        aria-disabled={busy || undefined}
        className={clsx(
          "dropdown__link",
          styles.item,
          tone === "success" && styles.itemSuccess,
          tone === "danger" && styles.itemDanger,
        )}
        onClick={busy ? undefined : onClick}
      >
        {icon}
        <span className={styles.text}>
          <span className={styles.title}>{title}</span>
          <span className={styles.description}>{description}</span>
        </span>
      </button>
    </li>
  );
}

export default function CopyMarkdown(): ReactNode {
  const { pathname } = useLocation();
  const {
    siteConfig: { baseUrl },
  } = useDocusaurusContext();
  const markdownUrl = toMarkdownUrl(pathname, baseUrl);

  const menuId = useId();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<CopyStatus>("idle");
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const resetTimer = useRef<number | undefined>(undefined);

  const close = useCallback((restoreFocus = false) => {
    setOpen(false);
    if (restoreFocus) triggerRef.current?.focus();
  }, []);

  const focusItem = (index: number) => {
    const items = itemRefs.current.filter(
      (item): item is HTMLButtonElement => item !== null,
    );
    if (items.length === 0) return;
    items[(index + items.length) % items.length].focus();
  };

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) close();
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open, close]);

  useEffect(() => () => window.clearTimeout(resetTimer.current), []);

  const scheduleReset = (closeMenu: boolean) => {
    window.clearTimeout(resetTimer.current);
    resetTimer.current = window.setTimeout(() => {
      setStatus("idle");
      if (closeMenu) close();
    }, STATUS_RESET_MS);
  };

  const viewMarkdown = () => {
    window.open(markdownUrl, "_blank", "noopener,noreferrer");
    close();
  };

  const copyMarkdown = async () => {
    setStatus("copying");
    try {
      await copyFromUrl(markdownUrl);
      setStatus("copied");
      scheduleReset(true);
    } catch {
      setStatus("failed");
      scheduleReset(false);
    }
  };

  const onTriggerKeyDown = (event: KeyboardEvent) => {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    setOpen(true);
    const index = event.key === "ArrowDown" ? 0 : -1;
    requestAnimationFrame(() => focusItem(index));
  };

  const onMenuKeyDown = (event: KeyboardEvent) => {
    const current = itemRefs.current.indexOf(
      document.activeElement as HTMLButtonElement,
    );
    const moves: Record<string, number> = {
      ArrowDown: current + 1,
      ArrowUp: current - 1,
      Home: 0,
      End: -1,
    };
    if (event.key in moves) {
      event.preventDefault();
      focusItem(moves[event.key]);
    } else if (event.key === "Escape") {
      event.preventDefault();
      close(true);
    } else if (event.key === "Tab") {
      close();
    }
  };

  const copyView = (
    {
      idle: { title: labels.copy, icon: <IconCopy /> },
      copying: { title: labels.copying, icon: <IconCopy /> },
      copied: { title: labels.copied, icon: <IconCheck />, tone: "success" },
      failed: { title: labels.failed, icon: <IconCopy />, tone: "danger" },
    } satisfies Record<
      CopyStatus,
      Pick<ActionItemProps, "title" | "icon" | "tone">
    >
  )[status] as Pick<ActionItemProps, "title" | "icon" | "tone">;

  return (
    <div
      ref={rootRef}
      className={clsx("dropdown", styles.root, open && "dropdown--show")}
    >
      <button
        ref={triggerRef}
        type="button"
        className={clsx("button button--sm", styles.trigger)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={onTriggerKeyDown}
      >
        {labels.toggle}
        <IconChevron className={styles.chevron} />
      </button>

      <ul
        id={menuId}
        role="menu"
        aria-label={labels.toggle}
        className={clsx("dropdown__menu", styles.menu)}
        onKeyDown={onMenuKeyDown}
      >
        <ActionItem
          itemRef={(element) => {
            itemRefs.current[0] = element;
          }}
          icon={<IconMarkdown />}
          title={labels.view}
          description={labels.viewDescription}
          onClick={viewMarkdown}
        />
        <ActionItem
          itemRef={(element) => {
            itemRefs.current[1] = element;
          }}
          icon={copyView.icon}
          title={copyView.title}
          tone={copyView.tone}
          description={labels.copyDescription}
          busy={status === "copying" || status === "copied"}
          onClick={copyMarkdown}
        />
      </ul>

      <span className="itfs-sr-only" role="status">
        {status === "copied" || status === "failed" ? copyView.title : ""}
      </span>
    </div>
  );
}
