import type { Meta, StoryObj } from "@storybook/react";

import ColorSwatch from "../swatch/color";

const meta: Meta<typeof ColorSwatch> = {
  title: "Swatch/Color",
  component: ColorSwatch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
  },
};
export default meta;

type Story = StoryObj<typeof ColorSwatch>;

export const Test: Story = {
  args: {
    color: "#15ff75",
  },
};
