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
        '^app/(.*)$': '<rootDir>/src/app/$1',
        '^common/(.*)$': '<rootDir>/src/common/$1',
        '^features/(.*)$': '<rootDir>/src/features/$1',
    },
    globals: {
        'ts-jest': {
            tsConfig: './src/tsconfig.json',
        },
    },
    collectCoverageFrom: ['./src/*/**'],
    coverageDirectory: './reports',
}
module.exports = config
