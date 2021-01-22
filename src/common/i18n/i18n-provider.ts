import { includes } from 'common/utils/includes'
import i18next, { StringMap, TOptions } from 'i18next'

export type I18nNameSpacedKey<NS extends string, T extends object> = `${NS}:${Exclude<
    keyof T,
    symbol
>}`

export interface I18nextDecoratorOptions<Language extends string> {
    debug?: boolean
    defaultLanguage: Language
    languages: readonly Language[]
}

export class I18nProvider<Language extends string> {
    constructor(private readonly options: I18nextDecoratorOptions<Language>) {
        i18next.init({
            lng: this.options.defaultLanguage,
            debug: this.options.debug,
            keySeparator: false,
            interpolation: {
                escape: undefined, // // react already safes from xss
            },
            resources: {},
        })
    }

    translateFunction<K extends string>(): (key: K | K[], options?: TOptions<StringMap>) => string {
        return i18next.t.bind(i18next)
    }

    setLanguageWithTranslations(lng: Language, translations: Array<[string, object]>): void {
        translations.forEach(([ns, resource]) => {
            i18next.addResourceBundle(lng, ns, resource, true, true)
        })
        i18next.changeLanguage(lng)
    }

    browserLanguage(): Language {
        const language = window.navigator.languages[0] || window.navigator.language
        if (includes(this.options.languages, language)) {
            return language
        }
        return this.options.defaultLanguage
    }

    enableTestingMode(): void {
        i18next.changeLanguage('cimode')
    }
}
