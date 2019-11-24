import { HttpRequestConfig, HttpResponse } from './http-client.typings'
import { fromFetch } from 'rxjs/fetch'
import { switchMap } from 'rxjs/operators'
import { throwError, Observable } from 'rxjs'

export const httpClient = {
    request,
}

function request<Dto>(config: HttpRequestConfig): Observable<HttpResponse<Dto>> {
    return fromFetch(config.url, { method: config.method }).pipe(
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
