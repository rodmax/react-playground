import { OmitStrict } from 'common/types/omit-strict.type'
import { deepEqual } from 'common/utils/deep-equals'
import { pick } from 'common/utils/pick'
import { Observable, Subject } from 'rxjs'
import { HttpRequestConfig, HttpResponse } from '../http-client.types'
import { HttpError } from '../http-error'
import { RequestMatch } from './http-client-mock.types'

export const DEFAULT_MOCK_SUCCESS_RESPONSE: Readonly<OmitStrict<HttpResponse<unknown>, 'body'>> = {
    status: 200,
    statusText: 'OK',
    type: 'default',
    ok: true,
    fetchResponse: null,
}

export const DEFAULT_MOCK_ERROR_RESPONSE: Readonly<OmitStrict<HttpResponse<unknown>, 'body'>> = {
    status: 500,
    statusText: 'SERVER ERROR',
    ok: true,
    type: 'default',
    fetchResponse: null,
}

export class PendingRequest<Dto = unknown> {
    private readonly response_: Subject<HttpResponse<Dto>> = new Subject()
    constructor(private readonly config_: HttpRequestConfig) {}

    isMatchedTo(expected: RequestMatch): boolean {
        if (this.config_.url !== expected.url) {
            return false
        }
        if (expected.method && expected.method !== this.config_.method) {
            return false
        }
        return (
            equalExactOrPartial(
                this.config_.queryParams,
                expected.queryParams,
                expected.queryParamsPartial
            ) && equalExactOrPartial(this.config_.body, expected.body, expected.bodyPartial)
        )
    }

    flush(data: Dto, restParams: Partial<OmitStrict<HttpResponse<Dto>, 'body'>> = {}): void {
        this.response_.next({
            body: data,
            ...DEFAULT_MOCK_SUCCESS_RESPONSE,
            ...restParams,
        })
        this.response_.complete()
    }

    error<B>(body: B, restParams: Partial<OmitStrict<HttpResponse<B>, 'body'>> = {}): void {
        this.response_.error(
            new HttpError(this.config_, {
                body: body,
                ...DEFAULT_MOCK_ERROR_RESPONSE,
                ...restParams,
            })
        )
    }

    observable(): Observable<HttpResponse<Dto>> {
        return this.response_.asObservable()
    }

    match(): RequestMatch {
        return pick(this.config_, ['url', 'method', 'body', 'queryParams'])
    }
}

function equalExactOrPartial(
    actual: unknown,
    expected: unknown,
    expectedPartial: unknown
): boolean {
    expected = expected || expectedPartial
    if (!expected) {
        return true
    }
    return deepEqual(actual, expected, { isExpectedPartial: !!expectedPartial })
}
