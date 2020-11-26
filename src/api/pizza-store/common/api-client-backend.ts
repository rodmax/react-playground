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
    private token: string = ''

    constructor(private options: ApiClientBackendOptions) {}

    public updateToken(token: string): void {
        this.token = token
    }

    public request<T>(config: ApiClientRequestConfig): Observable<HttpResponse<T>> {
        return this.options.httpBackend.request({
            method: config.method,
            url: this.url(config.urlParts),
            queryParams: config.queryParams,
            body: config.body,
        })
    }

    public url(urlParts: ApiUrlParts): string {
        return apiUrl([this.endpoint(), ...urlParts])
    }

    private endpoint(): string {
        return this.options.endpointTemplate.replace(TOKEN_PLACEHOLDER, this.token)
    }
}

export const apiClientBackend = new ApiClientBackend({
    httpBackend,
    endpointTemplate: 'https://{token}.mockapi.io/api/v1',
})
