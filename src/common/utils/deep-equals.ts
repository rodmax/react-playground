export function deepEqual(
    actual: object | unknown,
    expected: object | unknown,
    config: { isExpectedPartial: boolean } = { isExpectedPartial: false }
): boolean {
    if (!(isObject(actual) && isObject(expected))) {
        return actual === expected
    }

    const actualKeys = Object.keys(actual)
    const expectedKeys = Object.keys(expected)

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

        if (!deepEqual(val1, val2)) {
            return false
        }
    }

    return true
}

function isObject(obj: unknown): obj is object {
    return obj != null && typeof obj === 'object'
}
