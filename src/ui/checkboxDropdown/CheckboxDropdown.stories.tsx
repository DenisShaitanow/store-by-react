/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { CheckboxDropdown } from "./CheckboxDropdown";

// Моковые данные
const skillCategories = [
  "Бизнес",
  "Творчество",
  "Языки",
  "Образование",
  "Здоровье и спорт",
  "Дом и быт",
  "Технологии",
];

const cities = [
  "Москва",
  "Санкт-Петербург",
  "Новосибирск",
  "Екатеринбург",
  "Нижний Новгород",
  "Казань",
  "Челябинск",
  "Омск",
  "Самара",
  "Ростов-на-Дону",
  "Уфа",
  "Красноярск",
  "Пермь",
  "Воронеж",
];

const businessSkills = [
  "Управление командой",
  "Маркетинг и реклама",
  "Продажи и переговоры",
  "Личный бренд",
  "Резюме и собеседование",
  "Тайм-менеджмент",
  "Проектное управление",
  "Предпринимательство",
  "Финансы и инвестиции",
  "Нетворкинг",
];

// Древовидная структура навыков
const skillsTree = [
  {
    value: "business",
    label: "Бизнес и карьера",
    children: [
      { value: "team-management", label: "Управление командой" },
      { value: "marketing", label: "Маркетинг и реклама" },
      { value: "sales", label: "Продажи и переговоры" },
      { value: "personal-brand", label: "Личный бренд" },
      { value: "resume", label: "Резюме и собеседование" },
      { value: "time-management", label: "Тайм-менеджмент" },
      { value: "project-management", label: "Проектное управление" },
      { value: "entrepreneurship", label: "Предпринимательство" },
    ],
  },
  {
    value: "creativity",
    label: "Творчество и искусство",
    children: [
      { value: "drawing", label: "Рисование и иллюстрация" },
      { value: "photography", label: "Фотография" },
      { value: "video-editing", label: "Видеомонтаж" },
      { value: "music-sound", label: "Музыка и звук" },
      { value: "acting", label: "Актерское мастерство" },
      { value: "creative-writing", label: "Креативное письмо" },
      { value: "art-therapy", label: "Арт-терапия" },
      { value: "decor-diy", label: "Декор и DIY" },
    ],
  },
  {
    value: "languages",
    label: "Иностранные языки",
    children: [
      { value: "english", label: "Английский" },
      { value: "french", label: "Французский" },
      { value: "spanish", label: "Испанский" },
      { value: "german", label: "Немецкий" },
      { value: "chinese", label: "Китайский" },
      { value: "japanese", label: "Японский" },
      {
        value: "exam-prep",
        label: "Подготовка к экзаменам (IELTS, TOEFL)",
      },
    ],
  },
];

const largeOptionsList = Array.from({ length: 50 }, (_, i) => `Опция ${i + 1}`);

const meta = {
  title: "UI/CheckboxDropdown",
  component: CheckboxDropdown,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Компонент выпадающего списка с множественным выбором через чекбоксы. Использует композицию из SearchInput, CheckboxGroup и Button. Поддерживает controlled/uncontrolled режимы и staticMode для фильтров.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    options: {
      description: "Массив строк - опции для выбора",
      control: { type: "object" },
    },
    selectedValues: {
      description: "Выбранные значения (controlled режим)",
      control: { type: "object" },
    },
    onChange: {
      description: "Callback при изменении выбранных значений",
      action: "onChange",
    },
    title: {
      description: "Заголовок для группы чекбоксов",
      control: { type: "text" },
    },
    enableSearch: {
      description: "Включить поиск по опциям",
      control: { type: "boolean" },
    },
    treeMode: {
      description: "Древовидный режим с подкатегориями",
      control: { type: "boolean" },
    },
    staticMode: {
      description: "Статичный режим для фильтров (без BaseDropdown)",
      control: { type: "boolean" },
    },
    disabled: {
      description: "Отключить компонент",
      control: { type: "boolean" },
    },
    placement: {
      description: "Позиционирование dropdown",
      control: { type: "select" },
      options: ["bottom-left", "bottom-right", "top-left", "top-right"],
    },
  },
} satisfies Meta<typeof CheckboxDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

// Базовая история
export const Default: Story = {
  args: {
    options: skillCategories,
    placeholder: "Выберите категории навыков",
  },
};

// Контролируемый режим
export const Controlled: Story = {
  render: (args) => {
    const [selectedValues, setSelectedValues] = useState<(string | number)[]>([
      0, 1,
    ]); // Бизнес, Творчество

    return (
      <CheckboxDropdown
        {...args}
        selectedValues={selectedValues}
        onChange={setSelectedValues}
      />
    );
  },
  args: {
    options: skillCategories,
    placeholder: "Категории навыков (controlled)",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Контролируемый режим с внешним управлением состоянием. Начальные значения установлены через selectedValues.",
      },
    },
  },
};

// С поиском
export const WithSearch: Story = {
  args: {
    options: cities,
    placeholder: "Выберите города",
    enableSearch: true,
    searchPlaceholder: "Поиск городов...",
    showAllText: "Все города",
    defaultSelectedValues: [0, 1],
  },
  parameters: {
    docs: {
      description: {
        story:
          "Режим с поиском для больших списков опций. Поиск работает по названию города.",
      },
    },
  },
};

// Отключенный
export const Disabled: Story = {
  args: {
    options: skillCategories,
    placeholder: "Недоступно для выбора",
    disabled: true,
    defaultSelectedValues: [0],
  },
  parameters: {
    docs: {
      description: {
        story: "Отключенное состояние компонента.",
      },
    },
  },
};

// Список
export const LargeList: Story = {
  args: {
    options: largeOptionsList,
    placeholder: "Выберите из множества опций",
    enableSearch: true,
    searchPlaceholder: "Найти опцию...",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Большой список опций с поиском и скроллом. Некоторые опции отключены.",
      },
    },
  },
};

// Статичный режим для фильтров
export const StaticMode: Story = {
  render: (args) => {
    const [selectedCities, setSelectedCities] = useState<(string | number)[]>([
      0, 1,
    ]); // Москва, Санкт-Петербург
    const [selectedSkills, setSelectedSkills] = useState<(string | number)[]>([
      0,
    ]); // Управление командой

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "300px",
        }}
      >
        <CheckboxDropdown
          {...args}
          options={cities.slice(0, 8)}
          title="Города"
          staticMode
          maxVisibleOptions={3}
          showAllText="Все города"
          collapseText="Свернуть"
          selectedValues={selectedCities}
          onChange={setSelectedCities}
        />

        <CheckboxDropdown
          {...args}
          options={businessSkills}
          title="Навыки"
          staticMode
          maxVisibleOptions={3}
          showAllText="все категории"
          collapseText="Свернуть"
          selectedValues={selectedSkills}
          onChange={setSelectedSkills}
        />
      </div>
    );
  },
  args: {
    options: [],
  },
  parameters: {
    docs: {
      description: {
        story:
          "Статичный режим для компонента фильтров - без BaseDropdown, с заголовками и кнопками показать все/свернуть.",
      },
    },
  },
};

// Древовидная структура
export const TreeMode: Story = {
  render: (args) => {
    const [selectedSkills, setSelectedSkills] = useState<(string | number)[]>([
      "team-management",
      "marketing",
    ]);

    return (
      <CheckboxDropdown
        {...args}
        options={skillsTree}
        placeholder="Выберите навыки"
        treeMode
        selectedValues={selectedSkills}
        onChange={setSelectedSkills}
      />
    );
  },
  args: {
    options: skillsTree,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Древовидная структура с подкатегориями. Поддерживает indeterminate состояние для родительских категорий.",
      },
    },
  },
};

// Режим фильтров комбинированный
export const FilterMode: Story = {
  render: (args) => {
    const [selectedValues, setSelectedValues] = useState<(string | number)[]>([
      0, 1,
    ]); // Москва, Санкт-Петербург

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <CheckboxDropdown
          {...args}
          options={cities}
          placeholder="Город"
          maxVisibleOptions={3}
          showAllText="Все города"
          collapseText="Свернуть"
          selectedValues={selectedValues}
          onChange={setSelectedValues}
        />

        <CheckboxDropdown
          {...args}
          options={businessSkills}
          placeholder="Навыки"
          maxVisibleOptions={3}
          showAllText="Все категории"
          collapseText="Свернуть"
          enableSearch
        />
      </div>
    );
  },
  args: {
    options: cities,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Комбинированный режим - dropdown с ограниченным списком и кнопкой "показать все/свернуть".',
      },
    },
  },
};
