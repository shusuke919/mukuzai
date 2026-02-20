import React from "react";
import Image from "next/image";
import styles from "./SaunaImage.module.scss";

const SaunaImage = () => {
  return (
    <div className={styles.fullWidthImageContainer}>
      <Image
        src="/sauna_room.webp"
        alt="Sauna"
        width={500}
        objectFit="cover"
        height={550}
        sizes="100vw"
        className={styles.pc}
        style={{
          width: "100%",
        }}
      />
      <Image
        src="/sauna_room.webp"
        alt="Sauna"
        width={300}
        objectFit="cover"
        height={350}
        sizes="100vw"
        className={styles.sp}
        style={{
          width: "100%",
        }}
      />
      <p className={styles.text_right} data-aos="fade-up">
        自宅における話題のサウナ
      </p>
      <p className={styles.text_center} data-aos="fade-up">
        好きな時に好きなだけ
      </p>
      <p className={styles.text_left} data-aos="fade-up">
        本格サウナ
      </p>
    </div>
  );
};

export default SaunaImage;
