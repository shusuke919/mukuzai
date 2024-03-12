"use client";
import styles from "./page.module.scss";

import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import theme from "@/theme";
import TopImage from "@/component/Container/TopImage/TopImage";

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
        </main>
        <main className={styles.pc}>
          {" "}
          <TopImage />
        </main>
      </ThemeProvider>
    </>
  );
}
