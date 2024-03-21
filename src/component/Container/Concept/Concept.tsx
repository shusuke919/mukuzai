import React from "react";
import styles from "./Concept.module.scss";

const Concept = () => {
  return (
    <div className={styles.fixedContent}>
      <img
        src={"/conscept.png"}
        alt={"Concept"}
        className={styles.zoomEffect}
      />
      <div className={styles.textOverlay}>
        {/* 既存のテキスト */}
        <p className={styles.title}>CONCEPT</p>
        <p className={styles.subTitle}>コンセプト</p>
        <p className={styles.textContent}>
          快適な空間と笑顔を届けるコンテナハウス設計、
          <br />
          それが私たちのコンセプトです。
          <br />
          「住む」「寝る」「食う」の三つの要素を核とし、
          <br />
          少人数から大人数までが心地よく過ごせる、
          <br />
          空間を提供します。
        </p>

        {/* 円形デザインを追加 */}
        <div className={styles.circleContainer}>
          <div className={styles.circle + " " + styles.eat}>
            <p>食</p>
            <span>- EAT -</span>
          </div>
          <div className={styles.circle + " " + styles.sleep}>
            <p>寝</p>
            <span>- SLEEP -</span>
          </div>
          <div className={styles.circle + " " + styles.plus}>
            <p>笑</p>
            <span>- SMILE -</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Concept;
