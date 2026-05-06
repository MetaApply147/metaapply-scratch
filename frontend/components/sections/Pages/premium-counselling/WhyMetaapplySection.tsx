"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";

const cards = [
    {
        title: "Personalised Guidance",
        desc: "Exclusive one-to-one mentorship tailored to your goals, strengths, and aspirations for global academic excellence.",
    },
    {
        title: "Global University Shortlisting",
        desc: "Handpicked top global universities curated to match your profile, academic ambitions, and future career pathways.",
    },
    {
        title: "Application Guidance",
        desc: "Personalised strategic support for essays, CVs, and recommendations to make your profile standout to elite universities.",
    },
    {
        title: "Interview Preparation",
        desc: "Expert coaching for interviews, scholarship panels, and others to build confidence and present your best self.",
    },
    {
        title: "Scholarship & Financial Planning",
        desc: "Insights on merit-based scholarships, application strategies, and planning to maximise global education funding.",
    },
    {
        title: "Additional Services",
        desc: "We also offer financial, accommodation, insurance, and flight assistance to those who need it.",
    },
];

export default function WhyMetaApplySection() {
    return (
        <Box
            sx={{
                width: "100%",
                py: { xs: 6, md: 10 },
                display: "flex",
                justifyContent: "center",
                backgroundImage: "url(/premium-counselling/why-metaapply-bg.svg)",
            }}
        >
            <Box sx={{ width: "100%", maxWidth: "1200px" }}>

                {/* TOP HEADING */}
                <Box sx={{ mb: 4 }}>
                    <Typography
                        sx={{
                            fontFamily: "Plus Jakarta Sans",
                            fontWeight: 700,
                            fontSize: "40px",
                            lineHeight: "48px",
                            color: "#031621",
                        }}
                    >
                        Why{" "}
                        <Box component="span" sx={{ color: "#FF3185" }}>
                            MetaApply <br />
                            Premium Counselling
                        </Box>
                    </Typography>

                    <Typography
                        sx={{
                            mt: 1,
                            fontFamily: "Open Sans",
                            fontSize: "20px",
                            lineHeight: "24px",
                            color: "#730098",
                            fontWeight: 400,
                        }}
                    >
                        Because elite dreams require precise guidance.
                    </Typography>
                </Box>

                {/* MAIN GRID */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "547px 698px" },
                        gap: "40px",
                        alignItems: "start",
                    }}
                >
                    {/* LEFT IMAGE */}
                    <Box
                        sx={{
                            width: "547px",
                            height: "564px",
                            borderRadius: "24px",
                            overflow: "hidden",
                        }}
                    >
                        <Image
                            src="/premium-counselling/why-metaapply.svg"
                            alt="why metaapply"
                            width={547}
                            height={564}
                            style={{ objectFit: "cover" }}
                        />
                    </Box>

                    {/* RIGHT CARDS */}
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2, 339px)",
                            gap: "20px",
                            alignContent: "flex-start",
                            mt: "-120px"
                        }}
                    >
                        {cards.map((card, i) => (
                            <Box
                                key={i}
                                sx={{
                                    p: "24px",

                                    borderRadius: "24px",
                                    border: "0.75px solid transparent",
                                    background:
                                        "linear-gradient(#fff, #fff) padding-box, linear-gradient(180deg, #FF3185, #6E0092) border-box",
                                    minHeight: "215px",
                                    display: "flex",               
                                    flexDirection: "column",
                                    justifyContent: "flex-start",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontFamily: "Plus Jakarta Sans",
                                        fontWeight: 500,
                                        fontSize: "20px",
                                        lineHeight: "24px",
                                        color: "#031621",
                                        mb: "12px",
                                        textAlign: "left",
                                        maxWidth: "260px",
                                    }}
                                >
                                    {card.title}
                                </Typography>

                                <Typography
                                    sx={{
                                        fontFamily: "Open Sans",
                                        fontWeight: 400,
                                        fontSize: "16px",
                                        lineHeight: "24px",
                                        color: "#505050",
                                        width: "100%",
                                    }}
                                >
                                    {card.desc}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>

    );
}
