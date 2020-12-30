import { httpClientMock } from 'common/http/testing/http-client-mock'
import { factoryT, fields } from 'factory-t'
import { apiClientBackend } from '../common/api-client-backend'
import { ApiListDto } from '../common/api.types'
import { UserDto, UserSearchParams } from './user-client.types'

export const userDtoFactory = factoryT<UserDto>({
    id: fields.index(),
    name: 'mockedUserName',
    role: 'ADMIN',
})

export const userApi = {
    expectSearch: (queryParamsPartial?: Partial<UserSearchParams>) => {
        return httpClientMock.expect<ApiListDto<UserDto>>({
            url: apiClientBackend.url(['users']),
            queryParamsPartial,
        })
    },
}
