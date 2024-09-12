import "@/styles/globals.css";
import type { AppProps } from "next/app";
import GlobalLayout from "./components/global-layout";
import { NextPage } from "next";
import { ReactNode } from "react";

type NextPageLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode;
};

export default function App({
  Component,
  pageProps,
}: AppProps & { Component: NextPageLayout }) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  return <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>;
}
