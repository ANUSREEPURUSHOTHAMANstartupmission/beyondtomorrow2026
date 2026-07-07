const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Georgia', ...defaultTheme.fontFamily.sans],
				'goals': ['GiorgioSans-Bold', ...defaultTheme.fontFamily.sans],
				'heading': ['Merriweather', ...defaultTheme.fontFamily.sans],
				'other' : ['Work Sans', ...defaultTheme.fontFamily.sans],
				'conent' : ['Dancing Script', ...defaultTheme.fontFamily.sans],
				'data' : ['Helvetica Neue', ...defaultTheme.fontFamily.sans],


				
			},

			backgroundImage: {
				
				'sdg1':"url('img/bgsdg1.png')",
				
			  },
			gridTemplateColumns: ['responsive'],
			
		}
	},
	plugins: [
		require("tailwindcss-scoped-groups"),
		require('flowbite/plugin'),
	],
}
