// @ts-check
const common = require('./depcruise.common')

module.exports = common
    .optionsBuilder()
    .withReporterOptions({
        dot: {
            theme: {
                graph: { rankdir: 'TD' },
            },
            collapsePattern: [
                'src/common/[^/]+',
                'src/api/[^/]+',
                'src/modules/[^/]+',
                'src/app/[^/]+',
            ],
            filters: {
                includeOnly: {},
                focus: {},
                exclude: {
                    path: [
                        '^node_modules',
                        ...common.ANY_TESTS,
                        ...common.ANY_TYPINGS,
                        'src/assets',
                        'generated-to-check',
                    ],
                },
            },
        },
    })
    .options()
