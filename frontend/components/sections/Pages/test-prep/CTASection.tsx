"use client";

import Section from "@/components/common/Section";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import palette from "@/theme/palette";

export default function CTASection() {
  return (
    <Section spacing="lg">
      <Box
        sx={{
          position: "relative",
          overflow: "visible",
          borderRadius: "0 80px 0 80px",
        }}
      >
        <Box
          sx={{
            mt: 11,
            position: "relative",
            overflow: "hidden",
            borderRadius: "0 80px 0 80px",
            px: { xs: 4, md: 10 },
            pt: { xs: 5, md: 9 },
            pb: { xs: 5, md: 11.5 },
            display: "flex",
            alignItems: "center",
            minHeight: { xs: 420, md: 520 },

            background: `linear-gradient(
              263.14deg,
              ${palette.violet[600]} 2.19%,
              ${palette.navyBlue[600]} 99.36%
            )`,

            boxShadow: "20px 25px 75px rgba(0,0,0,0.25)",
          }}
        >
          <Box
            sx={{
              position: "relative",
              zIndex: 5,
              maxWidth: { xs: "100%", md: 470 },
            }}
          >
            <Typography
              variant="heading07"
              component="h2"
              sx={{
                color: palette.common.white,
                mb: 7.5,
                maxWidth: 420,
              }}
            >
              Start your study abroad journey with the right exam and expert
              preparation.
            </Typography>

            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: palette.common.white,
                color: palette.pink[400],
                fontWeight: 600,
                borderRadius: "999px",
                px: 4,
                py: 1.5,
                boxShadow: "none",

                "&:hover": {
                  backgroundColor: palette.common.white,
                },
              }}
            >
              Book a FREE Demo Session
            </Button>
          </Box>

          <Box
            sx={{
              position: "absolute",
              width: 839,
              height: 778,
              borderRadius: "50%",
              right: -110,
              top: 90,
              background: "rgba(255,255,255,0.18)",
              zIndex: 0,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              width: 716,
              height: 662,
              borderRadius: "50%",
              right: -110,
              bottom: -320,
              background: `linear-gradient(
                104.81deg,
                ${palette.yellow[400]} 10.22%,
                ${palette.pink[300]} 89.54%
              )`,
              zIndex: 1,
            }}
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            right: { xs: 10, md: 50 },
            bottom: 0,
            width: { xs: 240, md: 420 },
            height: { xs: 320, md: 560 },
            zIndex: 4,
          }}
        >
          <Image
            src="/test-prep/CTA-boy.webp"
            alt="Graduate Student"
            fill
            priority
            style={{
              objectFit: "contain",
              objectPosition: "bottom right",
            }}
          />
        </Box>
      </Box>
    </Section>
  );
}