import { SettingsStateSlice } from './settings.reducer'

export const selectIsAppInitialized = (state: SettingsStateSlice) =>
    state.settings.i18n.isTranslationsLoaded && state.settings.isConfigLoaded

export const selectCurrentLanguage = (state: SettingsStateSlice) => state.settings.i18n.language
