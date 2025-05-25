import type { Meta, StoryObj } from "@storybook/react";

import MainPage from "../page/main";

const meta: Meta<typeof MainPage> = {
  title: "Page/Main",
  component: MainPage,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => {
      window.addEventListener(
        "scroll",
        () => {
          document.body.style.setProperty(
            "--scroll",
            (
              window.pageYOffset /
              (document.body.offsetHeight - window.innerHeight)
            ).toString()
          );
        },
        false
      );
      return <Story />;
    },
  ],
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof MainPage>;

export const Full: Story = {
  args: {},
};
