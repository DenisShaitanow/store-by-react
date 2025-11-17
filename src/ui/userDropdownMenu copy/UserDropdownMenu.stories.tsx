import type { Meta, StoryObj } from '@storybook/react-vite';
import { UserDropdownMenu } from './UserDropdownMenu';

const meta: Meta<typeof UserDropdownMenu> = {
    title: 'Shared/UserDropdownMenu',
    component: UserDropdownMenu,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    'Dropdown меню пользователя с аватаром, именем и действиями'
            }
        }
    },
    tags: ['autodocs'],
    argTypes: {
        placement: {
            control: 'select',
            options: ['bottom-left', 'bottom-right', 'top-left', 'top-right']
        }
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

const mockAction = (actionName: string) => () => {
    console.log(`${actionName} clicked`);
};

export const Default: Story = {
    args: {
        user: {
            nameUser: 'Мария',
            avatarUrl: 'https://i.pravatar.cc/64?img=1'
        },
        onPersonalCabinetClick: mockAction('Личный кабинет'),
        onLogoutClick: mockAction('Выйти из аккаунта'),
        placement: 'bottom-right'
    }
};

export const WithoutAvatar: Story = {
    args: {
        user: {
            nameUser: 'Алексей'
        },
        onPersonalCabinetClick: mockAction('Личный кабинет'),
        onLogoutClick: mockAction('Выйти из аккаунта'),
        placement: 'bottom-right'
    }
};

export const LongName: Story = {
    args: {
        user: {
            nameUser: 'Ярослав',
            avatarUrl:
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
        },
        onPersonalCabinetClick: mockAction('Личный кабинет'),
        onLogoutClick: mockAction('Выйти из аккаунта'),
        placement: 'bottom-right'
    }
};

export const Disabled: Story = {
    args: {
        user: {
            nameUser: 'Елена',
            avatarUrl:
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'
        },
        onPersonalCabinetClick: mockAction('Личный кабинет'),
        onLogoutClick: mockAction('Выйти из аккаунта'),
        placement: 'bottom-right',
        disabled: true
    }
};
