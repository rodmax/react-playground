import { GithubUserDto } from 'api/github/github-api.typings'
import { StateSlice, reducerSlice } from 'common/redux/reducer-utils'
import { shouldNeverBeCalled } from 'common/utils/misc'
import { GithubProfileAction } from './github-profile.actions'

export interface GithubProfileState {
    username: string
    userDto: GithubUserDto | null
    isLoading: boolean
    error: unknown
}

const initialState: GithubProfileState = {
    username: '',
    userDto: null,
    isLoading: false,
    error: null,
}

export type GithubProfileStateSlice = StateSlice<typeof githubProfileReducerSlice>

export const githubProfileReducerSlice = reducerSlice(
    'githubProfile',
    (
        state: Readonly<GithubProfileState> = initialState,
        action: GithubProfileAction
    ): GithubProfileState => {
        switch (action.type) {
            case '@githubProfile/dataLoad.Start':
                return {
                    ...state,
                    username: action.payload.username,
                    isLoading: true,
                }

            case '@githubProfile/dataLoad.Success':
                return { ...state, isLoading: false, userDto: action.payload }

            case '@githubProfile/dataLoad.Error':
                return { ...state, isLoading: false, error: action.payload }

            default:
                shouldNeverBeCalled(action)
        }
        return state
    }
)
