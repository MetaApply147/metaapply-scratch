"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";

const progressData = [
    {
        icon: "/about-us/student-helped.svg",
        value: "5K+",
        label: "Students helped",
    },
    {
        icon: "/about-us/globe.svg",
        value: "30+",
        label: "Study Destinations",
    },
    {
        icon: "/about-us/community.svg",
        value: "75K+",
        label: "Student Community",
    },
    {
        icon: "/about-us/university.svg",
        value: "400+",
        label: "Partnered Universities",
    },
];

export default function ProgressSection() {
    return (
        <Box
            sx={{
                px: {
                    xs: "20px",
                    sm: "32px",
                    md: "40px",
                },
                pb: {
                    xs: "60px",
                    md: "80px",
                },
                display: "flex",
                justifyContent: "center",
                background: "#FFFFFF",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    background: "linear-gradient(262.64deg, #5D0031 -2.68%, #000052 31.59%)",
                    boxShadow: "20px 25px 75px 0px #ABABAB33",
                    borderTopRightRadius: {
                        xs: "32px",
                        md: "80px",
                    },
                    borderBottomLeftRadius: {
                        xs: "32px",
                        md: "80px",
                    },
                    overflow: "hidden",
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        maxWidth: "1320px",
                        mx: "auto",
                        px: {
                            xs: "20px",
                            sm: "32px",
                            md: "60px",
                        },
                        py: {
                            xs: "40px",
                            md: "60px",
                        },
                        display: "flex",
                        flexDirection: "column",
                        gap: {
                            xs: "32px",
                            md: "52px",
                        },
                    }}
                >
                    {/* Heading */}
                    <Typography
                        sx={{
                            fontFamily: "Plus Jakarta Sans",
                            fontWeight: 600,
                            fontSize: {
                                xs: "32px",
                                sm: "36px",
                                md: "40px",
                            },
                            lineHeight: "100%",
                            color: "#FFFFFF",
                        }}
                    >
                        Our Progress
                    </Typography>

                    {/* Cards */}
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "1fr",
                                sm: "repeat(2, 1fr)",
                                lg: "repeat(4, 1fr)",
                            },
                            gap: "24px",
                        }}
                    >
                        {progressData.map((item, index) => (
                            <Box
                                key={index}
                                sx={{
                                    background: "#FFFFFF",
                                    borderRadius: "16px",
                                    p: {
                                        xs: "24px",
                                        md: "32px 24px",
                                    },
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "24px",
                                    minHeight: {
                                        xs: "200px",
                                        md: "234px",
                                    },
                                    boxShadow:
                                        "0px 2px 4px -1px #1C21331A",
                                }}
                            >
                                {/* Icon */}
                                <Box
                                    sx={{
                                        position: "relative",
                                        width: "79px",
                                        height: "76px",
                                    }}
                                >
                                    <Image
                                        src={item.icon}
                                        alt={item.label}
                                        fill
                                        style={{
                                            objectFit: "contain",
                                        }}
                                    />
                                </Box>

                                {/* Content */}
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "4px",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontFamily:
                                                "Plus Jakarta Sans",
                                            fontWeight: 600,
                                            fontSize: {
                                                xs: "28px",
                                                md: "32px",
                                            },
                                            lineHeight: {
                                                xs: "38px",
                                                md: "42px",
                                            },
                                            letterSpacing: "0.15px",
                                            color: "#031621",
                                        }}
                                    >
                                        {item.value}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            fontFamily: "Open Sans",
                                            fontWeight: 400,
                                            fontSize: "16px",
                                            lineHeight: "24px",
                                            color: "#202020",
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
        </Box>
    );
}