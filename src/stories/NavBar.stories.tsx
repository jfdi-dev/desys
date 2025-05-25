import type { Meta, StoryObj } from "@storybook/react";

import NavBar from "../nav/NavBar";

const meta: Meta<typeof NavBar> = {
  title: "Nav/NavBar",
  component: NavBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof NavBar>;

export const Nav: Story = {
  args: {},
};
