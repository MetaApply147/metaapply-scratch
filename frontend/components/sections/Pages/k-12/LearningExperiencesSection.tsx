"use client";
import { Box, Typography } from "@mui/material";

const cards = [
  {
    label: "Aspirational\nCurriculum",
    image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=600&q=80",
  },
  {
    label: "Beyond the\nClassroom",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=80",
  },
  {
    label: "Dedicated\nTransition",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80",
  },
  {
    label: "Innovative\nFacilities",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80",
  },
];

export default function LearningExperiencesSection() {
  return (
    <Box sx={{ backgroundColor: "#fff", py: "64px" }}>
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: { xs: "16px", md: "24px" } }}>

        <Typography
          align="center"
          sx={{ fontWeight: 700, mb: "40px", fontSize: "1.75rem", color: "#111" }}
        >
          Redefining{" "}
          <Box component="span" sx={{ color: "#E05A9B" }}>
            Learning Experiences
          </Box>
        </Typography>

        {/* 4-column CSS grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px",
          }}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                borderRadius: "12px",
                overflow: "hidden",
                height: "230px",
                cursor: "pointer",
              }}
            >
              {/* Photo */}
              <img
                src={card.image}
                alt={card.label}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.4s ease",
                }}
              />

              {/* Pink gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(200,50,90,0.85) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)",
                }}
              />

              {/* Label */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "14px 16px",
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "0.88rem",
                    lineHeight: 1.35,
                    whiteSpace: "pre-line",
                  }}
                >
                  {card.label}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </Box>
    </Box>
  );
}