import { ApiListDto } from 'api/pizza-store/common/api.types'
import { UserDto } from 'api/pizza-store/user/user-client.types'
import { StateSlice, storeSlice } from 'common/redux/reducer-utils'
import { shouldNeverBeCalled } from 'common/utils/misc'
import { UsersListAction } from './users-list.actions'

export const DEFAULT_GITHUB_USERNAME = 'rodmax'
export interface UsersListState {
    users: ApiListDto<UserDto> | null
    isLoading: boolean
    error: unknown
}

const initialState: UsersListState = {
    users: null,
    isLoading: false,
    error: null,
}

export type UsersListStateSlice = StateSlice<typeof usersListReducerSlice>

export const usersListReducerSlice = storeSlice('usersList', initialState).withReducer(
    (state, action: UsersListAction) => {
        switch (action.type) {
            case '@usersList.loadStart':
                return {
                    ...state,
                    isLoading: true,
                }

            case '@usersList.loadSuccess':
                return { ...state, isLoading: false, users: action.payload }

            case '@usersList.loadError':
                return { ...state, isLoading: false, error: action.payload }

            default:
                shouldNeverBeCalled(action)
        }
        return state
    }
)
