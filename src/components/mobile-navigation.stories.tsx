import type { Meta, StoryObj } from "@storybook/react";
import { createRef } from "react";
import { MobileNavigation } from "~/components/mobile-navigation";
import { SectionProvider } from "~/components/section-provider";

const meta: Meta<typeof MobileNavigation> = {
  title: "components/MobileNavigation",
  component: MobileNavigation,
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
type Story = StoryObj<typeof MobileNavigation>;

export const Example: Story = {};
