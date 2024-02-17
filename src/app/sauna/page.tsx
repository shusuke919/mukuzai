"use client";
import styles from "./page.module.scss";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import theme from "@/theme";
import PcSauna from "@/component/PcSauna";
import SpSauna from "@/component/SpSauna";

export interface Props {
  splitText: React.JSX.Element[];
}

export default function Sauna() {
  const text = "それは、究極のサウナ";
  const splitText = text.split("").map((char, index) => (
    <span key={index} style={{ "--i": index } as React.CSSProperties}>
      {char}
    </span>
  ));

  return (
    <>
      <ThemeProvider theme={theme}>
        <main className={styles.sp}>
          <SpSauna splitText={splitText} />
        </main>
        <main className={styles.pc}>
          <PcSauna splitText={splitText} />
        </main>
      </ThemeProvider>
    </>
  );
}
