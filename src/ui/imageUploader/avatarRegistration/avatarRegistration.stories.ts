// components/AvatarRegistration/AvatarRegistration.stories.tsx

import type { Meta, StoryObj } from '@storybook/react-vite'; // Убедись, что версия Storybook соответствует проекту
import { AvatarRegistration } from './avatarRegistration'; // Импортируем компонент

// Объявление метаданных для истории
const meta: Meta = {
    title: 'imageUploader/Avatar Registration', // Категория и название компонента
    component: AvatarRegistration,
    tags: ['autodocs'], // Включаем автоматическое документирование
    parameters: {
        layout: 'centered' // Центрируем компонент на странице
    }
};

export default meta;

// Тип для историй
type Story = StoryObj<typeof meta>;

// Основная история компонента
export const StoryAvatarRegistration: Story = {};
