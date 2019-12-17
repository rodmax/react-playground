export type JestSpyOnFunction<T extends (...args: unknown[]) => unknown> = jest.SpyInstance<
    ReturnType<T>,
    Parameters<T>
>
