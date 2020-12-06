import { Intersection } from './intersection.type'
import { Diff } from './diff.type'

/**
 * Overwrite
 * @desc From `U` overwrite properties to `T`
 * @example
 *   type Props = { name: string; age: number; visible: boolean };
 *   type NewProps = { age: string; other: string };
 *
 *   // Expect: { name: string; age: string; visible: boolean; }
 *   type ReplacedProps = Overwrite<Props, NewProps>;
 */
export type Overwrite<
    T extends object,
    U extends object,
    I = Diff<T, U> & Intersection<U, T>
> = Pick<I, keyof I>
