import React from 'react';
import type { Meta, StoryFn } from '@storybook/react-vite';
import { SearchInput } from './SearchInput';

const meta = {
    title: 'shared/ui/SearchInput',
    component: SearchInput
} satisfies Meta<typeof SearchInput>;

export default meta;

const options = [
    { id: '1', label: 'Маркетинг и реклама' },
    { id: '2', label: 'Продажи и переговоры' },
    { id: '3', label: 'Личный бренд' },
    { id: '4', label: 'Резюме и собеседование' },
    { id: '5', label: 'Тайм-менеджмент' },
    { id: '6', label: 'Проектное управление' },
    { id: '7', label: 'Предпринимательство' },
    { id: '8', label: 'Английский' },
    { id: '9', label: 'Французский' },
    { id: '10', label: 'Испанский' },
    { id: '11', label: 'Немецкий' },
    { id: '12', label: 'Китайский' },
    { id: '13', label: 'Японский' },
    { id: '14', label: 'Подготовка к экзаменам (IELTS, TOEFL)' },
    { id: '15', label: 'Уборка и организация' },
    { id: '16', label: 'Домашние финансы' },
    { id: '17', label: 'Приготовление еды' },
    { id: '18', label: 'Домашние растения' },
    { id: '19', label: 'Ремонт' },
    { id: '20', label: 'Хранение вещей' },
    { id: '21', label: 'Рисование и иллюстрация' },
    { id: '22', label: 'Фотография' },
    { id: '23', label: 'Видеомонтаж' },
    { id: '24', label: 'Музыка и звук' },
    { id: '25', label: 'Актёрское мастерство' },
    { id: '26', label: 'Креативное письмо' },
    { id: '27', label: 'Арт-терапия' },
    { id: '28', label: 'Декор и DIY' },
    { id: '29', label: 'Личностное развитие' },
    { id: '30', label: 'Навыки обучения' },
    { id: '31', label: 'Когнитивные техники' },
    { id: '32', label: 'Скорочтение' },
    { id: '33', label: 'Навыки преподавания' },
    { id: '34', label: 'Коучинг' },
    { id: '35', label: 'Йога и медитация' },
    { id: '36', label: 'Питание и ЗОЖ' },
    { id: '37', label: 'Ментальное здоровье' },
    { id: '38', label: 'Осознанность' },
    { id: '39', label: 'Физические тренировки' },
    { id: '40', label: 'Сон и восстановление' },
    { id: '41', label: 'Баланс жизни и работы' }
];

const Template: StoryFn<typeof SearchInput> = args => {
    const [value, setValue] = React.useState('');

    return (
        <div>
            <SearchInput {...args} value={value} onChange={setValue} />
        </div>
    );
};

export const Default = Template.bind({});
Default.args = {
    placeholder: 'Введите навык',
    options,
    onSelect: option => {
        console.log('Выбран элемент:', option);
    }
};
