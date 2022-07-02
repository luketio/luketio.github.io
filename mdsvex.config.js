import { defineMDSveXConfig } from "mdsvex";
import rehypeSlug from "rehype-slug";

const config = defineMDSveXConfig({
	extensions: [".md"],

	rehypePlugins: [rehypeSlug],

	smartypants: {
		dashes: "oldschool",
	},
});

export default config;
