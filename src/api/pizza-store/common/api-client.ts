import { HttpResponse } from 'common/http/http-client.types'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { apiClientBackend, ApiClientRequestConfig } from './api-client-backend'
import { responseToBody } from './api-mappers'
import { ApiAnyId, ApiListDto } from './api.types'

export interface ApiClientOptions {
    resourceUrl: string
}
export class ApiClient<Dto = never> {
    constructor(private readonly options: ApiClientOptions) {}

    create<T = Dto>(body: ApiClientRequestConfig['body']): Observable<T> {
        return this.request<T>({
            method: 'POST',
            urlParts: [],
            body,
        }).pipe(map(responseToBody))
    }

    update<T = Dto>(id: ApiAnyId, body: ApiClientRequestConfig['body']): Observable<T> {
        return this.request<T>({
            method: 'PUT',
            urlParts: [id],
            body,
        }).pipe(map(responseToBody))
    }

    search<T = Dto>(queryParams: ApiClientRequestConfig['queryParams']): Observable<ApiListDto<T>> {
        return this.request<ApiListDto<T>>({
            method: 'GET',
            urlParts: [],
            queryParams,
        }).pipe(map(responseToBody))
    }

    request<T>(config: ApiClientRequestConfig): Observable<HttpResponse<T>> {
        return apiClientBackend.request({
            ...config,
            urlParts: [this.options.resourceUrl, ...config.urlParts],
        })
    }
}
