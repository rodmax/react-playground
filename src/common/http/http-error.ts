import { HttpRequestConfig, HttpResponse } from './http-client.types'

export class HttpError<E = unknown> extends Error {
    constructor(readonly config: HttpRequestConfig, readonly response: HttpResponse<E>) {
        super('http client error')
    }
}
