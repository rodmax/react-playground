type ReducerSlice<S extends Record<string, unknown>, A> = {
    [Key in keyof S]: (s: Readonly<S[Key]>, a: A) => S[Key]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type StateSlice<RS extends Record<string, (...args: any[]) => any>> = {
    [K in keyof RS]: ReturnType<RS[K]>
}

export const storeSlice = <K extends string, S>(key: K, initialState: Readonly<S>) => {
    return {
        withReducer: <A>(reducer: (s: Readonly<S>, a: A) => S) => {
            return {
                [key]: (s: S, a: A) => reducer(s || initialState, a),
            } as ReducerSlice<Record<K, S>, A>
        },
    }
}
