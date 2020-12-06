/**
 * Helper to control that code unreachable(from point of TypeScript)
 * in place where this function called
 * Useful in "default" section of switch/case statement
 */
export function shouldNeverBeCalled({}: never): void {
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
