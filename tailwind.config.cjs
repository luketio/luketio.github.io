const daisyui = require("daisyui");
const typography = require("@tailwindcss/typography");
const forms = require("@tailwindcss/forms");

const config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	plugins: [forms, typography, daisyui],

	darkMode: true,

	theme: {
		extend: {}
	},
	variants: {
		extend: {}
	},
	daisyui: {
		prefix: "",
		darkTheme: "dark" // business
	}
};

module.exports = config;
