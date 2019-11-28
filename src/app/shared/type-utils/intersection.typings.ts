/**
 * Intersection
 * @desc From `T` pick properties that exist in `U`
 * @example
 *   type Props = { name: string; age: number; visible: boolean };
 *   type DefaultProps = { age: number };
 *
 *   // Expect: { age: number; }
 *   type DuplicatedProps = Intersection<Props, DefaultProps>;
 */
export type Intersection<T extends object, U extends object> = T extends unknown
    ? Pick<T, Extract<keyof T, keyof U>>
    : never
