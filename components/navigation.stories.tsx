import type { Meta, StoryObj } from "@storybook/react";
import { Navigation } from "components/navigation";
import { SectionProvider } from "components/section-provider";
import { createRef } from "react";

const meta: Meta<typeof Navigation> = {
  title: "components/Navigation",
  component: Navigation,
  tags: ["autodocs"],
  args: {
    topLevelLinks: [
      {
        title: "API",
        href: "/",
      },
      {
        title: "Documentation",
        href: "#",
      },
      {
        title: "Support",
        href: "#",
      },
    ],
    pageLinkGroups: [
      {
        title: "Guides",
        links: [
          { title: "Introduction", href: "/" },
          { title: "Quickstart", href: "/quickstart" },
          { title: "SDKs", href: "/sdks" },
        ],
      },
    ],
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
type Story = StoryObj<typeof Navigation>;

export const Example: Story = {};
