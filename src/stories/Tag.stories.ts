import type { Meta, StoryObj } from "@storybook/react";

import Tag from "@/components/Tag";

const meta = {
  title: "COMPONENTS/Tag",
  component: Tag,
  // tags: ["autodocs"],
  argTypes: {
    label: {
      description: "텍스트 노출",
      table: {
        defaultValue: {
          summary: "",
        },
      },
    },
    stroke: {
      description: "선 사용 여부",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    theme: {
      description: "컬러 값 지정",
      control: {
        type: "select",
      },
      options: [
        "white",
        "lightGray",
        "gray",
        "brown",
        "orange",
        "yellow",
        "green",
        "blue",
        "purple",
        "pink",
        "red",
      ],
      table: {
        type: {
          summary:
            "white|lightGray|gray|brown|orange|yellow|green|blue|purple|pink|red",
        },
        defaultValue: {
          summary: "white",
        },
      },
    },
    size: {
      description: "사이즈",
      table: {
        defaultValue: {
          summary: "small",
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Tag",
    stroke: true,
    theme: "white",
    size: "small",
  },
};
