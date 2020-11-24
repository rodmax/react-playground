import { Observable, of } from 'rxjs'
import { switchMap } from 'rxjs/operators'
import { HttpClient } from '../http-client'
import { HttpRequestConfig, HttpResponse } from '../http-client.types'
import { RequestMatch } from './http-client-mock.types'
import { PendingRequest } from './pending-request'

class HttpClientMock {
    private pendingQueue: PendingRequest<unknown>[] = []
    private originalRequest: HttpClient['request'] | null = null

    constructor() {
        this.fakeRequest = this.fakeRequest.bind(this)
    }

    public setup(): void {
        this.reset()
        this.originalRequest = HttpClient.prototype.request
        HttpClient.prototype.request = this.fakeRequest
    }

    public reset(): void {
        if (this.originalRequest) {
            HttpClient.prototype.request = this.originalRequest
            this.originalRequest = null
        }
        this.pendingQueue = []
    }

    public verify(): void {
        if (this.pendingQueue.length) {
            throw new Error(expectNoPendingRequestMsg(this.pendingQueue))
        }
    }

    public expect<Dto = null>(match: RequestMatch): PendingRequest<Dto> {
        const index = this.pendingQueue.findIndex(req => {
            return req.isMatchedTo(match)
        })

        if (index >= 0) {
            const req = this.pendingQueue[index]
            this.pendingQueue.splice(index, 1)
            return req as PendingRequest<Dto>
        }
        throw new Error(
            `${
                HttpClientMock.name
            }: Expected one matching request, found none. expected request: ${requestDescription(
                match
            )}`
        )
    }

    private fakeRequest<Dto>(config: HttpRequestConfig): Observable<HttpResponse<Dto>> {
        return of(true).pipe(
            switchMap(() => {
                const req = new PendingRequest<Dto>(config)
                this.pendingQueue.push(req as PendingRequest<unknown>)
                return req.observable()
            })
        )
    }
}

export const httpClientMock = new HttpClientMock()

function expectNoPendingRequestMsg(pendingRequests: PendingRequest[]): string {
    return [
        `${HttpClientMock.name}: verify: expect no pending request but found ${pendingRequests.length}`,
        pendingRequests.map((req, index) => `[${index + 1}] ${requestDescription(req.match())}`),
    ].join('\n')
}

function requestDescription(match: RequestMatch): string {
    let str = match.url
    if (match.method) {
        str = `${match.method} ${str}`
    }
    let extra = ''
    if (match.queryParams || match.body) {
        extra = ` ${JSON.stringify(
            {
                queryParams: match.queryParams,
                body: match.body,
            },
            null,
            2
        )}`
    }
    return `${str}${extra}`
}
