import { UserRole } from 'api/pizza-store/user/user-client.types'
import { I18nKey, _ } from 'modules/core/i18n'

export const USER_ROLE_I18N: Record<UserRole, I18nKey> = {
    ADMIN: _('user:role.ADMIN'),
    CASHIER: _('user:role.CASHIER'),
    COURIER: _('user:role.COURIER'),
    CLIENT: _('user:role.CLIENT'),
}
