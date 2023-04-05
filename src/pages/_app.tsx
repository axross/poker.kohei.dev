import { MDXProvider } from "@mdx-js/react";
import "focus-visible";
import { AppProps } from "next/app";
import Head from "next/head";
import { Router, useRouter } from "next/router";
import { FC } from "react";
import { Layout } from "~/components/Layout";
import { mdxComponents } from "~/components/mdx";
import { useMobileNavigationStore } from "~/components/MobileNavigation";
import "~/styles/tailwind.css";
import "katex/dist/katex.min.css";

function onRouteChange() {
  useMobileNavigationStore.getState().close();
}

Router.events.on("routeChangeStart", onRouteChange);
Router.events.on("hashChangeStart", onRouteChange);

const App: FC<AppProps> = ({ Component, pageProps }) => {
  let router = useRouter();

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
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </>
  );
};

export default App;
