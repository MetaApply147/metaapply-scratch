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
        width: "1312px",
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "52px",
        py: 10,
      }}
    >
      <SectionHeader title='Know Your' highlight='Study Abroad Exams' mb={"0"}/>
      <Box
        sx={{
          width: "1312px",
          height: "444px",
          display: "flex",
          gap: "68px",
        }}
      >
        {examGroups.map((group, index) => (
          <Box
            key={index}
            sx={{
              width: "625px",
              height: "438px",
              borderRadius: "24px",
              backgroundColor: palette.common.white,

              px: "72px",
              py: "20px",
              boxSizing: "border-box",

              boxShadow: `
                0px 40px 92px rgba(104, 3, 124, 0.05),
                0px 40px 109px rgba(104, 3, 124, 0.01)
              `,
            }}
          >
            <Box
              sx={{
                width: "468px",
                height: "360px",
                display: "flex",
                flexDirection: "column",
                gap: "48px",
                mx: "auto",
              }}
            >
              <Typography
                sx={{
                  width: "468px",
                  height: "72px",
                  fontFamily: "Plus Jakarta Sans",
                  fontWeight: 600,
                  fontSize: "28px",
                  lineHeight: "36px",
                  textAlign: "center",
                  color: palette.navyBlue[400],
                }}
              >
                {group.title}
              </Typography>
              <Box
                sx={{
                  width: "468px",
                  height: "240px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "32px",
                }}
              >
                {[0, 1].map((row) => (
                  <Box
                    key={row}
                    sx={{
                      width: "468px",
                      height: "104px",
                      display: "flex",
                      gap: "24px",
                    }}
                  >
                    {group.exams
                      .slice(row * 2, row * 2 + 2)
                      .map((exam, i) => (
                        <Box
                          key={i}
                          sx={{
                            width: "222px",
                            height: "104px",
                            border: `1px solid ${palette.gray[200]}`,
                            borderRadius: "16px",

                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",

                            backgroundColor: palette.common.white,
                          }}
                        >
                          <Image
                            src={exam.image}
                            alt={exam.alt}
                            width={120}
                            height={48}
                            style={{
                              objectFit: "contain",
                            }}
                          />
                        </Box>
                      ))}
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