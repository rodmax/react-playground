import {
    TypedRouter,
    TypedRoute,
    TypedRouteContext,
} from '../../shared/router5-utils/router5-tools.typings'

export const APP_FEATURE_ROUTE_NAMES = ['github-profile', 'http-client-demo'] as const
export const APP_AUX_ROUTE_NAMES = ['home'] as const

export type AppFeatureRouteName = typeof APP_FEATURE_ROUTE_NAMES[number]
export type AppRouteName = typeof APP_AUX_ROUTE_NAMES[number] | AppFeatureRouteName

export type AppRouter = TypedRouter<AppRouteName>
export type AppRoute = TypedRoute<AppRouteName>
export type AppRouteContext = TypedRouteContext<AppRouteName>
