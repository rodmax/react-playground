import { HttpRequestConfig } from './http-client.typings'
import { fromFetch } from 'rxjs/fetch'
import { switchMap } from 'rxjs/operators'
import { throwError, Observable } from 'rxjs'

export const httpClient = {
    request,
}

function request<Dto>(config: HttpRequestConfig): Observable<Dto> {
    return fromFetch(config.url, { method: config.method }).pipe(
        switchMap(resp => {
            if (resp.ok) {
                return resp.json()
            } else {
                return throwError(resp)
            }
        })
    )
}
