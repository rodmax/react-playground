export function pick<T extends object, K extends keyof T>(
    obj: T,
    keys: ReadonlyArray<K>
): Pick<T, K> {
    return keys.reduce((result, key) => {
        result[key] = obj[key]
        return result
    }, {} as Pick<T, K>)
}
