// @ts-check
const WARN = 1 // allowed during development but not in production
const ERR = 2

/**
 * @typedef { import('eslint').Linter.Config } EslintConfig
 * @type { EslintConfig }
 */
const config = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react', 'jest'],
    parserOptions: {
        sourceType: 'module',
    },
    extends: ['plugin:eslint-comments/recommended'],
    rules: {
        // General
        'no-console': WARN,
        'no-unused-expressions': ERR,
        'no-duplicate-imports': ERR,
        'prefer-template': ERR,
        'no-empty': ERR,

        'eslint-comments/require-description': ERR,

        // typescript specific
        '@typescript-eslint/no-empty-function': ERR,
        '@typescript-eslint/no-unused-vars': ERR,
        '@typescript-eslint/no-explicit-any': ERR,
    },
}
module.exports = config
