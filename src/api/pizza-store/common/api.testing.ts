import { ApiListDto } from './api.types'

export const apiListDto = <T>(items: T[], count?: number): ApiListDto<T> => ({
    items,
    count: count ?? items.length,
})
