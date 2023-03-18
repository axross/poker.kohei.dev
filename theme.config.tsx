import { DocsThemeConfig } from "nextra-theme-docs";
import React from "react";
import { Callout } from "./components/callout";
import {
  Chart,
  ChartArea,
  ChartAxis,
  ChartContainer,
} from "./components/chart";
import { Logo } from "./components/logo";
import { Card } from "./components/card";
import { CardList } from "./components/card-list";

const config: DocsThemeConfig = {
  primaryHue: 200,
  logo: <Logo />,
  project: {
    link: "https://github.com/axross/poker.kohei.dev",
  },
  docsRepositoryBase: "https://github.com/axross/poker.kohei.dev/tree/main",
  head: (
    <>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
      <link
        rel="icon"
        type="image/png"
        sizes="128x128"
        href="/favicon-128.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="180x180"
        href="/favicon-180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/favicon-192.png"
      />
    </>
  ),
  footer: {
    text: "©️ Kohei Asai",
  },
  components: {
    Chart,
    ChartArea: ChartArea as never,
    ChartAxis: ChartAxis as never,
    ChartContainer,
    Callout,
    Card,
    CardList,
  },
};

export default config;
