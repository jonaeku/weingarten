// /** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'lol' : {
					500: '#ff0000'
				}
			},
		},
	},
	plugins: [],
}
