import { Props } from "@/app/sauna/page";
import styles from "./PcSauna.module.scss";

import React from "react";
import TopImage from "./Sauna/TopImage/TopImage";
import TopContact from "./Sauna/TopContact/TopContact";
import VideoItem from "./Sauna/VideoItem/VideoItem";
import { MenuItem } from "@mui/material";
import SaunaImage from "./Sauna/SaunaImage/SaunaImage";
import PointItems from "./Sauna/PointItems/PointItems";
import FeaturesItems from "@/component/Sauna/FeaturesItems/FeaturesItems";
import ChartItem from "./Sauna/ChartItem/ChartItem";
import ContactItem from "./Sauna/ContactItem/ContactItem";
import RankingItem from "./Sauna/RankingItem/RankingItem";
import CaseStudy from "./Sauna/CaseStudy/CaseStudy";
import SaunaComparison from "./Sauna/SaunaComparison/SaunaComparison";
import RecommendItem from "./Sauna/RecommendItem/RecommendItem";
import Flow from "./Sauna/Flow/Flow";
import Experience from "./Sauna/Experience/Experience";
import Question from "./Sauna/Question/Question";

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
      <Question />
    </main>
  );
};

export default SpSauna;
