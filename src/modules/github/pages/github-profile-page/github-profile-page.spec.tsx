import React from 'react'
import { GithubProfilePage } from './github-profile-page'
import { GithubUserDto } from 'api/github/github-api.typings'
import { githubUserDtoFactory } from 'api/github/github-api.factories'
import { renderWithStore } from 'common/redux/testing/render-with-store'
import { storeFactory } from 'common/redux/store-utils'
import { githubProfileReducerSlice } from './state/github-profile.reducer'
import { githubProfileFetchDataEpic } from './state/github-profile.epics'
import { httpClientMock } from 'common/http/testing/http-client-mock'

describe(`${GithubProfilePage.name}`, () => {
    const testingStore = storeFactory({
        reducers: {
            ...githubProfileReducerSlice,
        },
        epics: [githubProfileFetchDataEpic],
    })

    beforeEach(() => {
        httpClientMock.setup()
    })

    afterEach(() => {
        httpClientMock.verify()
        httpClientMock.reset()
    })

    it('should load and show github user data', () => {
        const { getByText } = renderWithStore(<GithubProfilePage />, testingStore())
        httpClientMock
            .expect<GithubUserDto>({ url: 'https://api.github.com/users/rodmax' })
            .flush(githubUserDtoFactory.item({ login: 'USER_LOGIN' }))
        getByText('USER_LOGIN')
    })
})
