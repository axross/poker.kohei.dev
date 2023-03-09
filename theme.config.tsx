import { DocsThemeConfig } from "nextra-theme-docs";
import React from "react";
import { PlayingCard } from "./components/playing-card";
import { RankPair } from "./components/rank-pair";
import { Callout } from "./components/callout";

const config: DocsThemeConfig = {
  primaryHue: 200,
  logo: <strong>poker.kohei.dev</strong>,
  project: {
    link: "https://github.com/axross/poker.kohei.dev",
  },
  docsRepositoryBase: "https://github.com/axross/poker.kohei.dev/tree/main",
  head: (
    <>
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧩</text></svg>"
      />
    </>
  ),
  footer: {
    text: "©️ Kohei Asai",
  },
  components: {
    Callout,
    PlayingCard,
    RankPair,
  },
};

export default config;
