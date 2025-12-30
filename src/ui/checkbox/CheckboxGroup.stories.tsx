import type { Meta, StoryObj } from "@storybook/react-vite";
import { type ChangeEvent, useState, useEffect } from "react";

import { CheckboxGroupUI } from "./CheckboxGroup";
import type { CheckboxGroupUIProps } from "./type";

const categoryList: string[] = [
  "Бизнес и карьера",
  "Творчество и искусство",
  "Иностранные языки",
  "Образование и развитие",
  "Здоровье и лайфстайл",
  "Дом и уют",
];

const subcategoryListHome: string[] = [
  "Уборка и организация",
  "Домашние финансы",
  "Приготовление еды",
  "Домашние растения",
  "Ремонт",
  "Хранение вещей",
];

const cities: string[] = [
  "Москва",
  "Санкт-Петербург",
  "Казань",
  "Новосибирск",
  "Екатеринбург",
];

const ControlledCheckboxGroup = (args: CheckboxGroupUIProps) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  useEffect(() => console.log(selectedItems), [selectedItems]);
  return (
    <CheckboxGroupUI
      {...args}
      fieldNames={subcategoryListHome}
      selectedItems={selectedItems}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        const selectedItem: string = e.target.id;
        if (selectedItems.includes(selectedItem)) {
          setSelectedItems((prevSelectedItems) =>
            [...prevSelectedItems].filter((item) => item !== selectedItem),
          );
        } else {
          setSelectedItems((prevSelectedItems) => [
            ...prevSelectedItems,
            selectedItem,
          ]);
        }
      }}
      withInDropdown
    />
  );
};

const meta: Meta<typeof CheckboxGroupUI> = {
  title: "UI/CheckboxGroup",
  component: CheckboxGroupUI,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CheckboxGroupUI>;

//группа чекбоксов с заголовком (категории)
export const CheckboxGroupCategory: Story = {
  args: {
    title: "Навыки",
    fieldNames: categoryList,
  },
};

//группа чекбоксов с заголовком (города), более высокие чекбоксы
export const CheckboxGroupCities: Story = {
  args: {
    title: "Город",
    fieldNames: cities,
    largeHeight: true,
  },
};

//группа чекбоксов без заголовка (для выпадающего меню)
export const CheckboxGroupSubategory: Story = {
  args: {
    fieldNames: subcategoryListHome,
    withInDropdown: true,
  },
};

//группа чекбоксов без заголовка (для выпадающего меню)
export const ControlledCheckboxes: Story = {
  render: (args) => <ControlledCheckboxGroup {...args} />,
};
