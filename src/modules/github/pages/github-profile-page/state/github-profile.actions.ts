import { GithubUserDto } from 'api/github/github-api.typings'
import { actionCreator, ActionsUnion } from 'common/redux/action-utils'

export const githubProfileActions = {
    dataLoadingStart: actionCreator('@githubProfile/dataLoad.Start').withPayload<{
        username: string
    }>(),
    dataLoadSuccess: actionCreator('@githubProfile/dataLoad.Success').withPayload<GithubUserDto>(),
    dataLoadError: actionCreator('@githubProfile/dataLoad.Error').withPayload<object>(),
} as const

export type GithubProfileAction = ActionsUnion<typeof githubProfileActions>
