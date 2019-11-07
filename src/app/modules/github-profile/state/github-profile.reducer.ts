import { GithubUserDto } from '../api/github-profile.api.typings'
import { RdxReducerBuilder } from '../../../shared/redux/redux-tools'
import { ghProfileActions } from './github-profile.actions'

export interface GhProfileState {
    userDto: GithubUserDto | null
    isLoading: boolean
    error: unknown
}

export const ghProfileReducer = new RdxReducerBuilder<GhProfileState>()
    .bindReducerWithAction(ghProfileActions.fetchRequested, () => {
        return {
            isLoading: true,
        }
    })
    .bindReducerWithAction(ghProfileActions.fetchComplete, (_, userDto) => {
        return {
            isLoading: false,
            error: null,
            userDto,
        }
    })
    .bindReducerWithAction(ghProfileActions.fetchError, (_, error) => {
        return {
            isLoading: false,
            error,
        }
    })
    .build({
        userDto: null,
        isLoading: false,
        error: null,
    })
