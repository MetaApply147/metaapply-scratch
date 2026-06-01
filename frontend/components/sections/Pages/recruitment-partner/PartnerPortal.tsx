"use client";

import {
    Box,
    Button,
    Container,
    Stack,
    Typography,
} from "@mui/material";

import Image from "next/image";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import SectionHeader from "@/components/common/SectionHeader";

export default function PartnerPortalSection() {
    const features = [
        "Real-Time Application Tracking",
        "Easy Student Management",
        "Access Anytime, Anywhere",
    ];

    return (
        <Box
            component="section"
            sx={{
                width: "100%",

                py: {
                    xs: 6,
                    md: 10,
                },

                overflow: "hidden",
            }}
        >
            <Box
                sx={{
                    px: {
                        xs: "16px",
                        sm: "24px",
                        md: 0
                    },
                }}
            >
                <Container>
                    <Box
                        sx={{
                            display: "flex",

                            flexDirection: {
                                xs: "column",
                                lg: "row",
                            },

                            alignItems: "center",

                            justifyContent: "space-between",

                            gap: {
                                xs: 6,
                                md: 8,
                                lg: "80px",
                            },
                        }}
                    >
                        {/* LEFT IMAGE */}
                        <Box
                            sx={{
                                position: "relative",

                                width: {
                                    xs: "100%",
                                    sm: "90%",
                                    md: "450px",
                                },

                                maxWidth: "450px",

                                height: {
                                    xs: "240px",
                                    sm: "320px",
                                    md: "570px",
                                },

                                mx: {
                                    xs: "auto",
                                    lg: 0,
                                },

                                flexShrink: 0,

                                alignSelf: {
                                    lg: "flex-end",
                                },
                            }}
                        >
                            <Image
                                src="/recruitment-partner/desktop-img.svg"
                                alt="Desktop Portal"
                                fill
                                priority
                                style={{
                                    objectFit: "contain",
                                }}
                            />
                        </Box>

                        {/* RIGHT CONTENT */}
                        <Box
                            sx={{
                                flex: 1,

                                maxWidth: {
                                    xs: "100%",
                                    lg: "690px",
                                },

                                textAlign: {
                                    xs: "left",
                                    lg: "left",
                                },
                            }}
                        >
                            {/* HEADING */}
                            <SectionHeader
                                title="Manage Everything with"
                                highlight="MetaApply Partner Portal"
                            />

                            {/* DESCRIPTION */}
                            <Typography
                                sx={{
                                    mt: 4,

                                    maxWidth: {
                                        xs: "100%",
                                        lg: "689px",
                                    },

                                    mx: 0,

                                    fontFamily:
                                        "Open Sans",

                                    fontWeight: 400,

                                    fontSize: {
                                        xs: "15px",
                                        md: "16px",
                                    },

                                    lineHeight: {
                                        xs: "24px",
                                        md: "28px",
                                    },

                                    color: "#202020",
                                }}
                            >
                                Manage your entire student
                                recruitment journey in one
                                place with our Partner
                                Portal. From registering
                                students and submitting
                                applications to tracking
                                progress, everything can be
                                handled seamlessly through
                                a single platform available
                                on both desktop and mobile.
                            </Typography>

                            {/* FEATURES */}
                            <Stack
                                spacing={2}
                                sx={{
                                    mt: 4,

                                    alignItems: "flex-start",
                                }}
                            >
                                {features.map((item) => (
                                    <Box
                                        key={item}
                                        sx={{
                                            display:
                                                "flex",

                                            alignItems:
                                                "center",

                                            gap: "12px",
                                        }}
                                    >
                                        <CheckCircleIcon
                                            sx={{
                                                color:
                                                    "#2ECC71",

                                                fontSize: 16,
                                            }}
                                        />

                                        <Typography
                                            sx={{
                                                fontFamily:
                                                    "Open Sans",

                                                fontWeight: 400,

                                                fontSize:
                                                {
                                                    xs: "15px",
                                                    md: "16px",
                                                },

                                                lineHeight:
                                                    "24px",

                                                color:
                                                    "#202020",
                                            }}
                                        >
                                            {item}
                                        </Typography>
                                    </Box>
                                ))}
                            </Stack>

                            {/* DOWNLOAD */}
                            <Box
                                sx={{
                                    display: "flex",

                                    alignItems: {
                                        xs: "center",
                                        sm: "center",
                                    },

                                    justifyContent: "flex-start",

                                    flexWrap: "wrap",

                                    gap: {
                                        xs: "18px",
                                        md: "24px",
                                    },

                                    mt: 6,
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontFamily:
                                            "Plus Jakarta Sans",

                                        fontWeight: 600,

                                        fontSize:
                                            "16px",

                                        lineHeight:
                                            "48px",

                                        color:
                                            "#031521",
                                    }}
                                >
                                    Download Now
                                </Typography>

                                <Box
                                    sx={{
                                        display:
                                            "flex",

                                        alignItems:
                                            "center",

                                        justifyContent:
                                            "center",

                                        flexWrap:
                                            "wrap",

                                        gap: "14px",
                                    }}
                                >
                                    {/* PLAY STORE */}
                                    <Button
                                        sx={{
                                            p: 0,

                                            minWidth:
                                                "unset",

                                            width: {
                                                xs: "145px",
                                                sm: "170px",
                                            },
                                        }}
                                    >
                                        <Image
                                            src="/recruitment-partner/G-Play.svg"
                                            alt="Google Play"
                                            width={
                                                180
                                            }
                                            height={
                                                54
                                            }
                                            style={{
                                                width: "100%",

                                                height: "auto",

                                                maxWidth:
                                                    "180px",
                                            }}
                                        />
                                    </Button>

                                    {/* APP STORE */}
                                    <Button
                                        sx={{
                                            p: 0,

                                            minWidth:
                                                "unset",

                                            width: {
                                                xs: "145px",
                                                sm: "170px",
                                            },
                                        }}
                                    >
                                        <Image
                                            src="/recruitment-partner/App-Store.svg"
                                            alt="App Store"
                                            width={
                                                180
                                            }
                                            height={
                                                54
                                            }
                                            style={{
                                                width: "100%",

                                                height: "auto",

                                                maxWidth:
                                                    "180px",
                                            }}
                                        />
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}