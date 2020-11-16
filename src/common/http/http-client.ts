import { HttpRequestConfig, HttpResponse } from './http-client.typings'
import { fromFetch } from 'rxjs/fetch'
import { switchMap } from 'rxjs/operators'
import { throwError, Observable } from 'rxjs'
import { queryString } from './query-string'

export const httpClient = {
    request,
}

function request<Dto>(config: HttpRequestConfig): Observable<HttpResponse<Dto>> {
    let url = config.url
    const query = config.queryParams && queryString(config.queryParams)
    if (query) {
        url = `${url}?${query}`
    }
    return fromFetch(url, { method: config.method }).pipe(
        switchMap(response => {
            if (response.ok) {
                return response.json().then(data => {
                    return { data, response }
                })
            } else {
                return throwError(response)
            }
        })
    )
}
