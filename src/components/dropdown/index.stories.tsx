import type { Meta, StoryObj } from "@storybook/react";
import DropDown from "./index";

const meta = {
  title: "components/DropDown",
  component: DropDown,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof DropDown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const dropDown: Story = {
  args: {
    placeholder: "Select Event Region",
    options: [
      { label: "Africa", value: "Africa" },
      { label: "Asia", value: "Asia" },
      { label: "Europe", value: "Europe" },
      { label: "North America", value: "North America" },
      { label: "Oceania", value: "Oceania" },
      { label: "South America", value: "South America" },
    ],
  },
};
