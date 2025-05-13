import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

import customColoring from "./src/utils/customColoring";

const config: Config = {
  title: "VirtualMetric",
  tagline: "Transform data overload into actionable security insights",
  favicon: "img/favicon/favicon.ico",
  url: "https://virtualmetric-docs.pages.dev",
  baseUrl: "/",
  organizationName: "VirtualMetric",
  projectName: "virtualmetric-docs",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  markdown: {
    mermaid: true,
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
        },
        googleTagManager: {
          containerId: 'VirtualMetric-1.0.1',
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
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [require.resolve("docusaurus-lunr-search")],
  themeConfig: {
    image: "telemetry-color.jpg",
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    docs: {
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
        // {
        //   type: "docSidebar",
        //   sidebarId: "userDocs",
        //   position: "left",
        //   label: "Documentation",
        // },
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
          type: "search",
          position: "right",
        },
      ],
    },
    footer: {
      copyright: `Copyright ©${new Date().getFullYear()} VirtualMetric B.V.`,
    },
    prism: {
      theme: customColoring
      // theme: prismThemes.vsDark
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
