import type { Meta, StoryObj } from "@storybook/react";
import LinkButton from ".";

const meta = {
  title: "LinkButton",
  component: LinkButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { href: "/" },
} satisfies Meta<typeof LinkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "/",
    children: "test",
  },
};
export const Large: Story = {
  args: {
    href: "/",
    size: "large",
    children: "test",
  },
};
