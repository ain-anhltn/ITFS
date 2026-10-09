import { promises as fs } from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const docsDir = path.join(repoRoot, "docs");
const outDir = path.join(repoRoot, ".generated", "markdown");

// ---------------------------------------------------------------------------
// Frontmatter
// ---------------------------------------------------------------------------

const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/;

function readFrontmatter(content) {
  const match = content.match(FRONTMATTER);
  if (!match) return { data: {}, body: content };
  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    const field = line.match(/^(\w+):\s*(.*?)\s*$/);
    if (field) data[field[1]] = field[2].replace(/^(['"])(.*)\1$/, "$2");
  }
  return { data, body: content.slice(match[0].length) };
}

// ---------------------------------------------------------------------------
// MDX → Markdown
// ---------------------------------------------------------------------------

const ATTRS = String.raw`(?:[^>"'{}]|"[^"]*"|'[^']*'|\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*`;
const SELF_CLOSING = new RegExp(String.raw`<([A-Z]\w*)\b(${ATTRS})\/>`, "g");
const OPENING = new RegExp(String.raw`<([A-Z]\w*)\b(${ATTRS})>`, "g");
const CLOSING = /<\/[A-Z]\w*>/g;

function attr(attrs, name) {
  return attrs.match(new RegExp(String.raw`\b${name}=["']([^"']*)["']`))?.[1];
}

function renderSelfClosing(_full, name, attrs) {
  switch (name) {
    case "LevelBadge":
      return `**${attr(attrs, "level") ?? ""}**`;
    case "DocCardList": {
      const items = [...attrs.matchAll(/\{([^{}]*)\}/g)].map(([, item]) => ({
        href: item.match(/href:\s*["']([^"']*)["']/)?.[1],
        label: item.match(/label:\s*["']([^"']*)["']/)?.[1],
        description: item.match(/description:\s*["']([^"']*)["']/)?.[1],
      }));
      return items
        .filter((item) => item.href && item.label)
        .map(
          ({ href, label, description }) =>
            `- [${label}](${href})${description ? `: ${description}` : ""}`,
        )
        .join("\n");
    }
    case "HtmlEmbed": {
      const src = attr(attrs, "src");
      return src ? `[${attr(attrs, "title") ?? src}](${src})` : "";
    }
    default:
      return "";
  }
}

function renderOpening(_full, name, attrs) {
  if (name === "TabItem") {
    const label = attr(attrs, "label") ?? attr(attrs, "value");
    return label ? `**${label}**` : "";
  }
  return "";
}

function convertDetails(content) {
  return content
    .replace(
      /<details>\s*<summary>(?:<strong>)?([\s\S]*?)(?:<\/strong>)?<\/summary>/g,
      (_full, summary) => `**${summary.trim()}**\n`,
    )
    .replace(/<\/details>/g, "");
}

function rewriteImages(content, routeDir) {
  return content.replace(
    /!\[([^\]]*)\]\((?:\.\/)?img\/([^)]+)\)/g,
    (_m, alt, file) => `![${alt}](${routeDir}img/${file})`,
  );
}

function transformProse(text, routeDir) {
  let out = text;
  out = out.replace(/^(?:import|export)\s.*$/gm, "");
  out = out.replace(SELF_CLOSING, renderSelfClosing);
  out = out.replace(OPENING, renderOpening);
  out = out.replace(CLOSING, "");
  out = convertDetails(out);
  out = rewriteImages(out, routeDir);
  return out;
}

function toMarkdown(body, routeDir) {
  const parts = body.split(/^(```[\s\S]*?^```[^\n]*$)/m);
  return parts
    .map((part, index) =>
      index % 2 === 1 ? part : transformProse(part, routeDir),
    )
    .join("")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
    .concat("\n");
}

// ---------------------------------------------------------------------------
// Route
// ---------------------------------------------------------------------------

const stripNumberPrefix = (segment) => segment.replace(/^\d+[-_.]/, "");

function getRoutePath(relativeFile, frontmatter) {
  const segments = relativeFile.replace(/\.mdx?$/, "").split("/");
  let name = segments.pop();
  const dirs = segments.map(stripNumberPrefix);
  const dir = `/${dirs.join("/")}`.replace(/\/$/, "");

  if (frontmatter.slug) {
    const slug = frontmatter.slug;
    return slug.startsWith("/") ? slug : `${dir}/${slug}`;
  }

  if (frontmatter.id) name = frontmatter.id;
  if (/^(readme|index)$/i.test(name) || name === segments.at(-1)) {
    return dir || "/";
  }
  return `${dir}/${stripNumberPrefix(name)}`;
}

function getRouteDir(routePath) {
  return routePath.slice(0, routePath.lastIndexOf("/") + 1);
}

function getOutputPath(routePath) {
  const clean = routePath.replace(/^\/|\/$/g, "");
  return path.join(outDir, clean ? `${clean}.md` : "index.md");
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function listMarkdownFiles(rootDir) {
  const entries = await fs.readdir(rootDir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.name.startsWith(".") || entry.name.startsWith("_")) continue;
    const entryPath = path.join(rootDir, entry.name);
    if (entry.isDirectory())
      files.push(...(await listMarkdownFiles(entryPath)));
    else if (/\.mdx?$/.test(entry.name)) files.push(entryPath);
  }
  return files;
}

async function pathExists(target) {
  return fs.access(target).then(
    () => true,
    () => false,
  );
}

async function main() {
  await fs.rm(outDir, { recursive: true, force: true });

  const files = await listMarkdownFiles(docsDir);
  const routes = new Map();
  let images = 0;

  for (const sourcePath of files) {
    const relative = path
      .relative(docsDir, sourcePath)
      .split(path.sep)
      .join("/");
    const { data, body } = readFrontmatter(
      await fs.readFile(sourcePath, "utf8"),
    );
    const routePath = getRoutePath(relative, data);
    const routeDir = getRouteDir(routePath);

    if (routes.has(routePath)) {
      throw new Error(
        `Trùng route "${routePath}": ${routes.get(routePath)} và ${relative}`,
      );
    }
    routes.set(routePath, relative);

    const outputPath = getOutputPath(routePath);
    await fs.mkdir(path.dirname(outputPath), { recursive: true });
    await fs.writeFile(outputPath, toMarkdown(body, routeDir), "utf8");

    const sourceImgDir = path.join(path.dirname(sourcePath), "img");
    if (await pathExists(sourceImgDir)) {
      await fs.cp(sourceImgDir, path.join(outDir, routeDir, "img"), {
        recursive: true,
      });
      images += 1;
    }
  }

  console.log(
    `Generated markdown source → ${path.relative(repoRoot, outDir)} (${routes.size} pages, ${images} image dirs)`,
  );
}

await main();
