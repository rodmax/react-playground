export interface HttpRequestConfig {
    url: string
    method: 'GET' | 'POST' | 'PUT' | 'DELETE'
    queryParams?: object
}
