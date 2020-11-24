type PrimitiveValue = string | number | boolean | undefined | null

export type QueryParams<K extends string = string> = Record<
    K,
    PrimitiveValue | PrimitiveValue[] | object
>

export function queryString<K extends string = string>(
    params: QueryParams<K>,
    serializer: QueryValuesSerializer = DEFAULT_SERIALIZER
): string {
    const parts: Array<string | null> = []
    const add = (s: string | null) => s && parts.push(s)

    Object.keys(params).forEach(key => {
        const value = params[key as K]
        if (Array.isArray(value)) {
            value.forEach(arrValue => {
                add(queryPart(key, arrValue, serializer))
            })
            return
        }
        add(queryPart(key, value, serializer))
    })
    return parts.join('&')
}

function queryPart(
    key: string,
    value: PrimitiveValue | object,
    serializer: QueryValuesSerializer
): string | null {
    const serialized = serializeValue(value, serializer)
    if (!serialized) {
        return null
    }
    return `${encodeURIComponent(key)}=${encodeURIComponent(serialized)}`
}

function serializeValue(
    value: PrimitiveValue | object,
    serializer: QueryValuesSerializer
): string | null {
    if (value === null || value === undefined || value === '') {
        return null
    }
    switch (typeof value) {
        case 'boolean':
            return serializer.serializeBoolean(value)
        case 'number':
            return serializer.serializeNumber(value)
        case 'string':
            return value
        case 'object':
            return serializer.serializeJson(value)
        default:
            return (value as object).toString()
    }
}

export type QueryValuesSerializer = typeof DEFAULT_SERIALIZER

export const DEFAULT_SERIALIZER = {
    serializeBoolean: (value: boolean) => value.toString(),
    serializeNumber: (value: number) => value.toString(),
    serializeJson: (value: object) => JSON.stringify(value),
} as const
