import type { Meta, StoryObj } from "@storybook/react-vite";

import { Spinner } from "./Spinner";

const meta: Meta<typeof Spinner> = {
  title: "UI/Spinner",
  component: Spinner,
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const DefaultSpinner: Story = {
  args: {
    size: 50,
    borderColor: "#d1d2d6 #9fa0a5 #626368 #1a1b22",
  },
  render: (args) => <Spinner {...args} />,
};

export const LargeSpinner: Story = {
  args: {
    ...DefaultSpinner.args,
    size: 100,
  },
  render: (args) => <Spinner {...args} />,
};

export const CustomColorSpinner: Story = {
  args: {
    ...DefaultSpinner.args,
    borderColor: "#FF0000 #00FF00 #0000FF #FFFF00",
  },
  render: (args) => <Spinner {...args} />,
};
