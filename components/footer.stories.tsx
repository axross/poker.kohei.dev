import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "components/footer";
import { DiscordIcon } from "components/icons/discord-icon";
import { GitHubIcon } from "components/icons/github-icon";
import { TwitterIcon } from "components/icons/twitter-icon";

const meta: Meta<typeof Footer> = {
  title: "components/Footer",
  component: Footer,
  tags: ["autodocs"],
  args: {
    socialLinks: [
      {
        icon: TwitterIcon,
        href: "#",
        label: "Follow us on Twitter",
      },
      {
        icon: GitHubIcon,
        href: "#",
        label: "Follow us on GitHub",
      },
      {
        icon: DiscordIcon,
        href: "#",
        label: "Join our Discord server",
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
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Example: Story = {};
