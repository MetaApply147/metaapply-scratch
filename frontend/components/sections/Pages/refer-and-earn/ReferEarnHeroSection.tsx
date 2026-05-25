"use client";

import { Box, Typography, Container } from "@mui/material";
import Image from "next/image";

export default function ReferEarnHeroSection() {
    return (
        <Box
            sx={{
                position: "relative",
                overflow: "hidden",
                background: "#160021",
            }}
        >
            {/* BACKGROUND */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 0,
                }}
            >
                <Image
                    src="/refer-and-earn/Refer_earn_Banner.webp"
                    alt="banner"
                    fill
                    priority
                    style={{
                        objectFit: "cover",
                    }}
                />
            </Box>

            <Container
                maxWidth="xl"
                sx={{
                    position: "relative",
                    zIndex: 2,
                    px: {
                        xs: 2,
                        sm: 3,
                        md: 5,
                        lg: 8,
                    },
                }}
            >
                <Box
                    sx={{
                        minHeight: {
                            xs: "auto",
                            md: "575px",
                        },
                        display: "flex",
                        // VERTICAL on mobile, HORIZONTAL on md+
                        flexDirection: {
                            xs: "column",
                            md: "row",
                        },
                        alignItems: {
                            xs: "center",
                            md: "center",
                        },
                        justifyContent: {
                            xs: "flex-start",
                            md: "space-between",
                        },
                        pt: {
                            xs: "32px",
                            sm: "40px",
                            md: 0,
                        },
                        pb: {
                            xs: "0px",
                            md: 0,
                        },
                        position: "relative",
                        gap: {
                            xs: "24px",
                            sm: "32px",
                            md: "84px",
                        },
                    }}
                >
                    {/* ================= LEFT ================= */}
                    <Box
                        sx={{
                            width: {
                                xs: "100%",
                                md: "50%",
                            },
                            zIndex: 2,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: {
                                xs: "center",
                                md: "flex-start",
                            },
                        }}
                    >
                        {/* ================= HEADING ================= */}
                        <Box
                            className="bannerHeading"
                            sx={{
                                position: "relative",
                                display: "flex",
                                alignItems: "flex-end",
                                mb: {
                                    xs: "20px",
                                    sm: "24px",
                                    md: "34px",
                                },
                                ml: {
                                    xs: "10px",
                                    md: "0px",
                                },
                            }}
                        >
                            {/* CROWN */}
                            <Box
                                component="img"
                                src="/refer-and-earn/crown.svg"
                                alt="crown"
                                sx={{
                                    position: "absolute",
                                    top: {
                                        xs: "-12px",
                                        sm: "-14px",
                                        md: "-19px",
                                    },
                                    left: {
                                        xs: "-2px",
                                        md: "-4px",
                                    },
                                    width: {
                                        xs: "28px",
                                        sm: "34px",
                                        md: "56px",
                                    },
                                    height: "auto",
                                    zIndex: 3,
                                }}
                            />

                            {/* REFER */}
                            <Box
                                component="img"
                                src="/refer-and-earn/refer_text.svg"
                                alt="refer"
                                sx={{
                                    width: {
                                        xs: "140px",
                                        sm: "190px",
                                        md: "255px",
                                    },
                                    height: {
                                        xs: "40px",
                                        sm: "54px",
                                        md: "72px",
                                    },
                                    objectFit: "contain",
                                    display: "block",
                                }}
                            />

                            {/* AND */}
                            <Box
                                component="img"
                                src="/refer-and-earn/and_text.svg"
                                alt="and"
                                sx={{
                                    width: {
                                        xs: "42px",
                                        sm: "58px",
                                        md: "78px",
                                    },
                                    height: {
                                        xs: "40px",
                                        sm: "54px",
                                        md: "72px",
                                    },
                                    objectFit: "contain",
                                    mx: {
                                        xs: "-3px",
                                        sm: "-4px",
                                        md: "-6px",
                                    },
                                    display: "block",
                                }}
                            />

                            {/* EARN */}
                            <Box
                                component="img"
                                src="/refer-and-earn/earn-text.svg"
                                alt="earn"
                                sx={{
                                    width: {
                                        xs: "140px",
                                        sm: "190px",
                                        md: "250px",
                                    },
                                    height: {
                                        xs: "40px",
                                        sm: "54px",
                                        md: "72px",
                                    },
                                    objectFit: "contain",
                                    display: "block",
                                    ml: {
                                        xs: "-3px",
                                        sm: "-4px",
                                        md: "-8px",
                                    },
                                }}
                            />
                        </Box>

                        {/* REWARD BOX */}
                        <Box
                            className="referAmountBox"
                            sx={{
                                width: {
                                    xs: "100%",
                                    sm: "90%",
                                    md: "590px",
                                },
                                background: "#3A3D84",
                                border: "1px solid rgba(255,255,255,0.95)",
                                borderRadius: "10px",
                                px: {
                                    xs: "16px",
                                    sm: "20px",
                                    md: "28px",
                                },
                                py: {
                                    xs: "14px",
                                    sm: "16px",
                                    md: "20px",
                                },
                            }}
                        >
                            <Typography
                                component="p"
                                sx={{
                                    m: 0,
                                    color: "#fff",
                                    fontFamily: '"Open Sans", sans-serif',
                                    fontWeight: 400,
                                    fontSize: {
                                        xs: "18px",
                                        sm: "24px",
                                        md: "36px",
                                    },
                                    lineHeight: 1.3,
                                    textAlign: {
                                        xs: "center",
                                        md: "left",
                                    },
                                }}
                            >
                                Get{" "}
                                <Box
                                    component="span"
                                    sx={{
                                        color: "#FFFF00",
                                        fontWeight: 700,
                                        fontSize: {
                                            xs: "20px",
                                            sm: "28px",
                                            md: "36px",
                                        },
                                    }}
                                >
                                    cash reward of ₹10,000*
                                </Box>
                                <br />
                                for every successful referral
                            </Typography>
                        </Box>
                    </Box>

                    {/* ================= RIGHT IMAGE ================= */}
                    <Box
                        sx={{
                            width: {
                                xs: "100%",
                                md: "50%",
                            },
                            display: "flex",
                            justifyContent: {
                                xs: "center",
                                md: "flex-end",
                            },
                            alignItems: "flex-end",
                            mt: {
                                xs: 0,
                                md: 0,
                            },
                            position: "relative",
                        }}
                    >
                        <Box
                            sx={{
                                position: "relative",
                                width: {
                                    xs: "260px",
                                    sm: "380px",
                                    md: "480px",
                                    lg: "636px",
                                },
                                height: {
                                    xs: "240px",
                                    sm: "340px",
                                    md: "440px",
                                    lg: "552px",
                                },
                            }}
                        >
                            <Image
                                src="/refer-and-earn/bannerStudent.svg"
                                alt="student"
                                fill
                                priority
                                style={{
                                    objectFit: "contain",
                                    objectPosition: "bottom center",
                                }}
                            />

                            {/* T&C */}
                            <Typography
                                sx={{
                                    position: "absolute",
                                    bottom: 0,
                                    right: {
                                        xs: "8px",
                                        md: "16px",
                                    },
                                    color: "#fff",
                                    fontSize: {
                                        xs: "10px",
                                        sm: "12px",
                                        md: "14px",
                                    },
                                    fontFamily: '"Open Sans", sans-serif',
                                    zIndex: 5,
                                }}
                            >
                                *T&C Apply
                            </Typography>
                        </Box>
                    </Box>

                    {/* ================= BOTTOM STRIP ================= */}
                    <Box
                        sx={{
                            position: "absolute",
                            left: 0,
                            bottom: 0,
                            width: {
                                xs: "100%",
                                sm: "80%",
                                md: "620px",
                            },
                            background:
                                "linear-gradient(90deg, transparent, #2e318c91, transparent)",
                            py: "6px",
                            px: {
                                xs: 2,
                                md: 3,
                            },
                        }}
                    >
                        <Typography
                            sx={{
                                color: "#fff",
                                fontSize: {
                                    xs: "10px",
                                    sm: "12px",
                                    md: "14px",
                                },
                                fontFamily: '"Open Sans", sans-serif',
                                lineHeight: 1.4,
                                textAlign: {
                                    xs: "center",
                                    md: "left",
                                },
                            }}
                        >
                            *Account transfer post successful enrolment
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}