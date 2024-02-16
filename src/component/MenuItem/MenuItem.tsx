import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import Typography from "@mui/material/Typography";
import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle";
import styles from "./MenuItem.module.scss";
import ThreePIcon from "@mui/icons-material/ThreeP";
import SyncIcon from "@mui/icons-material/Sync";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const MenuItem = () => {
  return (
    <section className={styles.menu_wrapper}>
      <h2>MENU</h2>
      <ul className={styles.lists}>
        <li>
          <Card sx={{ maxWidth: 200, height: 160, textAlign: "center", m: 2 }}>
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
          <Card sx={{ maxWidth: 200, height: 160, textAlign: "center", m: 2 }}>
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
          <Card sx={{ maxWidth: 200, height: 160, textAlign: "center", m: 2 }}>
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
          <Card sx={{ maxWidth: 200, height: 160, textAlign: "center", m: 2 }}>
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
          <Card sx={{ maxWidth: 200, height: 160, textAlign: "center", m: 2 }}>
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
  );
};

export default MenuItem;
