"use client";

import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import palette from "@/theme/palette";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const journeySteps = [
  {
    title: "Book Your Consultation",
    icon: "/test-prep/Book-your-consultation.svg",
  },
  {
     title: "Take a Diagnostic Assessment",
    icon: "/test-prep/Take-a-diagnostic-assessment.svg",
  },
  {
    title: "Get a Personalised Study Plan",
    icon: "/test-prep/Get-a-personalised-studyplan.svg",
  },
  {
    title: "Begin Mentor-Guided Test Preparation",
    icon: "/test-prep/Begin-mentor-guided-test-prep.svg",
  },
  {
    title: "Take Mock Tests & Receive Expert Feedback",
    icon: "/test-prep/Take-mock-tets.svg",
  },
  {
    title: "Achieve Your Target Score",
    icon: "/test-prep/Achieve-your-target-score.svg",
  },
];

export default function JourneyToDreamScoreSection() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        py: 10,
      }}
    >
      {/* Main Card */}
      <Box
      sx={{
          width: "1832px",
          borderRadius: "20px",
          backgroundColor: palette.common.white,
          px: { xs: 3, md: 8 },
          py: { xs: 6, md: 8 },
          boxSizing: "border-box",
        }}
      >
        {/* Inner Wrapper */}
        <Box
          sx={{
            maxWidth: "1320px",
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            alignItems: "center",
            }}
        >
          {/* Heading */}
          <Typography
            sx={{
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 600,
              fontSize: "40px",
              lineHeight: "52px",
              textAlign: "center",
              color: palette.text.heading,
            }}
          >
            Journey to Your Dream Score with{" "}
            <Box
              component="span"
              sx={{
                color: palette.pink[400],
                }}
            >
              MetaApply TestPrep
            </Box>
          </Typography>

          {/* Timeline Section */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              position: "relative",
              flexWrap: { xs: "wrap", lg: "nowrap" },
              rowGap: 5,
            }}
          >
            {journeySteps.map((step, index) => (
              <Box
                key={index}
                sx={{
                  width: "176px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                  flexShrink: 0,
                }}
              >
                {/* Icon + Connector */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                    }}
                >
                  {/* Icon Circle */}
                  <Box
                    sx={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "162px",
                      background: "#6E0092",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      boxShadow:
                        "-26px -26px 13px -30px rgba(103,101,101,0.8) inset",
                      p: "26px",
                      boxSizing: "border-box",
                    }}
                  >
                    <Image
                      src={step.icon}
                      alt={step.title}
                      width={48}
                      height={48}
                      style={{ objectFit: "contain" }}
                    />
                  </Box>

                  {/* Connector Line */}
                  {index !== journeySteps.length - 1 && (
                    <Box
                      sx={{
                        position: "absolute",
                        left: "115px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        display: { xs: "none", lg: "flex" },
                        alignItems: "center",
                        width: "131px",
                      }}
                    >
                      <Box
                        sx={{
                          width: "105px",
                          borderTop: `1px dashed ${palette.navyBlue[500]}`,
                        }}
                      />

                      <ArrowForwardIosIcon
                        sx={{
                          color: palette.navyBlue[500],
                          fontSize: "18px",
                          ml: 1,
                        }}
                      />
                      </Box>
                  )}
                </Box>

                {/* Text */}
                <Typography
                  sx={{
                    mt: "28px",
                    fontFamily: "Plus Jakarta Sans",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "20px",
                    textAlign: "center",
                    color: palette.text.heading,
                    maxWidth: "160px",
                  }}
                >
                    {step.title}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* CTA Button */}
          <Button
            sx={{
              width: "239px",
              height: "60px",
              borderRadius: "12px",
              px: "32px",
              py: "12px",
              textTransform: "none",
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 600,
              fontSize: "20px",
              color: palette.common.white,
              background:
                "linear-gradient(270.04deg, #FF3185 33.28%, #FF7BB0 99.98%)",

              "&:hover": {
                background:
                  "linear-gradient(270.04deg, #FF3185 33.28%, #FF7BB0 99.98%)",
              },
            }}
          >
            Book a Free Demo
          </Button>
        </Box>
      </Box>
    </Box>
  );
}