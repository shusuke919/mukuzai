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
const RampartOneFont = Hachi_Maru_Pop({
  weight: "400",
  subsets: ["latin"],
});
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { lime, purple } from "@mui/material/colors";
const theme = createTheme({
  palette: {
    primary: lime,
    secondary: purple,
  },
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
      <ThemeProvider theme={theme}>
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
            <div className={styles.textSubtitle}>「整う」を体感せよ</div>
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
          <p className={styles.text_right}>自宅における話題のサウナ</p>
          <p className={styles.text_center}>好きな時に好きなだけ</p>
          <p className={styles.text_left}>本格サウナ</p>
        </div>
      </ThemeProvider>
    </main>
  );
}
