import React from 'react'
import styles from "./RecommendItem.module.scss";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

const RecommendItem = () => {
  return (
    <div className={styles.saunaRecommend}>
          <Typography
            component="div"
           
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              flexGrow: 5,
              lineHeight: 2,
              fontSize:{xs:20, sm:30}
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
              width:{xs:"100%", sm:"40%"} , // コンテナの幅に合わせて調整
              height: {xs:"auto", sm:400} , // 望む高さを設定
              mt: {xs:5, sm:0} ,

              justifyContent: "center",
            }}
            image="/list_img04.png"
            alt="green iguana"
          />
        </div>
  )
}

export default RecommendItem
