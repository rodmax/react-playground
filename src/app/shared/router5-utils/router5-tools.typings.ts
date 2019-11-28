import { Route, Router, State } from 'router5'
import { Overwrite } from '../type-utils/overwrite.typings'
import { RouteContext } from 'react-router5/types/types'

export type TypedRoute<T extends string> = Overwrite<Route, { name: T }>
export type TypedRouter<T extends string> = Overwrite<Router, { never: T }>
export type TypedRouteState<T extends string> = Overwrite<State, { name: T }>
export type TypedRouteContext<T extends string> = Overwrite<
    RouteContext,
    {
        router: TypedRouter<T>
        route: TypedRouteState<T>
        previousRoute: TypedRouteState<T> | null
    }
>
