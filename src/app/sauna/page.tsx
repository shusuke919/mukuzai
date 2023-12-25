import Image from "next/image";
import styles from "./page.module.css";
import { Hachi_Maru_Pop } from "next/font/google";
import Link from "next/link";

const RampartOneFont = Hachi_Maru_Pop({
  weight: "400",
  subsets: ["latin"],
});

export default function Sauna() {
  const text = "それは、究極のサウナ";
  const splitText = text.split("").map((char, index) => (
    <span key={index} style={{ "--i": index } as React.CSSProperties}>
      {char}
    </span>
  ));
  return (
    <main className={styles.main}>
      <div className={styles.imageContainer}>
        <Image
          src="/sauna_top.png"
          alt="Sauna"
          width={4800}
          height={2700}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
        <div className={styles.textOverlay}>
          {splitText}
          <div className={styles.textSubtitle}>整うを体感せよ</div>
          <div className={styles.textSubtitle}>Comming soon</div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Link
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLScbgSTp9pwH5Kd5ISTxcKxLnfgl0_y3jZ_CghkmMOGtIsyKdg/viewform?usp=sf_link"
        >
          <button className={styles.inquiryButton}>
            お問い合わせはこちらまで
          </button>
        </Link>
      </div>
    </main>
  );
}
