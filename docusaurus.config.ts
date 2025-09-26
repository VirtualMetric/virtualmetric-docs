import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

import CustomTheme from "./src/utils/coloring";
import package_json from "./package.json";

const config: Config = {
  title: "VirtualMetric",
  tagline: "Transform data overload into actionable security insights",
  favicon: "img/favicon/favicon.ico",
  url: "https://virtualmetric-docs.pages.dev",
  baseUrl: "/",
  organizationName: "VirtualMetric",
  projectName: "virtualmetric-docs",
  onBrokenLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  markdown: {
    mermaid: true,
    hooks: {
      // Migrated from deprecated top-level `onBrokenMarkdownLinks`
      onBrokenMarkdownLinks: "warn",
    },
  },
  themes: ["@docusaurus/theme-mermaid"],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-nB0miv6/jRmo5UMMR1wu3Gz6NLsoTkbqJghGIsx//Rlm+ZU03BU6SQNC66uf4l5+",
      crossorigin: "anonymous",
    },
    {
      href: "@site/src/css/custom.css",
      type: "text/css"
    }
  ],
  scripts: [
    {
      src:
        '/js/clarity.js',
      async: false,
    },
  ],
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
          lastVersion: "current",
          includeCurrentVersion: true,
          exclude: [
            '**/CLAUDE.md',
            '**/BACKLOG.md',
          ],
          versions: {
            current: {
              label: package_json.version,
            }
          },
        },
        googleTagManager: {
          containerId: 'VirtualMetric',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
          exclude: [
            '**/CLAUDE.md',
            '**/BACKLOG.md',
          ],
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    require.resolve("docusaurus-lunr-search"),
    require.resolve('./plugins/validate-topics'),
    require.resolve('./plugins/validate-images'),
    require.resolve('./plugins/validate-includes'),
    // DISABLED: Quote plugin was causing hot reload issues in development
    // The getPathsToWatch() method was interfering with Docusaurus native file watching
    // See PROJECT_CONTEXT.md for details and future re-enablement
    // require.resolve('./plugins/validate-quotes'),
  ],
  themeConfig: {
    image: "telemetry-color.jpg",
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    docs: {
      versionPersistence: "localStorage",
      sidebar: {
        hideable: false,
        autoCollapseCategories: false,
      },
    },
    mermaid: {
      theme: {
        light: 'neutral', dark: 'dark'
      }
    },
    navbar: {
      title: "",
      logo: {
        alt: "VirtualMetric Logo",
        src: "img/logo.svg",
        srcDark: "img/logo.svg",
        target: '_self',
        width: 161,
        height: 18,
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "userDocs",
          position: "left",
          label: "Docs",
        },        
        {
          type: "docSidebar",
          sidebarId: "tutorDocs",
          position: "left",
          label: "Tutorials",
        },
        {
          to: "/blog",
          label: "Blog",
          position: "left"
        },
        {
          to: "https://community.virtualmetric.com/",
          position: "left",
          label: "Community",
        },
        {
          to: "https://support.virtualmetric.com/",
          position: "left",
          label: "Support",
        },
        {
          type: "docSidebar",
          sidebarId: "releaseDocs",
          position: "left",
          label: "Release Notes",
        },
        {
          type: "search",
          position: "right",
        },
        {
          type: "docsVersionDropdown",
          position: "right"
        }
      ],
    },
    footer: {
      copyright: `Copyright ©${new Date().getFullYear()} VirtualMetric B.V.`,
    },
    prism: {
      theme: CustomTheme
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
