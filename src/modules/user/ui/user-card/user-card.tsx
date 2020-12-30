import { UserDto } from 'api/pizza-store/user/user-client.types'
import { t } from 'modules/core/i18n'
import { USER_ROLE_I18N } from 'modules/user/model/user.l10n'
import React from 'react'

interface UserCardProps {
    user: UserDto
}
export const UserCard: React.FC<UserCardProps> = ({ user }) => {
    return (
        <div>
            <h4>{t(USER_ROLE_I18N[user.role])}</h4>
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
    )
}
