import { DiscordIcon } from "~/components/icons/discord-icon";
import { GitHubIcon } from "~/components/icons/github-icon";
import { TwitterIcon } from "~/components/icons/twitter-icon";
import { PageLinkGroup, SocialLink, TopLevelLink } from "~/models/navigation";

export const topLevelLinks: TopLevelLink[] = [
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
];

export const pageLinkGroups: PageLinkGroup[] = [
  {
    title: "Guides",
    links: [
      { title: "Introduction", href: "/" },
      { title: "Quickstart", href: "/quickstart" },
      { title: "SDKs", href: "/sdks" },
      { title: "Authentication", href: "/authentication" },
      { title: "Pagination", href: "/pagination" },
      { title: "Errors", href: "/errors" },
      { title: "Webhooks", href: "/webhooks" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Contacts", href: "/contacts" },
      { title: "Conversations", href: "/conversations" },
      { title: "Messages", href: "/messages" },
      { title: "Groups", href: "/groups" },
      { title: "Attachments", href: "/attachments" },
    ],
  },
];

export const socialLinks: SocialLink[] = [
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
];
