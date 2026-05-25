"use client";

import {
    Box,
    Container,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";

import CustomSlider from "@/components/common/CustomSlider";
import SectionHeader from "@/components/common/SectionHeader";

import Image from "next/image";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const journey = [
    {
        id: 1,
        title: "Connect with us",
        icon: "/franchise-partner/step-1.svg",
    },
    {
        id: 2,
        title: "Dedicated Support Assigned",
        icon: "/franchise-partner/step-2.svg",
    },
    {
        id: 3,
        title: "Requirement Analysis",
        icon: "/franchise-partner/step-3.svg",
    },
    {
        id: 4,
        title: "Documentation & Verification",
        icon: "/franchise-partner/step-4.svg",
    },
    {
        id: 5,
        title: "Onboarding",
        icon: "/franchise-partner/step-5.svg",
    },
    {
        id: 6,
        title: "Journey to Successful Franchise Begins",
        icon: "/franchise-partner/step-6.svg",
    },
];

type JourneyItem = {
    id: number;
    title: string;
    icon: string;
};

export default function FranchiseJourney() {
    const theme = useTheme();

    const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

    return (
        <Box
            sx={{
                py: {
                    xs: 6,
                    md: "60px",
                },

                overflow: "hidden",
            }}
        >
            <Container maxWidth="lg">
                <SectionHeader
                    title="Journey to a Successful"
                    highlight="Franchise of MetaApply"
                />

                <Box
                    sx={{
                        mt: {
                            xs: 6,
                            md: 10,
                        },
                    }}
                >
                    <CustomSlider
                        data={journey}
                        slidesPerView={6}
                        spaceBetween={0}
                        showPagination={true}
                        showArrows={!isDesktop}
                        loop={false}
                        disablePadding={true}
                        breakpoints={{
                            0: {
                                slidesPerView: 1.2,
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

                            1200: {
                                slidesPerView: 6,
                                spaceBetween: 0,
                            },
                        }}
                        renderItem={(item: JourneyItem) => {
                            const index = journey.findIndex(
                                (j) => j.id === item.id
                            );

                            const isLast =
                                index === journey.length - 1;

                            return (
                                <Box
                                    sx={{
                                        position: "relative",

                                        textAlign: "center",

                                        minHeight: {
                                            xs: "190px",
                                            md: "220px",
                                        },

                                        px: {
                                            xs: 1,
                                            lg: 0,
                                        },

                                        "&::before": {
                                            content: '""',

                                            display:
                                                !isLast && isDesktop
                                                    ? "block"
                                                    : "none",

                                            position: "absolute",

                                            borderTop:
                                                "1px dashed #1E2A78",

                                            width: "58%",

                                            top: "70px",

                                            left: "72%",

                                            zIndex: 0,
                                        },
                                    }}
                                >
                                    {/* DESKTOP ARROW */}
                                    {!isLast && isDesktop && (
                                        <ArrowForwardIosIcon
                                            sx={{
                                                position: "absolute",

                                                top: "60px",

                                                right: "-6px",

                                                fontSize: 22,

                                                color: "#1E2A78",

                                                zIndex: 2,

                                                // backgroundColor: "#F8F8F8",
                                            }}
                                        />
                                    )}

                                    {/* CIRCLE */}
                                    <Box
                                        sx={{
                                            width: {
                                                xs: "100px",
                                                md: "140px",
                                            },

                                            height: {
                                                xs: "100px",
                                                md: "140px",
                                            },

                                            borderRadius: "50%",

                                            background: "#FFFFFF",

                                            display: "flex",

                                            alignItems: "center",

                                            justifyContent: "center",

                                            mx: "auto",

                                            mb: "22px",

                                            boxShadow:
                                                "0px 2px 32px rgba(178, 178, 178, 0.2)",

                                            position: "relative",

                                            zIndex: 2,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: {
                                                    xs: "55px",
                                                    md: "80px",
                                                },

                                                height: {
                                                    xs: "55px",
                                                    md: "80px",
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
                                                xs: "150px",
                                                md: "173px",
                                            },

                                            mx: "auto",

                                            lineHeight: {
                                                xs: "20px",
                                                md: "21px",
                                            },

                                            color: "text.body",

                                            fontWeight: 600,

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
                        }}
                    />
                </Box>
            </Container>
        </Box>
    );
}