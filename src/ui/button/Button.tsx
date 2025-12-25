import styles from './Button.module.css';
import type { ButtonProps } from './type';

export const ButtonUI = ({
    label,
    onClick,
    className,
    type = 'button',
    secondary = false,
    tertiary = false,
    disabled = false,
    // нужно чтобы отображался svg в кнопке закрыть хидера
    children,
    dataCy
}: ButtonProps) => (
    <button
        data-cy={dataCy}
        type={type}
        disabled={disabled}
        className={`
        ${styles.button} 
        ${className ?? ''} 
        ${secondary ? styles.secondary : ''} 
        ${tertiary ? styles.tertiary : ''}
        `}
        onClick={onClick}
    >
        {label}
        {/* нужно чтобы отображался svg в кнопке закрыть хидера */}
        {children}
    </button>
);
