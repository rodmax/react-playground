# Coding

Both general programming and specific TS rules live in this document

> if the rule can be formalized, be sure to think about writing a custom linter rule before adding it here

## General

## TypeScript

### Prefer union types over enums

-   [unions are type safe, flexible, and sometimes more powerful then enums](https://fettblog.eu/tidy-typescript-avoid-enums/?utm_source=typescript-weekly.com&utm_campaign=typescript_weekly_159&utm_medium=email)
-   [infer union from const array when you need both type and values array](https://steveholgado.com/typescript-types-from-arrays/)

### Class member accessibility format

-   **public** members - always without `public` keyword(controlled by eslint)
-   **private/protected** with `private/protected` keyword and trailing underscore
    > NOTE: in future we want to be closer to native JS and use JS private fields(with `#`) but now trailing `_` is trade-off
            between reading and transpile

```ts
class Foo {
    bar = 'public-field'
    private someSecret_ = 'private value'
}
```
