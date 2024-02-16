import React from "react";
import styles from "./Flow.module.scss";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Flow = () => {
  return (
    <div className={styles.saunaFlow}>
      <CardMedia
        component="img"
        sx={{
          width: "100%", // コンテナの幅に合わせて調整
          height: 200, // 望む高さを設定
          objectFit: "contain", // 画像がコンテナ内に収まるように調整
          display: "flex",

          mt: 10,
        }}
        image="/購入の流れ.png"
        alt="green iguana"
      />

      <Card
        sx={{
          justifyContent: "center",
          boxShadow: 5,
          width: { xs: "90vw", sm: "90vw" },
          mt: { xs: 0, sm: 10 },
        }}
      >
        <Typography
          component="div"
          variant="h4"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mt: 3,
            fontSize: { xs: 25, sm: 30 },
          }}
        >
          お問い合わせ
        </Typography>
        <Box
          sx={{
            display: { xs: "block", sm: "flex" },
            justifyContent: "center",
          }}
        >
          <CardContent
            sx={{
              flex: "1 0 auto",
              display: "flex",
              alignItems: "center",
              m: 1,
              justifyContent: "center",
            }}
          >
            <CardMedia
              component="img"
              sx={{
                // width: 180,
                width: { xs: "30%", sm: "30%" }, // コンテナの幅に合わせて調整
                height: { xs: 150, sm: 200 }, // 望む高さを設定
              }}
              image="/pic01.png"
              alt="Live from space album cover"
            />
            <Typography
              component="div"
              sx={{ ml: 6, fontSize: { xs: 18, sm: 20 } }}
            >
              希望のサウナを専門スタッフがヒアリングし、
              <br />
              最適なモデルをご紹介します。
            </Typography>
          </CardContent>
        </Box>
      </Card>

      <ArrowDropDownIcon sx={{ width: "100%", fontSize: 100 }} />

      <Card
        sx={{
          justifyContent: "center",
          boxShadow: 5,
          width: { xs: "90vw", sm: "90vw" },
          mt: { xs: 0, sm: 10 },
        }}
      >
        <Typography
          component="div"
          variant="h4"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mt: 3,
            fontSize: { xs: 25, sm: 30 },
          }}
        >
          必要物確認・お見積り
        </Typography>
        <Box
          sx={{
            display: { xs: "block", sm: "flex" },
            justifyContent: "center",
          }}
        >
          <CardContent
            sx={{
              flex: "1 0 auto",
              display: "flex",
              alignItems: "center",
              m: 1,
              justifyContent: "center",
            }}
          >
            <CardMedia
              component="img"
              sx={{
                // width: 180,
                width: { xs: "30%", sm: "30%" }, // コンテナの幅に合わせて調整
                height: { xs: 150, sm: 200 }, // 望む高さを設定
              }}
              image="/pic02.png"
              alt="Live from space album cover"
            />
            <Typography
              component="div"
              sx={{ ml: 6, fontSize: { xs: 18, sm: 20 } }}
            >
              ストーブやカスタマイズ内容の策定・施工などを
              <br />
              めたお見積書を作成いたします。
            </Typography>
          </CardContent>
        </Box>
      </Card>

      <ArrowDropDownIcon sx={{ width: "100%", fontSize: 100 }} />

      <Card
        sx={{
          justifyContent: "center",
          boxShadow: 5,
          width: { xs: "90vw", sm: "90vw" },
          mt: { xs: 0, sm: 10 },
        }}
      >
        <Typography
          component="div"
          variant="h4"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mt: 3,
            fontSize: { xs: 25, sm: 30 },
          }}
        >
          製造・輸送
        </Typography>
        <Box
          sx={{
            display: { xs: "block", sm: "flex" },
            justifyContent: "center",
          }}
        >
          <CardContent
            sx={{
              flex: "1 0 auto",
              display: "flex",
              alignItems: "center",
              m: 1,
              justifyContent: "center",
            }}
          >
            <CardMedia
              component="img"
              sx={{
                // width: 180,
                width: { xs: "30%", sm: "30%" }, // コンテナの幅に合わせて調整
                height: { xs: 150, sm: 200 }, // 望む高さを設定
              }}
              image="/pic03.png"
              alt="Live from space album cover"
            />
            <Typography
              component="div"
              sx={{ ml: 6, fontSize: { xs: 18, sm: 20 } }}
            >
              世界中からあつめたサウナに最適かつ高品質な木材を
              <br />
              ひとつひとつサウナに加工します。
            </Typography>
            {/* TODO */}
            {/* <Typography component="div" sx={{ ml: 6, mt: 3 }}>
                    ※受注生産の場合。既製品の場合は最短翌日発送いたします。
                  </Typography> */}
          </CardContent>
        </Box>
      </Card>

      <ArrowDropDownIcon sx={{ width: "100%", fontSize: 100 }} />

      <Card
        sx={{
          justifyContent: "center",
          boxShadow: 5,
          width: { xs: "90vw", sm: "90vw" },
          mt: { xs: 0, sm: 10 },
        }}
      >
        <Typography
          component="div"
          variant="h4"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mt: 3,
            fontSize: { xs: 25, sm: 30 },
          }}
        >
          組み立て・施工
        </Typography>
        <Box
          sx={{
            display: { xs: "block", sm: "flex" },
            justifyContent: "center",
          }}
        >
          <CardContent
            sx={{
              flex: "1 0 auto",
              display: "flex",
              alignItems: "center",
              m: 1,
              justifyContent: "center",
            }}
          >
            <CardMedia
              component="img"
              sx={{
                // width: 180,
                width: { xs: "30%", sm: "30%" }, // コンテナの幅に合わせて調整
                height: { xs: 150, sm: 200 }, // 望む高さを設定
              }}
              image="/pic04.png"
              alt="Live from space album cover"
            />
            <Typography
              component="div"
              sx={{ ml: 6, fontSize: { xs: 18, sm: 20 } }}
            >
              5時間程度、サウナの組立て・電気工事を行います。
              <br />
              サウナが組み立てられる過程もお楽しみいただけます。
            </Typography>

            {/* <Typography
              component="div"
              sx={{
                ml: 6,
                fontSize: { xs: 18, sm: 20 },
                mt: 3,
                display: { xs: "block" },
              }}
            >
              ※お客様ご自身での組み立てや施工手配も可能です
            </Typography> */}
          </CardContent>
        </Box>
      </Card>

      {/* ここまで */}
    </div>
  );
};

export default Flow;
