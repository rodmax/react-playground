import { GithubUserDto } from 'api/github/github-api.types'
import { action, ActionsUnion } from 'common/redux/action-utils'

export const githubProfileActions = {
    loadStart: action('@githubProfile.loadStart').withPayload<{
        username: string
    }>(),
    loadSuccess: action('@githubProfile.loadSuccess').withPayload<GithubUserDto>(),
    loadError: action('@githubProfile.loadError').withPayload<object>(),
}

export type GithubProfileAction = ActionsUnion<typeof githubProfileActions>
