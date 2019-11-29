export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

export interface HttpRequestConfig {
    url: string
    method: HttpMethod
    queryParams?: object
}

export interface HttpResponse<Dto> {
    data: Dto // loaded data from response.json()
    response: Response // fetch response object
}
