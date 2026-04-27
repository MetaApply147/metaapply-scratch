"use client";

import Section from "@/components/common/Section";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";

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
            overflow: 'hidden',
            borderRadius: "0 80px 0 80px",
            // minHeight: { xs: 420, md: 430 },
            px: { xs: 4, md: 10 },
            pt: { xs: 5, md: 9 },
            pb: { xs: 5, md: 11.5 },
            display: "flex",
            alignItems: "center",

            backgroundImage: `
                    url("/blogs/CTA-Bg.webp"),
                    linear-gradient(263.14deg, #732A94 2.19%, #000052 99.36%)
                    `,
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto",
            backgroundPosition: "bottom center",
            boxShadow: "20px 25px 75px 0px #00000040",
          }}
        >
          {/* Left Content */}
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
              sx={{ color: "common.white" }}
              mb={7.5}
            >
              Get started on your dream to study abroad
            </Typography>

            <Button
              variant="contained"
              size="large"
              sx={{
                background: "#fff",
                color: "primary.main",
                fontWeight: 600,
                "&:hover": {
                  background: "#fff",
                },
              }}
            >
              Talk to Our Experts
            </Button>
          </Box>

          {/* Decorative Circle */}
          <Box
            sx={{
              position: "absolute",
              width: 839,
              height: 778,
              borderRadius: "50%",
              right: -224,
              top: 86,
              background: "rgba(255,255,255,0.2)",
              zIndex: 0,
            }}
          />
        </Box>
        {/* Student Image */}
        <Box
          sx={{
            position: "absolute",
            right: 50,
            bottom: 0,
            width: { xs: 260, md: 390 },
            height: { xs: 360, md: 470 },
            zIndex: 4,
          }}
        >
          <Image
            src="/blogs/BlogsCTA-girl.webp"
            alt="Graduate Student"
            fill
            style={{
              objectFit: "contain",
              objectPosition: "bottom right",
            }}
            priority
          />
        </Box>
      </Box>
    </Section>
  );
}