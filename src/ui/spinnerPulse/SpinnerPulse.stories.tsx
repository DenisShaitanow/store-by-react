import type { Meta, StoryObj } from "@storybook/react-vite";

import { SpinnerPulse } from "./SpinnerPulse";

const meta: Meta<typeof SpinnerPulse> = {
  title: "UI/SpinnerPulse",
  component: SpinnerPulse,
};

export default meta;

type Story = StoryObj<typeof SpinnerPulse>;

export const DefaultSpinner: Story = {};
