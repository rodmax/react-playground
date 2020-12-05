import { ApiOrderParams, ApiPageParams, ApiTextSearchParams } from '../common/api.types'

export interface UserDto {
    id: number
    name: string
}

export type UserSearchParams = ApiPageParams & ApiTextSearchParams & ApiOrderParams<'name'>

export type UserCreateData = Pick<UserDto, 'name'>
