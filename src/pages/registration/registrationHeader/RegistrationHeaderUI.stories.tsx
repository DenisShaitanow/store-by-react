import type { Meta, StoryObj } from '@storybook/react-vite';

import { RegistrationHeaderUI } from './RegistrationHeaderUI';

const meta: Meta<typeof RegistrationHeaderUI> = {
    title: 'feature/registration/RegistrationHeader',
    component: RegistrationHeaderUI,
    tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof RegistrationHeaderUI>;

export const RegistrationHeader: Story = {
    args: {
        onClose: () => {
            console.log('Страница регистрации закрывается');
        }
    }
};
