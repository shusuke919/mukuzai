"use client";
import styles from "./page.module.scss";

import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import theme from "@/theme";
import TopImage from "@/component/Container/TopImage/TopImage";
import Messages from "@/component/Container/Messages/Messages";
import Concept from "@/component/Container/Concept/Concept";
import UseStudy from "@/component/Container/UseStudy/UseStudy";
import ShowRoom from "@/component/ShowRoom/ShowRoom";
import Reservation from "@/component/Container/Resevation/Reservation";
import Contact from "@/component/Container/Contact/Contact";
export interface Props {
  splitText: React.JSX.Element[];
}

export default function Container() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <main className={styles.sp}>
          {" "}
          <TopImage />
          <Messages />
          <Concept />
        </main>
        <main className={styles.pc}>
          {" "}
          <TopImage />
          <Messages />
          <Concept />
          <UseStudy />
          <ShowRoom />
          <Reservation />
          <Contact />
        </main>
      </ThemeProvider>
    </>
  );
}
