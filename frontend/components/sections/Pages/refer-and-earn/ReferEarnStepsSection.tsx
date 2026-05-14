"use client";

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const steps = [
    {
        title: "Find a potential student",
        description:
            "Find a person who would like to pursue his or her education abroad e.g. a friend, a relative or a workmate. They should be willing to learn in an institution of their choice in a foreign country.",
        image: "/refer-and-earn/step-1.svg",
    },
    {
        title: "Share the referral with us",
        description:
            "Fill in the referral form with contact information about the prospective student. When submitted, our team will review and offer them appropriate assistance through the study abroad process.",
        image: "/refer-and-earn/step-2.svg",
    },
    {
        title: "We assist them end-to-end",
        description:
            "We have dedicated team to provide proper assistance to your referral from choosing the right career, to enrolment to a university of their choice during their international education journey.",
        image: "/refer-and-earn/step-3.svg",
    },
    {
        title: "Referral enrols",
        description:
            "When your referred student successfully goes through the enrolment and visa with the chosen university, he or she is ready to begin their study abroad experience with our guidance.",
        image: "/refer-and-earn/step-4.svg",
    },
    {
        title: "Get 50,000 in your account",
        description:
            "You will receive ₹50,000 straight into your account the moment your referral completes the deposit to their dream university. It is that easy, no refer them, and when they enrol you are earning.",
        image: "/refer-and-earn/step-5.svg",
    },
];

function ChevronArrows({ side }: { side: "left" | "right" }) {
    const chevrons = [0, 1, 2, 3];
    return (
        <Box
            sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: side === "left" ? "0px" : "auto",
                right: side === "right" ? "0px" : "auto",
                display: { xs: "none", md: "flex" },
                flexDirection: "row",
                alignItems: "center",
                opacity: 0.15,
                gap: "0px",
            }}
        >
            {chevrons.map((i) => (
                <Box
                    key={i}
                    component="svg"
                    width="80"
                    height="120"
                    viewBox="0 0 80 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 10 L70 60 L10 110"
                        stroke="white"
                        strokeWidth="18"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                    />
                </Box>
            ))}
        </Box>
    );
}

export default function ReferEarnStepsSection() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.down("md"));

    const sectionRef = useRef<HTMLDivElement | null>(null);
    const stepsContainerRef = useRef<HTMLDivElement | null>(null);
    const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

    const [progress, setProgress] = useState(0);
    const [lineTop, setLineTop] = useState(0);
    const [lineHeight, setLineHeight] = useState(0);
    const [dotPositions, setDotPositions] = useState<number[]>([]);

    const measure = () => {
        if (!stepsContainerRef.current || !sectionRef.current) return;

        const sectionTop =
            sectionRef.current.getBoundingClientRect().top + window.scrollY;
        const stepsTop =
            stepsContainerRef.current.getBoundingClientRect().top +
            window.scrollY;
        const stepsHeight = stepsContainerRef.current.offsetHeight;

        const calculatedLineTop = stepsTop - sectionTop;
        setLineTop(calculatedLineTop);
        setLineHeight(stepsHeight);

        const positions: number[] = [];
        stepRefs.current.forEach((ref, index) => {
            if (!ref || index % 2 === 0) return;

            const stepTop =
                ref.getBoundingClientRect().top + window.scrollY;
            const stepHeight = ref.offsetHeight;

            const topDot = stepTop - sectionTop - calculatedLineTop;
            const bottomDot = topDot + stepHeight;

            positions.push(topDot, bottomDot);
        });

        setDotPositions(positions);
    };

    useEffect(() => {
        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, [isMobile, isTablet]);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const totalScrollable = rect.height - windowHeight;
            const current = Math.min(Math.max(-rect.top, 0), totalScrollable);
            const percentage =
                totalScrollable > 0 ? current / totalScrollable : 0;

            setProgress(percentage);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const lineLeftValue = isMobile ? "24px" : "50%";
    const lineTransform = isMobile ? "none" : "translateX(-50%)";

    return (
        <Box
            ref={sectionRef}
            sx={{
                position: "relative",
                py: { xs: "60px", sm: "80px", md: "100px" },
                background: "#fff",
                overflow: "hidden",
            }}
        >
            {/* Heading */}
            <Typography
                sx={{
                    textAlign: "center",
                    fontSize: { xs: "24px", sm: "32px", md: "40px" },
                    fontWeight: 700,
                    lineHeight: "130%",
                    color: "#000",
                    mb: { xs: "40px", sm: "50px", md: "70px" },
                    fontFamily: "Open Sans",
                    px: { xs: "16px", sm: "24px" },
                }}
            >
                How{" "}
                <Box component="span" sx={{ color: "#FF3185" }}>
                    Refer and Earn
                </Box>{" "}
                works?
            </Typography>

            {/* Center/Left Line */}
            <Box
                sx={{
                    position: "absolute",
                    top: `${lineTop}px`,
                    left: lineLeftValue,
                    transform: lineTransform,
                    width: "4px",
                    height: `${lineHeight}px`,
                    background: "#D9D9D9",
                    zIndex: 1000,
                    overflow: "visible",
                }}
            >
                {/* Pink Progress Line */}
                <Box
                    sx={{
                        width: "100%",
                        height: `${progress * 100}%`,
                        background:
                            "linear-gradient(180deg, #FF3185 0%, #CB2E6E 100%)",
                        transition: "height 0.1s linear",
                        position: "relative",
                        overflow: "visible",
                    }}
                >
                    {/* Arrow */}
                    <Box
                        sx={{
                            position: "absolute",
                            top: "100%",
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: 0,
                            height: 0,
                            borderLeft: "14px solid transparent",
                            borderRight: "14px solid transparent",
                            borderTop: "18px solid #FF3185",
                        }}
                    />
                </Box>

                {/* Dots */}
                {dotPositions.map((pos, i) => (
                    <Box
                        key={i}
                        sx={{
                            position: "absolute",
                            top: `${pos}px`,
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: { xs: "20px", md: "28px" },
                            height: { xs: "20px", md: "28px" },
                            borderRadius: "50%",
                            background:
                                "linear-gradient(180deg, #FF3185 0%, #D22D70 100%)",
                            zIndex: 3,
                        }}
                    />
                ))}
            </Box>

            {/* Steps */}
            <Box
                ref={stepsContainerRef}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    zIndex: 2,
                }}
            >
                {steps.map((step, index) => {
                    const isOdd = index % 2 !== 0;

                    return (
                        <Box
                            key={index}
                            ref={(el) => {
                                stepRefs.current[index] =
                                    el as HTMLDivElement | null;
                            }}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: {
                                    xs: "flex-start",
                                    md: "center",
                                },
                                flexDirection: {
                                    xs: "column",
                                    md: isOdd ? "row-reverse" : "row",
                                },
                                gap: {
                                    xs: "24px",
                                    sm: "40px",
                                    md: "286px",
                                },
                                px: {
                                    xs: "48px",
                                    sm: "60px",
                                    md: "40px",
                                },
                                py: {
                                    xs: "40px",
                                    sm: "50px",
                                    md: "70px",
                                },
                                width: "100%",
                                background:
                                    index % 2 === 0 ? "#FFFFFF" : "#FDF3F7",
                            }}
                        >
                            {/* Text */}
                            <Box
                                sx={{
                                    width: { xs: "100%", sm: "100%", md: "592px" },
                                    flexShrink: 0,
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: { xs: "12px", md: "24px" },
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: {
                                            xs: "20px",
                                            sm: "24px",
                                            md: "32px",
                                        },
                                        fontWeight: 700,
                                        lineHeight: "130%",
                                        color: "#2E318C",
                                        fontFamily: "Open Sans",
                                    }}
                                >
                                    {step.title}
                                </Typography>

                                <Typography
                                    sx={{
                                        fontSize: {
                                            xs: "14px",
                                            sm: "16px",
                                            md: "20px",
                                        },
                                        fontWeight: 400,
                                        lineHeight: "160%",
                                        color: "#000000",
                                        fontFamily: "Open Sans",
                                    }}
                                >
                                    {step.description}
                                </Typography>
                            </Box>

                            {/* Image */}
                            <Box
                                sx={{
                                    width: {
                                        xs: "240px",
                                        sm: "320px",
                                        md: "500px",
                                    },
                                    height: {
                                        xs: "240px",
                                        sm: "320px",
                                        md: "500px",
                                    },
                                    position: "relative",
                                    flexShrink: 0,
                                    alignSelf: {
                                        xs: "center",
                                        md: "auto",
                                    },
                                }}
                            >
                                <Image
                                    src={step.image}
                                    alt={step.title}
                                    fill
                                    style={{ objectFit: "contain" }}
                                />
                            </Box>
                        </Box>
                    );
                })}
            </Box>

            {/* ===== CTA BANNER ===== */}
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    background:
                        "linear-gradient(90deg, #222466 0%, #2E318C 100%)",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    py: { xs: "48px", sm: "60px", md: "0px" },
                    minHeight: { md: "436px" },
                    mt: { xs: "0px", md: "0px" },
                }}
            >
                {/* Left chevrons decoration */}
                <ChevronArrows side="left" />

                {/* Right chevrons decoration */}
                <ChevronArrows side="right" />

                {/* CTA Content */}
                <Box
                    sx={{
                        position: "relative",
                        zIndex: 2,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: { xs: "32px", md: "52px" },
                        width: { xs: "100%", md: "1320px" },
                        px: { xs: "24px", sm: "40px", md: "0px" },
                    }}
                >
                    {/* CTA Text */}
                    <Typography
                        sx={{
                            fontSize: { xs: "22px", sm: "28px", md: "40px" },
                            fontWeight: 600,
                            lineHeight: { xs: "140%", md: "54px" },
                            color: "#FFFFFF",
                            textAlign: "center",
                            fontFamily: "Open Sans",
                            maxWidth: { xs: "100%", md: "1320px" },
                        }}
                    >
                        Transform your connections into success and earn ₹50,000
                        with every referral. Let&apos;s make it happen!
                    </Typography>

                    {/* CTA Button */}
                    <Box
                        component="button"
                        sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background:
                                "linear-gradient(90deg, #FF3185 0%, #E0196E 100%)",
                            color: "#FFFFFF",
                            fontFamily: "Open Sans",
                            fontSize: { xs: "16px", md: "20px" },
                            fontWeight: 700,
                            lineHeight: "28px",
                            px: { xs: "24px", md: "32px" },
                            py: { xs: "10px", md: "14px" },
                            border: "none",
                            borderRadius: "6px",
                            cursor: "pointer",
                            whiteSpace: "nowrap",
                            transition: "opacity 0.2s ease",
                            "&:hover": {
                                opacity: 0.9,
                            },
                        }}
                    >
                        Happy Referring
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}