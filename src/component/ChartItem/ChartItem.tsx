import React from "react";
import styles from "./ChartItem.module.scss";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

const ChartItem = () => {
  return (
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
              className={styles.pc}
              sx={{ color: "#EC6459", fontWeight: "bold", mt: 2 }}
            >
              高品質なサウナ
            </Typography>
            <Typography
              component="div"
              variant="h4"
              className={styles.sp}
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
  );
};

export default ChartItem;
