// @ts-check
const WARN = 1
const ERR = 2

/**
 * @typedef { import('eslint').Linter.Config } EslintConfig
 * @type { EslintConfig }
 */
const config = {
    extends: ['../.eslintrc.js'],
    rules: {
        'no-restricted-globals': [ERR, 'test.only'],
        'no-restricted-properties': [
            WARN,
            {
                property: 'only',
                message: '.only(...) not allowed in tests',
            },
        ],
    },
}
module.exports = config
