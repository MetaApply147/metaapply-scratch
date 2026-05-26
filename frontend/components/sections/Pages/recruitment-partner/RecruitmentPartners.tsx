"use client";

import { Box, Container, Typography } from "@mui/material";
import CustomSlider from "@/components/common/CustomSlider";
import SectionHeader from "@/components/common/SectionHeader";
import Image from "next/image";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type JourneyItem = {
  id: number;
  title: string;
  icon: string;
};

type Props = {
  highlightHeading?: string;
  journey?: JourneyItem[];
};

export default function RecruitmentPartners({
  highlightHeading,
  journey = [],
}: Props) {
  if (!journey.length) return null;

  return (
    <Box
      sx={{
        background: "url(/study-abroad/Background-2.webp)",
        borderRadius: { xs: "20px", md: "20px" },
        overflow: "hidden",
        mx: { xs: "16px", md: "30px" },
        py: { xs: 8, md: 11.25 },
      }}
    >
      {/* WRAPPER */}
      <Container sx={{ textAlign: "center" }}>
        {/* TITLE */}
        <SectionHeader
          title="How MetaApply Works with"
          highlight={highlightHeading}
        />

        <Box sx={{ position: "relative" }}>
          {/* SLIDER */}
          <CustomSlider
            data={journey}
            slidesPerView={5}
            spaceBetween={10}
            showArrows
            loop={false}
            disablePadding
            breakpoints={{
              0: { slidesPerView: 2 },
              600: { slidesPerView: 3 },
              900: { slidesPerView: 6 },
            }}
            renderItem={(item: JourneyItem) => {
              const index = journey.findIndex((j) => j.id === item.id);
              return (
                <Box
                  sx={{
                    position: "relative",
                    "&::before": {
                      content: "''",
                      display: index === journey.length - 1 ? "none" : "block",
                      position: "absolute",
                      borderTop: "1px dashed #6E0092",
                      width: "52%",
                      top: "50px",
                      left: "76%",
                    },
                  }}
                >
                  <ArrowForwardIosIcon
                    sx={{
                      position: "absolute",
                      top: "38px",
                      left: "calc(76% + 60px)",
                      fontSize: 25,
                      color: "#6E0092",
                    }}
                  />
                  {/* ICON */}
                  <Box
                    sx={{
                      width: "100px",
                      height: "100px",
                      mx: "auto",
                      mb: 3,
                      position: "relative",
                    }}
                  >
                    <Image
                      src="/test-prep/Innerpages/Liquid_glass_icon.svg"
                      alt={item.title}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </Box>

                  {/* TEXT */}
                  <Typography
                    variant="heading14"
                    component="h6"
                    sx={{
                      maxWidth: "70%",
                      mx: "auto",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              );
            }}
          />

        </Box>
      </Container>
    </Box>
  );
}
