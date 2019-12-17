import { GithubUserDto } from '../api/github-profile-api.typings'
import { RdxReducerBuilder } from 'common/redux-toolkit/redux-toolkit'
import { ghProfileActions } from './github-profile.actions'

export interface GhProfileState {
    username: string
    userDto: GithubUserDto | null
    isLoading: boolean
    error: unknown
}

export const ghProfileReducer = new RdxReducerBuilder<GhProfileState>()
    .bindReducerWithAction(ghProfileActions.profileDataRequested, payload => {
        return {
            username: payload.username,
            isLoading: true,
        }
    })
    .bindReducerWithAction(ghProfileActions.profileDataLoaded, userDto => {
        return {
            isLoading: false,
            error: null,
            userDto,
        }
    })
    .bindReducerWithAction(ghProfileActions.profileDataLoadFailed, error => {
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
