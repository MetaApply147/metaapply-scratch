"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";
import CustomSlider from "../common/CustomSlider";
import Image from "next/image";

type Props = {
  disablePadding?: string;
};

const processSteps = [
  { number: "1", title: "Study Abroad Counselling" },
  { number: "2", title: "College Shortlisting" },
  { number: "3", title: "Test Prep Mentorship" },
  { number: "4", title: "Application Assistance" },
  { number: "5", title: "Offers and Scholarships" },
  { number: "6", title: "Financial Assistance" },
  { number: "7", title: "Visa Assistance" },
  { number: "8", title: "Accommodation Assistance" },
  { number: "9", title: "Pre-departure Orientation" },
];

export default function MetaapplyProcess({ disablePadding = false }) {
  return (
    <Box
      component="section"
      sx={{ py: disablePadding ? "0" : { xs: 8, md: 11.25 } }}
    >
      <Container>
        <SectionHeader
          title="Process of"
          highlight="MetaApply"
          tagline="Your international future, simplified into 9 easy steps"
        />
      </Container>

      <Box
        sx={{
          minHeight: { xs: 500, lg: 776 },
          background: "url(/study-abroad/Process.webp)",
          position: "relative",
          pb: 3,
          display: "flex",
          alignItems: "end",
          "&: before": {
            content: '""',
            position: "absolute",
            background:
              "linear-gradient(176.99deg, rgba(242, 246, 250, 0) 2.46%, rgba(242, 246, 250, 0) 26.56%, rgba(242, 246, 250, 0.5) 44.04%, #FFFFFF 65.9%)",
            width: "100%",
            height: "83%",
            bottom: 0,
            left: 0,
          },
        }}
      >
        <Container>
          <CustomSlider
            data={processSteps}
            slidesPerView={9}
            spaceBetween={0}
            disablePadding
            breakpoints={{
              0: { slidesPerView: 1 },
              600: { slidesPerView: 2 },
              900: { slidesPerView: 3 },
              1200: { slidesPerView: 9 },
            }}
            renderItem={(item: any) => (
              <Box
                key={item.id}
                textAlign="center"
                position="relative"
                sx={{
                  overflow: "visible",
                  display: "flex",
                  flexDirection: "column",
                  pt: Number(item.number) % 2 === 0 ? "64px" : "0",
                }}
              >
                {/* text */}
                <Box
                  sx={{
                    mb: Number(item.number) % 2 !== 0 ? 3 : 0,
                    mt: Number(item.number) % 2 === 0 ? 3 : 0,
                    order: Number(item.number) % 2 === 0 ? 1 : -1,
                  }}
                >
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="flex-start"
                  >
                    <Typography
                      component="h3"
                      variant="heading07"
                      fontWeight={700}
                      sx={{
                        color: "primary.main",
                        mr: 0.5,
                        lineHeight: "40px !important",
                      }}
                    >
                      {item.number}
                    </Typography>

                    <Typography
                      component="p"
                      variant="body05"
                      fontWeight={700}
                      sx={{
                        color: "#2e318c",
                        textAlign: "left",
                        lineHeight: "19px",
                        mt: 0.2,
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                </Box>

                {/* ribbon */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    pl: "42px",
                    width: "max-content",
                    position: "relative",
                    left: "0",
                  }}
                >
                  {Array.from({
                    length:
                      item.number === processSteps.length.toString() ? 1 : 3,
                  }).map((_, i) => (
                    <Box
                    key={i}
                      sx={{
                        height: "97px",
                        width: "58px",
                        position: "relative",
                        ml: i !== 0 ? "-10px" : 0,
                      }}
                    >
                      <Image
                        key={i}
                        src={
                          i === 0
                            ? "/study-abroad/dark-pink-vector.png"
                            : "/study-abroad/light-pink-vector.png"
                        }
                        alt="chevron"
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </Box>
                  ))}
                </Box>
              </Box>
            )}
          />
        </Container>
      </Box>
      <Container>
        <Box mt={3} sx={{ textAlign: "center" }}>
          <Button variant="contained" size="large">
            Book a FREE Demo Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
