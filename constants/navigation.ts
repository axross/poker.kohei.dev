import { DiscordIcon } from "components/icons/discord-icon";
import { GitHubIcon } from "components/icons/github-icon";
import { TwitterIcon } from "components/icons/twitter-icon";
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
    title: "イントロダクション",
    links: [{ title: "はじめに", href: "/" }],
  },
  {
    title: "GTO基礎",
    links: [
      {
        title: "GTOとゲーム理論",
        href: "/gto-basic/game-theory-101",
      },
      {
        title: "ハンドの能力の定量化",
        href: "/gto-basic/quantifying-hand-performance",
      },
      {
        title: "レンジアドバンテージとその転遷",
        href: "/gto-basic/range-advantage-and-its-transition",
      },
      {
        title: "ベットサイズとベット頻度の力学",
        href: "/gto-basic/mechanics-of-bet-size-and-bet-frequency",
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
