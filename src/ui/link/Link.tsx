import styles from './Link.module.css';
import { Link as RouterLink } from 'react-router-dom';
import type { FC } from 'react';
import type { TProps } from './type';

export const Link: FC<TProps> = props => {
    const { children, className, variant = 'primary', disabled } = props;

    const classes = `${styles.link} ${styles[variant]}${disabled ? ` ${styles.disabled}` : ''}${className ? ` ${className}` : ''}`;

    if ('to' in props && !props.external) {
        return (
            <RouterLink to={props.to} className={classes}>
                {children}
            </RouterLink>
        );
    }

    if ('href' in props && props.external) {
        const { href, target = '_blank', rel = 'noopener noreferrer' } = props;
        return (
            <a href={href} className={classes} target={target} rel={rel}>
                {children}
            </a>
        );
    }

    return null;
};
