import { DocsThemeConfig } from "nextra-theme-docs";

export function useNextSeoProps(): ReturnType<DocsThemeConfig["useNextSeoProps"]> {
  return ({
    titleTemplate: "%s - poker.kohei.dev",
    defaultTitle: "poker.kohei.dev",
    themeColor: "111111",
  });
}
