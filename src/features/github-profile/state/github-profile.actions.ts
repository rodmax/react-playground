import { GithubUserDto } from '../api/github-profile-api.typings'
import { rdxActionCreator, RdxExtractActionsUnion } from 'common/redux-toolkit/redux-toolkit'

export const ghProfileActions = {
    fetchRequested: rdxActionCreator('@gh-profile/fetch-requested').withPayload<{
        username: string
    }>(),
    fetchComplete: rdxActionCreator('@gh-profile/fetch-complete').withPayload<GithubUserDto>(),
    fetchError: rdxActionCreator('@gh-profile/fetch-error').withPayload<object>(),
} as const

export type GhProfileAction = RdxExtractActionsUnion<typeof ghProfileActions>
