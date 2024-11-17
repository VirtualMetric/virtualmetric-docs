import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
	title: "VirtualMetric",
	tagline: "Transform data overload into actionable security insights",
	favicon: "img/favicon/favicon.ico",

	// Set the production url of your site here
	url: "https://virtualmetric-docs.pages.dev",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "VirtualMetric", // Usually your GitHub org/user name.
	projectName: "virtualmetric-docs", // Usually your repo name.

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
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
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					// editUrl:
					//   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				},
				blog: {
					showReadingTime: true,
					feedOptions: {
						type: ["rss", "atom"],
						xslt: true,
					},
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					// editUrl:
					//   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
					// Useful options to enforce blogging best practices
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
	plugins: [require.resolve('docusaurus-lunr-search')],
	themeConfig: {
		// Replace with your project's social card
		image: "img/docusaurus-social-card.jpg",
		navbar: {
			title: "Home",
			logo: {
				alt: "VirtualMetric B.V. Logo",
				src: "img/logo.svg",
			},
			items: [
				{
					type: 'docSidebar',
					sidebarId: 'documentation',
					position: 'left',
					label: 'Documentation',
				},
				{
					type: "search",
					position: "right",
				},
				{
					type: "dropdown",
					position: "right",
					label: "Websites",
					items: [
						{
							href: 'https://virtualmetric.com/',
							label: 'VirtualMetric Website',
						},
						{
							href: 'https://docs.virtualmetric.com/',
							label: 'User Documentation',
						},
					],
				},
				{
					type: "docsVersionDropdown",
					position: "right",
					dropdownActiveClassDisabled: true,
				},
			],
		},
		footer: {
			style: "dark",
			links: [
			],
			copyright: `Copyright © ${new Date().getFullYear()} VirtualMetric B.V. Built with Docusaurus`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
