import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router-dom';
import RegistrationPage from './registration';

const meta: Meta<typeof RegistrationPage> = {
    title: 'pages/RegistrationPage',
    component: RegistrationPage,
    tags: ['autodocs'],
    decorators: [
        Story => (
            <MemoryRouter>
                <Story />
            </MemoryRouter>
        )
    ]
    
};

export default meta;

type Story = StoryObj<typeof RegistrationPage>;

export const Default: Story = {
   
};