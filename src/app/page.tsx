"use client";

import Head from "next/head";
import styles from "./page.module.scss";

import React from "react";
import theme from "@/theme";
import TopImage from "@/component/Container/TopImage/TopImage";
import SaunaMessages from "@/component/Container/SaunaMessages/SaunaMessages";
import Messages from "@/component/Container/Messages/Messages";
import Concept from "@/component/Container/Concept/Concept";
import UseStudy from "@/component/Container/UseStudy/UseStudy";
import ShowRoom from "@/component/ShowRoom/ShowRoom";
import Reservation from "@/component/Container/Resevation/Reservation";
import Contact from "@/component/Container/Contact/Contact";
import { ThemeProvider } from "@mui/material";

export default function Home() {
  return (
    <>
      <Head>
        <title>夢中とは夢の中</title>
        <meta
          name="description"
          content="夢中になれるmukuJiroのプロジェクトがまもなく公開予定です。お楽しみに！"
        />
      </Head>
      <main>
        <ThemeProvider theme={theme}>
          <main className={styles.sp}>
            <TopImage />
            <Messages />
            <Concept />
            <UseStudy />
            <SaunaMessages />
            <ShowRoom />
            <Reservation />
            <Contact />
          </main>
          <main className={styles.pc}>
            <TopImage />
            <Messages />
            <Concept />
            <UseStudy />
            <SaunaMessages />
            <ShowRoom />
            <Reservation />
            <Contact />
          </main>
        </ThemeProvider>
      </main>
    </>
  );
}
