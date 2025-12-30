import type { Meta, StoryObj } from "@storybook/react-vite";
import CardPage from "./CardPage";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof CardPage> = {
  title: "Pages/CardPage",
  component: CardPage,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  args: {
    children: "Example link",
    variant: "primary",
  },
};

export default meta;
type Story = StoryObj<typeof CardPage>;

export const example: Story = {};
