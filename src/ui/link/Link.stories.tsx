import type { Meta, StoryObj } from '@storybook/react-vite';
import { Link } from './Link';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof Link> = {
    title: 'Shared/Link',
    component: Link,
    decorators: [
        Story => (
            <MemoryRouter>
                <Story />
            </MemoryRouter>
        )
    ],
    args: {
        children: 'Example link',
        variant: 'primary'
    }
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Internal: Story = {
    args: {
        to: '/about',
        external: false
    }
};

export const External: Story = {
    args: {
        href: 'https://google.com',
        external: true
    }
};

export const Secondary: Story = {
    args: {
        to: '/profile',
        external: false,
        variant: 'secondary'
    }
};

export const Inline: Story = {
    args: {
        href: 'https://openai.com',
        external: true,
        variant: 'inline'
    }
};

export const Disabled: Story = {
    args: {
        to: '/',
        external: false,
        disabled: true
    }
};
