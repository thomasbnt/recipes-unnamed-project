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
					root: 'en',
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
					items: [
						{ 
							label: 'Welcome', 
							slug: 'welcome',
							translations: {
								fr: 'Bienvenue',
							},
						},
						{ 
							label: 'How to Use', 
							slug: 'guides/how-to-use',
							translations: {
								fr: 'Comment utiliser',
							},
						},
					],
				},
				{
					label: 'Recipes',
					translations: {
						fr: 'Recettes',
					},
					items: [
						{ 
							label: 'All Recipes', 
							slug: 'recipes',
							translations: {
								fr: 'Toutes les recettes',
							},
						},
						{ 
							label: 'Appetizers', 
							slug: 'recipes/appetizers',
							translations: {
								fr: 'Entrées',
							},
						},
						{ 
							label: 'Main Courses', 
							slug: 'recipes/main-courses',
							translations: {
								fr: 'Plats principaux',
							},
						},
						{ 
							label: 'Desserts', 
							slug: 'recipes/desserts',
							translations: {
								fr: 'Desserts',
							},
						},
						{ 
							label: 'Beverages', 
							slug: 'recipes/beverages',
							translations: {
								fr: 'Boissons',
							},
						},
					],
				},
				{
					label: 'Categories',
					translations: {
						fr: 'Catégories',
					},
					items: [
						{ 
							label: 'Quick & Easy', 
							slug: 'categories/quick-easy',
							translations: {
								fr: 'Rapide et facile',
							},
						},
						{ 
							label: 'Vegetarian', 
							slug: 'categories/vegetarian',
							translations: {
								fr: 'Végétarien',
							},
						},
						{ 
							label: 'Gluten-Free', 
							slug: 'categories/gluten-free',
							translations: {
								fr: 'Sans gluten',
							},
						},
						{ 
							label: 'Healthy', 
							slug: 'categories/healthy',
							translations: {
								fr: 'Sain',
							},
						},
					],
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