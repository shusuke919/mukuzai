import React from "react";
import Card from "@mui/material/Card";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import Looks4Icon from "@mui/icons-material/Looks4";
import styles from "./FeaturesItems.module.scss";

const FeatuesItems = () => {
  return (
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
  );
};

export default FeatuesItems;
