import { action, ActionsUnion } from 'common/redux/action-utils'
import { I18nLanguage } from '../i18n'

export const settingsActions = {
    setLanguage: action('@settings.setLanguage').withPayload<{ language: I18nLanguage }>(),
    changeLanguage: action('@settings.changeLanguage').withPayload<{ language: I18nLanguage }>(),
    loadTranslations: action('@settings.loadTranslations').withNoPayload(),
}

export type SettingsAction = ActionsUnion<typeof settingsActions>
