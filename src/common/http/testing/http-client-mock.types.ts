import { HttpMethod } from '../http-client.types'

export type RequestMatch = {
    url: string
    method?: HttpMethod
} & QueryParamsMatch &
    BodyMatch

type QueryParamsMatch =
    | { queryParams?: object; queryParamsPartial?: null }
    | { queryParams?: null; queryParamsPartial?: object }

type BodyMatch = { body?: object; bodyPartial?: null } | { body?: null; bodyPartial?: object }
