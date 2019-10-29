// @ts-check
const WARN = 1
const ERR = 2

module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react'],
    parserOptions: {
        sourceType: 'module',
    },
    rules: {
        'no-console': WARN,
        'no-unused-vars': WARN,
        'no-unused-expressions': ERR,

        // Below two rules needed to prevent https://stackoverflow.com/a/46809082
        'react/jsx-uses-react': ERR,
        'react/jsx-uses-vars': ERR,
    },
}
