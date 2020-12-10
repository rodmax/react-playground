import i18next, { StringMap, TOptions } from 'i18next'

export interface I18nextDecoratorOptions {
    debug?: boolean
}

export class I18nextDecorator {
    constructor(private readonly options: I18nextDecoratorOptions = {}) {
        i18next.init({
            lng: 'en',
            debug: this.options.debug,
            keySeparator: false,
            interpolation: {
                escape: undefined, // // react already safes from xss
            },
            resources: {},
        })
    }

    public translateFunction<K extends string>(): (
        key: K | K[],
        options?: TOptions<StringMap>
    ) => string {
        return i18next.t.bind(i18next)
    }
}
