import type { Meta, StoryObj } from "@storybook/react";

import ColorTreatment from "../swatch/color-treatment";

const meta: Meta<typeof ColorTreatment> = {
  title: "Swatch/ColorTreatment",
  component: ColorTreatment,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
  },
};
export default meta;

type Story = StoryObj<typeof ColorTreatment>;

export const PrimaryManual: Story = {
  args: {
    color: "#4cdf60",
    tints: ["#56ff78"],
    shades: ["#3aac4a", "#287934", "#17451e", "#051107"],
  },
};

export const SecondaryManual: Story = {
  args: {
    color: "#65d5ff",
    tints: [],
    shades: ["#50aacc", "#3c7f99", "#285465", "#132931"],
  },
};

export const TertiaryManual: Story = {
  args: {
    color: "#fdd9f9",
    tints: [],
    shades: [
      "#f2cde9",
      "#caadc6",
      "#bfa1b7",
      "#8c7686",
      "#7f6b79",
      "#4c4048",
      "#181517",
    ],
  },
};

export const PrimaryAutomatic: Story = {
  args: {
    color: "#4cdf60",
    autogenerate: true,
  },
};

export const SecondaryAutomatic: Story = {
  args: {
    color: "#65d5ff",
    autogenerate: true,
  },
};

export const TertiaryAutomatic: Story = {
  args: {
    color: "#fdd9f9",
    autogenerate: true,
  },
};
