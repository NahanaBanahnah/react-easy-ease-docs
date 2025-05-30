import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
	title: 'React Easy Ease',
	tagline: 'Dinosaurs are cool',

	// Set the production url of your site here
	url: 'https://your-docusaurus-site.example.com',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},
	presets: [
		[
			'classic',
			{
				docs: {
					sidebarPath: './sidebars.ts',
					routeBasePath: '/', // Set this value to '/'.
				},
				theme: {
					customCss: './src/css/custom.css',
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// Replace with your project's social card
		colorMode: {
			defaultMode: 'dark',
		},
		navbar: {
			title: 'React Easy Ease',
			items: [
				{
					type: 'docSidebar',
					sidebarId: 'tutorialSidebar',
					position: 'left',
					label: 'Docs',
				},

				{
					href: 'https://github.com/NahanaBanahnah/react-easy-ease',
					label: 'GitHub',
					position: 'right',
				},
			],
		},
		footer: {
			copyright: `Copyright © ${new Date().getFullYear()} Nate Mitchell, MIT License`,
			links: [
				{
					title: 'Docs',
					items: [
						{
							label: 'GitHub',
							to: 'https://github.com/NahanaBanahnah/react-easy-ease-docs',
						},
						{
							label: 'Docusaurus.io',
							to: 'https://docusaurus.io/',
						},
					],
				},
				{
					title: 'Package',
					items: [
						{
							label: 'NPM',
							href: 'https://www.npmjs.com/package/@nahana/react-easy-ease',
						},
						{
							label: 'GitHub',
							href: 'https://github.com/NahanaBanahnah/react-easy-ease',
						},
					],
				},
				{
					title: 'Thanks ♥︎♥︎',
					items: [
						{
							label: 'Robert Penner',
							href: 'http://robertpenner.com/easing/',
						},
						{
							label: 'Matthew Lein',
							href: 'https://matthewlein.com/tools/ceaser',
						},
						{
							label: 'Andrew Embury',
							href: 'https://www.yellowlab.tv/',
						},
					],
				},
			],
		},

		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
			additionalLanguages: ['bash'],
		},
	} satisfies Preset.ThemeConfig,
}

export default config
