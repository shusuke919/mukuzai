"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Hachi_Maru_Pop } from "next/font/google";
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

import IconButton, { IconButtonProps } from "@mui/material/IconButton";

import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

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
    label: "San Francisco – Oakland Bay Bridge, United States",
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

import { useEffect } from "react";

import React from "react";

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
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
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
        <div></div>
        <div className={styles.discountContainer}>
          <div className={styles.textArea}>
            <p>先着100名様限定無料お問い合わせで</p>
            <p>オリジナルステッカープレゼント中</p>
          </div>

          <Button
            variant="contained"
            color="secondary"
            sx={{
              borderRadius: "20px",
              backgroundColor: "#BDAC7B",
              "&:hover": { backgroundColor: "#8B8061" },
              color: "#333",
            }}
          >
            お電話でもお問い合わせいただけます
            <br />
            06-7777-5932
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
            どんなサウナができるか
            <br />
            無料で問い合わせる
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
                  <Typography component="div" variant="h5">
                    誰にも邪魔されない「ととのう」空間
                  </Typography>
                </CardContent>
              </Box>
              <CardMedia
                component="img"
                sx={{ width: 200 }}
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
                sx={{ width: 200 }}
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
                  <Typography component="div" variant="h5">
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
                  <Typography component="div" variant="h5">
                    大切な家族、恋人、友人との大切な場
                  </Typography>
                </CardContent>
              </Box>
              <CardMedia
                component="img"
                sx={{ width: 200 }}
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
                    height: 200, // 望む高さを設定
                    objectFit: "contain", // 画像がコンテナ内に収まるように調整
                  }}
                  image="/list_img01.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    グローバルな生産体制により
                    <br />
                    ハイコスパを実現
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
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
                  <Typography gutterBottom variant="h5" component="div">
                    優れた加工技術で
                    <br />
                    長く使えるサウナをお届け
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
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
                  <Typography gutterBottom variant="h5" component="div">
                    世界中からあつめた
                    <br />
                    高品質な木材
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
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
                  <Typography gutterBottom variant="h5" component="div">
                    工場直売だから
                    <br />
                    カスタマイズし放題
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
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
                <Typography component="div" variant="h5">
                  だから
                </Typography>
                <Typography component="div" variant="h4">
                  どこよりも
                </Typography>
                <Typography component="div" variant="h2">
                  高品質なサウナ
                </Typography>
                <Typography component="div" variant="h4">
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
              image="/chart.png"
              alt="green iguana"
            />
          </Card>
        </div>
        <div className={styles.contactContainer}>
          <div className={styles.contactText}>
            {" "}
            <div className={styles.textArea}>
              <p>先着100名様限定無料お問い合わせで</p>
              <p>オリジナルステッカープレゼント中</p>
            </div>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                borderRadius: "20px",
                backgroundColor: "#BDAC7B",
                "&:hover": { backgroundColor: "#8B8061" },
                color: "#333",
              }}
            >
              お電話でもお問い合わせいただけます
              <br />
              090-9998-2777
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
              どんなサウナができるか
              <br />
              無料で問い合わせる
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
            <Typography component="p" variant="h4">
              たくさんの方々からご好評いただいてます
            </Typography>
          </div>
        </div>

        <div className={styles.caseStudyWrapper}>
          <Card sx={{ maxWidth: 600 }} data-aos="fade-up">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                ホテルベルヴェデーレ様
              </Typography>

              <Typography variant="body2" color="text.secondary">
                ホテル集客の為に導入しました。
                <br />
                下記しか利用できなかったプールサイドに設置することで利用者が水風呂で利用することができ、
                売上が倍増しました。
                <br />
                予想以上の結果で大満足しています！
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
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {images.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(activeStep - index) <= 2 ? (
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
                </div>
              ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Next
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </Card>

          <Card sx={{ maxWidth: 600, mt: 4 }} data-aos="fade-up">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                滋賀県朽木別荘/I様
              </Typography>

              <Typography variant="body2" color="text.secondary">
                サウナが大好きで友人から進めてもらい購入しました。
                <br />
                接客対応が迅速で丁寧でした。また、オプションも多く中でもお気に入りは夜のライトアップです。
                <br />
                明朗会計で安心なので周りの友人にも薦めています。
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
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {imagesSecond.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(activeStep - index) <= 2 ? (
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
                </div>
              ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Next
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </Card>
        </div>
      </ThemeProvider>
    </main>
  );
}
