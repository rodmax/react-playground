import { AuthStateSlice } from './auth.reducer'

export const selectApiToken = (state: AuthStateSlice) => state.auth.apiToken

export const selectIsLoggedIn = (state: AuthStateSlice) => !!state.auth.apiToken
