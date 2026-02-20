"use client";
import React from "react";
import styles from "./SaunaMessages.module.scss";
import Link from "next/link";

const SaunaMessages = () => {
  return (
    <div className={styles.container}>
      <div className={styles.fixedContent}>
        <div className={styles.verticalTextContainer}>
          <p className={styles.verticalText}>
            究極に整うバレルサウナ事業
            <br />
            <Link className={styles.verticalTextLink} href={"/sauna"}>
              詳細はこちらから
            </Link>
          </p>
        </div>
      </div>
      <div className={styles.scrollableImageContainer}>
        <img src={"/sauna2.webp"} alt={"Right"} className={styles.zoomEffect} />
      </div>
    </div>
  );
};

export default SaunaMessages;
