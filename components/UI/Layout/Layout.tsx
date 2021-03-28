import { Header } from "../Header/Header";
import Head from "next/head";
export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>HOME</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
};
