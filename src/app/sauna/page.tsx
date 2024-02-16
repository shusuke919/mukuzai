"use client";

import styles from "./page.module.scss";

import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

import "aos/dist/aos.css";
import AOS from "aos";

import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";

import { Theme, ThemeProvider } from "@mui/material/styles";

import { useEffect } from "react";

import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TopImage from "@/component/TopImage/TopImage";
import TopContact from "@/component/TopContact/TopContact";
import VideoItem from "@/component/VideoItem/VideoItem";
import MenuItem from "@/component/MenuItem/MenuItem";
import SaunaImage from "@/component/SaunaImage/SaunaImage";
import PointItems from "@/component/PointItems/PointItems";
import FeaturesItems from "@/component/FeaturesItems/FeaturesItems";
import ChartItem from "@/component/ChartItem/ChartItem";
import ContactItem from "@/component/ContactItem/ContactItem";
import RankingItem from "@/component/RankingItem/RankingItem";
import CaseStudy from "@/component/CaseStudy/CaseStudy";
import theme from "@/theme";
import SaunaComparison from "@/component/SaunaComparison/SaunaComparison";
import RecommendItem from "@/component/RecommendItem/RecommendItem";
import Flow from "@/component/Flow/Flow";
import Experience from "@/component/Experience/Experience";

interface Props {
  theme: Theme;
  splitText: React.JSX.Element[];
}

export default function Sauna() {
  const text = "それは、究極のサウナ";
  const splitText = text.split("").map((char, index) => (
    <span key={index} style={{ "--i": index } as React.CSSProperties}>
      {char}
    </span>
  ));

  return (
    <>
      <main className={styles.sp}>
        {/* <SpSauna theme={theme} splitText={splitText} /> */}
      </main>
      <main className={styles.pc}>
        <PcSauna theme={theme} splitText={splitText} />
      </main>
    </>
  );
}

export function SpSauna({ theme, splitText }: Props) {
  return (
    <>
      <main className={styles.main}>
        <ThemeProvider theme={theme}>
          <TopImage splitText={splitText} />
          <TopContact />
          <VideoItem />
          <MenuItem />
          <SaunaImage />
          <PointItems />
          <FeaturesItems />
          <ChartItem />
          <ContactItem />
          <RankingItem />
          <CaseStudy />
          <SaunaComparison />
        </ThemeProvider>
        <RecommendItem />
        <Flow />
        <ContactItem />
        <Experience />
      </main>
    </>
  );
}

export function PcSauna({ theme, splitText }: Props) {
  useEffect(() => {
    AOS.init();
  }, []);

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  // 768からスマホ画面
  return (
    <main className={styles.main}>
      <ThemeProvider theme={theme}>
        <TopImage splitText={splitText} />
        <TopContact />
        <VideoItem />
        <MenuItem />
        <SaunaImage />
        <PointItems />
        <FeaturesItems />
        <ChartItem />
        <ContactItem />
        <RankingItem />
        <CaseStudy />
        <SaunaComparison />
        <RecommendItem />
        <Flow />
        <ContactItem />
        <Experience />

        <div className={styles.experience}>
          <CardMedia
            component="img"
            sx={{
              width: "100%", // コンテナの幅に合わせて調整
              height: 200, // 望む高さを設定
              objectFit: "contain", // 画像がコンテナ内に収まるように調整
              display: "flex",
              justifyContent: "end",
              m: 14,
            }}
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

        <div className={styles.questions}>
          <Typography
            component="div"
            variant="h4"
            sx={{ fontWeight: "bold", textAlign: "center", m: 3 }}
          >
            よくある質問
          </Typography>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            sx={{ flexShrink: 0 }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                質問１
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                耐久年数はどれくらいですか？
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                1年スパンで定期的に木材パーツの破損やストーブが正常に動いているか等はチェックいただく必要があります。
                ウッドデッキと同じ考え方で10～15年を見ていただければと思います。
                パーツ交換等で適正にメンテナンスいただくことで耐久年数はさらに上がります。
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            sx={{ flexShrink: 0 }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                質問２
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                何時間ほどでサウナ室はあたたまりますか？
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                サウナのサイズや形状、季節、外気温などにより異なりますが冬以外は30分程度で温まります。冬場は1時間ほどかかる場合もございます。
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            sx={{ flexShrink: 0 }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                質問３
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                窓の形状やサイズの変更は可能ですか？
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                弊社のサウナはオーダーメイドでさまざまなカスタマイズが可能です。半円状に窓を設ける半窓や天井を窓に一部窓にする天窓へのカスタマイズが可能です。
                その他、お客様のご希望の長さに木材の長さを変更することにより設置場所に丁度いいサイズにすることが可能です。
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
            sx={{ flexShrink: 0 }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                質問４
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                バレルサウナの許可申請、営業許可について教えてください。
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                サウナの設置に関して、ご家庭でご使用いただく場合と、施設に導入する場合は必要な許可が異なります。
                ご家庭用の場合は、お住まいの地域により異なりますが消防法（家庭用サウナ向けの規定）や建築基準法を確認すれば、消防署へ申請する必要なく設置可能です。また、ご家庭用の場合でも防火地域、準防火地域などは各地方団体への確認が必要となります。
                事業用の場合は、『公衆浴場法』『消防法』『建築基準法』の確認が必要になります。
                『公衆浴場法』に基づき、管轄する保健所の許可が必要になります。具体的には地域の保健所に事前相談を行いましょう。
                『消防法上の制限』を確認する必要がございます。公衆浴場のうち、サウナ（蒸気浴場、熱気浴場）などの業種は消防法上、特定用途の（９）項イ（特殊浴場等）に分類されます。この特定用途の（９）項イに分類される業種が入居する区画は、”特定防火対象物”となり消防署に書類提出が必要になります。
                『建築基準法上の制限』も確認しましょう。まず、サウナ（その他の浴場）などの公衆浴場は建築基準法上、特殊建築物（建基法第6条1項一号（別表第一）に掲げる用途）に分類されます。
                ”特殊建築物”とは映画館など不特定多数の方が多く集まる施設の事で、衛生上や防火上規制すべき建物になります。また特殊建築物の内、床面積が200㎡を超える場合は用途変更をする前に確認申請（建築基準法に基づく手続き）が必要になります。
                なお、各種申請のサポート、及び申請の代行（別料金）も実施しております。詳しくはお問い合わせください
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </ThemeProvider>
    </main>
  );
}
