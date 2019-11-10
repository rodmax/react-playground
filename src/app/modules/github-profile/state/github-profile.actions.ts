import { GithubUserDto } from '../api/github-profile-api.typings'
import { rdxActionCreator } from '../../../shared/redux/redux-tools'

export const ghProfileActions = {
    fetchRequested: rdxActionCreator('@gh-profile/fetch-requested').withPayload<{
        username: string
    }>(),
    fetchComplete: rdxActionCreator('@gh-profile/fetch-complete').withPayload<GithubUserDto>(),
    fetchError: rdxActionCreator('@gh-profile/fetch-error').withPayload<object>(),
} as const

type ActionsObject = typeof ghProfileActions

type AnyActionCreator = typeof ghProfileActions[keyof ActionsObject]

export type GhProfileActionType = AnyActionCreator['type']
export type GhProfileAnyAction = ReturnType<AnyActionCreator['create']>
