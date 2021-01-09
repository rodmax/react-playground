/**
 * Bellow hack with types taken from
 * https://kulshekhar.github.io/ts-jest/user/config/#ide-ts-jest-config-suggestion
 * @typedef { import('ts-jest') }
 */

/**
 * @type { import('@jest/types').Config.InitialOptions }
 */
const config = {
    roots: ['src'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '\\.(test|spec)\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    moduleNameMapper: {
        '.*\\.(css|scss|html|svg|png)$': '<rootDir>/tools/jest/jest-file-loader-mock-module.js',
        '^common/(.*)$': '<rootDir>/src/common/$1',
        '^api/(.*)$': '<rootDir>/src/api/$1',
        '^assets/(.*)$': '<rootDir>/src/assets/$1',
        '^modules/(.*)$': '<rootDir>/src/modules/$1',
        '^app/(.*)$': '<rootDir>/src/app/$1',
    },
    globals: {
        'ts-jest': {
            tsconfig: './tsconfig.json',
        },
    },
    collectCoverageFrom: ['./src/*/**'],
    coveragePathIgnorePatterns: ['.json$', 'generated-to-check'],
    coverageDirectory: './reports',
    setupFiles: ['./tools/jest/jest-setup-polyfills.js'],
}
module.exports = config
