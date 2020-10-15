import React from 'react'
import { GithubProfilePage } from './github-profile-page'
import { httpClient } from 'common/http/http-client'
import { Subject } from 'rxjs'
import { GithubUserDto } from 'api/github/github-api.typings'
import { githubUserDtoFactory } from 'api/github/github-api.factories'
import { map } from 'rxjs/operators'
import { renderWithStore } from 'common/redux/testing/render-with-store'
import { storeFactory } from 'common/redux/store-utils'
import { githubProfileReducerSlice } from './state/github-profile.reducer'
import { githubProfileFetchDataEpic } from './state/github-profile.epics'

describe(`<GithubProfileCard>`, () => {
    const testingStore = storeFactory({
        reducers: {
            ...githubProfileReducerSlice,
        },
        epics: [githubProfileFetchDataEpic],
    })

    it('should load and show github user data', () => {
        const apiClientMock = createApiClientMock()

        const { getByText } = renderWithStore(<GithubProfilePage />, testingStore())
        expect(apiClientMock.requestSpy).toHaveBeenCalledTimes(1)
        apiClientMock.responseSubject.next(githubUserDtoFactory.item({ login: 'USER_LOGIN' }))
        getByText('USER_LOGIN')
    })
})

const createApiClientMock = () => {
    const responseSubject = new Subject<GithubUserDto>()
    const requestSpy = jest.spyOn(httpClient, 'request').mockImplementation(() =>
        responseSubject.pipe(
            map(data => {
                return { data, response: {} as Response }
            })
        )
    )
    return {
        responseSubject,
        requestSpy,
    }
}
