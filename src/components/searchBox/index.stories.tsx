import type { Meta, StoryObj } from "@storybook/react";
import SearchBox from "./index";

const meta = {
  title: "components/SearchBox",
  component: SearchBox,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof SearchBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const searchBox: Story = {
  args: {
    placeholder: "Search",
    type: "text",
  },
};
