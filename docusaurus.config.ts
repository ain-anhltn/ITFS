import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";
import prismTheme from "./src/prism-theme";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { sections } from "./sections";
import rehypeItfsTable from "./src/plugins/rehype-itfs-table";

const repoUrl = "https://github.com/ain-anhltn/ITFS";

function hasGitCommits() {
  try {
    execSync("git rev-parse --verify HEAD", { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

const config: Config = {
  title: "ITFS",
  tagline: "ITFS Self-Learning",
  favicon: "img/favicon.png",

  future: {
    v4: true,
  },

  url: "https://ain-anhltn.github.io",
  baseUrl: "/ITFS/",
  organizationName: "ain-anhltn",
  projectName: "ITFS",
  trailingSlash: false,
  staticDirectories: ["static", ".generated/markdown"],
  noIndex: true,

  onBrokenLinks: "throw",
  onBrokenAnchors: "throw",
  markdown: {
    mermaid: true,
    hooks: { onBrokenMarkdownLinks: "throw" },
  },

  i18n: {
    defaultLocale: "vi",
    locales: ["vi"],
  },

  themes: [
    "@docusaurus/theme-mermaid",
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        language: ["en", "vi"],
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: "/",
        highlightSearchTermsOnTargetPage: true,
        forceIgnoreNoIndex: true,
      },
    ],
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          path: "docs",
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          breadcrumbs: true,
          showLastUpdateTime: hasGitCommits(),
          rehypePlugins: [rehypeItfsTable],
        },
        blog: false,
        pages: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: "ITFS",
      logo: { alt: "ITFS logo", src: "img/logo.png" },
      items: [
        ...sections.map((section) => ({
          type: "docSidebar" as const,
          sidebarId: section.id,
          label: section.label,
          position: "left" as const,
        })),
        { type: "search", position: "right" },
        { href: repoUrl, label: "GitHub", position: "right" },
      ],
    },
    footer: {
      style: "light",
      copyright: `ITFS Self-Learning · Built with Docusaurus`,
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 3,
    },
    mermaid: {
      theme: {
        light: "default",
        dark: "dark",
      },
      options: {
        fontFamily: '"Inter", system-ui, sans-serif',
        look: "classic",
        themeCSS: readFileSync("./src/css/mermaid-theme.css", "utf8"),
      },
    },
    prism: {
      theme: prismTheme,
      darkTheme: prismTheme,
      additionalLanguages: [
        "bash",
        "diff",
        "docker",
        "java",
        "json",
        "powershell",
        "sql",
      ],
      magicComments: [
        {
          className: "theme-code-block-highlighted-line",
          line: "highlight-next-line",
          block: { start: "highlight-start", end: "highlight-end" },
        },
        {
          className: "code-line--add",
          line: "add-next-line",
          block: { start: "add-start", end: "add-end" },
        },
        {
          className: "code-line--remove",
          line: "remove-next-line",
          block: { start: "remove-start", end: "remove-end" },
        },
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
