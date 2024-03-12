"use client";

import Image from "next/image";
import React from "react";
import styles from "./TopImage.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface Props {
  splitText: React.JSX.Element[];
}

const TopImage = () => {
  return (
    <div className={styles.imageContainer}>
      <Swiper className="sample-slider">
        <SwiperSlide>
          {" "}
          <img
            src="https://placehold.jp/3d4070/ffffff/700x450.png?text=1"
            alt="1"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://placehold.jp/3d4070/ffffff/700x450.png?text=2"
            alt="2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://placehold.jp/3d4070/ffffff/700x450.png?text=2"
            alt="2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://placehold.jp/3d4070/ffffff/700x450.png?text=3"
            alt="3"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TopImage;
