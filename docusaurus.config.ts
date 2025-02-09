import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

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

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
        },

        googleTagManager: {
          containerId: 'VirtualMetric-10.0.0',
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
        {
          type: "docSidebar",
          sidebarId: "userDocs",
          position: "left",
          label: "Documentation",
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

        // {
        //   type: "docSidebar",
        //   sidebarId: "tutorDocs",
        //   position: "left",
        //   label: "Tutorials",
        // },

        // {
        //   href: "https://google.com",
        //   position: "left",
        //   label: "Community",
        // },

        // {
        // 	type: 'docSidebar',
        // 	sidebarId: 'apiDocs',
        // 	position: 'left',
        // 	label: 'API',
        // },

        // {
        // 	to: '/blog',
        // 	position: 'left',
        // 	label: 'Blog'
        // },

        {
          type: "search",
          position: "right",
        },

        // {
        // 	type: "dropdown",
        // 	position: "right",
        // 	label: "Websites",
        // 	items: [
        // 		{
        // 			href: 'https://virtualmetric.com/',
        // 			label: 'VirtualMetric Home',
        // 		},
        // 	],
        // },

        // {
        // 	type: "docsVersionDropdown",
        // 	position: "right",
        // 	dropdownActiveClassDisabled: true,
        // },
      ],
    },

    footer: {
      // logo: {
      //   alt: "VirtualMetric Logo",
      //   src: "img/VirtualMetric-Logo-Footer.svg",
      //   srcDark: "img/VirtualMetric-Logo-Footer.svg",
      // },
      // links: [
      //   {
      //     title: "Training",
      //     items: [
      //       {
      //         label: "Tutorials",
      //         to: "tutorials/intro"
      //       },
      //     ],
      //   },
      //   {
      //     title: "Development",
      //     items: [
      //       {
      //         label: "API",
      //         to: "api"
      //       },
      //     ],
      //   },
      //   {
      //     title: "Useful Links",
      //     items: [
      //       {
      //         label: "VirtualMetric Home",
      //         href: "https://virtualmetric.com/"
      //       },
      //       {
      //         label: "Blog",
      //         to: "blog"
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright ©${new Date().getFullYear()} VirtualMetric B.V.`,
    },

    prism: {
      // theme: prismThemes.github,
      // darkTheme: prismThemes.dracula,
      theme: prismThemes.palenight,
      darkTheme: prismThemes.palenight
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
