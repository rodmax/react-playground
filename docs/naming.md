# Naming

### Utils vs tools vs helper

Use `utils` for all utility code file/folder:

-   `common/utils/*.ts`
-   `action-utils.ts`

### Dash-case for file names

Use `-` to separate words in file name: `github-api-client.ts`, `user-card.tsx`

### Source file suffixes

Use `.`-separated suffixes to identify one of the following category:

-   `*.spec.ts` - unit/integration test file
-   `*.type.ts` or `*.types.ts` file which contains interfaces and types(sometimes constants, needed to type declarations)
-   `*.reducer.ts` - for reducer
-   `*.actions.ts` - for actions
-   `*.epics.ts` - for epics
-   `*.selectors.ts` - for selectors
-   `*.factories.ts` - contains data factory instances
