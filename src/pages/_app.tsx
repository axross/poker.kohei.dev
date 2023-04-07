import googleAnalytics from "@analytics/google-analytics";
import { MDXProvider } from "@mdx-js/react";
import Analytics from "analytics";
import "focus-visible";
import "katex/dist/katex.min.css";
import { AppProps } from "next/app";
import Head from "next/head";
import { Router, useRouter } from "next/router";
import Script from "next/script";
import { FC, useLayoutEffect } from "react";
import { Layout } from "~/components/layout";
import { mdxComponents } from "~/components/mdx";
import { useMobileNavigationStore } from "~/components/mobile-navigation";
import {
  pageLinkGroups,
  socialLinks,
  topLevelLinks,
} from "~/constants/navigation";
import "~/globals.css";

function onRouteChange() {
  useMobileNavigationStore.getState().close();
}

Router.events.on("routeChangeStart", onRouteChange);
Router.events.on("hashChangeStart", onRouteChange);

const analytics = Analytics({
  app: "poker.kohei.dev",
  plugins: [
    googleAnalytics({
      measurementIds: ["G-0WFD0CNM7Y"],
    }),
  ],
});

const App: FC<AppProps> = ({
  Component,
  pageProps: { sections, ...pageProps },
}) => {
  const router = useRouter();
  const pageTitle =
    router.pathname === "/"
      ? "poker.kohei.dev"
      : `${pageProps.title} - poker.kohei.dev`;

  useLayoutEffect(() => {
    const onRouteChangeComplete = () => {
      analytics.page();
    };

    router.events.on("routeChangeComplete", onRouteChangeComplete);

    analytics.page();

    return () =>
      router.events.off("routeChangeComplete", onRouteChangeComplete);
  }, []);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageProps.description} />
      </Head>

      <MDXProvider components={mdxComponents}>
        <Layout
          sections={sections}
          topLevelLinks={topLevelLinks}
          pageLinkGroups={pageLinkGroups}
          socialLinks={socialLinks}
        >
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </>
  );
};

export default App;
