import { AppProps } from "next/app";
import { FC } from "react";
import "reactflow/dist/style.css";
import "../globals.css";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
