import { TypedRouter, TypedRoute, TypedRouteContext } from 'common/router5/router5-toolkit.types'
import { Values } from 'common/types/values.type'

export const APP_FEATURE_ROUTE_NAMES = ['github-profile', 'users'] as const
export const APP_AUX_ROUTE_NAMES = ['home'] as const

export type AppFeatureRouteName = Values<typeof APP_FEATURE_ROUTE_NAMES>
export type AppRouteName = Values<typeof APP_AUX_ROUTE_NAMES> | AppFeatureRouteName

export type AppRouter = TypedRouter<AppRouteName>
export type AppRoute = TypedRoute<AppRouteName>
export type AppRouteContext = TypedRouteContext<AppRouteName>
