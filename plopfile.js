// @ts-check
const prettier = require('prettier')
const path = require('path')

const TEMPLATE_DIR = './tools/plop/templates'

/**
 * @param {import('plop').NodePlopAPI} plop
 */
module.exports = function (plop) {
    const prettierConfigPromise = prettier.resolveConfig('src/app/typical-source.ts')
    const VALID_NAME = /[\w-]+/
    const INVALID_NAME_PARTS = ['slice', 'store', 'state']

    const SLICE_TEMPLATES_DIR = path.join(TEMPLATE_DIR, 'slice')
    plop.setGenerator('slice', {
        description: 'Generate redux slice source files',
        prompts: [
            {
                message: 'Redux Slice name, in any notation: my-feature, MyFeature, myFeature',
                name: 'name',
                type: 'input',
                /**
                 * @param {string} name
                 */
                validate: name => {
                    if (!VALID_NAME.test(name)) {
                        return `"${name}": name should consist of letters and "-" signs. For ex.: my-feature, myFeature`
                    }
                    if (INVALID_NAME_PARTS.some(part => name.toLowerCase().includes(part))) {
                        return `"${name}": name should not include worlds: ${INVALID_NAME_PARTS.join()}`
                    }
                    return true
                },
            },
            {
                message: 'Destination folder where to create slice (will be created if not exists)',
                name: 'path',
                type: 'input',
            },
        ],
        actions: [
            {
                type: 'addMany',
                destination: '{{path}}',
                templateFiles: path.join(SLICE_TEMPLATES_DIR, '*.hbs'),
                base: SLICE_TEMPLATES_DIR,
                transform: template => {
                    return prettierConfigPromise.then(config => {
                        return prettier.format(template, { ...config, parser: 'typescript' })
                    })
                },
                data: {
                    firstActionName: 'renameMe',
                },
            },
        ],
    })

    const REACT_FC_TEMPLATES_DIR = path.join(TEMPLATE_DIR, 'react-fc')
    plop.setGenerator('react-fc', {
        description: 'Generate react functional component',
        prompts: [
            {
                message:
                    'React Component name, in any notation: my-component, MyComponent, myComponent',
                name: 'name',
                type: 'input',
                /**
                 * @param {string} name
                 */
                validate: name => {
                    if (!VALID_NAME.test(name)) {
                        return `"${name}": name should consist of letters and "-" signs. For ex.: my-component, myComponent`
                    }
                    return true
                },
            },
            {
                message:
                    'Destination folder where to create component (will be created if not exists)',
                name: 'path',
                type: 'input',
            },
        ],
        actions: [
            {
                type: 'addMany',
                destination: '{{path}}/{{dashCase name}}',
                templateFiles: path.join(REACT_FC_TEMPLATES_DIR, '*.hbs'),
                base: REACT_FC_TEMPLATES_DIR,
            },
        ],
    })
}
