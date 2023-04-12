import type { Meta, StoryObj } from "@storybook/react";
import { Libraries, Library } from "components/libraries";
import { SectionProvider } from "components/section-provider";
import { createRef } from "react";
import logoGo from "~/images/logos/go.svg";
import logoNode from "~/images/logos/node.svg";
import logoPhp from "~/images/logos/php.svg";
import logoPython from "~/images/logos/python.svg";
import logoRuby from "~/images/logos/ruby.svg";

const meta: Meta<typeof Libraries> = {
  title: "components/Libraries",
  component: Libraries,
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
type Story = StoryObj<typeof Libraries>;

export const Example: Story = {
  args: {
    children: (
      <>
        <Library
          href="#"
          name="PHP"
          description="A popular general-purpose scripting language that is especially suited to web development."
          logo={logoPhp}
        />

        <Library
          href="#"
          name="Ruby"
          description="A dynamic, open source programming language with a focus on simplicity and productivity."
          logo={logoRuby}
        />

        <Library
          href="#"
          name="Node.js"
          description="Node.js® is an open-source, cross-platform JavaScript runtime environment."
          logo={logoNode}
        />

        <Library
          href="#"
          name="Python"
          description="Python is a programming language that lets you work quickly and integrate systems more effectively."
          logo={logoPython}
        />

        <Library
          href="#"
          name="Go"
          description="An open-source programming language supported by Google with built-in concurrency."
          logo={logoGo}
        />
      </>
    ),
  },
};
