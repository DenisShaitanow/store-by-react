import type { Meta, StoryObj } from "@storybook/react-vite";
import HomePage from "./HomePage";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof HomePage> = {
  title: "Pages/HomePage",
  component: HomePage,
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
type Story = StoryObj<typeof HomePage>;

export const example: Story = {};
