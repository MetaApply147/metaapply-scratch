"use client";

import { useState } from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import SectionHeader from "@/components/common/SectionHeader";

const franchiseData = [
    {
        id: "1.",
        title: "Brand Credibility",
        content:
            "Since our inception and the launch of our mobile and web platform, we've established lasting global connections. MetaApply aims to make the education application process effortless and accessible to every student. We've partnered with more than 40 countries worldwide.",
    },
    {
        id: "2.",
        title: "Global Network",
        content:
            "Joining hands with us provides direct access to a diverse network of universities and colleges spanning over 40 countries. With a community of over 50,000 individuals dedicated to making global education accessible.",
    },
    {
        id: "3.",
        title: "Simplified Processes",
        content:
            "Onboarding as a franchisee with us is hassle-free. Our dedicated team assists you through the documentation and agreement process, ensuring a smooth transition. ",
    },
    {
        id: "4.",
        title: "High & Incremental Revenues",
        content:
            "Partnering with us unlocks the potential of a lucrative Franchise Business Opportunity in the booming foreign education sector. Join us on a journey filled with tremendous growth potential.",
    },
    {
        id: "5.",
        title: "Dedicated Support & Guidance",
        content:
            "We provide comprehensive support and guidance, including initial and ongoing training in sales, marketing, and operations. Our franchisees receive operational, marketing, and technology support, ensuring their success in the market. ",
    },
    {
        id: "6.",
        title: "Marketing Assistance",
        content:
            "Our marketing and advertising support helps you reach your target audience and attract new business. This includes a robust marketing strategy, digital advertising assistance, and access to our network of suppliers for digital goods and services.",
    },
];

export default function WhyChooseFranchise() {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange =
        (panel: string) =>
            (_: React.SyntheticEvent, isExpanded: boolean) => {
                setExpanded(isExpanded ? panel : false);
            };

    return (
        <Box
            component="section"
            sx={{
                width: "100%",

                py: {
                    xs: "20px",
                    sm: "40px",
                    md: "60px",
                    lg: "8px",
                },
            }}
        >
            {/* OUTER WRAPPER */}
            <Box
                sx={{
                    width: "100%",

                    px: {
                        xs: "12px",
                        sm: "18px",
                        md: "24px",
                        lg: "32px",
                        xl: "40px",
                    },
                }}
            >
                {/* MAIN CARD */}
                <Box
                    sx={{
                        width: "100%",

                        maxWidth: "1832px",

                        mx: "auto",

                        background:
                            "url('/franchise-partner/bg-img.svg') center/cover no-repeat",

                        borderRadius: {
                            xs: "16px",
                            md: "20px",
                        },

                        overflow: "hidden",

                        px: {
                            xs: "16px",
                            sm: "24px",
                            md: "40px",
                            lg: "60px",
                            xl: "220px",
                        },

                        py: {
                            xs: "24px",
                            sm: "32px",
                            md: "40px",
                            lg: "52px",
                        },
                    }}
                >
                    {/* HEADING */}
                    <SectionHeader
                        title="Why Choose"
                        highlight="MetaApply Franchise"
                    />

                    {/* CONTENT */}
                    <Box
                        sx={{
                            display: "flex",

                            flexDirection: {
                                xs: "column",
                                lg: "row",
                            },

                            alignItems: {
                                xs: "center",
                                lg: "stretch",
                            },

                            justifyContent: "space-between",

                            gap: {
                                xs: "32px",
                                md: "48px",
                                lg: "60px",
                                xl: "72px",
                            },
                        }}
                    >
                        {/* IMAGE */}
                        <Box
                            sx={{
                                flex: {
                                    lg: "0 0 42%",
                                    xl: "0 0 38%",
                                },

                                width: {
                                    xs: "100%",
                                    sm: "420px",
                                    md: "700px",
                                    lg: "100%",
                                },

                                maxWidth: {
                                    xs: "100%",
                                    lg: "520px",
                                },

                                mx: {
                                    xs: "auto",
                                    lg: 0,
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    position: "relative",

                                    width: "100%",

                                    aspectRatio: "543 / 576",

                                    borderRadius: "16px",

                                    overflow: "hidden",
                                }}
                            >
                                <Image
                                    src="/franchise-partner/boy.svg"
                                    alt="Franchise Partner"
                                    fill
                                    priority
                                    sizes="(max-width: 900px) 100vw, 40vw"
                                    style={{
                                        objectFit: "cover",
                                        objectPosition: "center top",
                                    }}
                                />
                            </Box>
                        </Box>

                        {/* ACCORDION */}
                        <Box
                            sx={{
                                flex: 1,

                                width: "100%",

                                maxWidth: {
                                    xs: "100%",
                                    lg: "742px",
                                },

                                display: "flex",

                                flexDirection: "column",

                                gap: "16px",
                            }}
                        >
                            {franchiseData.map((item, index) => {
                                const panel = `panel-${index}`;
                                const isExpanded = expanded === panel;

                                return (
                                    <Accordion
                                        key={item.id}
                                        disableGutters
                                        elevation={0}
                                        expanded={isExpanded}
                                        onChange={handleChange(panel)}
                                        sx={{
                                            backgroundColor:
                                                "common.white",

                                            borderRadius:
                                                "12px !important",

                                            overflow: "hidden",

                                            "&::before": {
                                                display: "none",
                                            },

                                            boxShadow: isExpanded
                                                ? "0px 8px 24px rgba(0,0,0,0.04)"
                                                : "none",
                                        }}
                                    >
                                        <AccordionSummary
                                            expandIcon={
                                                <ExpandMoreIcon
                                                    sx={{
                                                        color:
                                                            "text.heading",

                                                        fontSize: 22,
                                                    }}
                                                />
                                            }
                                            sx={{
                                                minHeight:
                                                    "66px !important",

                                                px: {
                                                    xs: "18px",
                                                    sm: "24px",
                                                    md: "28px",
                                                },

                                                "& .MuiAccordionSummary-content":
                                                {
                                                    margin:
                                                        "0 !important",

                                                    alignItems:
                                                        "center",

                                                    gap: {
                                                        xs: "12px",
                                                        md: "16px",
                                                    },
                                                },
                                            }}
                                        >
                                            {/* NUMBER */}
                                            <Typography
                                                variant="heading12"
                                                sx={{
                                                    color: "pink.400",

                                                    minWidth: "24px",

                                                    flexShrink: 0,

                                                    lineHeight: "48px",
                                                }}
                                            >
                                                {item.id}
                                            </Typography>

                                            {/* TITLE */}
                                            <Typography
                                                variant="heading12"
                                                sx={{
                                                    color:
                                                        "text.heading",

                                                    lineHeight: {
                                                        xs: "28px",
                                                        md: "48px",
                                                    },
                                                }}
                                            >
                                                {item.title}
                                            </Typography>
                                        </AccordionSummary>

                                        <AccordionDetails
                                            sx={{
                                                px: {
                                                    xs: "18px",
                                                    sm: "24px",
                                                    md: "28px",
                                                },

                                                pt: 0,

                                                pb: {
                                                    xs: "18px",
                                                    md: "24px",
                                                },
                                            }}
                                        >
                                            <Typography
                                                variant="body05"
                                                sx={{
                                                    color: "text.body",

                                                    lineHeight: {
                                                        xs: "24px",
                                                        md: "28px",
                                                    },

                                                    maxWidth:
                                                        "672px",
                                                }}
                                            >
                                                {item.content}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                );
                            })}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}