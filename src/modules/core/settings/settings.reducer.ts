import { StateSlice, storeSlice } from 'common/redux/reducer-utils'
import { NeverAction } from 'common/redux/action-utils'
import { shouldNeverBeCalled } from 'common/utils/misc'
import { SettingsAction } from './settings.actions'
import { I18nLanguage } from '../i18n'

export interface SettingsState {
    isConfigLoaded: boolean
    i18n: {
        language: null | I18nLanguage
        isTranslationsLoaded: boolean
    }
}

const initialState: SettingsState = {
    isConfigLoaded: false,
    i18n: {
        language: null,
        isTranslationsLoaded: false,
    },
}

export type SettingsStateSlice = StateSlice<typeof settingsReducerSlice>

export const settingsReducerSlice = storeSlice('settings', initialState).withReducer(
    (state, action: SettingsAction | NeverAction) => {
        switch (action.type) {
            case '@settings.setLanguage':
                return {
                    ...state,
                    i18n: {
                        ...state.i18n,
                        language: action.payload.language,
                        isTranslationsLoaded: false,
                    },
                }
            case '@settings.changeLanguage':
                return {
                    ...state,
                    i18n: {
                        ...state.i18n,
                        language: action.payload.language,
                    },
                }
            case '@settings.loadTranslations':
                return {
                    ...state,
                    i18n: {
                        ...state.i18n,
                        isTranslationsLoaded: true,
                    },
                }
            case '@settings.loadConfigSuccess':
                return {
                    ...state,
                    isConfigLoaded: true,
                }

            default:
                shouldNeverBeCalled(action)
        }
        return state
    }
)
