/// <reference types="./redux-observable.patch" />
import { Action } from 'redux'

export interface RdxAction<T extends string, P = null> extends Action<T> {
    payload: P
}

export interface RdxActionCreator<T extends string, P> {
    type: T
    create: P extends null ? () => { type: T; payload: null } : (p: P) => RdxAction<T, P>
}

export type RdxExtractActionsUnion<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    T extends Record<string, RdxActionCreator<string, any>>
> = ReturnType<T[keyof T]['create']>

// To create action creator we need involve two generic parameter "type" type and "payload" type
// To prevent 'Partial type argument inference in typescript'
// we add bellow influent API
// See details here: https://medium.com/@nandiinbao/partial-type-argument-inference-in-typescript-and-workarounds-for-it-d7c772788b2e
export const rdxActionCreator = <T extends string>(type: T) => {
    return {
        withNoPayload: () => {
            return {
                type,
                create: () => {
                    return { type, payload: null }
                },
            }
        },
        withPayload: <P = never>() => {
            return {
                type,
                create: (payload: P) => {
                    return { type, payload }
                },
            }
        },
    }
}

export type RdxReducerFn<S, T extends string, P> = (
    payload: RdxAction<T, P>['payload'],
    state: S
) => Partial<S>

export class RdxReducerBuilder<S> {
    private reducerByType: Record<string, RdxReducerFn<S, string, unknown>> = {}

    public bindReducerWithAction<T extends string, P>(
        ac: RdxActionCreator<T, P>,
        fn: RdxReducerFn<S, T, P>
    ): this {
        this.reducerByType[ac.type] = fn as RdxReducerFn<S, string, unknown>
        return this
    }

    public build(initialState: S): (s: S | undefined, a: RdxAction<string, unknown>) => S {
        return (state: S = initialState, action: RdxAction<string, unknown>): S => {
            const reducerFn = this.reducerByType[action.type]
            if (reducerFn) {
                return {
                    ...state,
                    ...reducerFn(action.payload, state),
                }
            } else {
                return state
            }
        }
    }
}
