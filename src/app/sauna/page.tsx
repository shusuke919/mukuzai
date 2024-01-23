"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import ThreePIcon from "@mui/icons-material/ThreeP";
import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle";
import SyncIcon from "@mui/icons-material/Sync";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import "aos/dist/aos.css";
import AOS from "aos";
import Box from "@mui/material/Box";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import Looks4Icon from "@mui/icons-material/Looks4";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import IconButton, { IconButtonProps } from "@mui/material/IconButton";

import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

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

import { ThemeProvider } from "@mui/material/styles";

import { useEffect, useRef } from "react";

import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Sauna() {
  useEffect(() => {
    AOS.init();
  }, []);
  const text = "それは、究極のサウナ";
  const splitText = text.split("").map((char, index) => (
    <span key={index} style={{ "--i": index } as React.CSSProperties}>
      {char}
    </span>
  ));

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <main className={styles.main}>
      <ThemeProvider theme={theme}>
        <div className={styles.imageContainer}>
          <Image
            src="/sauna_top.png"
            alt="Sauna"
            width={1600}
            height={900}
            sizes="100vw"
            priority
          />
          <div className={styles.textOverlay}>
            {splitText}
            <div className={styles.textSubtitle}>「整う」を体感せよ</div>
          </div>
        </div>
        {/* <div className={styles.buttonContainer}>
          <Link
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLScbgSTp9pwH5Kd5ISTxcKxLnfgl0_y3jZ_CghkmMOGtIsyKdg/viewform?usp=sf_link"
          >
            <button className={styles.inquiryButton}>
              お問い合わせはこちらまで
            </button>
          </Link>
        </div> */}
        <div className={styles.discountContainer}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ color: "white", mt: 5 }}
          >
            先着100名様限定無料お問い合わせで
            <br />
            オリジナルステッカープレゼント中
          </Typography>

          <Button
            variant="contained"
            color="secondary"
            sx={{
              borderRadius: "20px",
              backgroundColor: "#EC6459",
              "&:hover": { backgroundColor: "#CB5249" },
              color: "#333",
            }}
          >
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ color: "white" }}
            >
              お電話でもお問い合わせいただけます
              <br />
              06-7777-5932
            </Typography>
          </Button>
          <Button
            variant="contained"
            sx={{
              ml: 5,
              borderRadius: "20px",
              color: "#333",
              backgroundColor: "#D3D3D3",
              "&:hover": { backgroundColor: "#9B9C9F" },
            }}
          >
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ color: "black" }}
            >
              どんなサウナができるか
              <br />
              無料で問い合わせる
            </Typography>
          </Button>
        </div>
        <div className={styles.video_wrapper}>
          <video
            src="/sauna.mp4"
            autoPlay={true}
            muted={true}
            loop={true}
            playsInline={true}
          ></video>
        </div>
        <section className={styles.menu_wrapper}>
          <h2>MENU</h2>
          <ul className={styles.lists}>
            <li>
              <Card
                sx={{ maxWidth: 200, height: 160, textAlign: "center", m: 2 }}
              >
                <FormatListNumberedIcon sx={{ fontSize: 50, mt: 3 }} />
                <CardContent>
                  <Typography gutterBottom component="div">
                    saunaの特徴
                  </Typography>
                </CardContent>
                <CardActions></CardActions>
              </Card>
            </li>
            <li>
              <Card
                sx={{ maxWidth: 200, height: 160, textAlign: "center", m: 2 }}
              >
                <ThreePIcon sx={{ fontSize: 50, mt: 3 }} />
                <CardContent>
                  <Typography gutterBottom component="div">
                    お客様の声
                  </Typography>
                </CardContent>
                <CardActions></CardActions>
              </Card>
            </li>
            <li>
              <Card
                sx={{ maxWidth: 200, height: 160, textAlign: "center", m: 2 }}
              >
                <LightbulbCircleIcon sx={{ fontSize: 50, mt: 3 }} />
                <CardContent>
                  <Typography gutterBottom component="div">
                    バレルサウナと
                    <br />
                    テントサウナの違い
                  </Typography>
                </CardContent>
                <CardActions></CardActions>
              </Card>
            </li>
            <li>
              <Card
                sx={{ maxWidth: 200, height: 160, textAlign: "center", m: 2 }}
              >
                <SyncIcon sx={{ fontSize: 50, mt: 3 }} />
                <CardContent>
                  <Typography gutterBottom component="div">
                    サウナ設置までの
                    <br />
                    流れ
                  </Typography>
                </CardContent>
                <CardActions></CardActions>
              </Card>
            </li>
            <li>
              <Card
                sx={{ maxWidth: 200, height: 160, textAlign: "center", m: 2 }}
              >
                <HelpOutlineIcon sx={{ fontSize: 50, mt: 3 }} />
                <CardContent>
                  <Typography gutterBottom component="div">
                    よくある質問
                  </Typography>
                </CardContent>
                <CardActions></CardActions>
              </Card>
            </li>
          </ul>
        </section>
        <div className={styles.fullWidthImageContainer}>
          <Image
            src="/sauna_room.png"
            alt="Sauna"
            width={500}
            objectFit="cover"
            height={550}
            sizes="100vw"
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

        <div className={styles.pointContainer}>
          <div className={styles.top_point} data-aos="fade-up">
            <Card
              sx={{ display: "flex", justifyContent: "center", boxShadow: 20 }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <CardContent
                  sx={{
                    flex: "1 0 auto",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    component="div"
                    variant="h5"
                    sx={{ fontWeight: "bold" }}
                  >
                    誰にも邪魔されない「ととのう」空間
                  </Typography>
                </CardContent>
              </Box>
              <CardMedia
                component="img"
                sx={{ width: 180 }}
                image="/point_top.png"
                alt="Live from space album cover"
              />
            </Card>
          </div>
          <div className={styles.center_point} data-aos="fade-up">
            <Card
              sx={{ display: "flex", justifyContent: "center", boxShadow: 20 }}
            >
              <CardMedia
                component="img"
                sx={{ width: 180 }}
                image="/point_center.png"
                alt="Live from space album cover"
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <CardContent
                  sx={{
                    flex: "1 0 auto",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    component="div"
                    variant="h5"
                    sx={{ fontWeight: "bold" }}
                  >
                    世界にひとつ、オンリーワンのサウナ
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </div>
          <div className={styles.last_point} data-aos="fade-up">
            <Card
              sx={{ display: "flex", justifyContent: "center", boxShadow: 20 }}
            >
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <CardContent
                  sx={{
                    flex: "1 0 auto",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    component="div"
                    variant="h5"
                    sx={{ fontWeight: "bold" }}
                  >
                    大切な家族、恋人、友人との大切な場
                  </Typography>
                </CardContent>
              </Box>
              <CardMedia
                component="img"
                sx={{ width: 180 }}
                image="/point_last.png"
                alt="Live from space album cover"
              />
            </Card>
          </div>
        </div>

        <div className={styles.featuresContainer}>
          <div className={styles.featuresRow}>
            <div className={styles.one_feature}>
              <Card sx={{ maxWidth: 345 }}>
                <LooksOneIcon sx={{ fontSize: 50 }} />

                <CardMedia
                  component="img"
                  sx={{
                    width: "100%", // コンテナの幅に合わせて調整
                    height: 180, // 望む高さを設定
                    objectFit: "contain", // 画像がコンテナ内に収まるように調整
                  }}
                  image="/list_img01.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: "bold" }}
                  >
                    グローバルな生産体制により
                    <br />
                    ハイコスパを実現
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    商品開発から輸送まで、メーカーとしてすべて対応。森林→木材輸入→工場→お客様のご自宅までワンストップでお届けしています。
                    中間コストをすべてカットすることで、低価格・高品質の高いコストパフォーマンスを実現しました。
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className={styles.teo_feature}>
              <Card sx={{ maxWidth: 345 }}>
                <LooksTwoIcon sx={{ fontSize: 50 }} />
                <CardMedia
                  component="img"
                  sx={{
                    width: "100%", // コンテナの幅に合わせて調整
                    height: 200, // 望む高さを設定
                    objectFit: "contain", // 画像がコンテナ内に収まるように調整
                  }}
                  image="/list_img02.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: "bold" }}
                  >
                    優れた加工技術で
                    <br />
                    長く使えるサウナをお届け
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    ひとつひとつの部材を専門機械・ロボットが正確に切り出し、職人が手作業で仕上げています。
                    10年以上長くお使いいただける、作りのいいサウナをお届けします。
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className={styles.featuresRow}>
            <div className={styles.three_feature}>
              <Card sx={{ maxWidth: 345 }}>
                <Looks3Icon sx={{ fontSize: 50 }} />
                <CardMedia
                  component="img"
                  sx={{
                    width: "100%", // コンテナの幅に合わせて調整
                    height: 200, // 望む高さを設定
                    objectFit: "contain", // 画像がコンテナ内に収まるように調整
                  }}
                  image="/list_img03.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: "bold" }}
                  >
                    世界中からあつめた
                    <br />
                    高品質な木材
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    世界中からサウナに適した質の高い木材（ツガ・パイン・レッドシダー・ヒノキ）をご用意いたしました。
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className={styles.four_feature}>
              <Card sx={{ maxWidth: 345 }}>
                <Looks4Icon sx={{ fontSize: 50 }} />
                <CardMedia
                  component="img"
                  sx={{
                    width: "100%", // コンテナの幅に合わせて調整
                    height: 200, // 望む高さを設定
                    objectFit: "contain", // 画像がコンテナ内に収まるように調整
                  }}
                  image="/list_img04.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: "bold" }}
                  >
                    工場直売だから
                    <br />
                    カスタマイズし放題
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    サイズはもちろん、窓の形状・木材を始め、屋根や着替え室など全てのパーツを豊富な種類の中からお選びいただけます。
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className={styles.chatContainer}>
          <Card
            sx={{
              justifyContent: "center",
              backgroundColor: "transparent",
              boxShadow: "none",
            }}
          >
            <Box
              sx={{
                display: "flex",
                m: 4,
              }}
            >
              <CardContent
                sx={{
                  flex: "1 0 auto",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  component="div"
                  variant="h5"
                  sx={{ fontWeight: "bold" }}
                >
                  だから
                </Typography>
                <Typography
                  component="div"
                  variant="h4"
                  sx={{ mt: 2, fontWeight: "bold" }}
                >
                  どこよりも
                </Typography>
                <Typography
                  component="div"
                  variant="h2"
                  sx={{ color: "#EC6459", fontWeight: "bold", mt: 2 }}
                >
                  高品質なサウナ
                </Typography>
                <Typography
                  component="div"
                  variant="h4"
                  sx={{ mt: 2, fontWeight: "bold" }}
                >
                  をお届けできます
                </Typography>
              </CardContent>
            </Box>
            <CardMedia
              component="img"
              sx={{
                width: "100%", // コンテナの幅に合わせて調整
                height: 300, // 望む高さを設定
                objectFit: "contain", // 画像がコンテナ内に収まるように調整
                display: "flex",
                justifyContent: "end",
              }}
              image="/他社比較.png"
              alt="green iguana"
            />
          </Card>
        </div>
        <div className={styles.contactContainer}>
          <div className={styles.contactText}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ color: "white", m: 5 }}
            >
              先着100名様限定無料お問い合わせで
              <br />
              オリジナルステッカープレゼント中
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                borderRadius: "20px",
                backgroundColor: "#EC6459",
                "&:hover": { backgroundColor: "#CB5249" },
                color: "#333",
              }}
            >
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ color: "white" }}
              >
                お電話でもお問い合わせいただけます
                <br />
                06-7777-5932
              </Typography>
            </Button>
            <Button
              variant="contained"
              sx={{
                mt: 3,
                borderRadius: "20px",
                color: "#333",
                backgroundColor: "#D3D3D3",
                "&:hover": { backgroundColor: "#9B9C9F" },
              }}
            >
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ color: "black" }}
              >
                どんなサウナができるか
                <br />
                無料で問い合わせる
              </Typography>
            </Button>
          </div>
          <div className={styles.hoge}>
            <Card
              sx={{
                flexGrow: 0,
                flexShrink: 1,
                backgroundColor: "transparent",
                boxShadow: "none",
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: "100%", // コンテナの幅に合わせて調整
                  height: "100%", // 望む高さを設定
                  objectFit: "contain", // 画像がコンテナ内に収まるように調整
                }}
                image="/sauna1.png"
                alt="green iguana"
              />
              <div data-aos="fade-up" className={styles.imgText}>
                <p>それは、究極のサウナ</p>
                <p>整うを体感せよ</p>
              </div>
            </Card>
          </div>
        </div>
        <div className={styles.rankingWrapper}>
          <div className={styles.rankingImg}>
            <CardMedia
              component="img"
              sx={{
                width: "100%", // コンテナの幅に合わせて調整
                height: 200, // 望む高さを設定
                objectFit: "contain", // 画像がコンテナ内に収まるように調整
              }}
              image="/saunaNO1.png"
              alt="green iguana"
            />

            <Typography component="div" variant="caption">
              調査期間：2023年11月12日〜2023年11月18日/弊社調べ
            </Typography>
          </div>

          <div className={styles.rankingText}>
            <Typography
              component="p"
              variant="h4"
              sx={{ color: "#EC6459", fontWeight: "bold" }}
            >
              たくさんの方々からご好評いただいてます!
            </Typography>
          </div>
        </div>

        <div className={styles.caseStudyWrapper}>
          <Card sx={{ maxWidth: 1200 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                ホテルベルヴェデーレ様
              </Typography>

              <Typography variant="h6" color="text.secondary">
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
                        height: 400,
                        display: "block",
                        maxWidth: 600,
                        overflow: "hidden",
                        width: "100%",
                      }}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </Card>
          {/* #EC6459 */}
          <Card sx={{ maxWidth: 1200, mt: 4 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                滋賀県朽木別荘/I様
              </Typography>

              <Typography variant="h6" color="text.secondary">
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
                        height: 400,
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
        </div>
        <div className={styles.saunaComparison}>
          <Typography
            component="div"
            variant="h5"
            sx={{ mt: 2, fontWeight: "bold", textAlign: "center" }}
          >
            家庭用サウナとして人気な
          </Typography>
          <Typography
            component="div"
            variant="h4"
            sx={{ mt: 2, fontWeight: "bold", textAlign: "center" }}
          >
            <span style={{ color: "#EC6459", fontWeight: "bold" }}>
              バレルサウナ
            </span>
            とテントサウナの違い
          </Typography>
          <CardMedia
            component="img"
            sx={{
              width: "100%", // コンテナの幅に合わせて調整
              height: 500, // 望む高さを設定
              objectFit: "contain", // 画像がコンテナ内に収まるように調整
              display: "flex",
              justifyContent: "end",
              mt: 10,
            }}
            image="/テントサウナバレルサウナ比較.png"
            alt="green iguana"
          />
        </div>
        <div className={styles.saunaRecommend}>
          <Typography
            component="div"
            variant="h4"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              flexGrow: 5,
              lineHeight: 2,
            }}
            data-aos="fade-right"
          >
            ひとりの時間、家族や友人との時間
            <br />
            <span style={{ color: "#EC6459", fontWeight: "bold" }}>
              手軽にサウナ
            </span>
            を
            <br />
            楽しみたいあなたには
            <br />
            <span
              style={{
                padding: "10px",
                backgroundColor: "#EC6459",
                color: "white",
                fontWeight: "bold",
              }}
            >
              バレルサウナがおすすめです
            </span>
          </Typography>

          <CardMedia
            component="img"
            sx={{
              width: "40%", // コンテナの幅に合わせて調整
              height: 400, // 望む高さを設定
              // objectFit: "contain",

              justifyContent: "center",
            }}
            image="/list_img04.png"
            alt="green iguana"
          />
        </div>

        <div className={styles.saunaFlow}>
          <CardMedia
            component="img"
            sx={{
              width: "100%", // コンテナの幅に合わせて調整
              height: 200, // 望む高さを設定
              objectFit: "contain", // 画像がコンテナ内に収まるように調整
              display: "flex",

              mt: 10,
            }}
            image="/購入の流れ.png"
            alt="green iguana"
          />

          <Card
            sx={{
              justifyContent: "center",
              boxShadow: 5,
              width: "70vw",
              mt: 10,
            }}
          >
            <Typography
              component="div"
              variant="h4"
              sx={{ fontWeight: "bold", textAlign: "center", mt: 3 }}
            >
              お問い合わせ
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <CardContent
                sx={{
                  flex: "1 0 auto",
                  display: "flex",
                  alignItems: "center",
                  m: 1,
                  justifyContent: "center",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    // width: 180,
                    width: "30%", // コンテナの幅に合わせて調整
                    height: 200, // 望む高さを設定
                  }}
                  image="/pic01.png"
                  alt="Live from space album cover"
                />
                <Typography component="div" variant="h5" sx={{ ml: 6 }}>
                  希望のサウナを専門スタッフがヒアリングし、
                  <br />
                  最適なモデルをご紹介します。
                </Typography>
              </CardContent>
            </Box>
          </Card>
          <ArrowDropDownIcon sx={{ width: "100%", fontSize: 100 }} />
          <Card
            sx={{
              justifyContent: "center",
              boxShadow: 5,
              width: "70vw",
            }}
          >
            <Typography
              component="div"
              variant="h4"
              sx={{ fontWeight: "bold", textAlign: "center", mt: 3 }}
            >
              必要物確認・お見積り
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <CardContent
                sx={{
                  flex: "1 0 auto",
                  display: "flex",
                  alignItems: "center",
                  m: 1,
                  justifyContent: "center",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    // width: 180,
                    width: "30%", // コンテナの幅に合わせて調整
                    height: 200, // 望む高さを設定
                  }}
                  image="/pic02.png"
                  alt="Live from space album cover"
                />
                <Typography component="div" variant="h5" sx={{ ml: 6 }}>
                  ストーブやカスタマイズ内容の策定・施工などを
                  <br />
                  めたお見積書を作成いたします。
                </Typography>
              </CardContent>
            </Box>
          </Card>
          <ArrowDropDownIcon sx={{ width: "100%", fontSize: 100 }} />
          <Card
            sx={{
              justifyContent: "center",
              boxShadow: 5,
              width: "70vw",
              mt: 5,
            }}
          >
            <Typography
              component="div"
              variant="h4"
              sx={{ fontWeight: "bold", textAlign: "center", mt: 3 }}
            >
              製造・輸送
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <CardContent
                sx={{
                  flex: "1 0 auto",
                  display: "flex",
                  alignItems: "center",
                  m: 1,
                  justifyContent: "center",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    // width: 180,
                    width: "30%", // コンテナの幅に合わせて調整
                    height: 200, // 望む高さを設定
                  }}
                  image="/pic03.png"
                  alt="Live from space album cover"
                />
                <div>
                  <Typography component="div" variant="h5" sx={{ ml: 6 }}>
                    世界中からあつめたサウナに最適かつ高品質な木材を
                    <br />
                    ひとつひとつサウナに加工します。
                  </Typography>
                  <Typography component="div" sx={{ ml: 6, mt: 3 }}>
                    ※受注生産の場合。既製品の場合は最短翌日発送いたします。
                  </Typography>
                </div>
              </CardContent>
            </Box>
          </Card>
          <ArrowDropDownIcon sx={{ width: "100%", fontSize: 100 }} />
          <Card
            sx={{
              justifyContent: "center",
              boxShadow: 5,
              width: "70vw",
            }}
          >
            <Typography
              component="div"
              variant="h4"
              sx={{ fontWeight: "bold", textAlign: "center", mt: 3 }}
            >
              組み立て・施工
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <CardContent
                sx={{
                  flex: "1 0 auto",
                  display: "flex",
                  alignItems: "center",
                  m: 1,
                  justifyContent: "center",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    // width: 180,
                    width: "30%", // コンテナの幅に合わせて調整
                    height: 200, // 望む高さを設定
                  }}
                  image="/pic04.png"
                  alt="Live from space album cover"
                />
                <div>
                  <Typography component="div" variant="h5" sx={{ ml: 6 }}>
                    5時間程度、サウナの組立て・電気工事を行います。
                    <br />
                    サウナが組み立てられる過程もお楽しみいただけます。
                  </Typography>
                  <Typography component="div" sx={{ ml: 6, mt: 3 }}>
                    ※お客様ご自身での組み立てや施工手配も可能です
                  </Typography>
                </div>
              </CardContent>
            </Box>
          </Card>
        </div>
        <div className={styles.contactContainer}>
          <div className={styles.contactText}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ color: "white", m: 5 }}
            >
              先着100名様限定無料お問い合わせで
              <br />
              オリジナルステッカープレゼント中
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                borderRadius: "20px",
                backgroundColor: "#EC6459",
                "&:hover": { backgroundColor: "#CB5249" },
                color: "#333",
              }}
            >
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ color: "white" }}
              >
                お電話でもお問い合わせいただけます
                <br />
                06-7777-5932
              </Typography>
            </Button>
            <Button
              variant="contained"
              sx={{
                mt: 3,
                borderRadius: "20px",
                color: "#333",
                backgroundColor: "#D3D3D3",
                "&:hover": { backgroundColor: "#9B9C9F" },
              }}
            >
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ color: "black" }}
              >
                どんなサウナができるか
                <br />
                無料で問い合わせる
              </Typography>
            </Button>
          </div>
          <div className={styles.hoge}>
            <Card
              sx={{
                flexGrow: 0,
                flexShrink: 1,
                backgroundColor: "transparent",
                boxShadow: "none",
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: "100%", // コンテナの幅に合わせて調整
                  height: "100%", // 望む高さを設定
                  objectFit: "contain", // 画像がコンテナ内に収まるように調整
                }}
                image="/sauna1.png"
                alt="green iguana"
              />
              <div data-aos="fade-up" className={styles.imgText}>
                <p>それは、究極のサウナ</p>
                <p>整うを体感せよ</p>
              </div>
            </Card>
          </div>
        </div>
        <div className={styles.experience}>
          <CardMedia
            component="img"
            sx={{
              width: "100%", // コンテナの幅に合わせて調整
              height: 200, // 望む高さを設定
              objectFit: "contain", // 画像がコンテナ内に収まるように調整
              display: "flex",
              justifyContent: "end",
              m: 14,
            }}
            image="/体験.png"
            alt="green iguana"
          />
          <CardMedia
            component="img"
            sx={{
              width: "100%", // コンテナの幅に合わせて調整
              height: 300, // 望む高さを設定
              objectFit: "contain", // 画像がコンテナ内に収まるように調整
              display: "flex",

              mt: 10,
            }}
            image="/体験img.png"
            alt="green iguana"
          />
        </div>

        <div className={styles.questions}>
          <Typography
            component="div"
            variant="h4"
            sx={{ fontWeight: "bold", textAlign: "center", m: 3 }}
          >
            よくある質問
          </Typography>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            sx={{ flexShrink: 0 }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                質問１
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                耐久年数はどれくらいですか？
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                1年スパンで定期的に木材パーツの破損やストーブが正常に動いているか等はチェックいただく必要があります。
                ウッドデッキと同じ考え方で10～15年を見ていただければと思います。
                パーツ交換等で適正にメンテナンスいただくことで耐久年数はさらに上がります。
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            sx={{ flexShrink: 0 }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                質問２
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                何時間ほどでサウナ室はあたたまりますか？
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                サウナのサイズや形状、季節、外気温などにより異なりますが冬以外は30分程度で温まります。冬場は1時間ほどかかる場合もございます。
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            sx={{ flexShrink: 0 }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                質問３
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                窓の形状やサイズの変更は可能ですか？
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                弊社のサウナはオーダーメイドでさまざまなカスタマイズが可能です。半円状に窓を設ける半窓や天井を窓に一部窓にする天窓へのカスタマイズが可能です。
                その他、お客様のご希望の長さに木材の長さを変更することにより設置場所に丁度いいサイズにすることが可能です。
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
            sx={{ flexShrink: 0 }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                質問４
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                バレルサウナの許可申請、営業許可について教えてください。
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                サウナの設置に関して、ご家庭でご使用いただく場合と、施設に導入する場合は必要な許可が異なります。
                ご家庭用の場合は、お住まいの地域により異なりますが消防法（家庭用サウナ向けの規定）や建築基準法を確認すれば、消防署へ申請する必要なく設置可能です。また、ご家庭用の場合でも防火地域、準防火地域などは各地方団体への確認が必要となります。
                事業用の場合は、『公衆浴場法』『消防法』『建築基準法』の確認が必要になります。
                『公衆浴場法』に基づき、管轄する保健所の許可が必要になります。具体的には地域の保健所に事前相談を行いましょう。
                『消防法上の制限』を確認する必要がございます。公衆浴場のうち、サウナ（蒸気浴場、熱気浴場）などの業種は消防法上、特定用途の（９）項イ（特殊浴場等）に分類されます。この特定用途の（９）項イに分類される業種が入居する区画は、”特定防火対象物”となり消防署に書類提出が必要になります。
                『建築基準法上の制限』も確認しましょう。まず、サウナ（その他の浴場）などの公衆浴場は建築基準法上、特殊建築物（建基法第6条1項一号（別表第一）に掲げる用途）に分類されます。
                ”特殊建築物”とは映画館など不特定多数の方が多く集まる施設の事で、衛生上や防火上規制すべき建物になります。また特殊建築物の内、床面積が200㎡を超える場合は用途変更をする前に確認申請（建築基準法に基づく手続き）が必要になります。
                なお、各種申請のサポート、及び申請の代行（別料金）も実施しております。詳しくはお問い合わせください
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </ThemeProvider>
    </main>
  );
}
