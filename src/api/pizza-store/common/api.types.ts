export interface ApiListDto<T> {
    items: T[]
    count: number
}

export type ApiAnyId = number | string

export interface ApiPageParams {
    limit: number
    page: number
}

export type ApiOrder = 'asc' | 'desc'

export interface ApiOrderParams<SortKey extends string> {
    sortBy: SortKey
    orderBy: ApiOrder
}

export interface ApiTextSearchParams {
    search?: string
}
