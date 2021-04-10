/**
 * @type { import('stylelint').Configuration }
 */
const config = {
    plugins: ['stylelint-scss'],
    extends: 'stylelint-config-recommended',
    rules: {
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true,
    },
    processors: [],
    ignoreFiles: [],
    defaultSeverity: 'error',
}
module.exports = config
