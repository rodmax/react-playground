import { action, ActionsUnion } from 'common/redux/action-utils'

export const authActions = {
    login: action('@auth.login').withPayload<{
        apiToken: string
    }>(),
    logout: action('@auth.logout').withNoPayload(),
}

export type AuthAction = ActionsUnion<typeof authActions>
