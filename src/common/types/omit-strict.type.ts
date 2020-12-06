/** More strong version of built in Omit<> utility type
 * See details [here](https://github.com/microsoft/TypeScript/issues/30825)
 */
export type OmitStrict<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
