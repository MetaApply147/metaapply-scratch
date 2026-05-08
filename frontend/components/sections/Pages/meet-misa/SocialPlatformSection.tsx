"use client";

import SectionHeader from "@/components/common/SectionHeader";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function SocialPlatformSection() {
    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                pb: "80px",
                background: "#FFFFFF",
            }}
        >
            <Box
                sx={{
                    width: "1074px",
                    height: "166px",
                    border: "1px solid #FF3185",
                    borderRadius: "24px",
                    background: "#FFFFFF",
                    boxShadow: "0px 10px 30px rgba(255, 49, 133, 0.10)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    px: "40px",
                }}
            >
                {/* LEFT TEXT */}
                <SectionHeader
                    title="Explore more on our"
                    highlight="Social Platform"
                    mb="0px"
                />

                {/* INSTAGRAM ICON */}
                <Box
                    sx={{
                        width: "88px",
                        height: "148px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                    }}
                >
                    <Box
                        sx={{
                            width: "48px",
                            height: "48px",
                            position: "relative",
                        }}
                    >
                        <Image
                            src="/meet-misa/Instagram.svg"
                            alt="Instagram"
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