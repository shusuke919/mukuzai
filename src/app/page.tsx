"use client";

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
import BusinessContents from "@/component/Container/BusinessContents/BusinessContents";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <div className={styles.sp}>
          <TopImage />
          <Messages />
          <Concept />
          <UseStudy />
          <SaunaMessages />
          <ShowRoom />
          <Reservation />
          <BusinessContents />
          <Contact />
        </div>
        <div className={styles.pc}>
          <TopImage />
          <Messages />
          <Concept />
          <UseStudy />
          <SaunaMessages />
          <ShowRoom />
          <Reservation />
          <BusinessContents />
          <Contact />
        </div>
      </main>
    </ThemeProvider>
  );
}
