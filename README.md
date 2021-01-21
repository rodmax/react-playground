# React stack playground

> [ We can’t be silent! #SavePandaDoc](https://savebelarusit.org/en/)

<img src="src/assets/big-logo.svg">

## Project goals

-   production ready SPA stater kit<br>
    (may be with more strong and quality oriented defaults with compared to CRA<br>
    although it may happens that we just wanted to cook the webpack ourselves 🙃)
-   clean(in our opinion) architecture with attempt to formalize as many as possible project use cases
-   target audience - commercial project development team(2+ front-end developers)
-   deep dive into React ecosystem

## Status

The Project is continuously improved.<br>
Currently the author subjectively satisfied with most of the tech decisions in project<br>

> the repo is not used in production, so something may not suit the needs of the real world

Play with master-branch [demo](https://rodmax.github.io/react-playground/#/)<br>
and corresponded [webpack bundle analyzer stat page](https://rodmax.github.io/react-playground/assets/bundles-report.html)

## Code

-   Language - `TypeScript` (with hyper strong tsconfig.json)
-   View - `react`
-   State - `redux`
-   Side effects & async flow - `RxJs`
-   Routing - `router-5`
-   i18n - `i18next`
-   Style - `SASS + PostCSS` with BEM-like-notation, 🤔 CSS modules considered

## Tools

-   build - good old `webpack` with loader/plugin friends
-   deploy - `github pages` or `nginx`-docker container(may be run locally)
-   CI services:

    -   github actions: [![Actions Status](https://github.com/rodmax/react-playground/workflows/ci/badge.svg)](https://github.com/rodmax/react-playground/actions)
    -   code coverage: [![codecov](https://codecov.io/gh/rodmax/react-playground/branch/master/graph/badge.svg)](https://codecov.io/gh/rodmax/react-playground)
    -   sonarcloud:
        -   [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=rodmax_react-playground&metric=alert_status)](https://sonarcloud.io/dashboard?id=rodmax_react-playground)
        -   [![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=rodmax_react-playground&metric=duplicated_lines_density)](https://sonarcloud.io/dashboard?id=rodmax_react-playground)
        -   [![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=rodmax_react-playground&metric=sqale_index)](https://sonarcloud.io/dashboard?id=rodmax_react-playground)

-   unit/integration testing: `jest`, `testing-library`
-   e2e: `testcafe`
-   code scaffolding/generation - `plop`-based
-   code quality: `eslint`, `prettier`, `stylelint`, `dependency-cruiser`(validate architecture-related import rule)

## Features

#### i18n

i18n approach based-on `i18next`-ecosystem with bellow features:

-   automatic keys parsing from source code
-   type-safe message ids depending from JSON files
-   split translations by multiple JSON files
-   (vscode) ability to maintain JSON file directly from editor (via extension i18n-ally)

Read details [here](./docs/i18n.md)

#### Dynamically loaded config

Dynamically loaded config approach(tools & code utils)

Philosophy is based on

-   An app’s config is everything that is likely to vary between deploys (staging, production, developer environments, etc)
    [Config rule from The Twelve Factor App](https://12factor.net/config)
-   [Build Once, Deploy Anywhere!](https://www.openshift.com/blog/build-once-deploy-anywhere)

#### RxJs based http/api client

Hand made HTTP/API client:

-   API inspired by angular's HttpClient
-   has declarative mock for testing
-   tiny size(just a few source code files over RxJs)

#### Redux-related tools

Set of common helpers and plop-based code generation tools allows to simplify and unify
redux-related code base

## Guidelines

-   [Architecture](docs/architecture.md)
-   [Naming](docs/naming.md)
-   [Coding(TS and common programming rules)](docs/coding.md)
-   [Development(tools and env setup)](docs/development.md)
