import { Props } from "@/app/sauna/page";
import styles from "./PcSauna.module.scss";

import React from "react";
import TopImage from "./TopImage/TopImage";
import TopContact from "./TopContact/TopContact";
import VideoItem from "./VideoItem/VideoItem";
import { MenuItem } from "@mui/material";
import SaunaImage from "./SaunaImage/SaunaImage";
import PointItems from "./PointItems/PointItems";
import FeaturesItems from "@/component/FeaturesItems/FeaturesItems";
import ChartItem from "./ChartItem/ChartItem";
import ContactItem from "./ContactItem/ContactItem";
import RankingItem from "./RankingItem/RankingItem";
import CaseStudy from "./CaseStudy/CaseStudy";
import SaunaComparison from "./SaunaComparison/SaunaComparison";
import RecommendItem from "./RecommendItem/RecommendItem";
import Flow from "./Flow/Flow";
import Experience from "./Experience/Experience";

const SpSauna = ({ splitText }: Props) => {
  return (
    <main className={styles.main}>
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
    </main>
  );
};

export default SpSauna;
