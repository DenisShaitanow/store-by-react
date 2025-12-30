import type { Meta, StoryObj } from "@storybook/react-vite";
import { ExpandableList } from "./ExpandableList";

// Моковые элементы для демонстрации
const createListItems = (count: number, prefix: string = "Элемент") =>
  Array.from({ length: count }, (_, i) => (
    <div
      key={i}
      style={{
        padding: "12px 16px",
        backgroundColor: "#f8f9fa",
        borderRadius: "4px",
        marginBottom: "4px",
        border: "1px solid #e9ecef",
      }}
    >
      {prefix} {i + 1}
    </div>
  ));

const meta = {
  title: "UI/ExpandableList",
  component: ExpandableList,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Универсальный компонент для отображения списка с возможностью раскрытия/сворачивания дополнительных элементов. Поддерживает любые React элементы, плавные анимации и кастомизацию.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "Массив React элементов для отображения",
      control: { type: "object" },
    },
    maxVisibleItems: {
      description: "Максимальное количество видимых элементов",
      control: { type: "number", min: 1, max: 10 },
    },
    showAllText: {
      description: 'Текст для кнопки "Показать все"',
      control: { type: "text" },
    },
    collapseText: {
      description: 'Текст для кнопки "Свернуть"',
      control: { type: "text" },
    },
    disableAnimation: {
      description: "Отключить анимации",
      control: { type: "boolean" },
    },
    onToggle: {
      description: "Колбэк при изменении состояния",
      action: "onToggle",
    },
  },
} satisfies Meta<typeof ExpandableList>;

export default meta;
type Story = StoryObj<typeof meta>;

// Базовая история
export const Default: Story = {
  args: {
    children: createListItems(8),
    maxVisibleItems: 3,
    showAllText: "Показать все",
    collapseText: "Свернуть",
  },
};
