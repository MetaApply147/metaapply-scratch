"use client";

import { Box, Typography, Button, Grid } from "@mui/material";
import Section from "@/components/common/Section";
import Image from "next/image";

type Props = {
  show?: boolean;
  data?: {
    title?: string;
    highlight?: string;
    list?: string;
    buttonText?: string;
    buttonUrl?: string;
  };
};

export default function AdvantagesSection({ show, data }: Props) {
  if (!show || !data) return null;

  const points =
    data.list?.split("\n").map((item) => item.replace("-", "").trim()) || [];

  return (
    <Section spacing="lg">
      <Box
        sx={{
          borderRadius: "20px",
          border: "1px solid transparent",
          background: `
            linear-gradient(#FCFCFD, #FCFCFD) padding-box,
            radial-gradient(circle at 20% 10%, #ff94c0, #ffe0d1, #a0a0fd) border-box
            `,
          boxShadow:
            "0px 10.8141px 16.2212px -3.24424px rgba(192, 192, 192, 0.1), 0px 4.32566px 6.48849px -4.32566px rgba(196, 196, 196, 0.1)",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          zIndex: 0,
          "&::before": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            background: "linear-gradient(180deg, #FFE5C6, #FCFCFD)",
            height: "32%",
            zIndex: -1,
          },
        }}
      >
        {/* LEFT */}
        <Box
          sx={{
            pl: { xs: 3, md: 7.5 },
            pr: { xs: 3, md: 2 },
            py: { xs: 4, md: 6 },
          }}
        >
          {/* TITLE */}
          <Typography
            variant="heading10"
            component="h3"
            fontWeight={600}
            mb={5}
          >
            <Box component="span" sx={{ color: "primary.main" }}>
              {data.highlight}
            </Box>{" "}
            {data.title}
          </Typography>

          {/* LIST */}
          <Grid container rowSpacing={2} mb={6} sx={{maxWidth: '90%'}}>
            {points.map((point, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 1.5,
                  }}
                >
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#059600",
                      mt: "8px",
                    }}
                  />

                  <Typography variant="body05" component='p'>{point}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* BUTTON */}
          <Button href={data.buttonUrl || "#"} variant="contained" size="large">
            {data.buttonText}
          </Button>
        </Box>

        {/* RIGHT IMAGE */}
        <Box
          sx={{
            position: "relative",
            width: "429px",
            height: { xs: 250, md: 298.97 },
            alignSelf: "end",
            flexShrink: 0,
          }}
        >
          <Image
            src="/test-prep/Innerpages/books.svg"
            alt="advantage"
            fill
            style={{ objectFit: "contain", objectPosition: "right" }}
          />
        </Box>
      </Box>
    </Section>
  );
}
