"use client";

import SectionHeader from "@/components/common/SectionHeader";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function AboutSection() {
    return (
        <Box
            sx={{
                py: "80px",
                background: "#FFFFFF",
                display: "flex",
                justifyContent: "center",
            }}
        >
            {/* CARD */}
            <Box
                sx={{
                    width: "1288px",
                    maxHeight: "418px",
                    borderRadius: "24px",
                    background: "linear-gradient(135deg, #ECF5FF 0%, #FFFFFF 100%)",
                    borderLeft: "3px solid #FF3185",
                    pt: "60px",
                    pr: "100px",
                    pb: "48px",
                    pl: "100px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "8px",
                    position: "relative",
                    overflow: "visible",
                }}
            >
                {/* LEFT: Text Content */}
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                        zIndex: 2,
                    }}
                >
                    {/* Heading */}
                    <SectionHeader
                        title="About"
                        highlight="MISA"
                        mb="0px"
                    />

                    {/* Description */}
                    <Box
                        sx={{
                            fontFamily: "Open Sans",
                            fontWeight: 400,
                            fontSize: "18px",
                            lineHeight: "28px",
                            letterSpacing: "0%",
                            color: "#505050",
                            maxWidth: "764px",
                        }}
                    >
                        <Typography sx={{ marginBottom: "1rem" }}>
                            I’m "My International Study Advisor" – or MISA, as those who know me like to say. I’m the official mascot of MetaApply IE. In today’s AI-driven world, I’m your AI-powered study abroad advisor (or ‘chatbot’, as the technician calls me), here to make your journey smooth and stress-free.
                        </Typography>
                        <Typography>
                            I simplify the complex process of studying overseas, guiding you every step of the way. From application to admission, I provide timely updates, tailored advice, and expert support. And that’s not all – whenever you need one-to-one guidance, I’ll connect you directly with a MetaApply IE counsellor, ensuring you always have the right help at the right time.
                        </Typography>
                    </Box>
                </Box>

                <Box
                    sx={{
                        width: "434px",
                        height: "500px",
                        flexShrink: 0,
                        position: "relative",
                        zIndex: 2,
                        marginRight: "-20px",
                        marginTop: "-62px",
                        marginBottom: "-33px"
                    }}
                >
                    <Image
                        src="/meet-misa/About-MISA.svg"
                        alt="MISA chatbot illustration"
                        fill
                        style={{
                            objectFit: "contain",
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
}