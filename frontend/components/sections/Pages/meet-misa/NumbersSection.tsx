"use client";

import SectionHeader from "@/components/common/SectionHeader";
import { Box, Typography } from "@mui/material";

const statsData = [
    {
        number: "30+",
        label: "Study\nDestinations",
        bg: "#F1F0B8",
    },
    {
        number: "5K+",
        label: "Enrolled\nStudents",
        bg: "#D9C8EE",
    },
    {
        number: "07+",
        label: "Study Abroad\nCentres",
        bg: "#EDC9DD",
    },
    {
        number: "60K+",
        label: "Global\nCommunity",
        bg: "#D8F0E1",
    },
];

export default function NumbersSection() {
    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                py: "80px",
                background: "#FFFFFF",
            }}
        >
            <Box
                sx={{
                    width: "1320px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "40px",
                }}
            >
                {/* SECTION HEADING */}
                <SectionHeader
                    title="Our"
                    highlight="Numbers"
                    mb="0px"
                />

                {/* CARDS */}
                <Box
                    sx={{
                        display: "flex",
                        gap: "40px",
                        flexWrap: "nowrap",
                    }}
                >
                    {statsData.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: "306px",
                                height: "246px",
                                borderRadius: "20px",
                                background: item.bg,
                                pt: "44px",
                                pr: "24px",
                                pb: "44px",
                                pl: "24px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Box
                                sx={{
                                    width: "198px",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    gap: "18px",
                                    textAlign: "center",
                                }}
                            >
                                {/* NUMBER */}
                                <Typography
                                    sx={{
                                        fontFamily: "Plus Jakarta Sans",
                                        fontWeight: 700,
                                        fontSize: "48px",
                                        lineHeight: "100%",
                                        letterSpacing: "0%",
                                        color: "#031621",
                                    }}
                                >
                                    {item.number}
                                </Typography>

                                {/* LABEL */}
                                <Typography
                                    sx={{
                                        fontFamily: "Open Sans",
                                        fontWeight: 600,
                                        fontSize: "28px",
                                        lineHeight: "100%",
                                        letterSpacing: "0%",
                                        color: "#031621",
                                        whiteSpace: "pre-line",
                                    }}
                                >
                                    {item.label}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}