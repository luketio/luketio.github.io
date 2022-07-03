import adapter from "@sveltejs/adapter-vercel";
import preprocess from "svelte-preprocess";
import mdsvexConfig from "./mdsvex.config.js";
import { mdsvex } from "mdsvex";

/** @type {import("@sveltejs/kit").Config} */
const config = {
	extensions: [".svelte", ".md"],

	preprocess: [
		preprocess({
			scss: {
				prependData: "@use \"src/variables.scss\" as *;",
			},

			postcss: true,
		}),
		mdsvex(mdsvexConfig),
	],

	kit: {
		adapter: adapter(),

		prerender: {
			default: true,
		},

		csp: {
			directives: {
			  	"script-src": ["self", "vitals.vercel-insights.com"],
			}
		},

		vite: {
			css: {
				preprocessorOptions: {
					scss: {
						additionalData: "@use \"src/variables.scss\" as *;",
					},
				},
			},
		},
	},
};

export default config;
