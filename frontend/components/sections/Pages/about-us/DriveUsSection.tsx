"use client";

import SectionHeader from "@/components/common/SectionHeader";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const content = {
    mission: {
        title: "Mission",
        description:
            "At MetaApply, we are setting a new standard in the industry with our unwavering commitment to innovation, problem-solving, and integrity. Our vision is to continually introduce groundbreaking solutions that simplify and enhance the experience for all our stakeholders. By combining cutting-edge technology with human intervention, we aim to solve problems effectively and ethically.",
        image: "/about-us/left.svg",
    },
    vision: {
        title: "Vision",
        description:
            "At MetaApply, we are setting a new standard in the industry with our unwavering commitment to innovation, problem-solving, and integrity. Our vision is to continually introduce groundbreaking solutions that simplify and enhance the experience for all our stakeholders. By combining cutting-edge technology with human intervention, we aim to solve problems effectively and ethically.",
        image: "/about-us/right.svg",
    },
};

export default function DrivesUsSection() {
    return (
        <Box
            sx={{
                py: { xs: "60px", md: "80px" },
                px: { xs: "20px", sm: "32px", md: "40px" },
                background: "#FFFFFF",
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
                    gap: { xs: "32px", md: "52px" },
                }}
            >
                {/* Heading */}
                <SectionHeader
                    title="What"
                    highlight="Drives Us"
                    mb="0px"
                />

                {/* Mission Card */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "320px 1fr",
                            lg: "423px 1fr",
                        },
                        borderRadius: "16px",
                        background: "#F8F8F8",
                        
                    }}
                >
                    {/* Left Image */}
                    <Box
                        sx={{
                            position: "relative",
                            minHeight: {
                                xs: "260px",
                                sm: "320px",
                                md: "250px",
                            },
                            background: "#F8F8F8",
                        }}
                    >
                        <Image
                            src={content.mission.image}
                            alt="Mission illustration"
                            fill
                            style={{
                                objectFit: "contain",
                            }}
                        />
                    </Box>

                    {/* Right Content */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            gap: "20px",
                            px: {
                                xs: "24px",
                                sm: "32px",
                                md: "42px",
                            },
                            py: {
                                xs: "28px",
                                sm: "32px",
                                md: "42px",
                            },
                            background: "#FFFFFF",
                            boxShadow: "0px 6px 40px 0px #C4C4C440",
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: "Plus Jakarta Sans",
                                fontWeight: 600,
                                fontSize: {
                                    xs: "24px",
                                    md: "20px",
                                },
                                lineHeight: "180%",
                                color: "#031621",
                            }}
                        >
                            Our{" "}
                            <Box
                                component="span"
                                sx={{
                                    color: "#FF3185",
                                }}
                            >
                                {content.mission.title}
                            </Box>
                        </Typography>

                        <Typography
                            sx={{
                                fontFamily: "Open Sans",
                                fontWeight: 400,
                                fontSize: {
                                    xs: "15px",
                                    md: "16px",
                                },
                                lineHeight: {
                                    xs: "28px",
                                    md: "24.58px",
                                },
                                color: "#202020",
                            }}
                        >
                            {content.mission.description}
                        </Typography>
                    </Box>
                </Box>

                {/* Vision Card */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "1fr 320px",
                            lg: "1fr 423px",
                        },
                        borderRadius: "16px",
                        background: "#F8F8F8",
                    }}
                >
                    {/* Left Content */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            gap: "20px",
                            px: {
                                xs: "24px",
                                sm: "32px",
                                md: "48px",
                            },
                            py: {
                                xs: "28px",
                                sm: "32px",
                                md: "42px",
                            },
                            background: "#FFFFFF",
                            boxShadow: "0px 6px 40px 0px #C4C4C440",
                            order: {
                                xs: 2,
                                md: 1,
                            },
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: "Plus Jakarta Sans",
                                fontWeight: 600,
                                fontSize: {
                                    xs: "24px",
                                    md: "20px",
                                },
                                lineHeight: "180%",
                                color: "#031621",
                            }}
                        >
                            Our{" "}
                            <Box
                                component="span"
                                sx={{
                                    color: "#FF3185",
                                }}
                            >
                                {content.vision.title}
                            </Box>
                        </Typography>

                        <Typography
                            sx={{
                                fontFamily: "Open Sans",
                                fontWeight: 400,
                                fontSize: {
                                    xs: "15px",
                                    md: "16px",
                                },
                                lineHeight: {
                                    xs: "28px",
                                    md: "24.58px",
                                },
                                color: "#202020",
                            }}
                        >
                            {content.vision.description}
                        </Typography>
                    </Box>

                    {/* Right Image */}
                    <Box
                        sx={{
                            position: "relative",
                            minHeight: {
                                xs: "260px",
                                sm: "320px",
                                md: "250px",
                            },
                            background: "#F8F8F8",
                            order: {
                                xs: 1,
                                md: 2,
                            },
                        }}
                    >
                        <Image
                            src={content.vision.image}
                            alt="Vision illustration"
                            fill
                            style={{
                                objectFit: "contain",
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}