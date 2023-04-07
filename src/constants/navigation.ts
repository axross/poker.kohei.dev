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
    title: "はじめに",
    links: [
      { title: "このウェブサイトについて", href: "/" },
      { title: "ゲーム理論とナッシュ均衡", href: "/game-theory-101" },
      { title: "ポーカーとはどんなゲームか", href: "/what-is-poker-actually" },
    ],
  },
  {
    title: "GTO基礎",
    links: [
      { title: "ハンドの性能の定量化", href: "/gto-basic/quantifying-hands" },
      {
        title: "ハンドレンジの分類と観点",
        href: "/gto-basic/categorizing-hand-ranges",
      },
      {
        title: "レンジアドバンテージの活用",
        href: "/gto-basic/range-advantage-and-its-transition",
      },
      {
        title: "ベットにまつわる均衡",
        href: "/gto-basic/betting-in-equilibrium",
      },
    ],
  },
  {
    title: "データ集",
    links: [
      {
        title: "よく起こる状況とその確率",
        href: "/data-tables/common-probabilities",
      },
      {
        title: "スターティングハンドレンジ",
        href: "/data-tables/starting-hand-ranges",
      },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  {
    icon: TwitterIcon,
    href: "https://twitter.com/axross_",
    label: "Follow me on Twitter",
  },
  {
    icon: GitHubIcon,
    href: "https://github.com/axross",
    label: "Follow me on GitHub",
  },
  {
    icon: DiscordIcon,
    href: "https://discordapp.com/users/296974487377936384",
    label: "Follow me on Discord",
  },
];
