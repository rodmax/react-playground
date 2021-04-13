# Development

### Prepare local environment

-   install nodejs 12+ version and corresponded npm
-   in root folder run `npm ci`
-   install docker and setup it to make possible run without sudo (to able run pre-push hook)
    -   copy paste [the script](https://github.com/rodmax/dotfiles/blob/master/scripts/install-docker.sh) for `ubuntu/debian/pop os` systems
-   [optionally] to generate docs images
    -   `npm i -g @mermaid-js/mermaid-cli`
    -   `sudo apt install graphviz`

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

#### Generate React functional component

```bash
# positional arguments:
# - name in dash-case/PascalCase/camelCase
# - destination folder (without component folder)

npm run g:react-fc fancy-button src/common/ui/

# tree src/common/ui/fancy-button
src/common/ui/fancy-button
├── fancy-button.scss
└── fancy-button.tsx
```

> NOTE: the generation task automatically adds _component-name_ folder to destination path
