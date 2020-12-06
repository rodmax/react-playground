// @ts-check
const WARN = 1
const ERR = 2
const DISABLE = 0

/**
 * @typedef { import('eslint').Linter.Config } EslintConfig
 * @type { EslintConfig }
 */
const config = {
    extends: [
        'plugin:jest/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        '../.eslintrc.js',
    ],
    rules: {
        // Below two rules needed to prevent https://stackoverflow.com/a/46809082
        'react/jsx-uses-react': ERR,
        'react/jsx-uses-vars': ERR,
        'react/prop-types': DISABLE, // TS do it in better way

        // FIXME: replace bellow rules with jest plugin analogues
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
