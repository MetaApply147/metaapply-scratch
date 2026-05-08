"use client";

import SectionHeader from "@/components/common/SectionHeader";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const guidanceCards = [
    {
        title: "AMPLIFY",
        description: "Expand your university’s reach globally",
        image: "/meet-misa/Amlify.svg",
    },
    {
        title: "Career Counselling",
        description: "Right guidance for career decisions",
        image: "/meet-misa/counselling.svg",
    },
    {
        title: "TESTPREP",
        description: "Ace IELTS, TOEFL, PTE with ease",
        image: "/meet-misa/testprep.svg",
    },
    {
        title: "MAPPLY",
        description: "Your first step towards a medical journey abroad",
        image: "meet-misa/BE-A-DOCTOR-LOGO.svg",
    },
    {
        title: "NextStep",
        description: "Preparation tips for successful placements",
        image: "/meet-misa/nextstep.svg",
    },
    {
        title: "MetaFinance",
        description: "Easy and stress-free education funding",
        image: "/meet-misa/metafinance.svg",
    },
    {
        title: "MetaInsure",
        description: "Secure, affordable travel and health insurance",
        image: "/meet-misa/metainsure.svg",
    },
    {
        title: "MetaStay",
        description: "Safe and comfortable homes abroad",
        image: "/meet-misa/metaStay.svg",
    },
    {
        title: "MetaFly",
        description: "Affordable flight tickets to your dream destination",
        image: "/meet-misa/metafly.svg",
    },
    {
        title: "MetaApply Portal & App",
        description: "Simplifying the study abroad journey under one roof",
        image: "",
        dark: true,
    },
    {
        title: "Study Abroad Centres",
        description: "Local centres making global dreams possible",
        image: "",
        dark: true,
    },
];

export default function GuidanceSection() {
    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                overflow: "hidden",
                position: "relative",
                backgroundColor: "#FFF7FC",
                backgroundImage: "url('/meet-misa/Background.svg')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top center",
                backgroundSize: "cover",
            }}
        >
            {/* LEFT BG CIRCLE */}
            <Box
                sx={{
                    position: "absolute",
                    left: {
                        md: "6%",
                        lg: "9%",
                        xl: "8%",
                    },
                    bottom: "0",
                    width: "495px",
                    height: "634px",
                    borderTopLeftRadius: "292px",
                    borderTopRightRadius: "292px",
                    background:
                        "linear-gradient(180deg, rgba(255,189,223,0.18) 0%, rgba(255,189,223,0.04) 100%)",
                    zIndex: 1,
                }}
            />

            {/* MAIN CONTAINER */}
            <Box
                sx={{
                    width: "1320px",
                    minHeight: "1002px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    position: "relative",
                    zIndex: 2,
                    py: "80px",
                    px: "0px",
                }}
            >
                {/* LEFT ROBOT */}
                <Box
                    sx={{
                        width: "429px",
                        height: "712px",
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        left: "-70px",
                        bottom: "-100px",
                    }}
                >
                    <Image
                        src="/meet-misa/MISA.svg"
                        alt="MISA Robot"
                        fill
                        style={{
                            objectFit: "contain",
                        }}
                    />
                </Box>

                {/* RIGHT CONTENT */}
                <Box
                    sx={{
                        width: "863px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "42px",
                        marginLeft: "20px",
                    }}
                >
                    {/* HEADER */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "14px",
                        }}
                    >
                        <SectionHeader
                            title="One Platform, Endless"
                            highlight="Study Abroad Support"
                            mb="0px"
                        />

                        <Typography
                            sx={{
                                fontFamily: "Open Sans",
                                fontWeight: 400,
                                fontSize: "18px",
                                lineHeight: "100%",
                                letterSpacing: "0%",
                                color: "#000000",
                                textAlign: "center",
                            }}
                        >
                            Empowering students and professionals across
                            multiple domains
                        </Typography>
                    </Box>

                    {/* GRID */}
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns:
                                "repeat(3, minmax(0, 260px))",
                            columnGap: "32px",
                            rowGap: "20px",

                            width: "863px",
                        }}
                    >
                        {guidanceCards.map((card, index) => (
                            <Box
                                key={index}
                                sx={{
                                    width: "260px",
                                    minHeight: "160px",
                                    borderRadius: "12px",
                                    border:
                                        "1.03px solid rgba(231, 172, 206, 0.4)",
                                    background:
                                        "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)",
                                    boxShadow:
                                        "0px 8px 24px rgba(235,235,235,0.4)",
                                    p: "24px",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "12px",
                                }}
                            >
                                {/* LOGO / TITLE */}
                                {card.image ? (
                                    <Box
                                        sx={{
                                            width: "174px",
                                            height: "60px",
                                            position: "relative",
                                        }}
                                    >
                                        <Image
                                            src={card.image}
                                            alt={card.title}
                                            fill
                                            style={{
                                                objectFit: "contain",
                                                objectPosition: "left",
                                            }}
                                        />
                                    </Box>
                                ) : (
                                    <Typography
                                        sx={{
                                            fontFamily:
                                                "Plus Jakarta Sans",
                                            fontWeight: 700,
                                            fontSize: "18px",
                                            lineHeight: "120%",
                                            color: card.dark
                                                ? "#2A3795"
                                                : "#222222",
                                        }}
                                    >
                                        {card.title}
                                    </Typography>
                                )}

                                {/* DESCRIPTION */}
                                <Typography
                                    sx={{
                                        fontFamily: "Open Sans",
                                        fontWeight: 400,
                                        fontSize: "14px",
                                        lineHeight: "140%",
                                        color: "#474747",
                                    }}
                                >
                                    {card.description}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}