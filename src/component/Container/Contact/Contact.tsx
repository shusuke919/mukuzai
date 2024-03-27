import React from "react";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.titleArea}>
        <p className={styles.title}>CONTACT</p>
        <p className={styles.subTitle}>お問い合わせ</p>
        <p className={styles.recommendation}>
          電話が繋がりにくい場合がございます。
          <br />
          お急ぎでない場合はメールでお問い合わせくださいませ。
        </p>
      </div>
      <div className={styles.contactArea}>
        <p className={styles.line}></p>
      </div>
      <div className={styles.contactArea}>
        <div className={styles.tellArea}>
          <p className={styles.titleText}>お電話でのお問い合わせ</p>
          <button className={styles.button}>
            <a href="tel:090-998-2777"> TEL. 090-9998-2777</a>
          </button>
          <p>24時間受付中</p>
        </div>
        <div className={styles.contactArea}>
          <p className={styles.verticalLine}></p>
        </div>

        <div className={styles.tellArea}>
          <p className={styles.titleText}>メールでのお問い合わせ</p>
          <button className={styles.button}> お問い合わせフォーム</button>
          <p>24時間受付中</p>
        </div>
      </div>
      <div className={styles.contactArea}>
        <p className={styles.line}></p>
      </div>
    </div>
  );
};

export default Contact;
