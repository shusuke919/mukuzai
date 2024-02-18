import { Typography } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import styles from "./TopContact.module.scss";
import Link from "next/link";

const TopContact = () => {
  return (
    <div className={styles.discountContainer}>
      <div className={styles.pc}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ color: "white", mt: 5 }}
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
            variant="h6"
            component="div"
            sx={{ color: "white" }}
          >
            お電話でもお問い合わせいただけます
            <br />
            <a href="tel:+81-90-9998-2777">090-9998-2777</a>
          </Typography>
        </Button>
        <Button
          variant="contained"
          sx={{
            ml: 5,
            borderRadius: "20px",
            color: "#333",
            backgroundColor: "#D3D3D3",
            "&:hover": { backgroundColor: "#9B9C9F" },
          }}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ color: "black" }}
          >
            <Link target="_blank" href="https://forms.gle/jbdKHXJHPKWVaffH9">
              どんなサウナができるか
              <br />
              無料で問い合わせる
            </Link>
          </Typography>
        </Button>
      </div>

      <div className={styles.sp}>
        <Typography gutterBottom component="div" sx={{ color: "white", mt: 5 }}>
          先着100名様限定無料お問い合わせで
          <br />
          オリジナルステッカープレゼント中
        </Typography>

        <Button
          variant="contained"
          color="secondary"
          sx={{
            m: 2,
            borderRadius: "20px",
            backgroundColor: "#EC6459",
            "&:hover": { backgroundColor: "#CB5249" },
            color: "#333",
          }}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ color: "white" }}
          >
            お電話でもお問い合わせいただけます
            <br />
            <a href="tel:+81-90-9998-2777">090-9998-2777</a>
          </Typography>
        </Button>
        <Button
          variant="contained"
          sx={{
            m: 1,
            borderRadius: "20px",
            color: "#333",
            backgroundColor: "#D3D3D3",
            "&:hover": { backgroundColor: "#9B9C9F" },
          }}
        >
          <Typography gutterBottom component="div" sx={{ color: "black" }}>
            <Link target="_blank" href="https://forms.gle/jbdKHXJHPKWVaffH9">
              どんなサウナができるか
              <br />
              無料で問い合わせる
            </Link>
          </Typography>
        </Button>
      </div>
    </div>
  );
};

export default TopContact;
