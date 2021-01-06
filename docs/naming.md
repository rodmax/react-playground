# Naming

## `Utils` vs `tools` vs `helper`

Use `utils` for all utility code file/folder:

-   `common/utils/*.ts`
-   `action-utils.ts`

## Dash-case for file names

Use `-` to separate words in file name: `github-api-client.ts`, `user-card.tsx`

## Source file suffixes

Use `.`-separated suffixes to identify one of the following category:

-   `*.spec.ts` - unit/integration test file
-   `*.type.ts` or `*.types.ts` file which contains interfaces and types(sometimes constants, needed to type declarations)
-   `*.reducer.ts` - for reducer
-   `*.actions.ts` - for actions
-   `*.epics.ts` - for epics
-   `*.selectors.ts` - for selectors
-   `*.factories.ts` - contains data factory instances

## Function/method names

<blockquote>
One of the more universal, yet simple rules is:<br>
Function names should be<br>
-   verbs if the function changes the state of the program, and<br>
-   nouns if they're used to return a certain value.<br>
[source](https://stackoverflow.com/a/1991341)
</blockquote>

<br>Or in other words ([from swift language guides](https://swift.org/documentation/api-design-guidelines/#strive-for-fluent-usage)):

<blockquote>
Name functions and methods according to their side-effects<br>

-   Those without side-effects should read as noun phrases, e.g.,<br>
    `x.distance(to: y), i.successor()`
-   Those with side-effects should read as imperative verb phrases, e.g.,<br>
`print(x), x.sort(), x.append(y)`
</blockquote>

### Why?

Regarding [this](https://www.yegor256.com/2018/08/22/builders-and-manipulators.html) and [this](https://wiki.c2.com/?MethodsWithNounNames)

Why nouns phrase for **query** methods:

-   Names of methods should not say anything about the implementation. After all, if you changed the implementation, would you care to rename the method?
-   Method name should say "what does this return"
-   In complex expressions noun-methods feels more like an English sentence.

```js
if (findIndex(A, t) < 0) then // BAD
if (indexOf(A, t) < 0) then // GOOD
```

Why verb for **commands**:

-   I would consider a verb command name only if the dominant purpose of the function is not what it returns but how it changes the state of the world.

### Edge cases

-   Q: How to name the function which load data from server and returns `Promise/Observable` ?
-   A: Use verb in function name e.g. `loadUsers(): Observable<User[]>` to emphasize side effect nature of this action

-   Q: maybe there is some kind of trick to distinguish by eye query from command?
-   A: Yes just look to return type
    -   commands: `doAction(): void | Promise<void> | Observable<void>`
    -   queries: `data(): <any non void type>`
