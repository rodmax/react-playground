export interface HttpRequestConfig {
    url: string
    method: 'GET' | 'POST' | 'PUT' | 'DELETE'
    queryParams?: object
}

export interface HttpResponse<Dto> {
    data: Dto // loaded data from response.json()
    response: Response // fetch response object
}
