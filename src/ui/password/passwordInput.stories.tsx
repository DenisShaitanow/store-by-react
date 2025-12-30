import type { Meta, StoryObj } from "@storybook/react-vite";

import { PasswordInputUI } from "./passwordInput";

const meta: Meta<typeof PasswordInputUI> = {
  title: "ui/PasswordInput",
  component: PasswordInputUI,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PasswordInputUI>;

//инпут пароля на странице регистрации - до начала ввода
export const PasswordInputRegisterPage0: Story = {
  args: {
    page: "register",
    value: "",
  },
};

//инпут пароля на странице регистрации - введено 4 символа
export const PasswordInputRegisterPage4: Story = {
  args: {
    page: "register",
    value: "Чер5",
  },
};

//инпут пароля на странице регистрации - введено 8 символов
export const PasswordInputRegisterPage8: Story = {
  args: {
    page: "register",
    value: "Чер5носл",
  },
};

//инпут пароля на странице входа - до начала ввода
export const PasswordInputLoginPage0: Story = {
  args: {
    page: "login",
    value: "",
  },
};

//инпут пароля на странице входа - пароль введен
export const PasswordInputLoginPage: Story = {
  args: {
    page: "login",
    value: "Чер5нослив",
  },
};

//инпут пароля на странице входа - ошибка ввода
export const PasswordInputLoginPageError: Story = {
  args: {
    page: "login",
    value: "Чер5нослив",
    error: true,
    errorText: "Пароль введен неверно",
  },
};
