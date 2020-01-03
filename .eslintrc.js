// @ts-check
const WARN = 1 // allowed during development but not in production
const ERR = 2

/**
 * @typedef { import('eslint').Linter.Config } EslintConfig
 * @type { EslintConfig }
 */
const config = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react'],
    parserOptions: {
        sourceType: 'module',
    },
    rules: {
        'no-console': WARN,
        'no-unused-expressions': ERR,
        'no-duplicate-imports': ERR,

        // Below two rules needed to prevent https://stackoverflow.com/a/46809082
        'react/jsx-uses-react': ERR,
        'react/jsx-uses-vars': ERR,

        // typescript specific
        '@typescript-eslint/no-unused-vars': WARN,
        '@typescript-eslint/no-explicit-any': ERR,
    },
}
module.exports = config
