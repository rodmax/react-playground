#!/usr/bin/env node
// @ts-check
/**
 * @typedef { import('../../src/modules/core/config/config.types').AppConfig }  AppConfig
 */
const env = require('../env')
const fs = require('fs').promises
const util = require('util')
const exec = util.promisify(require('child_process').exec)
const packageJson = require('../../package.json')

main()

async function main() {
    /** @type { AppConfig } */
    const config = {
        version: packageJson.version,
        commitHash: await configCommitHash(),
        mode: configMode(),
        sentryApiKey: null,
        generated: new Date().toString(),
    }

    await makeBuildDir()

    const content = JSON.stringify(config, null, 2)
    await fs.writeFile(env.applicationConfigFile, content)
    // eslint-disable-next-line no-console -- need some useful log
    console.log(`Config file "${env.applicationConfigFile}" generated: ${content}`)
}

/** @return { AppConfig['mode'] } */
function configMode() {
    // @ts-ignore
    return process.env.APP_CONFIG_MODE || 'DEV'
}

async function configCommitHash() {
    return (await exec('git rev-parse --short HEAD')).stdout.trim()
}

async function makeBuildDir() {
    try {
        if ((await fs.stat(env.buildDir)).isDirectory()) {
            return
        }
    } catch (error) {
        /** */
    }

    await fs.mkdir(env.buildDir)
}
