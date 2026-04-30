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
    name: "Nagenndra",
    title: "DET Score Jump",
    beforeValue: "55",
    afterValue: "100",
    improvement: "45",
  },
  {
    name: "Mohanashree S",
    title: "PTE Score Jump",
    beforeValue: "45",
    afterValue: "68",
    improvement: "23",
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
        width: "100%",
        maxWidth: "1320px",
        mx: "auto",
        px: { xs: 2, sm: 3, md: 0 },
        pt: { xs: 2, md: 8 },
        pb: { xs: 6, md: 8 },
        backgroundColor: palette.common.white,
      }}
    >
      {/* Heading */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: { xs: 5, md: "52px" },
          height: { xs: "60px", md: "74px" },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: { xs: "260px", md: "380px" },
            height: { xs: "60px", md: "74px" },
          }}
        >
          <Image
            src="/test-prep/Our-Achievers.svg"
            alt="Our Achievers Decoration"
            fill
            style={{ objectFit: "contain" }}
          />
        </Box>

        <Typography
          sx={{
            position: "relative",
            zIndex: 2,
            fontFamily: "Plus Jakarta Sans",
            fontWeight: 600,
            fontSize: { xs: "28px", md: "40px" },
            lineHeight: 1.2,
            textAlign: "center",
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
      <Box
        sx={{
          width: "100%",

          ".swiper": {
            overflow: "hidden",
            paddingBottom: "55px",
          },

          ".swiper-wrapper": {
            alignItems: "stretch",
          },

          ".swiper-slide": {
            display: "flex",
            justifyContent: "center",
            height: "auto",
          },

          ".swiper-scrollbar": {
            width: "80px !important",
            height: "6px !important",
            left: "50% !important",
            transform: "translateX(-50%)",
            bottom: "0px !important",
            background: "#C6CBD2",
            borderRadius: "80px",
          },

          ".swiper-scrollbar-drag": {
            background: palette.navyBlue[700],
            borderRadius: "80px",
          },
        }}
      >
              <CustomSlider
                  data={achievements}
                  slidesPerView={1}
                  spaceBetween={16}
                  showArrows={false}
                  showPagination={false}
                  showScrollbar
                  breakpoints={{
                      0: { slidesPerView: 1.05, spaceBetween: 12 },
                      480: { slidesPerView: 1.15, spaceBetween: 14 },
                      600: { slidesPerView: 1.35, spaceBetween: 16 },
                      768: { slidesPerView: 2, spaceBetween: 20 },
                      1200: { slidesPerView: 3, spaceBetween: 24 },
                  }}
                  renderItem={(item) => <AchievementCard {...item} />}
              />
      </Box>
    </Box>
  );
}