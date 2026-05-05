"use client";

import { Box, Typography, Button } from "@mui/material";
import Section from "@/components/common/Section";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SectionHeader from "@/components/common/SectionHeader";

type Course = {
  id: number;
  title: string;
  url?: string | null;
};

type Props = {
  examName?: string;
  courses?: Course[];
};

export default function CoursesSection({ examName, courses = [] }: Props) {
  if (!courses.length) return null;

  return (
    <Section spacing="lg" sx={{ background: "#F4F9FE" }}>
      {/* TITLE */}
      <SectionHeader
        title="Course Options"
        highlight={examName}
        highlightPosition="start"
      />

      {/* SCROLL WRAPPER */}
      <Box
        sx={{
          overflowX: courses.length > 8 ? "auto" : "hidden",

          /* Hide scrollbar */
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },

          /* Optional smooth scroll */
          scrollBehavior: "smooth",
        }}
      >
        {/* GRID */}
        <Box
          sx={{
            display: "grid",
            gridTemplateRows: "repeat(2, auto)",
            gridAutoFlow: "column",
            rowGap: 4,
            columnGap: 3.5,
            width: "max-content",
          }}
        >
          {courses.map((course) => (
            <Button
              key={course.id}
              href={course.url || "#"}
              variant="outlined"
              endIcon={<ArrowForwardIcon sx={{ fontSize: 14, color: 'primary.main' }} />}
              sx={{
                minWidth: "269px",
                backgroundColor: "common.white",
                justifyContent: 'space-between',
                borderRadius: "20px",
                px: 2.5,
                py: 2,
                textTransform: "none",
                borderColor: "primary.main",
                color: "text.primary",
                "&:hover": {
                  backgroundColor: "pink.50",
                  color: "primary.main",
                },
              }}
            >
              <Typography
                component="h5"
                sx={{
                  lineHeight: "40px",
                }}
                variant="heading11"
              >
                {course.title}
              </Typography>
            </Button>
          ))}
        </Box>
      </Box>
    </Section>
  );
}
