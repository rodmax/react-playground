const WARN = 1
const ERR = 2

module.exports = {
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
