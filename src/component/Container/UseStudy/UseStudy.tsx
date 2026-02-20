import React from "react";
import styles from "./UseStudy.module.scss";

const UseStudy = () => {
  return (
    <div className={styles.useStudyContainer}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>CONTAINER USE STUDY</p>
        <p className={styles.subTitle}>コンテナの使い方</p>
      </div>
      <div className={styles.cases}>
        <div className={styles.case}>
          <img src={"/monooki.webp"} alt={"倉庫・ホビールームとして使用するコンテナハウス"} />
          <p className={styles.caseTitle}>倉庫やホビールーム</p>
          <p className={styles.caseContent}>
            頑丈な筐体は、そのままで倉庫や、楽しいホビールームに
          </p>
        </div>
        <div className={styles.case}>
          <img src={"/cafe.webp"} alt={"カフェ店舗として使用するコンテナハウス"} />
          <p className={styles.caseTitle}>店舗として</p>
          <p className={styles.caseContent}>
            目に留まりやすいコンテナハウスは、店舗としての利用に最適
          </p>
        </div>
      </div>
      <div className={styles.cases}>
        <div className={styles.case}>
          <img src={"/stage.webp"} alt={"コテージ・住宅として使用するコンテナハウス"} />
          <p className={styles.caseTitle}>コテージや住宅</p>
          <p className={styles.caseContent}>
            ドアと窓を付ければコテージになります。複数を組合せれば邸宅にも
          </p>
        </div>
        <div className={styles.case}>
          <img src={"/office.webp"} alt={"オフィスとして使用するコンテナハウス"} />
          <p className={styles.caseTitle}>オフィスとして</p>
          <p className={styles.caseContent}>
            シャープな外観のコンテナは、機能的なオフィスとしても〇
          </p>
        </div>
      </div>
      <img src={"/container.webp"} alt={"コンテナハウス外観"} className={styles.zoomEffect} />
    </div>
  );
};

export default UseStudy;
