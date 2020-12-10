import { I18nextDecorator } from 'common/i18next/i18next-decorator'
import { I18nKey } from './i18n.types'

export const i18n = new I18nextDecorator({ debug: true })

export const t = i18n.translateFunction<I18nKey>()
