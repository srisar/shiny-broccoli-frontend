/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Poppins", "sans-serif"],
			},
		},
		container: {
			center: true,
		},
		colors: {
			white: "#ffffff",
			warning: "#e1b12c",
			error: "#e84118",
			success: "#44bd32",
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

			primary: {
				900: "#4357b7",
				800: "#546de5",
				700: "#768aea",
				500: "#98a7ef",
				200: "#ccd3f7",
				100: "#eef0fc",
			},
			secondary: {
				900: "#232e39",
				800: "#2c3a47",
				700: "#56616c",
				500: "#969da3",
				200: "#c0c4c8",
				100: "#eaebed",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
