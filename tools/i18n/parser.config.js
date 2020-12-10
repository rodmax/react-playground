// @ts-check
module.exports = {
    // NOTE: the folder with the config file is considered the base path
    input: ['../../src/**/*.tsx'],
    defaultNamespace: null,

    // OUTPUT options
    // but output path starts from CWD(<git root> in most cases)
    output: 'src/modules/i18n/locales/$NAMESPACE/$LOCALE.json',
    locales: ['en', 'ru'],
    sort: true,
    keySeparator: false,

    lexers: {
        // For jsx lexer used for tsx too
        jsx: [
            {
                lexer: 'JsxLexer',
                function: 't',
            },
        ],
    },
}
