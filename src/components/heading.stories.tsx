import type { Meta, StoryObj } from "@storybook/react";
import { createRef } from "react";
import { Heading } from "~/components/heading";
import { SectionProvider } from "~/components/section-provider";

const meta: Meta<typeof Heading> = {
  title: "components/Heading",
  component: Heading,
  tags: ["autodocs"],
  args: {
    level: 2,
    id: "lorem-ipsum",
    anchor: true,
    children: "Lorem ipsum",
  },
  decorators: [
    (Story) => (
      <SectionProvider
        sections={[
          {
            id: "section-1",
            title: "Lorem ipsum",
            tag: "tag",
            headingRef: createRef(),
            offsetRem: 0,
          },
        ]}
      >
        <Story />
      </SectionProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Anchor: Story = {};

export const WithTagAndLabel: Story = {
  args: {
    tag: "DELETE",
    label: "/v1/stories/:id",
  },
};
