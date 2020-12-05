import React from 'react'
import userEvent from '@testing-library/user-event'
import { httpClientMock } from 'common/http/testing/http-client-mock'
import { storeFactory } from 'common/redux/store-utils'
import { renderWithStore } from 'common/redux/testing/render-with-store'
import { authEpic } from 'modules/auth/model/auth.epics'
import { authReducerSlice } from 'modules/auth/model/auth.reducer'
import { usersListEpic } from './state/users-list.epics'
import { usersListReducerSlice } from './state/users-list.reducer'
import { UsersListPage } from './users-list-page'
import { fireEvent } from '@testing-library/react'
import { userApi, userDtoFactory } from 'api/pizza-store/user/user-client.testing'
import { apiListDto } from 'api/pizza-store/common/api.testing'

describe(`${UsersListPage.name}`, () => {
    const testingStore = storeFactory({
        reducers: {
            ...authReducerSlice,
            ...usersListReducerSlice,
        },
        epics: [usersListEpic, authEpic],
    })

    beforeEach(() => {
        httpClientMock.setup()
    })

    afterEach(() => {
        httpClientMock.verify()
        httpClientMock.reset()
    })

    it('should show empty page when user while user not passed api token', () => {
        const { getByText } = renderWithStore(<UsersListPage />, testingStore())
        getByText(/"users": null/)
    })

    it('should load users list when user pass api token', () => {
        const { getByPlaceholderText, getByText } = renderWithStore(
            <UsersListPage />,
            testingStore()
        )

        const apiTokenInput = getByPlaceholderText('api token')
        userEvent.type(apiTokenInput, 'token')
        fireEvent.submit(apiTokenInput)
        const req = userApi.expectSearch({ page: 1 })

        getByText(/"isLoading": true/)

        req.flush(apiListDto(userDtoFactory.list({ partials: [{ name: 'USER_NAME' }] })))
        getByText(/"isLoading": false/)
        getByText(/USER_NAME/)
    })
})
