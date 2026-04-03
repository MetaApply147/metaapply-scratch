"use client";
import { Box, Typography } from "@mui/material";

const cards = [
  {
    title: "Identifying the Challenges",
    body: "Parents often find it challenging to locate schools that provide academic excellence, global exposure, holistic development, and a nurturing environment for each child's unique potential. MetaApply understands these concerns and aims to bridge the gap.",
    bg: "#1B3A4B",
  },
  {
    title: "Partnerships with Top Global Schools",
    body: "We have partnered with top international schools to offer your child access to globally-recognised education systems that prioritise critical thinking, creativity, and a global perspective. These schools provide a rich combination of academics, co-curricular activities, and state-of-the-art facilities.",
    bg: "#8B2020",
  },
  {
    title: "Comprehensive Support",
    body: "Similar to our approach for higher education, our expert counsellors will collaborate with you to understand your child's needs and aspirations. We will help you shortlist the best schools, examining highlights into curriculum differences, school strengths, and the admissions process.",
    bg: "#9A6B1A",
  },
];

export default function AboutSection() {
  return (
    <Box sx={{ backgroundColor: "#fff", py: "64px" }}>
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: { xs: "16px", md: "24px" } }}>

        <Typography
          align="center"
          sx={{ fontWeight: 700, mb: "12px", color: "#111", fontSize: "1.75rem" }}
        >
          About Us
        </Typography>

        <Typography
          align="center"
          sx={{
            color: "#555",
            maxWidth: "760px",
            mx: "auto",
            mb: "48px",
            fontSize: "0.875rem",
            lineHeight: 1.8,
          }}
        >
          At MetaApply, we've established a strong reputation for guiding students through their
          higher education journeys abroad. Understanding the challenges parents and students face
          in finding premium education in India, we have expanded our services to K-12 education,
          where we cater to education from Kindergarten to class 12th. By partnering with top
          schools in India and abroad, we strive to help families secure high-quality education
          for their children.
        </Typography>

        {/* Three-column cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              style={{
                backgroundColor: card.bg,
                borderRadius: "10px",
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                minHeight: "230px",
                boxSizing: "border-box",
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "1rem",
                  mb: "12px",
                  lineHeight: 1.4,
                }}
              >
                {card.title}
              </Typography>
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.78)",
                  fontSize: "0.8rem",
                  lineHeight: 1.75,
                }}
              >
                {card.body}
              </Typography>
            </div>
          ))}
        </div>
      </Box>
    </Box>
  );
}