/**
 * Diff
 * @desc From `T` remove properties that exist in `U`
 * @example
 *   type Props = { name: string; age: number; visible: boolean };
 *   type DefaultProps = { age: number };
 *
 *   // Expect: { name: string; visible: boolean; }
 *   type RequiredProps = Diff<Props, DefaultProps>;
 */
export type Diff<T extends object, U extends object> = Pick<T, Exclude<keyof T, keyof U>>
