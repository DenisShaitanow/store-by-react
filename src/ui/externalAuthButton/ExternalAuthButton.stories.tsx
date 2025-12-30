import type { Meta, StoryObj } from "@storybook/react-vite";

import { ExternalAuthButton } from "./ExternalAuthButton";

import googleIconUrl from "../assets/google-icon.svg";
import appleIconUrl from "../assets/apple-icon.svg";

const meta: Meta<typeof ExternalAuthButton> = {
  title: "ExternalAuthButton",
  component: ExternalAuthButton,
};

export default meta;

type Story = StoryObj<typeof ExternalAuthButton>;

export const Google: Story = {
  args: {
    iconUrl: googleIconUrl,
    label: "Продолжить с Google",
    type: "button",
  },
  render: (args) => <ExternalAuthButton {...args} />,
};

export const Apple: Story = {
  args: {
    iconUrl: appleIconUrl,
    label: "Продолжить с Apple",
    type: "button",
  },
  render: (args) => <ExternalAuthButton {...args} />,
};
