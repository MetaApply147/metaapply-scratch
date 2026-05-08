"use client";

import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

type Feature = {
    text: string;
    highlight?: string;
};

type Props = {
    title: string;
    bg: string;
    features: Feature[];
    recommended?: boolean;
};

function PricingCard({ title, bg, features, recommended }: Props) {
    const [hover, setHover] = useState(false);

    return (
        <Box
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            sx={{
                width: "419px",
                minHeight: "856px",
                borderRadius: "24px",
                overflow: "visible",
                position: "relative",
                background: "#FFFFFF",
                boxShadow: "0px 4px 38px rgba(0,0,0,0.04)",
                transition: "all .3s ease",
            }}
        >
            {/* TOP IMAGE */}
            <Box
                sx={{
                    width: "100%",
                    height: "195px",
                    position: "relative",
                    zIndex: 5,
                    overflow: "visible",
                    borderTopLeftRadius: "24px",
                    borderTopRightRadius: "24px",
                }}
            >
                <Image
                    src={bg}
                    alt=""
                    fill
                    style={{
                        objectFit: "cover",
                    }}
                />

                {/* RECOMMENDED BADGE */}
                {recommended && (
                    <Box
                        sx={{
                            position: "absolute",
                            top: "-3px",
                            right: "0",
                            width: "190px",
                            height: "33px",
                            background: "#39B487",
                            borderTopRightRadius: "24px",
                            borderBottomLeftRadius: "24px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 50,
                            overflow: "visible",
                            "&::before": {
                                content: '""',
                                position: "absolute",
                                top: "0",
                                left: "-7.38px",
                                width: "7.38px",
                                height: "3.12px",
                                background: "#39B487",
                                boxShadow:
                                    "-1.11px 1.11px 1.11px rgba(0,0,0,0.25) inset",
                                borderTopLeftRadius: "4px",
                                zIndex: 60,
                            },
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: "Plus Jakarta Sans",
                                fontWeight: 600,
                                fontSize: "14px",
                                lineHeight: "100%",
                                letterSpacing: "0%",
                                color: "#FFFFFF",
                            }}
                        >
                            Highly Recommended
                        </Typography>
                    </Box>
                )}
                {/* GLASS TITLE */}
                <Box
                    sx={{
                        position: "absolute",
                        top: "43px",
                        left: "56px",
                        width: "308px",
                        height: "110px",
                        borderRadius: "24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid rgba(255,255,255,0.35)",
                        background: "rgba(255,255,255,0.08)",
                        backdropFilter: "blur(10px)",
                        boxShadow:
                            "inset 1px 1px 4px rgba(255,255,255,0.6), inset 1px 1px 1px rgba(255,255,255,0.4)",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "40px",
                            lineHeight: "100%",
                            fontWeight: 700,
                            color: "#FFFFFF",
                            fontFamily: "Open Sans",
                        }}
                    >
                        {title}
                    </Typography>
                </Box>
            </Box>

            {/* CONTENT */}
            <Box
                sx={{
                    px: "40px",
                    pt: "32px",
                    pb: "40px",
                    display: "flex",
                    flexDirection: "column",
                    height: "calc(100% - 195px)",
                    transition: "all .3s ease",
                    background: hover ? "#32003F" : "#FFFFFF",

                    borderBottomLeftRadius: "24px",
                    borderBottomRightRadius: "24px",

                    position: "relative",
                    zIndex: 2,
                    overflow: "visible",

                }}
            >
                {/* FEATURES */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "14px",
                        flexGrow: 1,
                    }}
                >
                    {features.map((item, i) => (
                        <Box
                            key={i}
                            sx={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: "16px",
                            }}
                        >
                            {/* ICON */}
                            <Box
                                sx={{
                                    width: "18px",
                                    height: "18px",
                                    position: "relative",
                                    mt: "2px",
                                    flexShrink: 0,
                                }}
                            >
                                <Image
                                    src={
                                        hover
                                            ? "/premium-counselling/check-white.svg"
                                            : "/premium-counselling/check.svg"
                                    }
                                    alt=""
                                    fill
                                    style={{ objectFit: "contain" }}
                                />
                            </Box>

                            {/* TEXT */}
                            <Typography
                                sx={{
                                    fontFamily: "Open Sans",
                                    fontWeight: 400,
                                    fontSize: "16px",
                                    lineHeight: "22px",
                                    color: hover ? "#FFFFFF" : "#505050",
                                    transition: "all .3s ease",
                                }}
                            >
                                {item.text}

                                {item.highlight && (
                                    <Box
                                        component="span"
                                        sx={{
                                            color:
                                                item.highlight === "Add On"
                                                    ? "#FF3165"
                                                    : hover
                                                        ? "#00D639"
                                                        : "#01A928",
                                            fontWeight: 600,
                                        }}
                                    >
                                        {item.highlight}
                                    </Box>
                                )}
                            </Typography>
                        </Box>
                    ))}
                </Box>

                {/* BUTTON */}
                <Button
                    sx={{
                        mt: "40px",
                        width: "312px",
                        height: "57px",
                        alignSelf: "center",
                        borderRadius: "16px",
                        textTransform: "none",
                        fontFamily: "Open Sans",
                        fontWeight: 600,
                        fontSize: "16px",
                        transition: "all .3s ease",
                        background: hover
                            ? "#FFFFFF"
                            : "linear-gradient(180deg, #FF3165 0%, #FF7CB1 100%)",
                        color: hover ? "#01A928" : "#FFFFFF",
                        "&:hover": {
                            background: hover
                                ? "#FFFFFF"
                                : "linear-gradient(180deg, #FF3165 0%, #FF7CB1 100%)",
                        },
                    }}
                >
                    Know More
                </Button>
            </Box>
        </Box>
    );
}

export default function PricingPlanSection() {
    const data = [
        {
            title: "Essential",
            bg: "/premium-counselling/Essential.webp",
            features: [
                { text: "Application Scope- ", highlight: "Up to 1 Destination" },
                {
                    text: "University Application Package- ",
                    highlight: "Up to 6 Universities",
                },
                {
                    text: "Dedicated Counsellor Support- ",
                    highlight: "10 Sessions",
                },
                { text: "Visa Success Advisory" },
                {
                    text: "Visa Readiness Mock Interview- ",
                    highlight: "5 Sessions",
                },
                { text: "SOPs / LORs Editing" },
                { text: "CV / Resume Editing" },
                { text: "Application Submission Support" },
                { text: "Loan Assistance" },
                { text: "Accommodation Assistance" },
                { text: "Option to Defer" },
                {
                    text: "Test Preparation- ",
                    highlight: "Add On",
                },
            ],
        },

        {
            title: "Exclusive",
            bg: "/premium-counselling/Exclusive.webp",
            recommended: true,
            features: [
                { text: "Application Scope- ", highlight: "Up to 2 Destinations" },
                {
                    text: "University Application Package- ",
                    highlight: "Up to 8 Universities",
                },
                {
                    text: "Dedicated Counsellor Support- ",
                    highlight: "20 Sessions",
                },
                { text: "Visa Success Advisory" },
                {
                    text: "Visa Readiness Mock Interview- ",
                    highlight: "10 Sessions",
                },
                { text: "SOPs / LORs Editing" },
                { text: "CV / Resume Editing" },
                { text: "Application Submission Support" },
                { text: "Loan Assistance" },
                { text: "Accommodation Assistance" },
                { text: "Option to Defer" },
                {
                    text: "Personalised Test Preparation Online Tutoring",
                },
            ],
        },

        {
            title: "Elite",
            bg: "/premium-counselling/Elite.webp",
            features: [
                { text: "Application Scope- ", highlight: "Up to 3 Destinations" },
                {
                    text: "University Application Package- ",
                    highlight: "Up to 12 Universities",
                },
                {
                    text: "Dedicated Counsellor Support- ",
                    highlight: "30 Sessions",
                },
                { text: "Visa Success Advisory" },
                {
                    text: "Visa Readiness Mock Interview- ",
                    highlight: "Unlimited",
                },
                { text: "SOPs / LORs Editing" },
                { text: "CV / Resume Editing" },
                { text: "Application Submission Support" },
                { text: "Loan Assistance" },
                { text: "Accommodation Assistance" },
                { text: "Option to Defer" },
                {
                    text: "Comprehensive Test Preparation Online Tutoring",
                },
            ],
        },
    ];

    return (
        <Box
            sx={{
                py: "100px",
                background: "#F9FCFF",
            }}
        >
            {/* HEADING */}
            <Box
                sx={{
                    textAlign: "center",
                    mb: "60px",
                }}
            >
                <Typography
                    sx={{
                        fontFamily: "Open Sans",
                        fontWeight: 700,
                        fontSize: "56px",
                        lineHeight: "100%",
                        color: "#061C2C",
                    }}
                >
                    Pick Your Path to{" "}
                    <Box
                        component="span"
                        sx={{
                            color: "#FF3185",
                        }}
                    >
                        Global Education
                    </Box>
                </Typography>

                <Typography
                    sx={{
                        mt: "16px",
                        fontFamily: "Open Sans",
                        fontWeight: 400,
                        fontSize: "20px",
                        lineHeight: "100%",
                        color: "#730098",
                    }}
                >
                    Tailored approach that fits you the best.
                </Typography>
            </Box>

            {/* CARDS */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "28px",
                    flexWrap: "wrap",
                }}
            >
                {data.map((item, i) => (
                    <PricingCard key={i} {...item} />
                ))}
            </Box>
        </Box>
    );
}