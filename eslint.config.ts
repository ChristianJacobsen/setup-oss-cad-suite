import js from '@eslint/js'
import globals from 'globals'
import ts from 'typescript-eslint'

export default ts.config(
	{
		ignores: ['dist', 'lib'],
	},
	js.configs.recommended,
	...ts.configs.recommended,
	{
		languageOptions: {
			globals: {
				...globals.node,
			},
			parserOptions: {
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
	{
		rules: {
			'linebreak-style': ['error', 'unix'],
			eqeqeq: ['error', 'always'],
		},
	},
)
