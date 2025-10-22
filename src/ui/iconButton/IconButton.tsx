import styles from './IconButton.module.css';
import type { IconButtonProps, ThemeMode } from './types';

import NotificationIcon from '../assets/notification.svg?react';
import LikeIcon from '../assets/like.svg?react';
import ShareIcon from '../assets/share.svg?react';
import MoreSquareIcon from '../assets/more-square.svg?react';
import MoonIcon from '../assets/moon.svg?react';
import SunIcon from '../assets/sun.svg?react';

function pickIcon(type: IconButtonProps['type'], themeMode?: ThemeMode) {
    switch (type) {
        case 'like':
            return LikeIcon;
        case 'notification':
            return NotificationIcon;
        case 'share':
            return ShareIcon;
        case 'more':
            return MoreSquareIcon;
        case 'theme':
            return themeMode === 'light' ? SunIcon : MoonIcon;
        default:
            return ShareIcon;
    }
}

export const IconButton = (props: IconButtonProps) => {
    const {
        type,
        onClick,
        ariaLabel,
        pressed,
        className,
        disabled = false
    } = props;

    const computedAriaLabel =
        ariaLabel ??
        (type === 'like'
            ? 'isLiked' in props && props.isLiked
                ? 'Убрать лайк'
                : 'Поставить лайк'
            : type === 'notification'
              ? 'hasNotification' in props && props.hasNotification
                  ? 'Новые уведомления'
                  : 'Уведомления'
              : type === 'share'
                ? 'Поделиться'
                : type === 'more'
                  ? 'Ещё'
                  : type === 'theme'
                    ? props.themeMode === 'dark'
                        ? 'Сменить тему на светлую'
                        : 'Сменить тему на тёмную'
                    : 'Кнопка');

    const isToggle =
        type === 'like' || type === 'notification' || type === 'theme';

    const ariaPressed =
        typeof pressed === 'boolean'
            ? pressed
            : type === 'like'
              ? !!props.isLiked
              : type === 'notification'
                ? !!props.hasNotification
                : type === 'theme'
                  ? props.themeMode === 'dark'
                  : undefined;

    const IconComponent = pickIcon(
        type,
        type === 'theme' ? props.themeMode : undefined
    );

    const buttonClasses = [
        styles.button,
        type === 'like' ? styles.like : '',
        isToggle && ariaPressed ? styles.pressed : '',
        type === 'like' && 'isLiked' in props && props.isLiked
            ? styles.accent
            : '',
        className
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <button
            type="button"
            className={buttonClasses}
            aria-label={computedAriaLabel}
            {...(isToggle ? { 'aria-pressed': !!ariaPressed } : {})}
            onClick={onClick}
            disabled={disabled}
        >
            <IconComponent className={styles.icon} aria-hidden="true" />
            {type === 'notification' &&
                'hasNotification' in props &&
                props.hasNotification && (
                    <span
                        className={styles.notificationDot}
                        aria-hidden="true"
                    />
                )}
        </button>
    );
};
