# React stack playground

[![Actions Status](https://github.com/rodmax/react-playground/workflows/ci/badge.svg)](https://github.com/rodmax/react-playground/actions) [![Greenkeeper badge](https://badges.greenkeeper.io/rodmax/react-playground.svg)](https://greenkeeper.io/)
[![codecov](https://codecov.io/gh/rodmax/react-playground/branch/master/graph/badge.svg)](https://codecov.io/gh/rodmax/react-playground)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=rodmax_react-playground&metric=alert_status)](https://sonarcloud.io/dashboard?id=rodmax_react-playground)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=rodmax_react-playground&metric=duplicated_lines_density)](https://sonarcloud.io/dashboard?id=rodmax_react-playground)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=rodmax_react-playground&metric=sqale_index)](https://sonarcloud.io/dashboard?id=rodmax_react-playground)

## Goals
- build production ready SPA stater kit(with more strong and quality oriented defaults with compared to CRA)
- not to lose the readability of architecture and clean code
- deep dive into React ecosystem

## Current status
Teh Project is at an early stage. It is actively developing...

### Achieved goals
- project fully automated (CI with build/unit/e2e/test/analyzing code coverage and code quality)

### Next step
Current focus - app architecture.<br>
I have a clear understanding of how the app should be designed <br>
and i am now implementing this ideas


## TODO list

### Key technologies
- [x] TypeScript
- [x] UI library: React
- [x] bundler: Webpack
- [x] Sass + PostCSS(autoprefixer and friends)

### Quality
- [x] CI: base on [github actions](https://github.com/rodmax/react-playground/actions)
- [ ] [CI: code coverage](https://codecov.io/gh/rodmax/react-playground)
- [ ] [CI:  sonar cloud analyzer](https://sonarcloud.io/dashboard?id=rodmax_react-playground)
- [x] E2E testing: testcafe
    - [ ] snapshots of failed tests as artifacts
- [x] unit & international testing: jest + testing-library
- [ ] jest: code coverage
- [x] Hyper strong TypeScript config
- [x] EsLint
    - [ ] add HOOKS related eslint rules
    - [ ] add REACT related eslint rules
- [x] Stylelint
- [ ] integrate audit(click house or other) to CI
- [ ] Review tools of [minimizing for production](https://webpack.js.org/plugins/mini-css-extract-plugin/#minimizing-for-production)

### Build/Deploy
- [x] add [tslib](https://www.npmjs.com/package/tslib)
- [ ] CI: deploy to github pages via github actions

### App/Architecture
- [ ] Follow [redux architecture StyleGuide](https://redux.js.org/style-guide/style-guide) rules whenever it is reasonably possible
- [ ] localization
- [ ] form handling(ui/server validation, form state)
- Store
    - [x] Redux
    - [x] [type safety with redux](https://medium.com/@dhruvrajvanshi/some-tips-on-type-safety-with-redux-98588a85604c):
    - [x] [actions naming](https://itnext.io/namespacing-redux-action-type-constant-values-90b932eea43f) -
    my current choice how to name action types
- [ ] Effects/async flow: RxJs(rxjs/observable)
- [ ] Router: router5
- API client
    - [ ] API client factory(rxjs based)
        - [ ] File uploading
        - [ ] Catch unhandled API errors on App level
- React related:
    - [x] [React.StrictMode](https://reactjs.org/docs/strict-mode.html)
    - [ ] try suspense

### Development experience
- [x] Prettier for formatting(integration with VSCode)
- [ ] HMR for CSS
- [ ] commit format & commit-based changelog generation
