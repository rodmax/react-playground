import { StateSlice, storeSlice } from 'common/redux/reducer-utils'
import { shouldNeverBeCalled } from 'common/utils/misc'
import { AuthAction } from './auth.actions'

export interface AuthState {
    apiToken: string
}

const initialState: AuthState = {
    apiToken: '',
}

export type AuthStateSlice = StateSlice<typeof authReducerSlice>

export const authReducerSlice = storeSlice('auth', initialState).withReducer<AuthAction>(
    (state, action) => {
        switch (action.type) {
            case '@auth.login':
                return {
                    ...action.payload,
                }
            case '@auth.logout':
                return {
                    apiToken: '',
                }

            default:
                shouldNeverBeCalled(action)
        }
        return state
    }
)
