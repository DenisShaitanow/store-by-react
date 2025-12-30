// InputDropDown.stories.tsx

import type { Meta, StoryObj } from "@storybook/react-vite";
import { InputDropDownCalendar } from "./inputDropDownCalendar";
import type { InputDropDownCalendarProps } from "./type";

// Метаданные для истории
const meta: Meta<InputDropDownCalendarProps> = {
  title: "Forms/inputDropDownCalendar",
  component: InputDropDownCalendar,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;

// Тип для каждой отдельной истории
type Story = StoryObj<InputDropDownCalendarProps>;

// Общая группа обязательных аргументов
const baseArguments: InputDropDownCalendarProps = {
  onChangeDate: (val: Date | null) => {
    console.log("Changed:", val);
  },
  placeholder: "дд.мм.гггг",
  id: "idate",
  title: "Дата рождения",
};

// Основная история (первичный сценарий использования)
export const Primary: Story = {
  args: {
    ...baseArguments,
  },
};

// Сценарий с сообщением об ошибке
export const WithError: Story = {
  args: {
    ...baseArguments,
    error: "Please choose an option!",
  },
};
