// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Recipe Collection',
			description: 'A modern recipe collection with interactive features',
			defaultLocale: 'en',
			locales: {
				en: {
					label: 'English',
					lang: 'en',
				},
				fr: {
					label: 'Français',
					lang: 'fr',
				},
			},
			social: {
				github: 'https://github.com/thomasbnt/recipes-unnamed-project',
			},
			customCss: [
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'Getting Started',
					translations: {
						fr: 'Commencer',
					},
					autogenerate: { directory: 'getting-started' },
				},
				{
					label: 'Guides',
					translations: {
						fr: 'Guides',
					},
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Recipes',
					translations: {
						fr: 'Recettes',
					},
					autogenerate: { directory: 'recipes' },
				},
				{
					label: 'Categories',
					translations: {
						fr: 'Catégories',
					},
					autogenerate: { directory: 'categories' },
				},
				{
					label: 'Reference',
					translations: {
						fr: 'Référence',
					},
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});