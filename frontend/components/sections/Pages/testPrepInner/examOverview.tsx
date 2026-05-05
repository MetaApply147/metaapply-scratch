"use client";

import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import { Box, Typography, Grid } from "@mui/material";
import Image from "next/image";

type HighlightItem = {
  id: number;
  order: number;
  text: string;
  icon?: {
    url?: string;
  };
};

type Props = {
  overview?: string;
  highlights?: HighlightItem[];
};

export default function ExamOverview({ overview, highlights = [] }: Props) {

  return (
    <Section spacing="lg">
      <Grid
        container
        spacing={6}
        alignItems="center"
        justifyContent="space-between"
      >
        {/* LEFT CONTENT */}
        <Grid size={{ xs: 12, md: 5.5 }}>
          <SectionHeader title="Quick" highlight="Exam Overview" />

          <Typography variant="body05" component="p" color="text.secondary">
            {overview}
          </Typography>
        </Grid>

        {/* RIGHT HIGHLIGHTS */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              position: "relative",
              maxWidth: "580px",
              ml: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            {highlights
              .sort((a, b) => a.order - b.order)
              .map((item, index) => (
                <Box
                  key={item.id}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                    gap: 3,
                    justifyContent: "space-between",
                  }}
                >
                  {/* Big Number */}
                  <Typography
                    variant="heading04"
                    component="h3"
                    fontWeight={500}
                    sx={{
                      opacity: 0.15,
                      background:
                        "linear-gradient(90deg, #BF0E2E 0%, #EE0081 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontSize: "80px",
                      fontWeight: "500",
                      lineHeight: "100%",
                    }}
                    pb={1.2}
                  >
                    {String(item.order).padStart(2, "0")}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      py: 2,
                      px: 3,
                      borderRadius: "20px",
                      backgroundColor: "common.white",
                      border: "1px solid #EDEEF0",
                      boxShadow: "10px 25px 100px 0 rgb(0 43 107 / 25%)",
                      position: "relative",
                      gap: 2,
                      width: "100%",
                      maxWidth: "450px",
                      order: index % 2 === 0 ? '0' : '-1'
                    }}
                  >
                    {/* Icon */}
                    {item.icon?.url && (
                      <Box
                        sx={{
                          height: "48px",
                          width: "48px",
                          position: "relative",
                        }}
                      >
                        <Image
                          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.icon.url}`}
                          alt="icon"
                          fill
                          style={{ objectFit: "contain" }}
                        />
                      </Box>
                    )}

                    {/* Text */}
                    <Typography
                      component="h6"
                      variant="heading13"
                      fontWeight={500}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                </Box>
              ))}
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
}
