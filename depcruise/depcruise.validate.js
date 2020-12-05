// @ts-check
const common = require('./depcruise.common')

module.exports = common
    .optionsBuilder()
    .withForbidden([
        /* rules from the 'recommended' preset: */
        {
            name: 'no-circular',
            severity: 'warn',
            comment:
                'This dependency is part of a circular relationship. You might want to revise ' +
                'your solution (i.e. use dependency inversion, make sure the modules have a single responsibility) ',
            from: {},
            to: {
                circular: true,
            },
        },
        {
            name: 'no-orphans',
            comment:
                "This is an orphan module - it's likely not used (anymore?). Either use it or " +
                "remove it. If it's logical this module is an orphan (i.e. it's a config file), " +
                'add an exception for it in your dependency-cruiser configuration. By default ' +
                'this rule does not scrutinize dotfiles (e.g. .eslintrc.js), TypeScript declaration ' +
                'files (.d.ts), tsconfig.json and some of the babel and webpack configs.',
            severity: 'warn',
            from: {
                orphan: true,
                pathNot: [
                    '(^|/)\\.[^/]+\\.(js|cjs|mjs|ts|json)$', // dot files
                    '\\.d\\.ts$', // TypeScript declaration files
                    '(^|/)tsconfig\\.json$', // TypeScript config
                    '(^|/)(babel|webpack)\\.config\\.(js|cjs|mjs|ts|json)$', // other configs
                ],
            },
            to: {},
        },
        {
            name: 'not-to-deprecated',
            comment:
                'This module uses a (version of an) npm module that has been deprecated. Either upgrade to a later ' +
                'version of that module, or find an alternative. Deprecated modules are a security risk.',
            severity: 'warn',
            from: {},
            to: {
                dependencyTypes: ['deprecated'],
            },
        },
        {
            name: 'no-non-package-json',
            severity: 'error',
            comment:
                "This module depends on an npm package that isn't in the 'dependencies' section of your package.json. " +
                "That's problematic as the package either (1) won't be available on live (2 - worse) will be " +
                'available on live with an non-guaranteed version. Fix it by adding the package to the dependencies ' +
                'in your package.json.',
            from: {},
            to: {
                dependencyTypes: ['npm-no-pkg', 'npm-unknown'],
            },
        },
        {
            name: 'not-to-unresolvable',
            comment:
                "This module depends on a module that cannot be found ('resolved to disk'). If it's an npm " +
                'module: add it to your package.json. In all other cases you likely already know what to do.',
            severity: 'error',
            from: {},
            to: {
                couldNotResolve: true,
            },
        },
        {
            name: 'no-duplicate-dep-types',
            comment:
                "Likely this module depends on an external ('npm') package that occurs more than once " +
                'in your package.json i.e. bot as a devDependencies and in dependencies. This will cause ' +
                'maintenance problems later on.',
            severity: 'warn',
            from: {},
            to: {
                moreThanOneDependencyType: true,
            },
        },

        /* rules you might want to tweak for your specific situation: */
        {
            name: 'not-to-spec',
            comment:
                'This module depends on a spec (test) file. The sole responsibility of a spec file is to test code. ' +
                "If there's something in a spec that's of use to other modules, it doesn't have that single " +
                'responsibility anymore. Factor it out into (e.g.) a separate utility/ helper or a mock.',
            severity: 'error',
            from: {},
            to: {
                path: '\\.spec\\.(js|mjs|cjs|ts|ls|coffee|litcoffee|coffee\\.md)$',
            },
        },
        {
            name: 'not-to-dev-dep',
            severity: 'error',
            comment:
                "This module depends on an npm package from the 'devDependencies' section of your " +
                'package.json. It looks like something that ships to production, though. To prevent problems ' +
                "with npm packages that aren't there on production declare it (only!) in the 'dependencies'" +
                'section of your package.json. If this module is development only - add it to the ' +
                'from.pathNot re of the not-to-dev-dep rule in the dependency-cruiser configuration',
            from: {
                path: '^(src)',
                pathNot: common.ANY_TESTS,
            },
            to: {
                dependencyTypes: ['npm-dev'],
            },
        },
        {
            name: 'optional-deps-used',
            severity: 'info',
            comment:
                'This module depends on an npm package that is declared as an optional dependency ' +
                "in your package.json. As this makes sense in limited situations only, it's flagged here. " +
                "If you're using an optional dependency here by design - add an exception to your" +
                'dependency-cruiser configuration.',
            from: {},
            to: {
                dependencyTypes: ['npm-optional'],
            },
        },
        {
            name: 'peer-deps-used',
            comment:
                'This module depends on an npm package that is declared as a peer dependency ' +
                'in your package.json. This makes sense if your package is e.g. a plugin, but in ' +
                'other cases - maybe not so much. If the use of a peer dependency is intentional ' +
                'add an exception to your dependency-cruiser configuration.',
            severity: 'warn',
            from: {},
            to: {
                dependencyTypes: ['npm-peer'],
            },
        },
        {
            name: 'not-from-any-to-app',
            severity: 'error',
            from: {
                path: [common.MODULES_ANY, common.API_ANY, common.COMMON_ANY],
            },
            to: {
                path: common.APP_ANY,
            },
        },
        {
            name: 'not-from-api-or-common-to-modules',
            severity: 'error',
            from: {
                path: [common.API_ANY, common.COMMON_ANY],
            },
            to: {
                path: common.MODULES_ANY,
            },
        },
        {
            name: 'not-from-common-to-api',
            severity: 'error',
            from: {
                path: common.COMMON_ANY,
            },
            to: {
                path: common.API_ANY,
            },
        },
        {
            name: 'module:not-from-any-to-pages',
            severity: 'error',
            from: {
                path: [common.MODULE_UI, common.MODULE_MODEL],
            },
            to: {
                path: common.MODULE_PAGES,
            },
        },
        {
            name: 'module:not-from-model-to-ui',
            severity: 'error',
            from: {
                path: common.MODULE_MODEL,
            },
            to: {
                path: common.MODULE_UI,
            },
        },
        {
            name: 'not-to-test-related-code',
            severity: 'error',
            comment:
                "This module depends on an npm package from the 'devDependencies' section of your " +
                'package.json. It looks like something that ships to production, though. To prevent problems ' +
                "with npm packages that aren't there on production declare it (only!) in the 'dependencies'" +
                'section of your package.json. If this module is development only - add it to the ' +
                'from.pathNot re of the not-to-dev-dep rule in the dependency-cruiser configuration',
            from: {
                path: '^(src)',
                pathNot: common.ANY_TESTS,
            },
            to: {
                path: common.ANY_TESTS,
            },
        },
    ])
    .options()
