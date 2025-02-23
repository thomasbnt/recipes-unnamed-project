// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import lunaria from '@lunariajs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/thomasbnt/recipes-unnamed-project',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			plugins: [lunaria({
				route: "/i18n",
			})],
		}),
	],
});
