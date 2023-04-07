import { MDXProvider } from "@mdx-js/react";
import "focus-visible";
import { AppProps } from "next/app";
import Head from "next/head";
import { Router, useRouter } from "next/router";
import { FC } from "react";
import { Layout } from "~/components/layout";
import { mdxComponents } from "~/components/mdx";
import { useMobileNavigationStore } from "~/components/mobile-navigation";
import {
  pageLinkGroups,
  socialLinks,
  topLevelLinks,
} from "~/constants/navigation";
import "katex/dist/latex.min.css";
import "~/globals.css";

function onRouteChange() {
  useMobileNavigationStore.getState().close();
}

Router.events.on("routeChangeStart", onRouteChange);
Router.events.on("hashChangeStart", onRouteChange);

const App: FC<AppProps> = ({
  Component,
  pageProps: { sections, ...pageProps },
}) => {
  const router = useRouter();

  return (
    <>
      <Head>
        {router.pathname === "/" ? (
          <title>Protocol API Reference</title>
        ) : (
          <title>{`${pageProps.title} - Protocol API Reference`}</title>
        )}
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
