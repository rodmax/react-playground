import { GithubUserDto } from 'api/github/github-api.typings'
import { StateSlice, storeSlice } from 'common/redux/reducer-utils'
import { shouldNeverBeCalled } from 'common/utils/misc'
import { GithubProfileAction } from './github-profile.actions'

export const DEFAULT_GITHUB_USERNAME = 'rodmax'
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

export const githubProfileReducerSlice = storeSlice('githubProfile', initialState).withReducer(
    (state, action: GithubProfileAction) => {
        switch (action.type) {
            case '@githubProfile.loadStart':
                return {
                    ...state,
                    username: action.payload.username,
                    isLoading: true,
                }

            case '@githubProfile.loadSuccess':
                return { ...state, isLoading: false, userDto: action.payload }

            case '@githubProfile.loadError':
                return { ...state, isLoading: false, error: action.payload }

            default:
                shouldNeverBeCalled(action)
        }
        return state
    }
)
