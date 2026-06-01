"use client";

import {
    Box,
    Container,
    Typography,
    useMediaQuery,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";

import SectionHeader from "@/components/common/SectionHeader";
import CustomSlider from "@/components/common/CustomSlider";

import Image from "next/image";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type JourneyItem = {
    id: number;
    title: string;
    icon: string;
};

type Props = {
    highlightHeading?: string;
    journey?: JourneyItem[];
};

export default function RecruitmentPartners({
    highlightHeading,
    journey = [],
}: Props) {
    const theme = useTheme();

    const isMobile = useMediaQuery(
        theme.breakpoints.down("md")
    );

    if (!journey.length) return null;

    const JourneyCard = ({
        item,
        index,
    }: {
        item: JourneyItem;
        index: number;
    }) => {
        const isLast = index === journey.length - 1;

        return (
            <Box
                sx={{
                    position: "relative",

                    textAlign: "center",

                    px: {
                        xs: 1,
                        md: 0,
                    },

                    minHeight: {
                        xs: "180px",
                        md: "220px",
                    },

                    "&::before": {
                        content: '""',

                        display: isLast
                            ? "none"
                            : {
                                  xs: "none",
                                  sm: "none",
                                  md: "none",
                                  lg: "block",
                              },

                        position: "absolute",

                        top: "50px",

                        left: "72%",

                        width: "61%",

                        borderTop:
                            "1.5px dashed #6E0092",

                        zIndex: 0,
                    },
                }}
            >
                {/* ARROW */}
                {!isLast && (
                    <ArrowForwardIosIcon
                        sx={{
                            position: "absolute",

                            top: "40px",

                            right: {
                                lg: "-20px",
                            },

                            display: {
                                xs: "none",
                                lg: "block",
                            },

                            fontSize: 22,

                            color: "#6E0092",

                            zIndex: 2,
                        }}
                    />
                )}

                {/* ICON */}
                <Box
                    sx={{
                        width: {
                            xs: 80,
                            md: 100,
                        },

                        height: {
                            xs: 80,
                            md: 100,
                        },

                        borderRadius: "50%",

                        background: "#6E0092",

                        boxShadow:
                            "-26px -26px 13px -30.33px #676565 inset",

                        display: "flex",

                        alignItems: "center",

                        justifyContent: "center",

                        mx: "auto",

                        mb: 3,

                        position: "relative",

                        zIndex: 2,
                    }}
                >
                    <Box
                        sx={{
                            width: {
                                xs: 38,
                                md: 46,
                            },

                            height: {
                                xs: 38,
                                md: 46,
                            },

                            position: "relative",
                        }}
                    >
                        <Image
                            src={item.icon}
                            alt={item.title}
                            fill
                            style={{
                                objectFit: "contain",
                            }}
                        />
                    </Box>
                </Box>

                {/* TITLE */}
                <Typography
                    variant="heading14"
                    component="h6"
                    sx={{
                        maxWidth: {
                            xs: "100%",
                            md: "80%",
                        },

                        mx: "auto",

                        lineHeight: 1.5,

                        fontSize: {
                            xs: "14px",
                            md: "16px",
                        },
                    }}
                >
                    {item.title}
                </Typography>
            </Box>
        );
    };

    return (
        <Box
            component="section"
            sx={{
                width: "100%",

                overflow: "hidden",

                py: {
                    xs: 6,
                    md: 8,
                },

                px: {
                    xs: "16px",
                    sm: "24px",
                    md: 0,
                    lg: 0,
                    xl: 0,
                },

                ".swiper-button-disabled": {
                    opacity: 0.4,
                },

                ".prev-swiper, .next-swiper": {
                    display: {
                        xs: "flex !important",
                        md: "flex !important",
                    },
                },
            }}
        >
            {/* BG WRAPPER */}
            <Box
                sx={{
                    background:
                        "url(/study-abroad/Background-2.webp)",

                    backgroundSize: "cover",

                    backgroundPosition: "center",

                    borderRadius: "24px",

                    overflow: "hidden",

                    py: {
                        xs: 7,
                        md: 10,
                    },
                }}
            >
                <Container>
                    <SectionHeader
                        title="How MetaApply Works with"
                        highlight={highlightHeading}
                    />

                    {/* MOBILE SLIDER */}
                    {isMobile ? (
                        <Box mt={6}>
                            <CustomSlider
                                data={journey}
                                slidesPerView={2}
                                spaceBetween={16}
                                showArrows
                                showPagination={true}
                                loop={false}
                                disablePadding
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                        spaceBetween: 16,
                                    },

                                    480: {
                                        slidesPerView: 2,
                                        spaceBetween: 16,
                                    },

                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                    },

                                    992: {
                                        slidesPerView: 4,
                                        spaceBetween: 20,
                                    },
                                }}
                                renderItem={(
                                    item: JourneyItem
                                ) => {
                                    const index =
                                        journey.findIndex(
                                            (j) =>
                                                j.id === item.id
                                        );

                                    return (
                                        <JourneyCard
                                            item={item}
                                            index={index}
                                        />
                                    );
                                }}
                            />
                        </Box>
                    ) : (
                        <Box
                            sx={{
                                display: "grid",

                                gridTemplateColumns: {
                                    md: "repeat(3, 1fr)",
                                    lg: "repeat(6, 1fr)",
                                },

                                gap: {
                                    md: 4,
                                    lg: 2,
                                },

                                mt: 6,

                                alignItems: "flex-start",
                            }}
                        >
                            {journey.map((item, index) => (
                                <JourneyCard
                                    key={item.id}
                                    item={item}
                                    index={index}
                                />
                            ))}
                        </Box>
                    )}
                </Container>
            </Box>
        </Box>
    );
}