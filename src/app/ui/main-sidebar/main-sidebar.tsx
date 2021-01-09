import React from 'react'
import { APP_FEATURE_ROUTE_NAMES } from 'modules/core/router/router.types'
import './main-sidebar.scss'
import { RouteLink } from 'modules/core/router/route-link/route-link'

export const MainSidebar: React.FC = () => {
    return (
        <div className='main-sidebar u-pad-16'>
            {APP_FEATURE_ROUTE_NAMES.map(name => {
                return (
                    <RouteLink key={name} className='main-sidebar__nav-link' routeName={name}>
                        {name}
                    </RouteLink>
                )
            })}
        </div>
    )
}
