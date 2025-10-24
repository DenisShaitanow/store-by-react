import type { Meta, StoryObj } from '@storybook/react-vite';

import { ProductCard } from './ProductCard';

const meta = {
    /* Название компонента и путь, по которому его нужно отобразить на витрине */
    title: 'UI/ProductCard',

    /* Передаём сам компонент */
    component: ProductCard,

    /* Тег autodocs просит Storybook сгенерировать отдельную историю с документацией компонента */
    tags: ['autodocs'],
    parameters: {
        /* Устанавливаем тёмный фон для всех историй из этого файла */
        backgrounds: {
            default: 'dark'
        }
    }

    /* satisfies помогает точнее определить тип */
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Open: Story = {
    /* Для React-компонентов args === props */
    args: {
        id: '989898989898',
        price: 1440,
        title: 'tovar',
        description: 'opisanie tovara',
        image: 'https://avatars.mds.yandex.net/i?id=7d70d03fbea1a0fd7673c9baf90ba4366aa12afb-7012253-images-thumbs&n=13',
        shortDescription: 'short opisaniekkkkkkkkkkk',
        category: 'Human',
    },
    parameters: {
        viewport: {
            customViewport: { width: 800, height: 600 } // Настройка собственного разрешения
        }
    }
};
