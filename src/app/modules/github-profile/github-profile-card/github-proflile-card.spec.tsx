import React from 'react'
import { GithubProfileCard } from './github-profile-card'
import { renderWithStore } from '../../../core/testing/render-with-store'
import { httpClient } from '../../../shared/http/http-client'
import { Subject } from 'rxjs'
import { GithubUserDto } from '../api/github-profile-api.typings'
import { githubUserDtoFactory } from '../api/github-profile-api.factory'

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
    const requestSpy = jest.spyOn(httpClient, 'request').mockImplementation(() => responseSubject)
    return {
        responseSubject,
        requestSpy,
    }
}