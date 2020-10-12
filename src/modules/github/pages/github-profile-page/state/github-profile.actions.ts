import { GithubUserDto } from 'api/github/github-api.typings'
import { rdxActionCreator, RdxExtractActionsUnion } from 'common/redux-toolkit/redux-toolkit'

export const ghProfileActions = {
    profileDataRequested: rdxActionCreator('ghProfile/profileDataRequested').withPayload<{
        username: string
    }>(),
    profileDataLoaded: rdxActionCreator('ghProfile/profileDataLoaded').withPayload<GithubUserDto>(),
    profileDataLoadFailed: rdxActionCreator('ghProfile/profileDataLoadFailed').withPayload<
        object
    >(),
} as const

export type GhProfileAction = RdxExtractActionsUnion<typeof ghProfileActions>
