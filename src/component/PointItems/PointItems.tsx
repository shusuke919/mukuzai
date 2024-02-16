import React from "react";
import styles from "./PointItems.module.scss";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

const PointItems = () => {
  //カードごとでコンポーネント化
  return (
    <div className={styles.pointContainer}>
      <div className={styles.top_point} data-aos="fade-up">
        <Card sx={{ display: "flex", justifyContent: "center", boxShadow: 20 }}>
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
        <Card sx={{ display: "flex", justifyContent: "center", boxShadow: 20 }}>
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
        <Card sx={{ display: "flex", justifyContent: "center", boxShadow: 20 }}>
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
  );
};

export default PointItems;
