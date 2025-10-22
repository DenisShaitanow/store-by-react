import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconButton } from './IconButton';

const meta = {
    title: 'UI/IconButton',
    component: IconButton,
    tags: ['autodocs'],
    parameters: { layout: 'centered' },
    argTypes: {
        type: {
            control: 'select',
            options: ['like', 'notification', 'share', 'more', 'theme']
        },
        themeMode: { control: 'inline-radio', options: ['light', 'dark'] },
        pressed: { control: 'boolean' },
        isLiked: { control: 'boolean' },
        hasNotification: { control: 'boolean' },
        ariaLabel: { control: 'text' },
        onClick: { action: 'clicked' }
    }
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LikeOff: Story = {
    args: { type: 'like', isLiked: false, ariaLabel: 'Поставить лайк' }
};

export const LikeOn: Story = {
    args: { type: 'like', isLiked: true, ariaLabel: 'Убрать лайк' }
};

export const NotificationEmpty: Story = {
    args: {
        type: 'notification',
        hasNotification: false,
        ariaLabel: 'Уведомления'
    }
};

export const NotificationHas: Story = {
    args: {
        type: 'notification',
        hasNotification: true,
        ariaLabel: 'Новые уведомления'
    }
};

export const Share: Story = {
    args: { type: 'share', ariaLabel: 'Поделиться' }
};

export const More: Story = {
    args: { type: 'more', ariaLabel: 'Ещё' }
};

export const ThemeLight: Story = {
    args: {
        type: 'theme',
        themeMode: 'light',
        ariaLabel: 'Сменить тему на тёмную'
    }
};

export const ThemeDark: Story = {
    args: {
        type: 'theme',
        themeMode: 'dark',
        ariaLabel: 'Сменить тему на светлую'
    }
};
