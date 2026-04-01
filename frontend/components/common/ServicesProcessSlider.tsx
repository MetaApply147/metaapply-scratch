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
  data: ProcessItem[];
  slidesPerView?: number;
};

/* ================= COMPONENT ================= */

export default function ServicesProcessSlider({
  highlightText,
  title,
  data,
  slidesPerView = 5,
}: Props) {
  return (
    <Section spacing="lg">
      <Box sx={{ position: "relative" }}>
        {/* Heading */}
        <SectionHeader highlight={highlightText} title={title} />
        {/* Slider */}
        <CustomSlider
          data={data}
          spaceBetween={-20}
          slidesPerView={slidesPerView}
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
        textAlign: "center",
        px: 8,
        py: 2,
        minHeight: "130px",
        background: "linear-gradient(64.71deg, #FFFBEE 15.36%, #FFECF4 83.03%)",
        clipPath:
          "polygon(0% 0%, 78% 0%, 100% 50%, 78% 100%, 0% 100%, 20% 50%)",
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
            height: "100%",
            width: "auto",
            objectFit: "contain",
          }}
        />
      </Box>
      <Box sx={{ pt: 2 }}>
        <Typography variant="body06" fontWeight={600}>
          {item.title}
        </Typography>
      </Box>
    </Box>
  );
};
