export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

export interface HttpRequestConfig {
    url: string
    method: HttpMethod
    queryParams?: object
    body?: object
}

export interface HttpResponse<Dto> extends HttpFetchResponsePartial {
    body: Dto // loaded data from response.json()
    fetchResponse: Response | null
}

export const FETCH_RESPONSE_USEFUL_KEYS = ['status', 'statusText', 'type', 'ok'] as const

export type HttpFetchResponsePartial = Pick<Response, typeof FETCH_RESPONSE_USEFUL_KEYS[number]>
