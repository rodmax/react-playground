export function deepEqual(
    actual: object | unknown,
    expected: object | unknown,
    config: { isExpectedPartial: boolean } = { isExpectedPartial: false }
): boolean {
    if (isObject(actual)) {
        if (!isObject(expected)) {
            return false
        }
        // here we come if both objects
    } else if (actual !== expected) {
        return false
    }

    const actualKeys = Object.keys(actual as object)
    const expectedKeys = Object.keys(expected as object)

    if (config.isExpectedPartial) {
        if (actualKeys.length < expectedKeys.length) {
            return false
        }
    } else {
        if (actualKeys.length !== expectedKeys.length) {
            return false
        }
    }

    for (const key of expectedKeys) {
        const val1 = (actual as Record<string, unknown>)[key]
        const val2 = (expected as Record<string, unknown>)[key]
        if (isObject(val1) && isObject(val2)) {
            if (!deepEqual(val1, val2)) {
                return false
            }
        } else if (val1 !== val2) {
            return false
        }
    }

    return true
}

function isObject(obj: unknown): obj is object {
    return obj != null && typeof obj === 'object'
}
