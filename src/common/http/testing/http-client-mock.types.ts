import { HttpMethod } from '../http-client.types'

export interface RequestMatch {
    url: string
    method?: HttpMethod
    queryParams?: object
    body?: object
}
