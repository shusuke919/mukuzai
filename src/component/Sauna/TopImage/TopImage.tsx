import Image from "next/image";
import React from "react";
import styles from "./TopImage.module.scss";

interface Props {
  splitText: React.JSX.Element[];
}

const TopImage = ({ splitText }: Props) => {
  return (
    <div className={styles.imageContainer}>
      <Image
        src="/sauna_top.webp"
        alt="Sauna"
        width={1600}
        height={900}
        sizes="100vw"
        priority
        className={styles.pc}
      />
      <Image
        src="/sauna_top.webp"
        alt="Sauna"
        width={800}
        height={400}
        sizes="100vw"
        priority
        className={styles.sp}
      />
      <div className={styles.textOverlay}>
        {splitText}
        <div className={styles.textSubtitle}>「整う」を体感せよ</div>
      </div>
    </div>
  );
};

export default TopImage;
