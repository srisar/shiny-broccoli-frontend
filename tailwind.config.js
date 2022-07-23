/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Viga", "sans-serif"],
			},
			fontWeight: {
				semibold: 400,
				bold: 400,
			},
		},
		container: {
			center: true,
		},
	},
	plugins: [],
};
