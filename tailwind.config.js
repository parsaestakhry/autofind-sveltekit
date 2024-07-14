/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	daisyui:{
		themes:["dim"]
	},
	plugins: [require('daisyui'), require('tailwind-scrollbar')]
};

