import { GithubUserDto } from '../api/github-profile.api.typings'
import { rdxActionCreator } from '../../../shared/redux/redux-tools'

export const ghProfileActions = {
    fetchRequested: rdxActionCreator('@ghProfile.fetchRequested').withNoPayload(),
    fetchComplete: rdxActionCreator('@ghProfile.fetchComplete').withPayload<GithubUserDto>(),
    fetchError: rdxActionCreator('@ghProfile.fetchError').withPayload<object>(),
} as const

type ActionsObject = typeof ghProfileActions

type AnyActionCreator = typeof ghProfileActions[keyof ActionsObject]

export type GhProfileActionType = AnyActionCreator['type']
export type GhProfileAnyAction = ReturnType<AnyActionCreator['create']>
