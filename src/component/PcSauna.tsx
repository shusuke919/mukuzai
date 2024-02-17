import { Props } from "@/app/sauna/page";
import React, { useEffect } from "react";
import TopImage from "./TopImage/TopImage";
import TopContact from "./TopContact/TopContact";
import VideoItem from "./VideoItem/VideoItem";
import { MenuItem } from "@mui/material";
import SaunaImage from "./SaunaImage/SaunaImage";
import PointItems from "./PointItems/PointItems";
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
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

import styles from "./PcSauna.module.scss";
import AOS from "aos";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Question from "./Question/Question";

const PcSauna = ({ splitText }: Props) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
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

export default PcSauna;
