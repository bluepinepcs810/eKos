import "../styles/globals.css";
import "../styles/common.scss";
import type { AppProps } from "next/app";
import PageLayout from "../components/layout/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
}
