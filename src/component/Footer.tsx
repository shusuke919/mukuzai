"use client";
import React from "react";
import styles from "./Footer.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Footer = () => {
  const pathname = usePathname();
  const containerUrl = pathname === "/container";
  const saunaUrl = pathname === "/sauna";
  const topUrl = pathname === "/";

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={styles.footerContainer}>
      <div className={styles.contents}>
        <Link href={"/"}>
          <p>コンテナハウス事業 トップ</p>
        </Link>
        <div className={styles.line}></div>
        {containerUrl && (
          <Link href={"/sauna"}>
            <p>サウナ事業</p>{" "}
          </Link>
        )}

        {topUrl && (
          <Link href={"/sauna"}>
            <p>サウナ事業</p>{" "}
          </Link>
        )}

        {saunaUrl && <p onClick={scrollToTop}>サウナ事業 トップ</p>}
      </div>

      <p className={styles.copyRight}>
        © 2024 Muchutoha Yumenonaka. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
