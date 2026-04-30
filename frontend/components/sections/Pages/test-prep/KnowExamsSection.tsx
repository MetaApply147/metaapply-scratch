"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import palette from "@/theme/palette";
import SectionHeader from "@/components/common/SectionHeader";

export const examGroups = [
  {
    title: "English Language Proficiency Exams",
    exams: [
      { image: "/test-prep/IELTS_logo.svg", alt: "IELTS" },
      { image: "/test-prep/toefl-logo.svg", alt: "TOEFL" },
      { image: "/test-prep/duolingo_english_test.svg", alt: "Duolingo" },
      { image: "/test-prep/PTE_logo.svg", alt: "PTE" },
    ],
  },
  {
    title: "Standardised Academic Aptitude Exams",
    exams: [
      { image: "/test-prep/SAT-Logo.svg", alt: "SAT" },
      { image: "/test-prep/ACT-logo.svg", alt: "ACT" },
      { image: "/test-prep/GRE-LOGO.svg", alt: "GRE" },
      { image: "/test-prep/Gmat-logo.svg", alt: "GMAT" },
    ],
  },
];

export default function KnowExamsSection() {
  return (
    <Box
  sx={{
    width: "100%",
    maxWidth: "1312px",
    mx: "auto",
    px: { xs: 2, sm: 3, md: 0 },
    py: { xs: 6, md: 10 },
    display: "flex",
    flexDirection: "column",
    gap: { xs: "20px", sm: "28px", md: "52px" },
  }}
>
      <SectionHeader
        title="Know Your"
        highlight="Study Abroad Exams"
        mb="0"
      />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            lg: "repeat(2, 1fr)",
          },
          gap: { xs: "28px", md: "40px", lg: "68px" },
        }}
      >
        {examGroups.map((group, index) => (
          <Box
            key={index}
            sx={{
              width: "100%",
              borderRadius: "24px",
              backgroundColor: palette.common.white,
              px: { xs: 3, sm: 4, md: "48px" },
              py: { xs: 4, md: "32px" },
              boxSizing: "border-box",
              boxShadow: `
                0px 40px 92px rgba(104, 3, 124, 0.05),
                0px 40px 109px rgba(104, 3, 124, 0.01)
              `,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: "32px", md: "48px" },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Plus Jakarta Sans",
                  fontWeight: 600,
                  fontSize: {
                    xs: "22px",
                    sm: "24px",
                    md: "28px",
                  },
                  lineHeight: {
                    xs: "32px",
                    md: "36px",
                  },
                  textAlign: "center",
                  color: palette.navyBlue[400],
                }}
              >
                {group.title}
              </Typography>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "repeat(2, 1fr)",
                  },
                  gap: { xs: "20px", md: "24px" },
                }}
              >
                {group.exams.map((exam, i) => (
                  <Box
                    key={i}
                    sx={{
                      width: "100%",
                      minHeight: { xs: "100px", md: "104px" },
                      border: `1px solid ${palette.gray[200]}`,
                      borderRadius: "16px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: palette.common.white,
                      p: 2,
                    }}
                  >
                    <Image
                      src={exam.image}
                      alt={exam.alt}
                      width={120}
                      height={48}
                      style={{
                        objectFit: "contain",
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}