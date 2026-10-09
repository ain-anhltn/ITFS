import type { PrismTheme } from "prism-react-renderer";

const syntax = (name: string) => `var(--itfs-syntax-${name})`;

const prismTheme: PrismTheme = {
  plain: {
    color: "var(--itfs-code-text)",
    backgroundColor: "var(--itfs-code-bg)",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata", "coord"],
      style: { color: syntax("comment"), fontStyle: "italic" },
    },
    {
      types: ["punctuation", "operator"],
      style: { color: syntax("punctuation") },
    },
    {
      types: ["keyword", "atrule", "important", "selector"],
      style: { color: syntax("keyword") },
    },
    {
      types: ["string", "char", "attr-value", "regex", "url"],
      style: { color: syntax("string") },
    },
    {
      types: [
        "function",
        "class-name",
        "maybe-class-name",
        "tag",
        "builtin",
        "property",
      ],
      style: { color: syntax("function") },
    },
    {
      types: [
        "number",
        "boolean",
        "constant",
        "symbol",
        "variable",
        "attr-name",
        "entity",
      ],
      style: { color: syntax("constant") },
    },
    { types: ["inserted"], style: { color: syntax("inserted") } },
    { types: ["deleted"], style: { color: syntax("deleted") } },
    { types: ["namespace"], style: { opacity: 0.7 } },
    { types: ["bold", "title"], style: { fontWeight: "bold" } },
    { types: ["italic"], style: { fontStyle: "italic" } },
  ],
};

export default prismTheme;
