import type { ReactNode, HTMLAttributes } from 'react';

export type TModalUIProps = {
    onClose: () => void;
    children?: ReactNode;
} & HTMLAttributes<HTMLElement>;
