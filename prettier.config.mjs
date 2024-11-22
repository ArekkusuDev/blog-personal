/** @type {import("prettier").Config} */
export default {
	tabWidth: 2,
	useTabs: true,
	singleQuote: true,
	jsxSingleQuote: true,
	arrowParens: 'avoid',
	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
	overrides: [
		{
			files: '*.astro',
			options: { parser: 'astro' },
		},

		{
			files: '*.json',
			options: { useTabs: false },
		},
	],
};
