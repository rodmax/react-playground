/**
 * @type { jest.GlobalConfig }
 */
module.exports = {
    roots: ['src'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '\\.(test|spec)\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    moduleNameMapper: {
        '^app/(.*)$': '<rootDir>/src/app/$1',
    },
    globals: {
        'ts-jest': {
            tsConfig: './src/tsconfig.json',
        },
    },
    collectCoverageFrom: ['./src/app/**'],
    coverageDirectory: './reports',
}
