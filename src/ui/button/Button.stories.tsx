import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonUI } from "./Button";

const meta: Meta<typeof ButtonUI> = {
  title: "UI/Button",
  component: ButtonUI,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
    type: {
      control: "select",
      options: ["button", "submit", "reset"],
    },
    secondary: { control: "boolean" },
    tertiary: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof ButtonUI>;

export const Primary: Story = {
  args: {
    label: "Основная кнопка",
    type: "button",
    secondary: false,
    tertiary: false,
  },
};

export const Secondary: Story = {
  args: {
    label: "Второстепенная",
    type: "button",
    secondary: true,
    tertiary: false,
  },
};

export const Tertiary: Story = {
  args: {
    label: "Смотреть все",
    type: "button",
    secondary: false,
    tertiary: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Недоступная кнопка",
    type: "button",
    secondary: false,
    tertiary: false,
    disabled: true,
  },
};
