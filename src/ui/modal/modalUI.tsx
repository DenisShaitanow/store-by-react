import { memo, useEffect } from 'react';
import ReactDOM from 'react-dom';
import type { FC } from 'react';
import type { TModalUIProps } from './type';
import { ModalOverlayUI } from '../modal-overlay';
import styles from './modalUI.module.css';

const modalRoot = document.getElementById('modals');

if (!modalRoot) {
    throw new Error('Container with id "modals" was not found!');
}

export const ModalUI: FC<TModalUIProps> = memo(({ onClose, children }) => {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            e.key === 'Escape' && onClose();
        };

        document.addEventListener('keydown', handleEsc);
        return () => {
            document.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);

    return ReactDOM.createPortal(
        <>
            <div className={styles.modal} data-cy="modalUI">
                {children}
            </div>
            <ModalOverlayUI onClose={onClose} />
        </>,
        modalRoot as HTMLDivElement
    );
});
