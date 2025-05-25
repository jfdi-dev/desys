import type { Meta, StoryObj } from "@storybook/react";

import NavButton from "../button/NavButton";

const meta: Meta<typeof NavButton> = {
  title: "Button/NavButton",
  component: NavButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof NavButton>;

export const Infrastructure: Story = {
  args: {
    label: "Infrastructure",
    glow: "var(--infrastructure-edge)",
  },
};

export const Pipeline: Story = {
  args: {
    label: "Pipeline",
    glow: "var(--pipeline-edge)",
  },
};

export const Application: Story = {
  args: {
    label: "Application",
    glow: "var(--application-edge)",
  },
};
