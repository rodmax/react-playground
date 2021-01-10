import { I18nNameSpacedKey, I18nProvider } from 'common/i18n/i18n-provider'
import { Values } from 'common/types/values.type'

export const I18N_LANGUAGES = ['ru', 'en'] as const
export type I18nLanguage = Values<typeof I18N_LANGUAGES>

// STEP 1. REGISTER your namespaces here
export const I18N_NAMESPACES = ['app', 'auth', 'user'] as const
export type I18nNamespace = Values<typeof I18N_NAMESPACES>

export type I18nKey =
    // STEP 2. ADD translations object for namespace here
    | I18nNameSpacedKey<'app', typeof import('./translations/app-en.json')>
    | I18nNameSpacedKey<'auth', typeof import('./translations/auth-en.json')>
    | I18nNameSpacedKey<'user', typeof import('./translations/user-en.json')>

export const i18nProvider = new I18nProvider<I18nLanguage>({
    debug: false,
    defaultLanguage: 'en',
    languages: I18N_LANGUAGES,
})

export const t = i18nProvider.translateFunction<I18nKey>()

/**
 * The function marks the passed string will be used as a key for translation
 * Typically it used in global constants and configs
 * NOTE: strings passed to the `_` extracted by i18n parse utility
 */
export const _ = (key: I18nKey): I18nKey => key

export function loadTranslations(language: I18nLanguage): Promise<Array<[I18nNamespace, object]>> {
    return Promise.all(
        I18N_NAMESPACES.map(ns => {
            return import(
                /* webpackExclude: /old\.json$/ */
                /* webpackChunkName: "[request]" */
                `./translations/${ns}-${language}.json`
            ).then((module: { default: object }) => [ns, module.default] as [I18nNamespace, object])
        })
    )
}
