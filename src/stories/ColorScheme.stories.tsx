import type { Meta, StoryObj } from "@storybook/react";

import "./assets/color-scheme-story.css";

import ColorScheme from "../swatch/color-scheme";

const meta: Meta<typeof ColorScheme> = {
  title: "Swatch/ColorScheme",
  component: ColorScheme,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof ColorScheme>;

export const Light: Story = {
  args: {
    colors: {
      "application-edge": "#4cdf60",
      "application-surface": "#ccfcd2",
      "pipeline-edge": "#65d5ff",
      "pipeline-surface": "#cbf0ff",
      "infrastructure-edge": "#e274d6",
      "infrastructure-surface": "#fdd9f9",
      neutral: "#262626",
    },
  },
};

export const Dark: Story = {
  args: {
    colors: {
      "application-edge": "#15ff75",
      "application-surface": "#103915",
      "pipeline-edge": "#34f4ff",
      "pipeline-surface": "#19426a",
      "infrastructure-edge": "#c55eff",
      "infrastructure-surface": "#60275f",
      neutral: "#3a3a3a",
    },
  },
};
