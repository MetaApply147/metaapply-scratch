"use client";

import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

import SectionHeader from "@/components/common/SectionHeader";

export type FeatureCardItem = {
    id: number;
    title: string;
    description: string;
    icon: string;
};

type Props = {
    title: string;
    highlight: string;
    items: FeatureCardItem[];
    background?: string;
    backgroundImage?: string;
    backgroundOverlay?: string;
    cardGradient?: string;
    sectionPadding?: {
        xs?: string;
        md?: string;
    };
};

export default function FeatureCardsSection({
    title,
    highlight,
    items,
    background = "linear-gradient(180deg, #F7FBFF 0%, #F8F7FF 100%)",
    backgroundImage,
    backgroundOverlay,
    cardGradient = "linear-gradient(135deg, #F5F4FF 0%, #FFFFFF 100%)",
    sectionPadding = {
        xs: "60px",
        md: "90px",
    },
}: Props) {
    return (
        <Box
            component="section"
            sx={{
                position: "relative",
                width: "100%",
                py: sectionPadding,
                overflow: "hidden",
                background:
                    backgroundOverlay ||
                    (!backgroundImage ? background : undefined),
                backgroundImage: backgroundImage
                    ? `${backgroundOverlay
                        ? `${backgroundOverlay}, `
                        : ""
                    }url(${backgroundImage})`
                    : undefined,

                backgroundSize: backgroundImage
                    ? "cover"
                    : undefined,

                backgroundPosition: backgroundImage
                    ? "center"
                    : undefined,

                backgroundRepeat: backgroundImage
                    ? "no-repeat"
                    : undefined,
            }}
        >
            <Box
                sx={{
                    px: {
                        xs: "16px",
                        sm: "24px",
                        md: 0,
                        lg: 0,
                        xl: 0,
                    },
                }}
            >
                <Container>
                    <SectionHeader
                        title={title}
                        highlight={highlight}
                    />
                    <Box
                        sx={{
                            mt: {
                                xs: "36px",
                                md: "52px",
                            },
                            display: "flex",
                            flexWrap: "wrap",
                            gap: {
                                xs: "18px",
                                md: "24px 28px",
                            },
                        }}
                    >
                        {items.map((item) => (
                            <Box
                                key={item.id}
                                sx={{
                                    width: {
                                        xs: "100%",
                                        sm: "calc(50% - 14px)",
                                        lg: "calc(33.33% - 19px)",
                                    },
                                    minHeight: {
                                        xs: "180px",
                                        md: "204px",
                                    },
                                    position: "relative",
                                    borderRadius: "48px",
                                    background: cardGradient,
                                    boxShadow:
                                        "0px 2px 4px -1px rgba(28, 33, 51, 0.10)",
                                    overflow: "hidden",
                                    px: {
                                        xs: "18px",
                                        md: "24px",
                                    },
                                    py: {
                                        xs: "24px",
                                        md: "32px",
                                    },
                                    display: "flex",
                                    alignItems: "center",
                                    gap: {
                                        xs: "18px",
                                        md: "24px",
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        width: {
                                            xs: "95px",
                                            md: "129px",
                                        },
                                        minWidth: {
                                            xs: "95px",
                                            md: "129px",
                                        },
                                        height: {
                                            xs: "110px",
                                            md: "146px",
                                        },
                                        background:
                                            "rgba(207, 207, 207, 0.10)",
                                        borderStyle: "solid",
                                        borderWidth:
                                            "3px 3px 3px 0px",
                                        borderColor: "#FFFFFF",
                                        borderRadius:
                                            "0px 20px 20px 0px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexShrink: 0,
                                        ml: {
                                            xs: "-18px",
                                            md: "-24px",
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: {
                                                xs: "58px",
                                                md: "75px",
                                            },
                                            height: {
                                                xs: "58px",
                                                md: "75px",
                                            },
                                            position: "relative",
                                            opacity: 0.72,
                                        }}
                                    >
                                        <Image
                                            src={item.icon}
                                            alt={item.title}
                                            fill
                                            style={{
                                                objectFit:
                                                    "contain",
                                            }}
                                        />
                                    </Box>
                                </Box>

                                <Box
                                    sx={{
                                        flex: 1,

                                        pr: {
                                            xs: 0,
                                            md: 1,
                                        },
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            color: "#2E3185",
                                            fontFamily:
                                                "var(--font-heading)",
                                            fontWeight: 600,

                                            fontSize: {
                                                xs: "15px",
                                                md: "16px",
                                            },
                                            lineHeight: {
                                                xs: "24px",
                                                md: "36px",
                                            },
                                        }}
                                    >
                                        {item.title}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            mt: "12px",
                                            color: "#202020",
                                            fontFamily:
                                                "var(--font-body)",
                                            fontWeight: 400,
                                            fontSize: {
                                                xs: "13px",
                                                md: "14px",
                                            },
                                            lineHeight: "20px",
                                            maxWidth: "248px",
                                        }}
                                    >
                                        {item.description}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}