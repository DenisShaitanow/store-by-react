export type IconButtonType =
    | 'like'
    | 'notification'
    | 'share'
    | 'more'
    | 'theme';

export type ThemeMode = 'light' | 'dark';

export type IconButtonBaseProps = {
    type: IconButtonType;
    onClick?: () => void;
    ariaLabel?: string;
    pressed?: boolean;
    className?: string;
    disabled?: boolean;
};

export type LikeProps = {
    type: 'like';
    isLiked?: boolean;
} & IconButtonBaseProps;

export type NotificationProps = {
    type: 'notification';
    hasNotification?: boolean;
} & IconButtonBaseProps;

export type ShareProps = {
    type: 'share';
} & IconButtonBaseProps;

export type MoreProps = {
    type: 'more';
} & IconButtonBaseProps;

export type ThemeProps = {
    type: 'theme';
    themeMode: ThemeMode; // 'light' -> sun, 'dark' -> moon
} & IconButtonBaseProps;

export type IconButtonProps =
    | LikeProps
    | NotificationProps
    | ShareProps
    | MoreProps
    | ThemeProps;
