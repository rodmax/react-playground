import { FETCH_RESPONSE_USEFUL_KEYS, HttpRequestConfig, HttpResponse } from './http-client.types'
import { fromFetch } from 'rxjs/fetch'
import { switchMap } from 'rxjs/operators'
import { DEFAULT_SERIALIZER, queryString, QueryValuesSerializer } from './query-string'
import { HttpError } from './http-error'
import { Observable } from 'rxjs'
import { pick } from 'common/utils/pick'

export interface HttpClientConfig {
    querySerializer: QueryValuesSerializer
}

export class HttpClient {
    private readonly config_: HttpClientConfig
    constructor(configOverrides: Partial<HttpClientConfig> = {}) {
        this.config_ = {
            ...this.defaultConfig(),
            ...configOverrides,
        }
    }
    request<Dto>(config: HttpRequestConfig): Observable<HttpResponse<Dto>> {
        let url = config.url
        const query =
            config.queryParams && queryString(config.queryParams, this.config_.querySerializer)

        if (query) {
            url = `${url}?${query}`
        }
        return fromFetch(url, { method: config.method }).pipe(
            switchMap(response => {
                return this.handleFetchResponse<Dto>(response, config)
            })
        )
    }

    private async handleFetchResponse<Dto>(
        fetchResponse: Response,
        config: HttpRequestConfig
    ): Promise<HttpResponse<Dto>> {
        const respPartial = pick(fetchResponse, FETCH_RESPONSE_USEFUL_KEYS)
        if (!fetchResponse.ok) {
            throw new HttpError(config, {
                ...respPartial,
                body: null,
                fetchResponse: fetchResponse,
            })
        }
        const data = await fetchResponse.json()
        const resp: HttpResponse<Dto> = {
            ...respPartial,
            body: data,
            fetchResponse: fetchResponse,
        }
        if (fetchResponse.status >= 400) {
            throw new HttpError(config, resp)
        }
        return resp
    }

    private defaultConfig(): HttpClientConfig {
        return {
            querySerializer: DEFAULT_SERIALIZER,
        }
    }
}
