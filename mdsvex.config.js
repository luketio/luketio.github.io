import { defineMDSveXConfig } from "mdsvex";

const config = defineMDSveXConfig({
	extensions: [".md"],

	smartypants: {
		dashes: "oldschool",
	},
});

export default config;
