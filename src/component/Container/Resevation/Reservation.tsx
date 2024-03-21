import React from "react";
import styles from "./Reservation.module.scss";
import Link from "next/link";

const Reservation = () => {
  return (
    <div className={styles.container}>
      <Link
        href={
          "https://docs.google.com/forms/d/e/1FAIpQLSehMVc9Dkb_j1SevMFpLXpB4a31UDiyo-IyhJoU_2q4Awgpkw/viewform"
        }
        target="_blank"
      >
        <button className={styles.contents}>
          <div className={styles.textArea}>
            <div className={styles.textContents}>
              <div className={styles.leftContent}>
                <p className={styles.usText}>Reservation</p>
                <p className={styles.jpText}>ご予約はこちらから</p>
              </div>
              <div className={styles.line}></div>
            </div>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default Reservation;
