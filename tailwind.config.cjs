/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},
	daisyui: {
		themes: ["light", "dark", "black", "cupcake", "winter","pastel"],
	},
	plugins: [
		require('@tailwindcss/typography'),
		require("daisyui"),
	]
};


module.exports = config;
