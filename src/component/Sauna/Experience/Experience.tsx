import React from "react";
import styles from "./Experience.module.scss";
import CardMedia from "@mui/material/CardMedia";

const Experience = () => {
  return (
    <div className={styles.experience}>
      <CardMedia
        component="img"
        sx={{
          width: { xs: "70%", sm: "100%" }, // コンテナの幅に合わせて調整
          height: 200, // 望む高さを設定
          objectFit: "contain", // 画像がコンテナ内に収まるように調整
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          m: { xs: 7, sm: 14 },
        }}
        // TODO
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
  );
};

export default Experience;
