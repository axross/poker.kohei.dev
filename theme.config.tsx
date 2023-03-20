import { DocsThemeConfig } from "nextra-theme-docs";
import React from "react";
import { Logo } from "~/components/logo";
import { useNextSeoProps } from "~/hooks/use-next-seo-props";

const config: DocsThemeConfig = {
  primaryHue: 200,
  logo: <Logo />,
  project: {
    link: "https://github.com/axross/poker.kohei.dev",
  },
  docsRepositoryBase: "https://github.com/axross/poker.kohei.dev/tree/main",
  useNextSeoProps,
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
};

export default config;
