import { httpBackend } from 'api/common/http-backend'
import { apiUrl, ApiUrlParts } from 'common/api/api-utils'
import { HttpClient } from 'common/http/http-client'
import { HttpRequestConfig, HttpResponse } from 'common/http/http-client.types'
import { Observable } from 'rxjs'

export interface ApiClientRequestConfig {
    method: HttpRequestConfig['method']
    urlParts: Array<string | number>
    queryParams?: HttpRequestConfig['queryParams']
    body?: HttpRequestConfig['body']
}

const TOKEN_PLACEHOLDER = '{token}'

export interface ApiClientBackendOptions {
    httpBackend: HttpClient
    /** string which should contain "{token}" placeholder which will be replace with auth token */
    endpointTemplate: string
}

export class ApiClientBackend {
    private token_ = ''

    constructor(private readonly options_: ApiClientBackendOptions) {}

    updateToken(token: string): void {
        this.token_ = token
    }

    request<T>(config: ApiClientRequestConfig): Observable<HttpResponse<T>> {
        return this.options_.httpBackend.request({
            method: config.method,
            url: this.url(config.urlParts),
            queryParams: config.queryParams,
            body: config.body,
        })
    }

    url(urlParts: ApiUrlParts): string {
        return apiUrl([this.endpoint(), ...urlParts])
    }

    private endpoint(): string {
        return this.options_.endpointTemplate.replace(TOKEN_PLACEHOLDER, this.token_)
    }
}

export const apiClientBackend = new ApiClientBackend({
    httpBackend,
    endpointTemplate: 'https://{token}.mockapi.io/api/v1',
})
