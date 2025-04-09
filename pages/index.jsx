import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { useEffect, useState } from "react";
import Page01 from "@/src/pages/page01";
import Page02 from "@/src/pages/page02";
import Page03 from "@/src/pages/page03";
import Page04 from "@/src/pages/page04";
import Page05 from "@/src/pages/page05";
import Page06 from "@/src/pages/page06";
import Header from "@/src/layout/Header";


export default function Home() {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);


  return (
    <>
      <Head>
      <title>Avalia Imobi</title>
        <meta property="og:title" content="Avalia Imobi" />
        <meta property="og:description" content="Aplicativo para avaliação de imóveis" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Page01 />
      <Page02 />
      <Page03 />
      <Page04 />
      <Page05 />
      <Page06 />

    </>
  );
}
