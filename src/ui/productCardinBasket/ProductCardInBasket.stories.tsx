import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";

import ProductCardInBasket from "./ProductCardInBasket";

const meta = {
  /* Название компонента и путь, по которому его нужно отобразить на витрине */
  title: "UI/ProductCardInBasket",

  /* Передаём сам компонент */
  component: ProductCardInBasket,

  /* Тег autodocs просит Storybook сгенерировать отдельную историю с документацией компонента */
  tags: ["autodocs"],
  parameters: {
    /* Устанавливаем тёмный фон для всех историй из этого файла */
    backgrounds: {
      default: "dark",
    },
  },

  /* satisfies помогает точнее определить тип */
} satisfies Meta<typeof ProductCardInBasket>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Open: Story = {
  /* Для React-компонентов args === props */
  args: {
    id: "898989898",
    price: 15000,
    title: "Рубашка",
    description:
      "Классическая мужская рубашкаlllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll.",
    image:
      "https://avatars.mds.yandex.net/i?id=eb6c5690d507b07c6a3551c0241ddc588f9eb2b5-5858707-images-thumbs&n=13",
    shortDescription:
      "Стильный образ.lllllllllllllllllllllllllllllllllllllllllllllllyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy  yyyyyyyyyyyyyyyyyyyyyyyyyyy yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
    category: "t-shirts",
    sex: "man",
    isLiked: false,
  },

  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};
