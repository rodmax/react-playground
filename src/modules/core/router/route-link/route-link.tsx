import React from 'react'
import { Link } from 'react-router5'
import { AppRouteName } from '../router.types'

interface Props {
    className?: string
    routeName: AppRouteName
}

export const RouteLink: React.FC<Props> = props => {
    return (
        <Link className={props.className} routeName={props.routeName}>
            {props.children}
        </Link>
    )
}
