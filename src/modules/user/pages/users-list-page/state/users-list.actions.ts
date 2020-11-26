import { GithubUserDto } from 'api/github/github-api.typings'
import { ApiListDto } from 'api/pizza-store/common/api.types'
import { UserDto } from 'api/pizza-store/user/user-client.types'
import { action, ActionsUnion } from 'common/redux/action-utils'

export const usersListActions = {
    loadStart: action('@usersList.loadStart').withNoPayload(),
    loadSuccess: action('@usersList.loadSuccess').withPayload<ApiListDto<UserDto>>(),
    loadError: action('@usersList.loadError').withPayload<object>(),
}

export type UsersListAction = ActionsUnion<typeof usersListActions>
