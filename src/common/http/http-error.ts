import { HttpRequestConfig, HttpResponse } from './http-client.types'

export class HttpError<E = unknown> extends Error {
    constructor(
        public readonly config: HttpRequestConfig,
        public readonly response: HttpResponse<E>
    ) {
        super('http client error')
    }
}
