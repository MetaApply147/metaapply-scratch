import { Box } from "@mui/material";
import FeatureCard from "./FeatureCard";
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
                width: "100%",
                maxWidth: "1317px",
                mx: "auto",

                px: {
                    xs: 2,
                    sm: 3,
                    md: 4,
                    lg: 0,
                },

                pt: {
                    xs: 6,
                    sm: 7,
                    md: 8,
                },

                display: "flex",
                flexDirection: "column",

                gap: {
                    xs: "28px",
                    md: "36px",
                },
            }}
        >
            <SectionHeader
                title="Why"
                highlight="MetaApply TestPrep"
                mb="0"
            />

            <Box
                sx={{
                    display: "grid",

                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "1fr",
                        md: "repeat(2, minmax(0, 1fr))",
                        xl: "repeat(3, minmax(0, 1fr))",
                    },

                    gap: {
                        xs: 2,
                        sm: 2.5,
                        md: 3,
                    },

                    alignItems: "stretch",
                }}
            >
                {whyMetaApplyData.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            width: "100%",
                        }}
                    >
                        <Box
                            sx={{
                                width: "100%",
                                maxWidth: {
                                    xs: "100%",
                                    sm: "520px",
                                    md: "100%",
                                },
                            }}
                        >
                            <FeatureCard {...item} />
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}