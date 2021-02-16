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

        // NOTE: test.only here is related to testcafe API
        'no-restricted-globals': ['error', 'test.only'],
        'jest/no-focused-tests': 'warn',
    },
}
module.exports = config
