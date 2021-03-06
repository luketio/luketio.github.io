module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
	plugins: ["svelte3", "@typescript-eslint"],
	ignorePatterns: ["*.cjs"],
	overrides: [{ files: ["*.svelte"], processor: "svelte3/svelte3" }],
	settings: {
		"svelte3/typescript": () => require("typescript")
	},
	parserOptions: {
		sourceType: "module",
		ecmaVersion: "latest"
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	rules: {
		quotes: ["error", "double"],
		semi: ["error", "always"],
		indent: ["error", "tab"],
		"no-unused-vars": ["error", { vars: "all", args: "after-used", ignoreRestSiblings: true }],
		"comma-dangle": ["error", "always-multiline"],
		"eol-last": ["error", "always"],
		"prefer-const": [
			"error",
			{
				destructuring: "any",
				ignoreReadBeforeAssign: false
			}
		]
	}
};
