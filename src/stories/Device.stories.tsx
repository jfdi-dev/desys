import type { Meta, StoryObj } from "@storybook/react";

import Device from "../device/full";

const meta: Meta<typeof Device> = {
  title: "Device/Layer",
  component: Device,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    surfaceColor: { control: "color" },
    edgeColor: { control: "color" },
  },
};
export default meta;

type Story = StoryObj<typeof Device>;

export const Test: Story = {
  args: {},
};
