const path = require('path')

// NOTE: TS server cant infer type if module.exports = {} wrapped in parens
// so we ignore prettier here
// prettier-ignore
const env = module.exports = {}

env.rootDir = path.join(__dirname, '..')
env.buildDir = path.join(env.rootDir, 'docs') // we use docs to able publish on gh-pages
env.srcDir = path.join(env.rootDir, 'src')

env.devServerPort = 3000
env.staticServerPort = 5000 // Used to e2e tests of prod application build

/**
 * @type { 'dev' | 'prod' }
 */
env.e2eMode = process.env.E2E_MODE === 'prod' ? 'prod' : 'dev'
