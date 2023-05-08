import type { Meta, StoryObj } from "@storybook/react";
import Button from "./index";

const meta = {
  title: "components/Button",
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const loginButton: Story = {
  args: {
    className: "login-btn",
    icon: <i className="fa fa-lock"></i>,
    children: "Sign In",
  },
};
export const primaryButton: Story = {
  args: {
    className: "btn primary",
    children: "Sign In",
  },
};
export const sucessButton: Story = {
  args: {
    className: "btn success",
    children: "Sign In",
  },
};

export const sucessLgButton: Story = {
  args: {
    className: "btn lg success",
    children: "Sign In",
  },
};
