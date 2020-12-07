import React from 'react'
import { APP_FEATURE_ROUTE_NAMES } from 'app/router/router.types'
import { Link } from 'react-router5'
import './main-sidebar.scss'

export const MainSidebar: React.FC = () => {
    return (
        <div className='main-sidebar u-pad-16'>
            {APP_FEATURE_ROUTE_NAMES.map(name => {
                return (
                    <Link key={name} className='main-sidebar__nav-link' routeName={name}>
                        {name}
                    </Link>
                )
            })}
        </div>
    )
}
