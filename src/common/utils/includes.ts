/**
 * Function do the same as Array.prototype.includes but additionally
 * provides type guard when we find subtype item in parent type array
 *
 * Borrowed here: https://github.com/microsoft/TypeScript/issues/26255#issuecomment-502899689
 */
export function includes<T, U extends T>(arr: readonly U[], elem: T): elem is U {
    return arr.includes(elem as U)
}
