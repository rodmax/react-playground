#!/usr/bin/env node
// @ts-check
const env = require('../env')
const handler = require('serve-handler')
const http = require('http')

const server = http.createServer((request, response) => {
    // You pass two more arguments for config and middleware
    // More details here: https://github.com/zeit/serve-handler#options
    return handler(request, response, {
        public: env.buildDir,
    })
})

server.listen(env.staticServerPort, () => {
    // eslint-disable-next-line no-console -- useful development log
    console.log(`Running at http://localhost:${env.staticServerPort}`)
})
