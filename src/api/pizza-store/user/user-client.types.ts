import { Values } from 'common/types/values.type'
import { ApiOrderParams, ApiPageParams, ApiTextSearchParams } from '../common/api.types'

export interface UserDto {
    id: number
    name: string
    role: UserRole
}

export const USER_ROLES = ['ADMIN', 'CASHIER', 'COURIER', 'CLIENT'] as const
export type UserRole = Values<typeof USER_ROLES>

export type UserSearchParams = ApiPageParams & ApiTextSearchParams & ApiOrderParams<'name'>
