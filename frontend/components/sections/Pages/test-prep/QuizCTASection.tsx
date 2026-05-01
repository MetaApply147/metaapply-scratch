"use client";

import { Box, Button, Typography } from "@mui/material";
import Section from "@/components/common/Section";
import Image from "next/image";

export default function QuizCTASection() {
  return (
    <Section
  spacing="lg"
  container={false}
          sx={{
              pb: {
                  xs: 4,
                  md: 6,
              },
              mb: 0,
          }}
>
      <Box
        sx={{
          width: "100%",
          px: { xs: 2, sm: 3, md: "40px" },
          display: "flex",
          justifyContent: "center",
          boxSizing: "border-box",
        }}
      >
        {/* Main Card */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "1840px",
            borderTopRightRadius: { xs: "40px", md: "80px" },
            borderBottomLeftRadius: { xs: "40px", md: "80px" },
            background:
              "linear-gradient(262.64deg, #5D0031 -2.68%, #000052 31.59%)",
            boxShadow: "20px 25px 75px 0px #ABABAB33",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            py: { xs: 4, sm: 5, md: 0 },
            minHeight: { xs: "auto", md: "421px" },
          }}
        >
          {/* Inner Wrapper */}
          <Box
            sx={{
              width: "100%",
              maxWidth: "1314px",
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },
              justifyContent: "space-between",
              alignItems: "center",
              gap: { xs: 4, md: 0 },
              px: { xs: 3, sm: 5, md: 6 },
              py: { xs: 2, md: 0 },
              position: "relative",
              zIndex: 2,
            }}
          >
            {/* Left Content */}
            <Box
              sx={{
                width: "100%",
                maxWidth: { xs: "100%", md: "988px" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: { xs: 4, md: "82px" },
                textAlign: { xs: "center", md: "left" },
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              {/* Text */}
              <Typography
                sx={{
                  maxWidth: { xs: "100%", md: "875px" },
                  fontFamily: "Plus Jakarta Sans",
                  fontWeight: 500,
                  fontSize: {
                    xs: "28px",
                    sm: "34px",
                    md: "40px",
                  },
                  lineHeight: {
                    xs: "40px",
                    md: "52px",
                  },
                  color: "#FFFFFF",
                }}
              >
                Test your English Language Skills with this 5 minutes Quiz
              </Typography>

              {/* Button */}
              <Button
                sx={{
                  width: { xs: "100%", sm: "236px" },
                  maxWidth: "236px",
                  height: "60px",
                  borderRadius: "12px",
                  px: "32px",
                  py: "12px",
                  textTransform: "none",
                  background:
                    "linear-gradient(270.04deg, #FF3185 33.28%, #FF7BB0 99.98%)",
                  boxShadow: "none",

                  "&:hover": {
                    background:
                      "linear-gradient(270.04deg, #FF3185 33.28%, #FF7BB0 99.98%)",
                    boxShadow: "none",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Plus Jakarta Sans",
                    fontWeight: 600,
                    fontSize: "20px",
                    color: "#FFFFFF",
                  }}
                >
                  Take the Test Now
                </Typography>
              </Button>
            </Box>

            {/* Right Image */}
            <Box
              sx={{
                width: {
                  xs: "220px",
                  sm: "280px",
                  md: "371px",
                },
                height: {
                  xs: "220px",
                  sm: "280px",
                  md: "370px",
                },
                position: "relative",
                flexShrink: 0,
              }}
            >
              <Image
                src="/test-prep/CTA.svg"
                alt="Quiz Illustration"
                fill
                priority
                style={{
                  objectFit: "contain",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Section>
  );
}