"use client";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const skills = [
  { label: "Innovation\nManagement",      Icon: '/k12/Innovation-Management.svg' },
  { label: "AI-Enhanced\nLearning",       Icon: '/k12/AI-Enhanced.svg' },
  { label: "Drills\n& Yoga",             Icon: '/k12/Yoga.svg' },
  { label: "Music\n& Dance",             Icon: '/k12/Music.svg' },
  { label: "Digital\nLiteracy",          Icon: '/k12/Digital.svg' },
  { label: "Tinkering\nLab",             Icon: '/k12/Lab.svg' },
  { label: "General\nScience Lab",       Icon: '/k12/Science.svg' },
  { label: "Drama\nArts & Crafts",       Icon: '/k12/Drama.svg' },
  { label: "Global & Cultural\nAwareness", Icon: '/k12/Global&Cultural-Awareness.svg' },
  { label: "Sports\n& Athletics",        Icon: '/k12/Sports.svg' },
];

export default function SkillsSection() {
  return (
    <Section spacing="lg" sx={{ background: "linear-gradient(190deg, #000000 0%, #001536 59%, #000F27 95%)", textAlign: 'center'}}>
        <SectionHeader title="21ˢᵗ Century Skills Education" color="common.white"/>

        {/* 5-column CSS grid */}
        <Box
            sx={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "16px",
            }}
        >
            {skills.map(({ label, Icon }, i) => (
            <Box
                key={i}
                sx={{
                padding: "2.15em 1.2em",
                backgroundColor: "rgb(255 255 255 / 5%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "16px",
                }}
            >
                <Box>
                    <Image height={42} width={40} src={Icon} alt={label}/>
                </Box>
                <Typography
                    component='h6'
                    variant="heading12"
                    sx={{
                        color: "common.white",
                        lineHeight: 'normal',
                        whiteSpace: 'pre-line'
                    }}
                >
                {label}
                </Typography>
            </Box>
            ))}
        </Box>
    </Section>
  );
}