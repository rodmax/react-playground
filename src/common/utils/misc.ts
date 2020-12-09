/**
 * Helper to control that code unreachable(from point of TypeScript)
 * in place where this function called
 * Useful in "default" section of switch/case statement
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars -- obviously required but not used argument
export function shouldNeverBeCalled(_: never): void {
    /** never been called yet due to TS compile error */
}

/**
 * Stub function that does nothing.
 *
 * Semantically close to NEVER  from rxjs
 */
export const NOOP_FN = () => {
    /** doing nothing */
}
