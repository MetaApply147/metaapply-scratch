"use client";

import SectionHeader from "@/components/common/SectionHeader";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const coFounders = [
    {
        name: "Prashant Pradeep Sali",
        role: "Co-CEO",
        image: "/about-us/Prashant_Co_CEO.svg",
        description:
            "Vanita Kerai is the Co-CEO of MetaApply IE, bringing over 25 years of experience in global marketing, strategic growth, and student engagement. She previously served as CMO at GEDU Global Education and held leadership roles at Global University Systems, QS Quacquarelli Symonds, and Lexis Nexis. At MetaApply, she focuses on using AI-driven innovation to make global education more accessible and empower students worldwide.",
    },
    {
        name: "Vanita Kerai",
        role: "Co-CEO",
        image: "/about-us/Vanita_Co_CEO.svg",
        description:
            "Vanita Kerai is the Co-CEO of MetaApply IE, bringing over 25 years of experience in global marketing, strategic growth, and student engagement. She previously served as CMO at GEDU Global Education and held leadership roles at Global University Systems, QS Quacquarelli Symonds, and Lexis Nexis. At MetaApply, she focuses on using AI-driven innovation to make global education more accessible and empower students worldwide.",
    },
];

export default function CoCEOSection() {
    return (
        <Box
            sx={{
                py: { xs: "60px", md: "80px" },
                px: { xs: "20px", md: "40px" },
                background:
                    "linear-gradient(180deg, #F6F8FB 0%, #F8F6FA 100%)",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "1320px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "32px",
                }}
            >
                {/* Heading */}
                <SectionHeader
                    title="Our"
                    highlight="Co-CEOs"
                    mb="0px"
                />

                {/* Cards */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            lg: "repeat(2, 1fr)",
                        },
                        gap: "18px",
                    }}
                >
                    {coFounders.map((founder, index) => (
                        <Box
                            key={index}
                            sx={{
                                background: " #FFFFFF",
                                borderRadius: "12px",
                                p: "12px",
                                display: "flex",
                                gap: "10px",
                                minHeight: { xs: "auto", md: "460px" },
                                flexDirection: {
                                    xs: "column",
                                    sm: "row",
                                },
                            }}
                        >
                            {/* Image */}
                            <Box
                                sx={{
                                    position: "relative",
                                    width: {
                                        xs: "100%",
                                        sm: "348px",
                                    },
                                    height: {
                                        xs: "320px",
                                        sm: "460px",
                                    },
                                    borderRadius: "12px",
                                    overflow: "hidden",
                                    flexShrink: 0,
                                }}
                            >
                                <Image
                                    src={founder.image}
                                    alt={founder.name}
                                    fill
                                    style={{
                                        objectFit: "cover",
                                    }}
                                />
                            </Box>

                            {/* Content */}
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    gap: "16px",
                                    flex: 1,
                                    py: "8px",
                                }}
                            >
                                {/* Description */}
                                <Typography
                                    sx={{
                                        fontFamily: "Open Sans",
                                        fontWeight: 400,
                                        fontSize: "14px",
                                        lineHeight: "24px",
                                        color: "#202020",
                                    }}
                                >
                                    {founder.description}
                                </Typography>

                                {/* Name & Role */}
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "2px",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontFamily:
                                                "Plus Jakarta Sans",
                                            fontWeight: 500,
                                            fontSize: "20px",
                                            lineHeight: "28px",
                                            color: "#2E318C",
                                        }}
                                    >
                                        {founder.name}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            fontFamily: "Open Sans",
                                            fontWeight: 600,
                                            fontSize: "16px",
                                            lineHeight: "28px",
                                            color: "#031621",
                                        }}
                                    >
                                        {founder.role}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}