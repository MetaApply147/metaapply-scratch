"use client";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const cards = [
  {
    label: "Aspirational\nCurriculum",
    image: "/k12/curriculum.webp",
  },
  {
    label: "Beyond the\nClassroom",
    image: "/k12/beyond-classroom.webp",
  },
  {
    label: "Dedicated\nTransition",
    image: "/k12/transition.webp",
  },
  {
    label: "Innovative\nFacilities",
    image: "/k12/facilities.webp",
  },
];

export default function LearningExperiencesSection() {
  return (
    <Section spacing="lg" sx={{textAlign: 'center'}}>
        <SectionHeader title="Redefining" highlight="Learning Experiences"/>

        {/* 4-column CSS grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
          }}
        >
          {cards.map((card, i) => (
            <Box
              key={i}
              sx={{
                position: "relative",
                borderRadius: "25px",
                overflow: "hidden",
                height: "350px",
                cursor: "pointer",
                p: '1.2em',
                background: `url(${card.image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >

              {/* Pink gradient overlay */}
              <Box
                sx={{
                  position: "absolute",
                  width: '100%',
                  inset: 0,
                  height: '60%',
                  background: i % 2 === 0 ? "linear-gradient(180deg, rgb(255 255 255 / 2%) 0%, rgb(255 49 133 / 60%) 90%)" : 'linear-gradient(180deg, rgb(255 255 255 / 2%) 0%, rgb(22 49 127 / 60%) 90%)',
                  top: 'auto',
                  bottom: 0,
                }}
              />

              {/* Label */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "1.8em",
                  textAlign: 'center'
                }}
              >
                <Typography
                variant="heading11"
                component='h5'
                  sx={{
                    color: "common.white",
                    whiteSpace: "pre-line",
                    lineHeight: 'normal'
                  }}
                >
                  {card.label}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
    </Section>
  );
}