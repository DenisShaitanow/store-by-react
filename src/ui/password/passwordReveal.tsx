import React from 'react';
import clsx from 'classnames';
import styles from './passwordReveal.module.css';
import { type RevealElementUIProps } from './type';

export const RevealElementUI: React.FC<RevealElementUIProps> = ({
    onClick,
    visible
}) => (
    <div className={styles.button_container}>
        <button
            className={clsx(styles.button, {
                [styles.button_visible]: visible
            })}
            type="button"
            onClick={onClick}
        />
    </div>
);
