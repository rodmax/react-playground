import { httpClientMock } from 'common/http/testing/http-client-mock'
import { spyObserver } from 'common/testing/spy-observer'
import { ApiClient } from './api-client'
import { apiClientBackend } from './api-client-backend'
import { apiListDto } from './api.testing'
import { ApiListDto } from './api.types'

describe(ApiClient.name, () => {
    interface OrderDto {
        id: number
    }
    const ordersApiClient = () => {
        return new ApiClient<OrderDto>({ resourceUrl: 'orders' })
    }

    beforeEach(() => {
        apiClientBackend.updateToken('<mocked-token>')
        httpClientMock.setup()
    })

    afterEach(() => {
        httpClientMock.verify()
    })

    it('send create() request', () => {
        const client = ordersApiClient()
        const observer = spyObserver<OrderDto>()
        client.create({ type: 'pizza' }).subscribe(observer)
        httpClientMock
            .expect<OrderDto>({
                method: 'POST',
                url: 'https:/<mocked-token>.mockapi.io/api/v1/orders',
                body: { type: 'pizza' },
            })
            .flush({ id: 1 })
        expect(observer.next).toBeCalledWith<Parameters<typeof observer['next']>>({ id: 1 })
    })

    it('send search() request', () => {
        const client = ordersApiClient()
        const observer = spyObserver<ApiListDto<OrderDto>>()
        client.search({ text: 'pizza' }).subscribe(observer)

        httpClientMock
            .expect<ApiListDto<OrderDto>>({
                method: 'GET',
                url: 'https:/<mocked-token>.mockapi.io/api/v1/orders',
                queryParams: { text: 'pizza' },
            })
            .flush(apiListDto([{ id: 1 }]))
        expect(observer.next).toHaveBeenCalledWith<Parameters<typeof observer['next']>>({
            items: [{ id: 1 }],
            count: 1,
        })
    })
})
