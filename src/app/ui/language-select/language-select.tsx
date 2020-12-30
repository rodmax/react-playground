import { includes } from 'common/utils/includes'
import { I18N_LANGUAGES } from 'modules/core/i18n'
import { SettingsAction, settingsActions } from 'modules/core/settings/settings.actions'
import { selectCurrentLanguage } from 'modules/core/settings/settings.selectors'
import React, { Dispatch } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const LanguageSelect: React.FC = () => {
    const currentLanguage = useSelector(selectCurrentLanguage)
    const dispatch = useDispatch<Dispatch<SettingsAction>>()
    return (
        <select
            value={currentLanguage || ''}
            onChange={ev => {
                const language = ev.target.value
                if (includes(I18N_LANGUAGES, language)) {
                    dispatch(settingsActions.changeLanguage({ language }))
                }
            }}
        >
            {I18N_LANGUAGES.map(lang => {
                return (
                    <option key={lang} value={lang}>
                        {lang}
                    </option>
                )
            })}
        </select>
    )
}
