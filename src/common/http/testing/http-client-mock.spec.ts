import { spyObserver } from 'common/testing/spy-observer'
import { NOOP_FN } from 'common/utils/misc'
import { HttpClient } from '../http-client'
import { HttpRequestConfig, HttpResponse } from '../http-client.types'
import { HttpError } from '../http-error'
import { httpClientMock } from './http-client-mock'
import { DEFAULT_MOCK_ERROR_RESPONSE, DEFAULT_MOCK_SUCCESS_RESPONSE } from './pending-request'

describe('HttpClientMock', () => {
    let httpClient: HttpClient
    beforeEach(() => {
        httpClient = new HttpClient()
        httpClientMock.setup()
    })

    afterEach(() => {
        httpClientMock.verify()
    })

    it('tracks pending request with success response', () => {
        interface Data {
            id: number
        }
        const observer = spyObserver<HttpResponse<Data>>()
        httpClient
            .request<Data>({
                method: 'GET',
                url: '/url',
                queryParams: { a: 12 },
            })
            .subscribe(observer)

        const req = httpClientMock.expect<Data>({
            method: 'GET',
            url: '/url',
        })
        req.flush({ id: 1 })
        expect(observer.next).toBeCalledWith<Parameters<typeof observer.next>>({
            body: { id: 1 },
            ...DEFAULT_MOCK_SUCCESS_RESPONSE,
        })
    })

    it('tracks pending request with error response', () => {
        interface ErrorBody {
            serverErrorCode: string
        }
        const observer = spyObserver<unknown, HttpError<ErrorBody>>({ error: NOOP_FN })
        const reqConfig: HttpRequestConfig = {
            method: 'GET',
            url: '/url',
            queryParams: { a: 12 },
        }

        httpClient.request(reqConfig).subscribe(observer)

        const req = httpClientMock.expect({
            url: '/url',
        })
        req.error<ErrorBody>({ serverErrorCode: 'server error #13' })
        expect(observer.error).toBeCalledWith<Parameters<typeof observer.error>>(
            new HttpError(reqConfig, {
                ...DEFAULT_MOCK_ERROR_RESPONSE,
                body: { serverErrorCode: 'server error #13' },
            })
        )
    })

    it('tracks verify() throw error if some pending request not handled', () => {
        const observable = httpClient.request({ method: 'POST', url: '/any' })

        const callVerify = () => {
            httpClientMock.verify()
        }

        expect(callVerify).not.toThrowError()

        observable.subscribe()
        expect(callVerify).toThrowError('expect no pending request but found 1')
        httpClientMock.expect({ url: '/any' })
    })
})
