export interface AppConfig {
    version: string
    commitHash: string
    mode: 'DEV' | 'PROD' | 'TEST'
    /** @description not implemented yet */
    sentryApiKey: string | null
    generated: string
}
