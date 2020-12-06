import { selectIsLoggedIn } from 'modules/auth/model/auth.selectors'
import { AuthForm } from 'modules/auth/ui/auth-form/auth-form'
import React, { Dispatch, useEffect } from 'react'
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
        <div>
            <AuthForm />
            <section>isLoggedIn: {isLoggedIn.toString()}</section>
            <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
    )
}
