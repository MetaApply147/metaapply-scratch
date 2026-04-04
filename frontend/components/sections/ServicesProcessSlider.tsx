"use client";

import { Box, Typography } from "@mui/material";
import CustomSlider from "@/components/common/CustomSlider";
import Image from "next/image";
import SectionHeader from "../common/SectionHeader";
import Section from "../common/Section";

/* ================= TYPES ================= */

type ProcessItem = {
  id: number;
  title: string;
  icon: string;
};

type Props = {
  title: string;
  highlightText: string;
  highlightPosition?: "start";
  data: ProcessItem[];
  slidesPerView?: number;
};

/* ================= COMPONENT ================= */

export default function ServicesProcessSlider({
  highlightText,
  title,
  highlightPosition,
  data,
  slidesPerView = 5,
}: Props) {
  return (
    <Section spacing="lg">
      <Box sx={{ position: "relative" }}>
        {/* Heading */}
        <SectionHeader highlight={highlightText} title={title} highlightPosition={highlightPosition} />
        {/* Slider */}
        <CustomSlider
          data={data}
          spaceBetween={-35}
          slidesPerView={slidesPerView}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: -10,
            },
            600: {
              slidesPerView: 3,
              spaceBetween: -12,
            },
            900: {
              slidesPerView: 4,
              spaceBetween: -20,
            },
            1200: {
              slidesPerView: 4, 
              spaceBetween: -30,           
            },
            1440: {
              slidesPerView: slidesPerView,
              spaceBetween: -35,
            },
          }}
          renderItem={(item) => <ProcessCard item={item} />}
        />
      </Box>
    </Section>
  );
}

/* ================= CARD ================= */

const ProcessCard = ({ item }: { item: ProcessItem }) => {
  return (
    <Box
      sx={{
        display:"flex",
        flexDirection:"column",
        alignItems: "center",
        textAlign: 'center',
        gap: 1.8,
        px: 4,
        pt: 5,
        pb: 1.5,
        minHeight: "130px",
        background: "linear-gradient(64.71deg, #FFFBEE 15.36%, #FFECF4 83.03%)",
        clipPath:"polygon(0% 0%, 78% 0%, 100% 50%, 78% 100%, 0% 100%, 20% 50%)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src={item.icon}
          alt={item.title}
          width={100}
          height={68}
          style={{
            height: "68px",
            width: "auto",
            objectFit: "contain",
          }}
        />
      </Box>
      <Box>
        <Typography variant="body06" fontWeight={600} sx={{px: 2, lineHeight: '18px'}} component='p'>
          {item.title}
        </Typography>
      </Box>
    </Box>
  );
};
