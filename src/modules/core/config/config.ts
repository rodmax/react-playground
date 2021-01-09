import { httpBackend } from 'api/common/http-backend'
import { NEVER, Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { AppConfig } from './config.types'

export { AppConfig }

let configValue: AppConfig | null = null

export function config(): Readonly<AppConfig> {
    if (configValue) {
        return configValue
    }
    throw new Error('Assertion error: attempt to config access before loading')
}

export const CONFIG_URL = 'config.json'

export function initializeConfig(): Observable<unknown> {
    if (configValue) {
        // eslint-disable-next-line no-console -- here console is ok
        console.warn('app config already loaded')
        return NEVER
    }

    return httpBackend
        .request<AppConfig>({
            method: 'GET',
            url: CONFIG_URL,
        })
        .pipe(
            tap(resp => {
                configValue = resp.body
            })
        )
}
