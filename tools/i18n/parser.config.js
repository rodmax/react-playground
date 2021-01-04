// @ts-check
const lexerParams = {
    lexer: 'JsxLexer',
    functions: ['_', 't'],
}

module.exports = {
    // NOTE: the folder with the config file is considered the base path
    input: [
        '../../src/**/*.{tsx,ts}',
        '!../../src/**/*.{spec,testing}.{tsx,ts}',
        '!../../src/**/testing/**',
    ],
    defaultNamespace: null,

    // OUTPUT options
    // but output path starts from CWD(<git root> in most cases)
    output: 'src/modules/core/i18n/translations/$NAMESPACE-$LOCALE.json',
    locales: ['en', 'ru'],
    sort: true,
    keySeparator: false,

    lexers: {
        tsx: [lexerParams],
        ts: [lexerParams],
    },
}
