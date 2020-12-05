import { HttpResponse } from 'common/http/http-client.types'

export function responseToBody<B>(response: HttpResponse<B>): B {
    return response.body
}
