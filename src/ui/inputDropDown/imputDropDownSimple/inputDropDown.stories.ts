// InputDropDown.stories.tsx

import type { Meta, StoryObj } from "@storybook/react-vite";
import { InputDropDown } from "./inputDropDown";
import type { InputDropDownProps } from "./type";

// Метаданные для истории
const meta: Meta<InputDropDownProps> = {
  title: "Forms/InputDropDown",
  component: InputDropDown,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;

// Тип для каждой отдельной истории
type Story = StoryObj<InputDropDownProps>;

// Общая группа обязательных аргументов
const baseArguments: InputDropDownProps = {
  options: [
    { value: "1", label: "Option One" },
    { value: "2", label: "Option Two" },
    { value: "3", label: "Option Three" },
  ],
  withInput: true,
  onChangeOption: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    event.preventDefault();
    console.log("Changed:", event);
  },
  placeholder: "Select an option",
  id: "idinput",
  title: "Select",
};

// Основная история (первичный сценарий использования)
export const Primary: Story = {
  args: {
    ...baseArguments,
  },
};

// Сценарий с предустановленным значением
export const WithInitialValue: Story = {
  args: {
    ...baseArguments,
    value: "2",
  },
};

// Сценарий с сообщением об ошибке
export const WithError: Story = {
  args: {
    ...baseArguments,
    error: "Please choose an option!",
  },
};

// Сценарий с дополнительным классом
export const WithAdditionalClass: Story = {
  args: {
    ...baseArguments,
    className: "my-custom-class",
  },
};

// Сценарий с длинными названиями опций
export const LongLabels: Story = {
  args: {
    ...baseArguments,
    options: [
      {
        value: "1",
        label: "Very long option one that wraps onto multiple lines",
      },
      { value: "2", label: "Another very long option two" },
      { value: "3", label: "Third extremely long option three" },
    ],
  },
};

// Сценарий с большим количеством опций
export const ManyOptions: Story = {
  args: {
    ...baseArguments,
    options: Array.from({ length: 20 }).map((_, i) => ({
      value: String(i + 1),
      label: `Option ${i + 1}`,
    })),
  },
};
