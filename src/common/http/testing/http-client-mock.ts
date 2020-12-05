import { Observable, of } from 'rxjs'
import { switchMap } from 'rxjs/operators'
import { HttpClient } from '../http-client'
import { HttpRequestConfig, HttpResponse } from '../http-client.types'
import { RequestMatch } from './http-client-mock.types'
import { PendingRequest } from './pending-request'

class HttpClientMock {
    private pendingQueue: PendingRequest[] = []
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
        throw new Error(expectMatchingRequestMsg(match))
    }

    private fakeRequest<Dto>(config: HttpRequestConfig): Observable<HttpResponse<Dto>> {
        return of(true).pipe(
            switchMap(() => {
                const req = new PendingRequest<Dto>(config)
                this.pendingQueue.push(req as PendingRequest)
                return req.observable()
            })
        )
    }
}

export const httpClientMock = new HttpClientMock()

function expectNoPendingRequestMsg(pendingRequests: PendingRequest[]): string {
    return [
        `${HttpClientMock.name}: expect NO PENDING request but found ${pendingRequests.length}`,
        pendingRequests.map(req => requestDescription(req.match())),
    ].join('\n')
}

function expectMatchingRequestMsg(match: RequestMatch): string {
    return [
        `${HttpClientMock.name}: expect ONE MATCHING request but found none`,
        requestDescription(match),
    ].join('\n')
}

function requestDescription(match: RequestMatch): string {
    let str = match.url
    if (match.method) {
        str = `${match.method} ${str}`
    }
    let extra = ''
    if (match.queryParams || match.body || match.bodyPartial || match.queryParamsPartial) {
        extra = ` ${JSON.stringify(
            {
                queryParams: match.queryParams || undefined,
                queryParamsPartial: match.queryParamsPartial || undefined,
                body: match.body || undefined,
                bodyPartial: match.bodyPartial || undefined,
            },
            null,
            2
        )}`
    }
    return `${str}${extra}`
}
