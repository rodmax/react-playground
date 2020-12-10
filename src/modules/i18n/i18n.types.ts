import { Values } from 'common/types/values.type'

export type I18nKey = I18nAppKey

type I18nAppKey = I18nNameSpacedKey<'app', typeof import('./locales/app/en.json')>

export const I18N_NAMESPACES = ['app'] as const
export type I18nNamespace = Values<typeof I18N_NAMESPACES>

export type I18nNameSpacedKey<NS extends I18nNamespace, T extends object> = `${NS}:${Exclude<
    keyof T,
    symbol
>}`
