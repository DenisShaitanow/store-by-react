import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";
import { HeaderUI } from "./Header";
import type { THeaderUIProps } from "./type"; // Убедитесь, что этот тип доступен

export type TUser = {
  userId: number;
  avatarUrl: string;
  name: string;
  location: string;
  birthdayDate: string;
  gender: "Мужской" | "Женский";
  createdAt: string;
  about: string;
  email: string;
  likes?: number;
};

const meta: Meta<typeof HeaderUI> = {
  title: "UI/Header",
  component: HeaderUI,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof HeaderUI>;

// Вспомогательная функция для отображения компонента с обработкой роутов
const HeaderWithState = (args: THeaderUIProps) => {
  return (
    <MemoryRouter>
      <HeaderUI
        {...args}
        onRegisterClick={() => alert("Кнопка регистрации")}
        onLoginClick={() => alert("Кнопка логина")}
        onLogoutClick={() => alert("Кнопка выхода")}
        handleCloseButtonClick={() => alert("Кнопка закрытия")}
      />
    </MemoryRouter>
  );
};

// Экспорт базовой истории с начальным состоянием
export const Primary: Story = {
  render: (args: THeaderUIProps) => <HeaderWithState {...args} />,
  args: {
    isModal: false,
    isAuth: true,
    isNotification: true,
    user: {
      userId: 1,
      avatarUrl: "https://example.com/image.png",
      name: "Иван Иванов",
      location: "Москва",
      birthdayDate: "1991-11-15",
      gender: "Мужской",
      createdAt: "2025-02-03",
      about: "Музыкант, играю на барабанах",
      email: "ivan@musician.ru",
    },
    theme: "dark",
  },
};
