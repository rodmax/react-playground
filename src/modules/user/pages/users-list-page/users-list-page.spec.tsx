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
import { i18nProvider, t } from 'modules/core/i18n'

i18nProvider.enableTestingMode()

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

    it('shows empty page while user not passed api token', () => {
        const { queryByText } = renderWithStore(<UsersListPage />, testingStore())
        expect(queryByText(/"id":/)).toBeNull()
    })

    it('shows loaded users list when user pass & apply api token', () => {
        const { getByPlaceholderText, getByText } = renderWithStore(
            <UsersListPage />,
            testingStore()
        )

        const apiTokenInput = getByPlaceholderText(t('auth:authForm.apiTokenInputPlaceholder'))
        userEvent.type(apiTokenInput, 'token')
        fireEvent.submit(apiTokenInput)
        const req = userApi.expectSearch({ page: 1 })

        expect(getByText(/"isLoading": true/)).toBeTruthy()

        req.flush(apiListDto(userDtoFactory.list({ partials: [{ name: 'USER_NAME' }] })))
        expect(getByText(/"isLoading": false/)).toBeTruthy()
        expect(getByText(/USER_NAME/)).toBeTruthy()
    })
})
