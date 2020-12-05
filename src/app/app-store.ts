import { storeFactory } from 'common/redux/store-utils'
import { githubProfileReducerSlice } from 'modules/github/pages/github-profile-page/state/github-profile.reducer'
import { githubProfileFetchDataEpic } from 'modules/github/pages/github-profile-page/state/github-profile.epics'
import { authReducerSlice } from 'modules/auth/model/auth.reducer'
import { authEpic } from 'modules/auth/model/auth.epics'
import { usersListReducerSlice } from 'modules/user/pages/users-list-page/state/users-list.reducer'
import { usersListEpic } from 'modules/user/pages/users-list-page/state/users-list.epics'

export const appStore = storeFactory({
    reducers: {
        ...githubProfileReducerSlice,
        ...authReducerSlice,
        ...usersListReducerSlice,
    },
    epics: [githubProfileFetchDataEpic, authEpic, usersListEpic],
    enabledDevTools: true,
})
