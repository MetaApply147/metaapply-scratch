"use client";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import { Box, Typography } from "@mui/material";

const cards = [
  {
    title: "Identifying the Challenges",
    body: "Parents often find it challenging to locate schools that provide academic excellence, global exposure, holistic development, and a nurturing environment for each child’s unique potential. MetaApply understands these concerns and aims to bridge the gap.",
    bg: "#335C67",
  },
  {
    title: "Partnerships with Top Global Schools",
    body: "We have partnered with top international schools to offer your child access to globally recognised education systems that prioritise critical thinking, creativity, and a global perspective. These schools provide a rich combination of academics, co-curricular activities, and state-of-the-art facilities.",
    bg: "#73291F",
  },
  {
    title: "Comprehensive Support",
    body: "Similar to our approach for higher education, our expert counselors will collaborate with you to understand your child's needs and aspirations. We will help you shortlist the best schools, offering insights into curriculum differences, school strengths, and the admissions process.",
    bg: "#A27328",
  },
];

export default function AboutSection() {
  return (
    <>
        <Section spacing="lg" sx={{backgroundColor: '#000F27', textAlign:'center'}}>
            <SectionHeader title="About Us" color="common.white"/>

            <Typography
                align="center"
                variant="body03"
                fontWeight={300}
                sx={{
                    color: 'common.white'
                }}
                >
                At MetaApply, we’ve established a strong reputation for guiding students through their higher education journeys abroad. Understanding the challenges parents and students face in finding premium education in India, we have expanded our services to K-12 education, where we cater education from kindergarten to class 12th. By partnering with top schools in India and abroad, we strive to help families secure high-quality education for their children.
            </Typography>
        </Section>

        {/* cards */}
        <Section mt={-5} spacing="lg" sx={{background: 'linear-gradient(180deg, #000F27 50%, #fff 50%)', textAlign:'center'}}>
            {/* Three-column cards */}
            <Box
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "24px",
            }}
            >
            {cards.map((card, i) => (
                <Box
                key={i}
                style={{
                    backgroundColor: card.bg,
                    borderRadius: "16px",
                    padding: "3em",
                    display: "flex",
                    flexDirection: "column",
                }}
                >
                <Typography
                    variant="heading11"
                    component='h5'
                    sx={{
                    color: "common.white",
                    lineHeight: '28px',
                    px: 1,
                    pb: 2.5
                    }}
                >
                    {card.title}
                </Typography>

                <Typography
                    variant="body04"
                    fontWeight={300}
                    sx={{
                    color: "common.white",
                    }}
                >
                    {card.body}
                </Typography>
                </Box>
            ))}
            </Box>
        </Section>
    </>
  );
}