import type { Meta, StoryObj } from "@storybook/react-vite";
import AboutPage from "./AboutPage";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof AboutPage> = {
  title: "Pages/AboutPage",
  component: AboutPage,
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
type Story = StoryObj<typeof AboutPage>;

export const example: Story = {};
