"use client";

import Section from "@/components/common/Section";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

export default function CTASection() {
    return (
        <Section spacing="lg">
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    px: { xs: 2, md: 0 },
                    overflow: "visible",
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        maxWidth: "1321px",
                        minHeight: { xs: "760px", md: "475px" },
                        position: "relative",
                        overflow: "visible",

                        borderTopRightRadius: "80px",
                        borderBottomRightRadius: "80px",
                        borderBottomLeftRadius: "80px",

                        background:
                            "linear-gradient(263.14deg, #8547A1 2.19%, #000052 99.36%)",

                        boxShadow: "20px 25px 75px rgba(0,0,0,0.25)",
                    }}
                >
                    {/* Inner Clipping Layer */}
                    <Box
                        sx={{
                            position: "absolute",
                            inset: 0,
                            overflow: "hidden",
                            borderTopRightRadius: "80px",
                            borderBottomRightRadius: "80px",
                            borderBottomLeftRadius: "80px",
                        }}
                    >
                        {/* Transparent Circle */}
                        <Box
                            sx={{
                                position: "absolute",
                                width: { xs: "560px", md: "900px" },
                                height: { xs: "560px", md: "880px" },
                                borderRadius: "50%",
                                background: "rgba(255,255,255,0.10)",
                                right: { xs: "-120px", md: "-150px" },
                                bottom: { xs: "-120px", md: "-480px" },
                                zIndex: 1,
                            }}
                        />

                        {/* Yellow Gradient Circle */}
                        <Box
                            sx={{
                                position: "absolute",
                                width: { xs: "430px", md: "716px" },
                                height: { xs: "430px", md: "662px" },
                                borderRadius: "50%",
                                background:
                                    "linear-gradient(104.81deg, #FFC058 10.22%, #FF5EA0 89.54%)",
                                right: { xs: "-30px", md: "-60px" },
                                bottom: { xs: "-230px", md: "-335px" },
                                zIndex: 2,
                            }}
                        />
                    </Box>

                    {/* Left Content */}
                    <Box
                        sx={{
                            position: "absolute",
                            left: { xs: "32px", md: "70px" },
                            top: { xs: "55px", md: "95px" },
                            width: {
                                xs: "calc(100% - 64px)",
                                md: "620px",
                                lg: "751px",
                            },
                            zIndex: 5,
                            display: "flex",
                            flexDirection: "column",
                            gap: { xs: "28px", md: "40px" },
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: "Plus Jakarta Sans",
                                fontWeight: 600,
                                color: "#FFFFFF",
                                fontSize: {
                                    xs: "34px",
                                    sm: "38px",
                                    md: "40px",
                                },
                                lineHeight: {
                                    xs: "46px",
                                    md: "52px",
                                },
                                maxWidth: {
                                    xs: "100%",
                                    md: "650px",
                                },
                            }}
                        >
                            Start your study abroad journey with the right exam and expert preparation.
                        </Typography>

                        <Button
                            sx={{
                                width: { xs: "260px", md: "315px" },
                                height: "60px",
                                borderRadius: "16px",
                                background: "#FFFFFF",
                                color: "#FF3185",
                                fontFamily: "Plus Jakarta Sans",
                                fontWeight: 600,
                                fontSize: {
                                    xs: "18px",
                                    md: "20px",
                                },
                                textTransform: "none",
                                boxShadow: "none",
                                '&:hover': {
                                    background: "#FFFFFF",
                                    boxShadow: "none",
                                },
                            }}
                        >
                            Book a FREE Demo Session
                        </Button>
                    </Box>

                    {/* Student Image */}
                    <Box
                        sx={{
                            position: "absolute",
                            width: {
                                xs: "290px",
                                md: "396px",
                            },
                            height: {
                                xs: "420px",
                                md: "560px",
                            },
                            right: {
                                xs: "50%",
                                md: "95px",
                            },
                            transform: {
                                xs: "translateX(50%)",
                                md: "none",
                            },
                            bottom: 0,
                            zIndex: 4,
                            overflow: "visible",
                        }}
                    >
                        <Image
                            src="/test-prep/CTA-boy.webp"
                            alt="CTA Student"
                            fill
                            priority
                            style={{
                                objectFit: "contain",
                                objectPosition: "bottom center",
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Section>
    );
}
