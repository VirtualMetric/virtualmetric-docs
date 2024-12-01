import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
	title: "VirtualMetric",
	tagline: "Transform data overload into actionable security insights",
	favicon: "img/favicon/favicon.ico",

	url: "https://virtualmetric-docs.pages.dev",
	baseUrl: "/",

	organizationName: "VirtualMetric",
	projectName: "virtualmetric-docs",

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	markdown: {
		mermaid: true,
	},

	themes: ['@docusaurus/theme-mermaid'],

	stylesheets: [
		{
			href: 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css',
			type: 'text/css',
			integrity: 'sha384-nB0miv6/jRmo5UMMR1wu3Gz6NLsoTkbqJghGIsx//Rlm+ZU03BU6SQNC66uf4l5+',
			crossorigin: 'anonymous',
		},
	],

	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: "./sidebars.ts",
					routeBasePath: "/",

					remarkPlugins: [remarkMath],
					rehypePlugins: [rehypeKatex],
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

	plugins: [
		require.resolve('docusaurus-lunr-search'),
	],

	themeConfig: {
		image: "telemetry-color.jpg",

		docs: {
			sidebar: {
				hideable: true,
			},
		},

		mermaid: {
			// theme: {light: 'neutral', dark: 'forest'},
			// options: {maxTextSize: 50},
		},

		navbar: {
			title: "",

			logo: {
				alt: "VirtualMetric Logo",
				src: "img/telemetry-color.jpg",
				srcDark: "img/logo.svg",
			},

			items: [
				{
					type: 'docSidebar',
					sidebarId: 'userDocs',
					position: 'left',
					label: 'Docs',
				},

				{
					type: 'docSidebar',
					sidebarId: 'tutorDocs',
					position: 'left',
					label: 'Tutorials',
				},

				{
					type: 'docSidebar',
					sidebarId: 'apiDocs',
					position: 'left',
					label: 'API',
				},

				{
					type: 'docSidebar',
					sidebarId: 'mockDocs',
					position: 'left',
					label: 'Mocks',
				},

				{
					to: '/blog',
					position: 'left',
					label: 'Blog'
				},

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
			style: "dark",
			links: [],
			copyright: `Copyright © ${new Date().getFullYear()} VirtualMetric B.V.`,
		},

		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
