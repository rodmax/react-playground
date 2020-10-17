type ReducerSlice<S extends Record<string, unknown>, A> = {
    [Key in keyof S]: (s: Readonly<S[Key]>, a: A) => S[Key]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type StateSlice<RS extends Record<string, (...args: any[]) => any>> = {
    [K in keyof RS]: ReturnType<RS[K]>
}

export function reducerSlice<K extends string, S, A>(
    key: K,
    fn: (s: Readonly<S>, a: A) => S
): ReducerSlice<Record<K, S>, A> {
    return { [key]: fn } as ReducerSlice<Record<K, S>, A>
}
