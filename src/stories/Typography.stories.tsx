import type { Meta, StoryObj } from "@storybook/react";

import Logo from "../logo/full";
import NavBar from "../nav/NavBar";

const meta: Meta<typeof Logo> = {
  title: "Typography/Test",
  component: Logo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "80vw" }}>
        <Story />
        <h1>Welcome!</h1>
        <p>
          These docs contain all of the amazing information you will need to
          know about jfdi.
        </p>
        <NavBar />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof Logo>;

export const Test: Story = {
  args: {},
};
