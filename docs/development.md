# Development

### Prepare local environment

-   install nodejs 12+ version and corresponded npm
-   in root folder run `npm ci`
-   install docker and setup it make possible run without sudo (to able run pre-push hook)
-   [optionally] `npm i -g @mermaid-js/mermaid-cli` (to generate docs images from mermaid graph files)

### Start development server

```bash
npm run start:dev
```

### Run jest tests

```bash
npm run jest:watch # comfortable for development
```

### Code generation

we use [plop](https://plopjs.com/) tool to generate new files with consistency.

<!-- cspell: words plopfile -->

> See details in `plopfile.js` and `templates/` folder

#### Generate redux slice

```bash
npm run g:slice someListPage src/app/modules/some/pages/some-list-page/state
# tree src/modules/some/
src/modules/some/
└── pages
    └── some-list-page
        └── state
            ├── some-list-page.actions.ts
            ├── some-list-page.epics.ts
            ├── some-list-page.reducer.ts
            └── some-list-page.selectors.ts
```
