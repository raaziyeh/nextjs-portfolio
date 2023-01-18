/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				branding: "#5651e5",
			},
			screens: {
				tall: { raw: "(max-height: 500px)" },
				// => @media (min-height: 800px) { ... }
			},
		},
	},
	plugins: [],
}
