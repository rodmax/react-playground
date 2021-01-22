import { Observable } from 'rxjs'
import { ApiClient } from '../common/api-client'
import { ApiListDto } from '../common/api.types'
import { UserDto, UserSearchParams } from './user-client.types'

export class UserClient {
    private readonly client_ = new ApiClient({
        resourceUrl: '/users',
    })

    search(queryParams: UserSearchParams): Observable<ApiListDto<UserDto>> {
        return this.client_.search(queryParams)
    }
}

export const userClient = new UserClient()
