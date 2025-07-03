// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import lunaria from '@lunariajs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Recipe Collection',
			description: 'A modern recipe collection with interactive features',
			social: {
				github: 'https://github.com/thomasbnt/recipes-unnamed-project',
			},
			customCss: [
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Welcome', slug: 'index' },
						{ label: 'How to Use', slug: 'guides/how-to-use' },
					],
				},
				{
					label: 'Recipes',
					items: [
						{ label: 'All Recipes', slug: 'recipes' },
						{ label: 'Appetizers', slug: 'recipes/appetizers' },
						{ label: 'Main Courses', slug: 'recipes/main-courses' },
						{ label: 'Desserts', slug: 'recipes/desserts' },
						{ label: 'Beverages', slug: 'recipes/beverages' },
					],
				},
				{
					label: 'Categories',
					items: [
						{ label: 'Quick & Easy', slug: 'categories/quick-easy' },
						{ label: 'Vegetarian', slug: 'categories/vegetarian' },
						{ label: 'Gluten-Free', slug: 'categories/gluten-free' },
						{ label: 'Healthy', slug: 'categories/healthy' },
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