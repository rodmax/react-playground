import createRouter from 'router5'
import browserPlugin from 'router5-plugin-browser'

import { useRoute } from 'react-router5'
import { AppRoute, AppRouter, AppRouteContext } from './router.types'

export const routes: AppRoute[] = [
    {
        name: 'home',
        path: '/',
    },
    {
        name: 'users',
        path: '/users',
    },
    {
        name: 'github-profile',
        path: '/github-profile',
    },
]

export function createAppRouter(): AppRouter {
    const router = createRouter(routes)
    router.usePlugin(
        browserPlugin({
            useHash: true,
        })
    )
    return router
}

export const useAppRoute = () => {
    return useRoute() as AppRouteContext
}
