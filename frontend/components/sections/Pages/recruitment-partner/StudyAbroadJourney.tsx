"use client";

import { Box, Container, Typography } from "@mui/material";
import SectionHeader from "@/components/common/SectionHeader";
import CustomSlider from "@/components/common/CustomSlider";
import Image from "next/image";

type Props = {
    disablePadding?: string;
};

const processSteps = [
    { number: "1", title: "Counselling\nSession" },
    { number: "2", title: "Course & Destination\nSelection" },
    { number: "3", title: "College\nShortlisting" },
    { number: "4", title: "Test Preparation\nMentorship" },
    { number: "5", title: "Offers &\nScholarships" },
    { number: "6", title: "VISA\nAssistance" },
    { number: "7", title: "Pre-departure\nOrientation" },
];

export default function StudyAbroadJourney({
    disablePadding = false,
}) {
    return (
        <Box
            component="section"
            sx={{
                py: disablePadding ? "0" : { xs: 8, md: 11.25 },
                overflow: "hidden",
            }}
        >
            <Container>
                <SectionHeader
                    title="Student's Study Abroad journey"
                    highlight="with MetaApply"
                />
            </Container>

            <Container
                sx={{
                    px: {
                        xs: 0,
                        sm: 2,
                        md: 3,
                    },
                }}
            >
                <CustomSlider
                    data={processSteps}
                    slidesPerView={7}
                    spaceBetween={0}
                    showPagination={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },

                        600: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },

                        900: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },

                        1200: {
                            slidesPerView: 7,
                            spaceBetween: 0,
                        },
                    }}
                    renderItem={(item: any) => (
                        <Box
                            key={item.id}
                            textAlign="center"
                            position="relative"
                            sx={{
                                overflow: "visible",
                                display: "flex",
                                flexDirection: "column",

                                minWidth: 0,
                                width: "100%",

                                pt: {
                                    xs: 0,
                                    md:
                                        Number(item.number) % 2 === 0
                                            ? "64px"
                                            : "0",
                                },
                            }}
                        >
                            {/* TEXT */}
                            <Box
                                sx={{
                                    mb:
                                        Number(item.number) % 2 !== 0
                                            ? 3
                                            : 0,

                                    mt: {
                                        xs: 2,
                                        md:
                                            Number(item.number) % 2 === 0
                                                ? 3
                                                : 0,
                                    },

                                    order: {
                                        xs: -1,
                                        md:
                                            Number(item.number) % 2 === 0
                                                ? 1
                                                : -1,
                                    },

                                    minHeight: {
                                        xs: "70px",
                                        md: "unset",
                                    },
                                }}
                            >
                                <Box
                                    display="flex"
                                    alignItems="flex-start"
                                    justifyContent={{
                                        xs: "center",
                                        md: "flex-start",
                                    }}
                                >
                                    <Typography
                                        component="h3"
                                        variant="heading07"
                                        fontWeight={700}
                                        sx={{
                                            color: "primary.main",
                                            mr: 0.5,

                                            lineHeight: {
                                                xs: "32px",
                                                md: "40px !important",
                                            },

                                            fontSize: {
                                                xs: "28px",
                                                md: "inherit",
                                            },
                                        }}
                                    >
                                        {item.number}
                                    </Typography>

                                    <Typography
                                        component="p"
                                        variant="body05"
                                        fontWeight={700}
                                        sx={{
                                            color: "#2e318c",

                                            textAlign: "left",

                                            lineHeight: {
                                                xs: "20px",
                                                md: "19px",
                                            },

                                            fontSize: {
                                                xs: "14px",
                                                md: "inherit",
                                            },

                                            mt: 0.2,

                                            whiteSpace: "pre-line",
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                </Box>
                            </Box>

                            {/* RIBBON */}
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",

                                    overflow: "hidden",

                                    pl: {
                                        xs: 0,
                                        md: "42px",
                                    },

                                    width: {
                                        xs: "100%",
                                        md: "max-content",
                                    },

                                    justifyContent: {
                                        xs: "center",
                                        md: "flex-start",
                                    },

                                    position: "relative",
                                    left: "0",
                                }}
                            >
                                {Array.from({
                                    length:
                                        item.number ===
                                            processSteps.length.toString()
                                            ? 1
                                            : 4,
                                }).map((_, i) => (
                                    <Box
                                        key={i}
                                        sx={{
                                            height: {
                                                xs: "70px",
                                                md: "97px",
                                            },

                                            width: {
                                                xs: "42px",
                                                md: "58px",
                                            },

                                            position: "relative",

                                            ml:
                                                i !== 0
                                                    ? {
                                                        xs: "-8px",
                                                        md: "-10px",
                                                    }
                                                    : 0,
                                        }}
                                    >
                                        <Image
                                            src={
                                                i === 0
                                                    ? "/study-abroad/dark-pink-vector.png"
                                                    : "/study-abroad/light-pink-vector.png"
                                            }
                                            alt="chevron"
                                            fill
                                            style={{
                                                objectFit: "contain",
                                            }}
                                        />
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    )}
                />
            </Container>
        </Box>
    );
}