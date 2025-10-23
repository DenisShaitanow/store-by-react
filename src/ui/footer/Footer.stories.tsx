import type { Meta, StoryObj } from '@storybook/react-vite';
import { Footer } from './Footer';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof Footer> = {
    title: 'shared/Footer',
    component: Footer,
    decorators: [
        Story => (
            <MemoryRouter>
                <Story />
            </MemoryRouter>
        )
    ]
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {};
