import type { Meta, StoryObj } from "@storybook/react";

import Input from "@/components/Input";

const meta = {
  title: "COMPONENTS/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
