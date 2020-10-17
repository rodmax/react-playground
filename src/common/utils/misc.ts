/**
 * Helper to control that code unreachable(from point of TypeScript)
 * in place where this function called
 * Useful in "default" section of switch/case statement
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function shouldNeverBeCalled(_value: never): void {}
