"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import Section from "@/components/common/Section";
import Image from "next/image";

export default function JoinNetworkCTA() {
    return (
        <Section
            spacing="lg"
            container={false}
            sx={{
                py: {
                    xs: 6,
                    md: 10,
                },

                /*
                  KEEP SAME BG WIDTH
                  AS YOUR ORIGINAL
                */
                px: {
                    xs: 2,
                    sm: 3,
                    md: 4,
                },

                overflow: "hidden",
            }}
        >
            {/* MAIN CARD */}
            <Box
                sx={{
                    width: "100%",

                    maxWidth: "1840px",

                    mx: "auto",

                    position: "relative",

                    overflow: "hidden",

                    borderTopRightRadius: {
                        xs: "40px",
                        md: "80px",
                    },

                    borderBottomLeftRadius: {
                        xs: "40px",
                        md: "80px",
                    },

                    background:
                        "linear-gradient(262.64deg, #5D0031 -2.68%, #000052 31.59%)",

                    boxShadow:
                        "20px 25px 75px 0px #ABABAB33",

                    pt: {
                        xs: 5,
                        md: 6,
                    },
                    pb:{
                        md:6
                    },

                    minHeight: {
                        xs: "auto",
                        md: "421px",
                    },
                }}
            >
                <Container>
                    <Box
                        sx={{
                            display: "flex",

                            flexDirection: {
                                xs: "column",
                                md: "row",
                            },

                            alignItems: {
                                xs: "flex-start",
                                md: "center",
                            },

                            justifyContent:
                                "space-between",

                            gap: {
                                xs: 5,
                                md: 4,
                                lg: 6,
                            },
                        }}
                    >
                        {/* LEFT CONTENT */}
                        <Box
                            sx={{
                                width: "100%",

                                maxWidth: {
                                    xs: "100%",
                                    lg: "875px",
                                },

                                zIndex: 2,

                                textAlign: "left",

                                display: "flex",

                                flexDirection:
                                    "column",

                                alignItems:
                                    "flex-start",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily:
                                        "Plus Jakarta Sans",

                                    fontWeight: 500,

                                    fontSize: {
                                        xs: "28px",
                                        sm: "34px",
                                        md: "30px",
                                        lg: "42px",
                                    },

                                    lineHeight: {
                                        xs: "40px",
                                        sm: "48px",
                                        md: "38px",
                                        lg: "62px",
                                    },

                                    color: "#FFFFFF",

                                    maxWidth: {
                                        xs: "100%",
                                        md: "875px",
                                    },
                                }}
                            >
                                Grow your study
                                abroad business
                                with MetaApply,
                                trusted by partners
                                across the globe
                            </Typography>

                            {/* BUTTON */}
                            <Button
                                variant="contained"
                                sx={{
                                    mt: {
                                        xs: 3,
                                        md: 5,
                                    },

                                    width: {
                                        xs: "100%",
                                        sm: "229px",
                                    },

                                    maxWidth:
                                        "229px",

                                    height:
                                        "60px",

                                    borderRadius:
                                        "12px",

                                    px: "32px",

                                    py: "12px",

                                    textTransform:
                                        "none",

                                    fontFamily:
                                        "Plus Jakarta Sans",

                                    fontWeight: 600,

                                    fontSize: {
                                        xs: "18px",
                                        md: "20px",
                                    },

                                    lineHeight:
                                        "100%",

                                    background:
                                        "linear-gradient(90deg, #FF3185 0%, #FF7BB0 100%)",

                                    color:
                                        "#FFFFFF",

                                    boxShadow:
                                        "none",

                                    "&:hover": {
                                        background:
                                            "linear-gradient(90deg, #FF3185 0%, #FF7BB0 100%)",

                                        boxShadow:
                                            "none",
                                    },
                                }}
                            >
                                Join Our Network
                            </Button>
                        </Box>

                        {/* RIGHT IMAGE */}
                        <Box
                            sx={{
                                position:
                                    "relative",

                                width: {
                                    xs: "240px",
                                    sm: "320px",
                                    md: "466px",
                                },

                                height: {
                                    xs: "220px",
                                    sm: "320px",
                                    md: "401px",
                                },

                                flexShrink: 0,

                                display: "flex",

                                justifyContent:
                                    "center",

                                alignItems:
                                    "flex-end",

                                alignSelf: {
                                    xs: "center",
                                    md: "flex-end",
                                },

                                mx: {
                                    xs: "auto",
                                    md: 0,
                                },
                            }}
                        >
                            <Image
                                src="/recruitment-partner/CTA-img.svg"
                                alt="Join Network"
                                fill
                                style={{
                                    objectFit:
                                        "contain",
                                }}
                                priority
                            />
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Section>
    );
}