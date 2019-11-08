import { GithubUserDto } from '../api/github-profile-api.typings'
import { RdxReducerBuilder } from '../../../shared/redux/redux-tools'
import { ghProfileActions } from './github-profile.actions'

export interface GhProfileState {
    username: string
    userDto: GithubUserDto | null
    isLoading: boolean
    error: unknown
}

export const ghProfileReducer = new RdxReducerBuilder<GhProfileState>()
    .bindReducerWithAction(ghProfileActions.fetchRequested, payload => {
        return {
            username: payload.username,
            isLoading: true,
        }
    })
    .bindReducerWithAction(ghProfileActions.fetchComplete, userDto => {
        return {
            isLoading: false,
            error: null,
            userDto,
        }
    })
    .bindReducerWithAction(ghProfileActions.fetchError, error => {
        return {
            isLoading: false,
            error,
        }
    })
    .build({
        username: '',
        userDto: null,
        isLoading: false,
        error: null,
    })
