import React from 'react'
import { GithubProfileCard } from './github-profile-page'
import { renderWithStore } from '../../../app/testing/render-with-store'
import { httpClient } from 'common/http-client/http-client'
import { Subject } from 'rxjs'
import { GithubUserDto } from '../api/github-profile-api.typings'
import { githubUserDtoFactory } from '../api/github-profile-api.factory'
import { map } from 'rxjs/operators'

describe(`<GithubProfileCard>`, () => {
    it('should load and show github user data', () => {
        const apiClientMock = createApiClientMock()

        const { getByText } = renderWithStore(<GithubProfileCard />)
        expect(apiClientMock.requestSpy).toHaveBeenCalledTimes(1)
        apiClientMock.responseSubject.next(githubUserDtoFactory.build({ login: 'USER_LOGIN' }))
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
