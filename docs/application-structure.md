# Application structure

Here we give a set of principles and rules that the application (folder) structure follows

## LIFT

Do structure the app such that you can

-   **Locate** code quickly,
-   **Identify** the code at a glance,
-   keep the **Flattest** structure you can,
-   and **Try** to be DRY. [taken from here](https://angular.io/guide/styleguide#lift)

## Overall structure guidelines

### Folders-by-feature structure

Create folders named for the feature area they represent.

```bash
# BAD
reducers/
   user-page.reducer.ts
actions/
   user-page.actions.ts
epics/
   user-page.epics.ts
pages/
    user-pages/
        user-page{spec.tsx,.tsx,.scss}

# GOOD
user/
    pages/
        user-page/
            user-page{spec.tsx,.tsx,.scss}
        state/
            user-page.{reducer,actions,epics}.ts
```

## Dependency layers

Below is a diagram showing the dependency rules in the application<br>
[dependency-cruiser](https://github.com/sverweij/dependency-cruiser) utility used to control this dependencies<br>
(See [.dependency-cruiser.js](../.dependency-cruiser.js) for details)

```mermaid
flowchart
    app/ --> modules/
    app/ --> api/
    app/ --> common/
    modules/ --> api/
    modules/ --> common/
    api/ --> common/

    subgraph modules/
        subgraph modules/a/
            modules/a/page/ --> modules/a/ui/
            modules/a/page/ --> modules/a/model/
            modules/a/ui/ --> modules/a/model/
        end
        subgraph modules/b/
            modules/b/page/ --> modules/b/ui/
            modules/b/page/ --> modules/b/model/
            modules/b/ui/ --> modules/b/model/
        end
    end
    modules/a/ -- modules/a/ui-or-model --> modules/b/
    modules/b/ -- modules/b/ui-or-model --> modules/a/

```

<details>
<summary>Expand me to see this repository dependency graph 👇</summary>
<img src="./graph.svg">
</details>

## Guidelines

### Feature module

Feature module code lives in `modules/{feature}`. This folder contains all feature related

-   pages: `modules/{feature}/pages/**`
-   ui components(used by own pages or another feature components): `modules/{feature}/ui/**`
-   code which not related to certain component/page and may be reused between different ui components(business logic, configs, view models, etc): `modules/{feature}/model/**`
