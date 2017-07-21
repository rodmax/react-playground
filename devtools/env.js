const path = require('path');
const env = module.exports = {};

env.rootDir = path.join(__dirname, '..');
env.buildDir = path.join(env.rootDir, 'docs');  // we use docs to able publish on gh-pages
env.srcDir = path.join(env.rootDir, 'src');
