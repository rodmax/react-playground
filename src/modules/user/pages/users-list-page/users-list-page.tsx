import { BarsSpinner } from 'common/ui/bars-spinner/bars-spinner'
import { PageContent } from 'common/ui/page-content/page-content'
import { pick } from 'common/utils/pick'
import { selectIsLoggedIn } from 'modules/auth/model/auth.selectors'
import { AuthForm } from 'modules/auth/ui/auth-form/auth-form'
import { t } from 'modules/core/i18n'
import { UserCard } from 'modules/user/ui/user-card/user-card'
import { Dispatch, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UsersListAction, usersListActions } from './state/users-list.actions'
import { selectUsersListState } from './state/users-list.selectors'

export const UsersListPage: React.FC = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const state = useSelector(selectUsersListState)
    const dispatch = useDispatch<Dispatch<UsersListAction>>()
    useEffect(() => {
        if (isLoggedIn) {
            dispatch(usersListActions.loadStart())
        }
    }, [dispatch, isLoggedIn])

    return (
        <PageContent>
            <AuthForm />
            <pre>{JSON.stringify(pick(state, ['isLoading', 'error']), null, 2)}</pre>
            <p>
                {state.users === null
                    ? t('user:usersListPage.noUserLoaded')
                    : t('app:total', { total: state.users.count })}
            </p>
            {state.users?.items.map(user => {
                return <UserCard key={user.id} user={user} />
            })}
            <BarsSpinner isVisible={state.isLoading} fitContainer></BarsSpinner>
        </PageContent>
    )
}
