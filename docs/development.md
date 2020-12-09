# Development

### Start development server

```bash
npm run app:start
```

### Run jest tests

```bash
npm run jest:watch # comfortable for development
```

### Code generation

we use [plop](https://plopjs.com/) tool to generate new files with consistency.

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
