import type { Meta, StoryObj } from "@storybook/react";
import { createRef } from "react";
import { ChatBubbleIcon } from "~/components/icons/chat-bubble-icon";
import { EnvelopeIcon } from "~/components/icons/envelope-icon";
import { UserIcon } from "~/components/icons/user-icon";
import { UsersIcon } from "~/components/icons/users-icon";
import { Resource, Resources } from "~/components/resources";
import { SectionProvider } from "~/components/section-provider";

const meta: Meta<typeof Resources> = {
  title: "components/Resources",
  component: Resources,
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
type Story = StoryObj<typeof Resources>;

export const Example: Story = {
  args: {
    children: (
      <>
        <Resource
          href="/contacts"
          name="Contacts"
          description="Learn about the contact model and how to create, retrieve, update, delete, and list contacts."
          icon={UserIcon}
          pattern={{
            y: 16,
            squares: [
              [0, 1],
              [1, 3],
            ],
          }}
        />

        <Resource
          href="/conversations"
          name="Conversations"
          description="Learn about the conversation model and how to create, retrieve, update, delete, and list conversations."
          icon={ChatBubbleIcon}
          pattern={{
            y: -6,
            squares: [
              [-1, 2],
              [1, 3],
            ],
          }}
        />

        <Resource
          href="/messages"
          name="Messages"
          description="Learn about the message model and how to create, retrieve, update, delete, and list messages."
          icon={EnvelopeIcon}
          pattern={{
            y: 32,
            squares: [
              [0, 2],
              [1, 4],
            ],
          }}
        />

        <Resource
          href="/groups"
          name="Groups"
          description="Learn about the group model and how to create, retrieve, update, delete, and list groups."
          icon={UsersIcon}
          pattern={{
            y: 22,
            squares: [[0, 1]],
          }}
        />
      </>
    ),
  },
};
