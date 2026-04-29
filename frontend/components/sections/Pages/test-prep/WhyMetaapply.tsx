import { Box, Typography } from "@mui/material";
import FeatureCard from "./FeatureCard";
import palette from "@/theme/palette";
import SectionHeader from "@/components/common/SectionHeader";

const whyMetaApplyData = [
  {
    title: "Expert Trainers",
    description:
      "Learn from mentors with 20+ years of experience preparing students for international exams.",
    image: "/test-prep/Expert-trainers.svg",
  },
  {
    title: "Personalised Learning Support",
    description:
      "Get 30+ hours of dedicated guidance throughout the preparation journey.",
    image: "/test-prep/Personalised-learning-support.svg",
  },
  {
    title: "Flexible Learning Options",
    description:
      "Online, offline, hybrid, and one-on-one teaching formats with weekend & weekday batches.",
    image: "/test-prep/Flexible-learning-options.svg",
  },
  {
    title: "Comprehensive Study Material",
    description:
      "Access official sample papers and structured resources to understand exam formats and strengthen preparation.",
    image: "/test-prep/Comprehensive-study-materail.svg",
  },
  {
    title: "Proven Preparation Strategies",
    description:
      "Benefit from proven exam techniques that help manage time, accuracy, and confidence during the exam.",
    image: "/test-prep/Proven-prep-strategies.svg",
  },
  {
    title: "Real Exam Simulation",
    description:
      "Access 100+ sample papers, mock tests, and practice drills for better preparation and improved performance.",
    image: "/test-prep/Personalised-learning-support.svg",
  },
];

export default function WhyMetaApply() {
  return (
    <Box
      sx={{
        maxWidth: "1317px",
        mx: "auto",
        py: 8,
        display: "flex",
        flexDirection: "column",
        gap: "36px",
      }}
    >
      <SectionHeader title='Why' highlight='MetaApply TestPrep' mb={"0"}/>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
        }}
      >
        {whyMetaApplyData.map((item, index) => (
          <FeatureCard key={index} {...item} />
        ))}
      </Box>
    </Box>
  );
}