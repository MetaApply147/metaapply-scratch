"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import AchievementCard from "./AchievementCard";
import CustomSlider from "@/components/common/CustomSlider";
import palette from "@/theme/palette";

const achievements = [
  {
    name: "Afsa Taj",
    title: "IELTS Score Jump",
    beforeValue: "5.0",
    afterValue: "6.5",
    improvement: "1.5",
  },
  {
    name: "Afsa Taj",
    title: "IELTS Score Jump",
    beforeValue: "5.0",
    afterValue: "6.5",
    improvement: "1.5",
  },
  {
    name: "Afsa Taj",
    title: "IELTS Score Jump",
    beforeValue: "5.0",
    afterValue: "6.5",
    improvement: "1.5",
  },
  {
    name: "Afsa Taj",
    title: "IELTS Score Jump",
    beforeValue: "5.0",
    afterValue: "6.5",
    improvement: "1.5",
  },
  {
    name: "Afsa Taj",
    title: "IELTS Score Jump",
    beforeValue: "5.0",
    afterValue: "6.5",
    improvement: "1.5",
  },
];

export default function AchieversSection() {
  return (
    <Box
      sx={{
        maxWidth: "1320px",
        mx: "auto",
        py: 8,
        backgroundColor: palette.common.white,
      }}
    >
      {/* Our Achievers Heading */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: "52px",
          height: "74px",
        }}
      >
        {/* Decorative Leaves */}
        <Box
          sx={{
            position: "absolute",
            width: "380px",
            height: "74px",
          }}
        >
          <Image
            src="/test-prep/Our-Achievers.svg"
            alt="Our Achievers Decoration"
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </Box>

        {/* Heading Text */}
        <Typography
          sx={{
            position: "relative",
            zIndex: 2,
            fontFamily: "Plus Jakarta Sans",
            fontWeight: 600,
            fontSize: "40px",
            lineHeight: "52px",
            color: palette.text.heading,
          }}
        >
          Our{" "}
          <Box
            component="span"
            sx={{
              color: palette.pink[400],
            }}
          >
            Achievers
          </Box>
        </Typography>
      </Box>

      {/* Slider */}
      <CustomSlider
        data={achievements}
        slidesPerView={1}
        spaceBetween={24}
        showArrows
        showPagination
        paginationOnDesktop
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
        renderItem={(item) => <AchievementCard {...item} />}
      />
    </Box>
  );
}