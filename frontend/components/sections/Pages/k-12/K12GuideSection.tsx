"use client";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import { Box, Typography } from "@mui/material";

const levels = [
  {
    title: "Elementary School",
    grade: "Grade K-5",
    body: "This foundational stage builds essential literacy, numeracy, and critical thinking skills while promoting social and emotional development.",
  },
  {
    title: "Middle School",
    grade: "Grades 6-8",
    body: "During these transformative years, students enhance their academic knowledge and develop independence and critical thinking skills.",
  },
  {
    title: "High School",
    grade: "Grades 9-12",
    body: "In high school, students enhance academic skills and explore various subjects to prepare for college and careers, focusing on critical thinking and personal responsibility.",
  },
];

export default function K12GuideSection() {
  return (
    <Section spacing="lg" sx={{textAlign: 'center'}}>
        <SectionHeader title="A Comprehensive Guide to" highlight="K-12 Education"/>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          {levels.map((level, i) => (
            <Box
              key={i}
              sx={{
                backgroundColor: "common.white",
                borderRadius: "30px",
                boxShadow: "0 23.11px 33.78px 0 rgb(0 0 0 / 7%)",
                padding: "2.5em 4em",
              }}
            >
              <Typography variant="heading11" component='h5' sx={{color: 'navyBlue.400'}}>
                {level.title}
              </Typography>
              <Typography variant="body05" fontWeight={600} component='p' sx={{ color: "#636363" }} mb={2.5}>
                {level.grade}
              </Typography>
              <Typography variant="body05" component='p' sx={{ color: "#636363"}} fontWeight={300}>
                {level.body}
              </Typography>
            </Box>
          ))}
        </Box>
    </Section>
  );
}