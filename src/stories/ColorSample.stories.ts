import type { Meta, StoryObj } from "@storybook/react";

import ColorSample from "../swatch/color-sample";

const meta: Meta<typeof ColorSample> = {
  title: "Swatch/ColorSample",
  component: ColorSample,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    colors: { control: "object" },
  },
};
export default meta;

type Story = StoryObj<typeof ColorSample>;

export const Test: Story = {
  args: {
    colors: ["#4cdf60", "#56ff78", "#3aac4a", "#287934", "#17451e", "#051107"],
  },
};
