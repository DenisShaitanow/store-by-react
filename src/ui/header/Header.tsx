import { Link } from 'react-router-dom';

import styles from './Header.module.css';

import CrossSvg from '../assets/cross.svg';
/*import ChevronDownSvg from '../assets/chevron-down.svg';*/

import type { THeaderUIProps } from './type';

import { ButtonUI } from '../button';
import { Logo } from '../logo';
import { IconButton } from '../iconButton';
/*import { SkillsListHeader } from '../skillsListHeader';*/
import { UserDropdownMenu } from '../userDropdownMenu';


export const HeaderUI = ({
    isModal,
    isAuth,
    isNotification,
    user,
    theme,
    onRegisterClick,
    onLoginClick,
    handleCloseButtonClick
}: THeaderUIProps) => {
    // по макету на шагах регистрации
    if (isModal)
        return (
            <div className={styles.header}>
                <Logo />
                <ButtonUI
                    className={styles.closeButton}
                    label="Закрыть"
                    onClick={handleCloseButtonClick}
                    tertiary
                >
                    <img src={CrossSvg} alt="Закрыть" />
                </ButtonUI>
            </div>
        );

    return (
        <div className={styles.header}>
            <Logo />
            <div className={styles.menu}>
                <Link to="profile/favorites" className={styles.link}>
                    О проекте
                </Link>
                
            </div>
            
            <div className={styles.toolbar}>
                <IconButton
                    type="theme"
                    themeMode={theme === 'dark' ? 'dark' : 'light'}
                    onClick={() => {
                        // Логика переключения темы, теоретическая
                    }}
                    aria-label="Переключить тему"
                />
                {isAuth && (
                    <>
                        <IconButton
                            type="notification"
                            hasNotification={isNotification}
                            onClick={() => {
                                // Логика открытия уведомлений будет реализована в родительском компоненте
                            }}
                            aria-label="Уведомления"
                        />
                        <Link to="profile/favorites">
                            <IconButton
                                type="like"
                                isLiked={false}
                                aria-label="Избранное"
                            />
                        </Link>
                    </>
                )}
            </div>
            {isAuth ? (
                <div className={styles.profile}>
                    <UserDropdownMenu
                        user={user}
                        onPersonalCabinetClick={() => {
                            // Навигация в личный кабинет
                        }}
                        onLogoutClick={() => {
                            // Навигация
                        }}
                        placement="bottom-right"
                    />
                </div>
            ) : (
                <div>
                    <div className={styles.authButtons_container}>
                        <ButtonUI
                            className={styles.loginButton}
                            label="Войти"
                            onClick={onLoginClick}
                            secondary
                        />
                        <ButtonUI
                            className={styles.registerButton}
                            label="Зарегистрироваться"
                            onClick={onRegisterClick}
                            secondary={false}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};
