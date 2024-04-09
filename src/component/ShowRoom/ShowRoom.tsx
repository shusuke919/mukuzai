import React from "react";
import styles from "./ShowRoom.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

const containerImages = [
  "/container1.png",
  "/container2.png",
  "/container3.png",
  "/container4.png",
  "/container5.png",
  "/container6.png",
];
const saunaImages = [
  "/sauna1.png",
  "/sauna2.png",
  "/sauna3.png",
  "/sauna4.png",
  "/sauna5.png",
  "/sauna6.png",
  "/sauna7.png",
];

const ShowRoom = () => {
  return (
    <>
      <div className={styles.titleContainer}>
        <p className={styles.title}>SHOW ROOM</p>
        <p className={styles.subTitle}>コンテナハウス・バレルサウナ見学</p>
      </div>
      <Swiper
        modules={[Autoplay, EffectFade]}
        className={styles.pc}
        slidesPerView={4}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        loop={false}
        speed={3000}
        fadeEffect={{
          crossFade: true,
        }}
      >
        {containerImages.map((image, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className={styles.zoomEffect}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        modules={[Autoplay, EffectFade]}
        className={styles.sp}
        slidesPerView={2}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        loop={false}
        speed={3000}
        fadeEffect={{
          crossFade: true,
        }}
      >
        {containerImages.map((image, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className={styles.zoomEffect}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.textCenter}>
        <div className={styles.title}>
          <p>関西初！</p>
        </div>
        <div className={styles.centerTitle}>
          <p>見て触れて感じる</p>
        </div>
        <div className={styles.content}>
          <p>
            関西初のコンテナハウスショールームへようこそ。ここでは、限界を超えた住空間の可能性に触れることができます。
            <br />
            実際にコンテナの内部を体感し、洗練されたデザインと機能性の高さを確かめてください。
            <br />
          </p>
          <p className={styles.content2}>
            コンテナハウスは、単なる四角い箱ではなく、創造と革新が息づく空間。自然素材の温もりとモダンな雰囲気が融合し、あらゆるライフスタイルにフィットします。持続可能でエコフレンドリーな住まいの選択肢として、また新たなビジネスの形として、多くの可能性を秘めています。
          </p>
          <p className={styles.content3}>
            当ショールームで、未来の住まいの一歩を踏み出しませんか？
          </p>
        </div>
      </div>

      <Swiper
        modules={[Autoplay, EffectFade]}
        className={styles.pc}
        slidesPerView={4}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        loop={false}
        speed={3000}
        fadeEffect={{
          crossFade: true,
        }}
      >
        {saunaImages.map((image, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className={styles.zoomEffect}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        modules={[Autoplay, EffectFade]}
        className={styles.sp}
        slidesPerView={2}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        loop={false}
        speed={3000}
        fadeEffect={{
          crossFade: true,
        }}
      >
        {saunaImages.map((image, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className={styles.zoomEffect}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.titleContainer}>
        <p className={styles.titleAccess}>ACCESS</p>
        <p className={styles.subTitle}>アクセス</p>
      </div>

      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.7525424362198!2d135.58031387585586!3d34.58512748940508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000d88cc492c6b7%3A0xe83b0ab9589203a6!2z77yI5qCq77yJ44Kk44OH44Kw44OB5Ym15bu6!5e0!3m2!1sja!2sjp!4v1710555309615!5m2!1sja!2sjp"
          className={styles.iframe}
        ></iframe>
      </div>
      <div className={styles.mapText}>
        〒583-0037 大阪府藤井寺市津堂３丁目４８６−１
      </div>
    </>
  );
};

export default ShowRoom;
