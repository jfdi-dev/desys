import type { Meta, StoryObj } from "@storybook/react";

import DeviceLayer from "../device/layer";

const meta: Meta<typeof DeviceLayer> = {
  title: "Device/Layer",
  component: DeviceLayer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    //backgroundColor: { control: "color" },
    surfaceColor: { control: "color" },
    edgeColor: { control: "color" },
  },
  decorators: [
    (Story) => (
      <svg>
        <Story />
      </svg>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof DeviceLayer>;

export const Green: Story = {
  args: {
    surfaceColor: "#103915",
    edgeColor: "#15ff75",
    glowDistance: 5,
  },
};

export const Blue: Story = {
  args: {
    surfaceColor: "#19426a",
    edgeColor: "#34f4ff",
    glowDistance: 5,
  },
};

export const Purple: Story = {
  args: {
    surfaceColor: "#60275f",
    edgeColor: "#c55eff",
    glowDistance: 5,
  },
};
