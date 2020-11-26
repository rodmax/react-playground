import { AuthAction, authActions } from 'modules/auth/model/auth.actions'
import { selectApiToken } from 'modules/auth/model/auth.selectors'
import React, { Dispatch, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const AuthForm: React.FC = () => {
    const apiToken = useSelector(selectApiToken)
    const [value, setValue] = useState(apiToken)
    const dispatch = useDispatch<Dispatch<AuthAction>>()

    return (
        <form
            onSubmit={e => {
                e.preventDefault()
                dispatch(authActions.login({ apiToken: value }))
            }}
        >
            <input
                value={value}
                placeholder='api token'
                onChange={e => setValue(e.target.value)}
                required
                name='apiToken'
            />
            <div>
                <a href='https://mockapi.io' rel='noreferrer' target='_blank'>
                    Api token from mockapi.io
                </a>
            </div>
        </form>
    )
}
