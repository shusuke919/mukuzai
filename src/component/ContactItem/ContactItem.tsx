import React from "react";
import styles from "./ContactItem.module.scss";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

const ContactItem = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactText}>
        <Typography
          gutterBottom
          component="div"
          sx={{ color: "white", m: 5 }}
          className={styles.freePresent}
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
            component="div"
            sx={{ color: "white" }}
            className={styles.TellContact}
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
            component="div"
            sx={{ color: "black" }}
            className={styles.OnlineContact}
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
  );
};

export default ContactItem;
