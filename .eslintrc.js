// @ts-check
const WARN = 1 // allowed during development but not in production
const ERR = 2

module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react'],
    parserOptions: {
        sourceType: 'module',
    },
    rules: {
        'no-console': WARN,
        'no-unused-expressions': ERR,

        // Below two rules needed to prevent https://stackoverflow.com/a/46809082
        'react/jsx-uses-react': ERR,
        'react/jsx-uses-vars': ERR,

        // typescript specific
        '@typescript-eslint/no-unused-vars': WARN,
    },
}
