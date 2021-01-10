// @ts-check

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
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/react-in-jsx-scope': 'off', // not needed starting from react 17
        'react/prop-types': 'off', // TS do it in better way

        '@typescript-eslint/switch-exhaustiveness-check': 'error',

        // FIXME: replace bellow rules with jest plugin analogues
        'no-restricted-globals': ['error', 'test.only'],
        'no-restricted-properties': [
            'warn',
            {
                property: 'only',
                message: '.only(...) not allowed in tests',
            },
        ],
    },
}
module.exports = config
