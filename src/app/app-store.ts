import { storeFactory } from 'common/redux/store-utils'
import { githubProfileReducerSlice } from 'modules/github/pages/github-profile-page/state/github-profile.reducer'
import { githubProfileFetchDataEpic } from 'modules/github/pages/github-profile-page/state/github-profile.epics'

export const appStore = storeFactory({
    reducers: {
        ...githubProfileReducerSlice,
    },
    epics: [githubProfileFetchDataEpic],
    enabledDevTools: true,
})
