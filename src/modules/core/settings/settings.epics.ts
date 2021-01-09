import { exhaustMap, map, startWith } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { SettingsAction, settingsActions } from './settings.actions'
import { LocalStorageValue } from 'common/local-storage/local-storage-value'
import { I18nLanguage, i18nProvider, loadTranslations } from '../i18n'
import { shouldNeverBeCalled } from 'common/utils/misc'
import { NEVER } from 'rxjs'
import { initializeConfig } from '../config/config'

const languageStorageValue = new LocalStorageValue<I18nLanguage>('setting')

const languageEpic: Epic<SettingsAction> = action$ => {
    return action$.pipe(
        ofType('@settings.changeLanguage', '@settings.setLanguage'),
        exhaustMap(action => {
            switch (action.type) {
                case '@settings.setLanguage':
                    return loadTranslations(action.payload.language).then(translations => {
                        i18nProvider.setLanguageWithTranslations(
                            action.payload.language,
                            translations
                        )
                        return settingsActions.loadTranslations()
                    })

                case '@settings.changeLanguage':
                    languageStorageValue.set(action.payload.language)
                    window.location.reload()
                    return NEVER

                default:
                    shouldNeverBeCalled(action)
            }
            return NEVER
        }),
        startWith(
            settingsActions.setLanguage({
                language: languageStorageValue.get(i18nProvider.browserLanguage()),
            })
        )
    )
}

const configEpic: Epic<SettingsAction> = () => {
    return initializeConfig().pipe(
        map(() => {
            return settingsActions.loadConfigSuccess()
        })
    )
}

export const settingsEpics = [languageEpic, configEpic]
