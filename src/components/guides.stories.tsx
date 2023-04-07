import type { Meta, StoryObj } from "@storybook/react";
import { createRef } from "react";
import { Guide, Guides } from "~/components/guides";
import { SectionProvider } from "~/components/section-provider";

const meta: Meta<typeof Guides> = {
  title: "components/Guides",
  component: Guides,
  tags: ["autodocs"],
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
type Story = StoryObj<typeof Guides>;

export const Example: Story = {
  args: {
    children: (
      <>
        <Guide
          href="/authentication"
          name="Authentication"
          description="Learn how to authenticate your API requests."
        />

        <Guide
          href="/pagination"
          name="Pagination"
          description="Understand how to work with paginated responses."
        />

        <Guide
          href="/errors"
          name="Errors"
          description="Read about the different types of errors returned by the API."
        />

        <Guide
          href="/webhooks"
          name="Webhooks"
          description="Learn how to programmatically configure webhooks for your app."
        />
      </>
    ),
  },
};
