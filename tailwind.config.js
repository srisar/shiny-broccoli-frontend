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
		colors: {
			white: "#ffffff",
			warning: "#ffc048",
			error: "#ff5e57",
			success: "#0be881",
			info: "#0fbcf9",

			black: {
				900: "#1b2329",
				800: "#1e272e",
				700: "#353d43",
				400: "#787d82",
				300: "#bcbec0",
				200: "#d2d4d5",
				100: "#e9e9ea",
			},

			blue: {
				900: "#4357b7",
				800: "#546de5",
				700: "#768aea",
				500: "#98a7ef",
				200: "#ccd3f7",
				100: "#eef0fc",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
