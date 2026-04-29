"use client";

import { Box, Button, Typography } from "@mui/material";
import Section from "@/components/common/Section";
import Image from "next/image";

export default function QuizCTASection() {
    return (
        <Section spacing="lg" container={false}>
            <Box
                sx={{
                    width: "100%",
                    px: "40px", // matches Figma left-right spacing
                    display: "flex",
                    justifyContent: "center",
                    boxSizing: "border-box",
                }}
            >
                {/* Main Card */}
                <Box
                    sx={{
                        width: "100%",
                        maxWidth: "1840px",
                        height: "421px",
                        borderTopRightRadius: "80px",
                        borderBottomLeftRadius: "80px",
                        background:
                            "linear-gradient(262.64deg, #5D0031 -2.68%, #000052 31.59%)",
                        boxShadow: "20px 25px 75px 0px #ABABAB33",
                        overflow: "hidden",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                    }}
                >
                    {/* Inner Card */}
                    <Box
                        sx={{
                            width: "1314px",
                            height: "370px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            position: "relative",
                            zIndex: 2,
                        }}
                    >
                        {/* Left Content */}
                        <Box
                            sx={{
                                width: "988px",
                                height: "204px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                gap: "82px",
                            }}
                        >
                            {/* Text */}
                            <Typography
                                sx={{
                                    width: "875px",
                                    fontFamily: "Plus Jakarta Sans",
                                    fontWeight: 500,
                                    fontSize: "40px",
                                    lineHeight: "52px",
                                    color: "#FFFFFF",
                                }}
                            >
                                Test your English Language Skills with this 5 minutes Quiz
                            </Typography>

                            {/* Button */}
                            <Button
                                sx={{
                                    width: "236px",
                                    height: "60px",
                                    borderRadius: "12px",
                                    px: "32px",
                                    py: "12px",
                                    textTransform: "none",
                                    background:
                                        "linear-gradient(270.04deg, #FF3185 33.28%, #FF7BB0 99.98%)",
                                    boxShadow: "none",

                                    "&:hover": {
                                        background:
                                            "linear-gradient(270.04deg, #FF3185 33.28%, #FF7BB0 99.98%)",
                                        boxShadow: "none",
                                    },
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontFamily: "Plus Jakarta Sans",
                                        fontWeight: 600,
                                        fontSize: "20px",
                                        lineHeight: "100%",
                                        color: "#FFFFFF",
                                        textAlign: "center",
                                    }}
                                >
                                    Take the Test Now
                                </Typography>
                            </Button>
                        </Box>

                        {/* Right Image */}
                        <Box
                            sx={{
                                width: "371px",
                                height: "370px",
                                position: "relative",
                                flexShrink: 0,
                            }}
                        >
                            <Image
                                src="/test-prep/CTA.svg"
                                alt="Quiz Illustration"
                                fill
                                priority
                                style={{
                                    objectFit: "contain",
                                }}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Section>
    );
}