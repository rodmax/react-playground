export interface AppConfig {
    version: string
    commitHash: string
    mode: 'DEV' | 'PROD' | 'TEST'
    /** @description not implemented yet */
    sentryApiKey: string | null
    generated: string
}

let configValue: AppConfig | null = null

export function config(): Readonly<AppConfig> {
    if (configValue) {
        return configValue
    }
    throw new Error('Assertion error: attempt to config access before loading')
}

export async function initializeConfig(): Promise<void> {
    if (configValue) {
        // eslint-disable-next-line no-console -- here console is ok
        console.warn('app config already loaded')
        return
    }
    configValue = await (await fetch('config.json')).json()
}
