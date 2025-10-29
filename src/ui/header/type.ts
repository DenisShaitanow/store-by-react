// type.ts
import type { TUser } from '../../../entities/user/types';

export type THeaderUIProps = {
    isModal: boolean;
    isAuth: boolean;
    isNotification: boolean;
    user?: TUser;
    theme: 'light' | 'dark';
    //удалить потом
    navItems?: Array<{ label: string; href: string }>;
    onRegisterClick?: () => void;
    onLoginClick?: () => void;
    onLogoutClick?: () => void;
    handleCloseButtonClick?: () => void;
};
