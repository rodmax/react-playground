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
        '^common/(.*)$': '<rootDir>/src/common/$1',
        '^api/(.*)$': '<rootDir>/src/api/$1',
        '^modules/(.*)$': '<rootDir>/src/modules/$1',
        '^app/(.*)$': '<rootDir>/src/app/$1',
        '.*\\.(css|scss)$': '<rootDir>/jest/jest-stylesheet-mock-module.js',
    },
    globals: {
        'ts-jest': {
            tsconfig: './tsconfig.json',
        },
    },
    collectCoverageFrom: ['./src/*/**'],
    coveragePathIgnorePatterns: ['.json$', 'generated-to-check'],
    coverageDirectory: './reports',
    setupFiles: ['./jest/jest-setup-polyfills.js'],
}
module.exports = config
