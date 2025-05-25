import type { Meta, StoryObj } from "@storybook/react";

import Logo from "../logo/full";

const meta: Meta<typeof Logo> = {
  title: "Logo/Full",
  component: Logo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Logo>;

export const Test: Story = {
  args: {},
};
