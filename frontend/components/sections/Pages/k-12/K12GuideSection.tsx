"use client";
import { Box, Typography } from "@mui/material";

const levels = [
  {
    title: "Elementary School",
    grade: "Grade 1–5",
    body: "The foundation stage builds essential literacy and numeracy skills while encouraging social and emotional development.",
    accent: "#1B3A4B",
  },
  {
    title: "Middle School",
    grade: "Grades 6–8",
    body: "During these transformative years, students develop their knowledge and develop independence and critical thinking skills.",
    accent: "#E05A9B",
  },
  {
    title: "High School",
    grade: "Grades 9–12",
    body: "In high school, students advance academically while preparing for college and careers, focusing on critical thinking and personal responsibilities.",
    accent: "#1B3A4B",
  },
];

export default function K12GuideSection() {
  return (
    <Box sx={{ backgroundColor: "#F7F8FA", py: "64px" }}>
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: { xs: "16px", md: "24px" } }}>

        <Typography
          align="center"
          sx={{ fontWeight: 700, mb: "40px", fontSize: "1.75rem", color: "#111" }}
        >
          A Comprehensive Guide to{" "}
          <Box component="span" sx={{ color: "#E05A9B" }}>
            K-12 Education
          </Box>
        </Typography>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          {levels.map((level, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#fff",
                borderRadius: "10px",
                border: "1px solid #e8e8e8",
                borderTop: `3px solid ${level.accent}`,
                padding: "24px 22px",
                boxSizing: "border-box",
              }}
            >
              <Typography sx={{ fontWeight: 700, color: "#1a2d3d", fontSize: "0.95rem", mb: "4px" }}>
                {level.title}
              </Typography>
              <Typography sx={{ color: "#E05A9B", fontSize: "0.78rem", fontWeight: 600, mb: "12px" }}>
                {level.grade}
              </Typography>
              <div style={{ height: "1px", backgroundColor: "#f0f0f0", marginBottom: "12px" }} />
              <Typography sx={{ color: "#666", fontSize: "0.82rem", lineHeight: 1.75 }}>
                {level.body}
              </Typography>
            </div>
          ))}
        </div>
      </Box>
    </Box>
  );
}