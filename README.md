# React stack playground

[![Actions Status](https://github.com/rodmax/react-playground/workflows/ci/badge.svg)](https://github.com/rodmax/react-playground/actions) [![Greenkeeper badge](https://badges.greenkeeper.io/rodmax/react-playground.svg)](https://greenkeeper.io/)


The main purpose of this project is to study web applications development based on react stack

## TODO list

- Key technologies
    - [x] TypeScript
    - [x] UI library: React
    - [x] bundler: Webpack
    - [x] Sass + PostCSS(autoprefixer and friends)
- Quality:
    - [x] CI: base on [github actions](https://github.com/rodmax/react-playground/actions)
    - [x] E2E testing: testcafe
    - [x] unit & international testing: jest + testing-library
    - [x] Hyper strong TypeScript config
    - [x] EsLint
        - [ ] add HOOKS related eslint rules
        - [ ] add REACT related eslint rules
    - [x] Stylelint
    - [ ] integrate audit(click house or other) to CI
    - [ ] Review tools of [minimizing for production](https://webpack.js.org/plugins/mini-css-extract-plugin/#minimizing-for-production)
- Build:
    - [x] add [tslib](https://www.npmjs.com/package/tslib)
- App:
    - [ ] localization
    - [ ] form handling(ui/server validation, form state)
    - Store
        - [x] Redux
        - [x] [type safety with redux](https://medium.com/@dhruvrajvanshi/some-tips-on-type-safety-with-redux-98588a85604c):
        - [x] [actions naming](https://itnext.io/namespacing-redux-action-type-constant-values-90b932eea43f)
        the best approach in terms of minimal boilerplate|strong typing|no unneeded abstractions/libs in my opinion
    - [ ] Effects/async flow: RxJs(rxjs/observable)
    - [ ] Router: router5
    - API client (rxjs based?)
        - [ ] Base API client helper to be used for every domain API client
        - [ ] File uploading
        - [ ] Catch unhandled API errors on App level
    - React related:
        - [x] [React.StrictMode](https://reactjs.org/docs/strict-mode.html)
        - [ ] try suspense
- Development experience
    - [x] Prettier for formatting(integration with VSCode)
    - [ ] HMR for CSS
    - [ ] commit format & commit-based changelog generation
