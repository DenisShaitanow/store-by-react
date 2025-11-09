import type { Meta, StoryObj } from '@storybook/react-vite';

import { InputUI } from './Input';

const meta: Meta<typeof InputUI> = {
    title: 'ui/Input',
    component: InputUI,
    tags: ['autodocs'],
    args: {
        onChange: () => console.log('Input value has been changed')
    }
};

export default meta;

type Story = StoryObj<typeof InputUI>;

export const InputEmail: Story = {
    args: {
        title: 'Email',
        type: 'email',
        placeholder: 'Введите email',
        name: 'email'
    }
};

export const InputEmailError: Story = {
    args: {
        title: 'Email',
        type: 'email',
        placeholder: 'Введите email',
        name: 'email',
        value: 'petrov@mail.ru',
        error: true,
        errorText: 'Email уже используется'
    }
};

export const InputEmailEdit: Story = {
    args: {
        title: 'Email',
        type: 'email',
        placeholder: 'Введите email',
        name: 'email',
        withEditButton: true
    }
};

export const InputNameEdit: Story = {
    args: {
        title: 'Имя',
        type: 'text',
        placeholder: 'Введите ваше имя',
        name: 'name',
        value: 'Иван',
        withEditButton: true
    }
};

export const InputSkill: Story = {
    args: {
        title: 'Название навыка',
        type: 'text',
        placeholder: 'Введите название вашего навыка',
        name: 'skill'
    }
};

export const InputGender: Story = {
    args: {
        title: 'Пол',
        type: 'text',
        placeholder: 'Не указан',
        name: 'gender',
        halfSize: true
    }
};

// вид на странице профиля, но без иконки редактирования
export const InputGenderProfile: Story = {
    args: {
        title: 'Пол',
        type: 'text',
        placeholder: 'Не указан',
        name: 'gender',
        largeSize: true,
        halfSize: true
    }
};
