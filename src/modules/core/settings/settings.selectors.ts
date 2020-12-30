import { SettingsStateSlice } from './settings.reducer'

export const selectIsI18nReady = (state: SettingsStateSlice) =>
    state.settings.i18n.isTranslationsLoaded

export const selectCurrentLanguage = (state: SettingsStateSlice) => state.settings.i18n.language
