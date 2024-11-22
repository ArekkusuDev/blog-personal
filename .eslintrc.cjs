/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	env: { browser: true, es6: true },

	// base config
	extends: ['eslint:recommended'],

	overrides: [
		// astro
		{
			files: '**/*.astro',
			env: {
				node: true,
				'astro/astro': true,
				es6: true,
			},
			parser: 'astro-eslint-parser',
			processor: 'astro/client-side-ts',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro'],
				soureType: 'module',
			},
			extends: ['plugin:astro/jsx-a11y-recommended', 'prettier'],
		},

		// typescript
		{
			files: ['**/*.ts', '**/*.astro/*.ts', '*.astro/*.ts'],
			parser: '@typescript-eslint/parser',
			extends: [
				'plugin:@typescript-eslint/recommended',
				'plugin:@typescript-eslint/stylistic',
				'prettier',
			],
			rules: {
				'@typescript-eslint/triple-slash-reference': 'off',
			},
		},

		// eslint config
		{
			files: '.eslintrc.cjs',
			env: { node: true },
		},
	],
};
