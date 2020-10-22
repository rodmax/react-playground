import { Action } from 'redux'

export type ActionsUnion<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    T extends Record<string, ActionCreator<string, any>>
> = ReturnType<T[keyof T]>

interface StrictAction<T extends string, P = null> extends Action<T> {
    payload: P
}

type ActionCreator<T extends string, P> = P extends null
    ? () => { type: T; payload: null }
    : (p: P) => StrictAction<T, P>

export const action = <T extends string>(type: T) => {
    return {
        withNoPayload: () => {
            return () => {
                return { type, payload: null }
            }
        },
        withPayload: <P = never>() => {
            return (payload: P) => {
                return { type, payload }
            }
        },
    }
}
