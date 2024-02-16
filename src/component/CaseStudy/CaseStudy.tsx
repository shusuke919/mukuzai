"use client";

import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Paper from "@mui/material/Paper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./caseStudy.module.scss";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const images = [
  {
    label: "Bird",
    imgPath: "/IMG_6985.png",
  },
  {
    label: "Bali, Indonesia",
    imgPath: "/IMG_6995.png",
  },
  {
    label: "Goč, Serbia",
    imgPath: "/IMG_6993.png",
  },
  {
    label: "Bird",
    imgPath: "/IMG_4960.png",
  },
];

const imagesSecond = [
  {
    label: "Bird",
    imgPath: "/IMG_4465.png",
  },
  {
    label: "Bali, Indonesia",
    imgPath: "/IMG_6280 1.png",
  },
  {
    label: "Goč, Serbia",
    imgPath: "/IMG_5985.png",
  },
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: "/IMG_3585.png",
  },
];

const caseStudy = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <div className={styles.caseStudyWrapper}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // height: "100vh",
          marginBottom: 6,
        }}
      >
        <Card sx={{ maxWidth: { xs: 400, sm: 1000 } }}>
          <CardContent>
            <Typography
              gutterBottom
              component="div"
              sx={{
                fontSize: {
                  xs: 25,
                  sm: 30,
                },
              }}
            >
              ホテルベルヴェデーレ様
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: 18,
                  sm: 22,
                },
              }}
              color="text.secondary"
            >
              ホテル集客の為に導入しました。
              <br />
              夏季しか利用できなかったプールサイドに設置することで利用者が水風呂で利用することができ、
              <span style={{ color: "#EC6459", fontWeight: "bold" }}>
                売り上げ倍増
              </span>
              しました。
              <br />
              <span style={{ color: "#EC6459", fontWeight: "bold" }}>
                予想以上の結果で大満足
              </span>{" "}
              しています！
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
              <Link
                href="https://www.ikoi-w.com/sitemap/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ご予約はこちらから：公式HP
              </Link>
            </Typography>
          </CardContent>
          <Paper
            square
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              height: 10,
              pl: 2,
              bgcolor: "background.default",
            }}
          >
            {/* <Typography>{images[activeStep].label}</Typography> */}
          </Paper>

          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={2}
            autoplay={{ delay: 2500 }}
            loop={true}
            onSlideChange={(swiper) => handleStepChange(swiper.activeIndex)}
          >
            {images.map((step, index) => (
              <SwiperSlide key={step.label}>
                {Math.abs(activeStep - index) <= 3 && (
                  <Box
                    component="img"
                    sx={{
                      height: { sm: 400, xs: 200 },
                      display: "block",
                      maxWidth: 600,
                      overflow: "hidden",
                      width: "100%",
                    }}
                    className={styles.img}
                    src={step.imgPath}
                    alt={step.label}
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </Card>
      </Box>
      {/* #EC6459 */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // height: "100vh",
        }}
      >
        <Card sx={{ maxWidth: { xs: 400, sm: 1000 } }}>
          <CardContent>
            <Typography
              gutterBottom
              component="div"
              sx={{
                fontSize: {
                  xs: 25,
                  sm: 30,
                },
              }}
            >
              滋賀県朽木別荘/I様
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: 18,
                  sm: 22,
                },
              }}
              color="text.secondary"
            >
              サウナが大好きで友人から進めてもらい購入しました。
              <br />
              接客対応が迅速で丁寧でした。また、オプションも多く中でもお気に入りは{" "}
              <span style={{ color: "#EC6459", fontWeight: "bold" }}>
                お気に入りは夜のライトアップ
              </span>
              です。
              <br />
              <span style={{ color: "#EC6459", fontWeight: "bold" }}>
                明朗会計
              </span>
              で安心なので周りの友人にも薦めています。
            </Typography>
          </CardContent>
          <Paper
            square
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              height: 10,
              pl: 2,
              bgcolor: "background.default",
            }}
          >
            {/* <Typography>{imagesSecond[activeStep].label}</Typography> */}
          </Paper>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={2}
            autoplay={{ delay: 2500 }}
            loop={true}
            onSlideChange={(swiper) => handleStepChange(swiper.activeIndex)}
          >
            {imagesSecond.map((step, index) => (
              <SwiperSlide key={step.label}>
                {Math.abs(activeStep - index) <= 3 ? (
                  <Box
                    component="img"
                    sx={{
                      height: { sm: 400, xs: 200 },
                      display: "block",
                      maxWidth: 600,
                      overflow: "hidden",
                      width: "100%",
                    }}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </SwiperSlide>
            ))}
          </Swiper>
          <div></div>
        </Card>
      </Box>
    </div>
  );
};

export default caseStudy;
