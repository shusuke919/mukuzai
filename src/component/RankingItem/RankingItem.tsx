import React from "react";
import styles from "./RankingItem.module.scss";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const RankingItem = () => {
  return (
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
          調査期間：2023年11月1日〜2023年11月18日/弊社調べ
        </Typography>
      </div>

      <div className={styles.rankingText}>
        <Typography
          component="p"
          variant="h4"
          className={styles.pc}
          sx={{ color: "#EC6459", fontWeight: "bold" }}
        >
          たくさんの方々からご好評いただいてます!
        </Typography>
        <Typography
          component="p"
          variant="h6"
          className={styles.sp}
          sx={{ color: "#EC6459", fontWeight: "bold" }}
        >
          たくさんの方々からご好評いただいてます!
        </Typography>
      </div>
    </div>
  );
};

export default RankingItem;
