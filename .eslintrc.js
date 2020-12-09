// @ts-check

/**
 * @typedef { import('eslint').Linter.Config } EslintConfig
 * @type { EslintConfig }
 */
const config = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react', 'jest'],
    parserOptions: {
        sourceType: 'module',
        project: './tsconfig.eslint.json',
    },
    extends: ['plugin:eslint-comments/recommended'],
    rules: {
        // General
        'no-console': 'warn',
        'no-unused-expressions': 'error',
        'no-duplicate-imports': 'error',
        'prefer-template': 'error',
        'no-empty': 'error',

        'eslint-comments/require-description': 'error',

        // typescript specific
        '@typescript-eslint/no-empty-function': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-unnecessary-condition': 'error',
    },
}
module.exports = config
