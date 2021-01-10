// @ts-check
const path = require('path')

// NOTE: TS server can't infer type if module.exports = {} wrapped in parens
// so we ignore prettier here
// prettier-ignore
const env = module.exports = {}

env.rootDir = path.join(__dirname, '..')
env.buildDir = path.join(env.rootDir, 'dist')
env.buildAssetsDir = path.join(env.buildDir, 'assets')
env.srcDir = path.join(env.rootDir, 'src')
env.applicationConfigFile = path.join(env.buildDir, 'config.json')

env.devServerPort = 3000
env.staticServerPort = 5000 // Used to e2e tests of prod application build
/**
 * @type { 'production' | 'development' }
 */
env.mode = process.env.BUILD_MODE === 'production' ? 'production' : 'development'

/**
 * @type { 'dev' | 'prod' }
 */
env.e2eMode = process.env.E2E_MODE === 'prod' ? 'prod' : 'dev'

env.stat = true
env.reportFilename = 'bundles-report.html'

// eslint-disable-next-line no-console -- useful development log
console.log(env)
