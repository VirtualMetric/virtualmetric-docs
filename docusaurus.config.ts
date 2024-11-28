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

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: "./sidebars.ts",
					routeBasePath: "/",
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
		image: "blank.png",

		docs: {
			sidebar: {
				hideable: true,
			},
		},

		navbar: {
			title: "",

			logo: {
				alt: "VirtualMetric B.V. Logo",
				src: "img/logo.svg",
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
					sidebarId: 'cmdlnDocs',
					position: 'left',
					label: 'CLI',
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
