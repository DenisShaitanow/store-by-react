import type { Meta, StoryObj } from "@storybook/react-vite";

import { ModalUI } from "./modalUI";

const meta = {
  /* Название компонента и путь, по которому его нужно отобразить на витрине */
  title: "UI/modalUI",

  /* Передаём сам компонент */
  component: ModalUI,

  /* Тег autodocs просит Storybook сгенерировать отдельную историю с документацией компонента */
  tags: ["autodocs"],
  parameters: {
    /* Устанавливаем тёмный фон для всех историй из этого файла */
    backgrounds: {
      default: "dark",
    },
  },

  /* satisfies помогает точнее определить тип */
} satisfies Meta<typeof ModalUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Open: Story = {
  /* Для React-компонентов args === props */
  args: {
    // Функция закрытия модального окна
    onClose: () => console.log("Модальное окно закрыто"),

    // Содержимое модального окна
    children: <p>Пример текста внутри модального окна.</p>,
  },
  parameters: {
    viewport: {
      customViewport: { width: 800, height: 600 }, // Настройка собственного разрешения
    },
  },
};
