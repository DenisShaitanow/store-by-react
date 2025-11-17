import { Link, useNavigate } from 'react-router-dom';

import styles from './Header.module.css';

import CrossSvg from '../assets/cross.svg';

import type { THeaderUIProps } from './type';

import { ButtonUI } from '../button';
import { Logo } from '../logo';
import { IconButton } from '../iconButton';
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
    const navigate = useNavigate();

    function handleClickLogo() {
        navigate('/');
    }

    if (isModal)
        return (
            <div className={styles.header}>
                <div className={styles.logoContainer} onClick={handleClickLogo}><Logo /></div>
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
            <div className={styles.logoContainer} onClick={handleClickLogo}><Logo /></div>
            <div className={styles.menu}>
                <Link to="about" className={styles.link}>
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
                        user={{nameUser: user.name || '', avatarUrl: URL.createObjectURL(user.avatarURl) || ''}}

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
