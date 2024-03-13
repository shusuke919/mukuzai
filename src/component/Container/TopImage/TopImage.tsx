"use client";

import Image from "next/image";
import React from "react";
import styles from "./TopImage.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";

interface Props {
  splitText: React.JSX.Element[];
}

const images = ["/top_1.png", "/top_2.png", "/top_3.png", "/top_4.png"];

const TopImage = () => {
  return (
    <div className={styles.imageContainer}>
      <Swiper
        modules={[Autoplay, EffectFade]}
        className={styles.sample}
        effect="fade"
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        loop={false}
        speed={5000}
        fadeEffect={{
          crossFade: true,
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className={styles.zoomEffect}
            />
            <div className={styles.socialMediaContainer}>
              <p className={styles.followUsText}>FOLLOW US</p>

              <div className={styles.socialIcons}>
                {" "}
                <div className={styles.socialMediaWhiteLine}></div>
              </div>
            </div>
            <div className={styles.slideText}>
              <p>大切な人との時間、</p>
              <p>大切な自分との時間。</p>

              <span className={styles.smallText}>
                <div className={styles.whiteLine}></div>
                <p>Enjoy Precious Time with Loved Ones.</p>
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopImage;
