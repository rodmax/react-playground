import { Action } from 'redux'
import { Observable } from 'rxjs'

// Until https://github.com/redux-observable/redux-observable/issues/622
// will be fixed
declare module 'redux-observable' {
    type ActionByType<Union, Type> = Union extends { type: Type } ? Union : never

    export function ofType<
        TAction extends Action<string>,
        TActionTypes extends Array<TAction['type']>
    >(
        ...key: TActionTypes
    ): (source: Observable<TAction>) => Observable<ActionByType<TAction, TActionTypes[number]>>
}
