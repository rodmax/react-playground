// @ts-check

const common = {
    COMMON_ANY: '^src/common/',
    API_ANY: '^src/api/',
    MODULES_ANY: '^src/modules/',
    MODULE_PAGES: '^src/modules/\\w+/pages/',
    MODULE_MODEL: '^src/modules/\\w+/model/',
    MODULE_UI: '^src/modules/\\w+/ui/',
    APP_ANY: '^src/app/',
    ANY_TESTS: ['testing/', '\\.(spec|testing|factories)\\.(tsx|ts)$'],
    ANY_TYPINGS: ['(types|typings)/', '(type|types|typings)\\.(tsx|ts)$'],
    optionsBuilder,
}

function optionsBuilder() {
    /**
     *  @type { import('./depcruise.types').DepcruiseConfig['forbidden'] }
     */
    let forbidden = []

    /**
     *  @type { import('./depcruise.types').DepcruiseConfig['options']['reporterOptions'] }
     */
    let reporterOptions = {}

    const builder = {
        /**
         * @param {typeof forbidden } rules
         * @return {typeof builder}
         */
        withForbidden(rules) {
            forbidden = rules
            return builder
        },
        /**
         * @param {typeof reporterOptions } options
         * @return {typeof builder}
         */
        withReporterOptions(options) {
            reporterOptions = options
            return builder
        },
        /**
         * @param {typeof reporterOptions } options
         *  @return { import('./depcruise.types').DepcruiseConfig }
         */
        options() {
            return {
                forbidden,
                options: {
                    doNotFollow: {
                        path: 'node_modules',
                        dependencyTypes: [
                            'npm',
                            'npm-dev',
                            'npm-optional',
                            'npm-peer',
                            'npm-bundled',
                            'npm-no-pkg',
                        ],
                    },
                    tsPreCompilationDeps: true,
                    tsConfig: {
                        fileName: 'tsconfig.json',
                    },
                    reporterOptions,
                },
            }
        },
    }
    return builder
}

module.exports = common
