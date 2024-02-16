import React from "react";
import styles from "./SaunaComparison.module.scss";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

const SaunaComparison = () => {
  return (
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
          mt: { xs: -7, sm: 10 },
        }}
        image="/テントサウナバレルサウナ比較.png"
        alt="green iguana"
      />
    </div>
  );
};

export default SaunaComparison;
