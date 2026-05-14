"use client";

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";

export default function ReferEarnHeroSection() {
    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

    // Assets
    const referImage = "/refer-and-earn/refer_text.svg";
    const earnImage = "/refer-and-earn/earn-text.svg";
    const andImage = "/refer-and-earn/and_text.svg";

    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                overflow: "hidden",
                backgroundColor: "#12001E",
            }}
        >
            {/* Background */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 0,
                }}
            >
                <Image
                    src="/refer-and-earn/Refer_earn_Banner.webp"
                    alt="Refer & Earn Banner"
                    fill
                    priority
                    style={{
                        objectFit: "cover",
                    }}
                />
            </Box>

            {/* Main Wrapper */}
            <Box
                sx={{
                    position: "relative",
                    zIndex: 2,
                    width: "100%",
                    maxWidth: "1440px",
                    margin: "0 auto",
                    minHeight: {
                        xs: "520px",
                        sm: "560px",
                        md: "573px",
                    },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: {
                        xs: "column",
                        md: "row",
                    },
                    pt: {
                        xs: "40px",
                        md: "0px",
                    },
                    pb: {
                        xs: "40px",
                        md: "0px",
                    },
                }}
            >
                {/* LEFT CONTENT */}
                <Box
                    sx={{
                        width: {
                            xs: "100%",
                            md: "50%",
                        },
                        display: "flex",
                        flexDirection: "column",
                        alignItems: {
                            xs: "center",
                            md: "flex-start",
                        },
                        justifyContent: "center",
                        zIndex: 3,
                    }}
                >
                    {/* Title Section */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            justifyContent: {
                                xs: "center",
                                md: "flex-start",
                            },
                            width: "100%",
                            mb: {
                                xs: "20px",
                                md: "16px",
                            },
                            gap: {
                                xs: "6px",
                                md: "12px",
                            },
                        }}
                    >
                        {/* Refer + Earn */}
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                position: "relative",
                            }}
                        >
                            {/* REFER */}
                            <Box
                                sx={{
                                    position: "relative",
                                    width: {
                                        xs: "180px",
                                        sm: "250px",
                                        md: "360px",
                                    },
                                    height: {
                                        xs: "70px",
                                        sm: "95px",
                                        md: "130px",
                                    },
                                }}
                            >
                                {/* Crown */}
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: {
                                            xs: "-10px",
                                            md: "-12px",
                                        },
                                        width: {
                                            xs: "32px",
                                            md: "65px",
                                        },
                                        height: {
                                            xs: "22px",
                                            md: "41px",
                                        },
                                        zIndex: 5,
                                    }}
                                >
                                    <Image
                                        src="/refer-and-earn/crown.svg"
                                        alt="Crown"
                                        fill
                                        style={{
                                            objectFit: "contain",
                                        }}
                                    />
                                </Box>

                                <Image
                                    src={referImage}
                                    alt="Refer"
                                    fill
                                    priority
                                    style={{
                                        objectFit: "contain",
                                    }}
                                />
                            </Box>

                            {/* EARN */}
                            <Box
                                sx={{
                                    position: "relative",
                                    width: {
                                        xs: "160px",
                                        sm: "230px",
                                        md: "320px",
                                    },
                                    height: {
                                        xs: "70px",
                                        sm: "95px",
                                        md: "130px",
                                    },
                                    mt: {
                                        xs: "-18px",
                                        md: "-34px",
                                    },
                                }}
                            >
                                <Image
                                    src={earnImage}
                                    alt="Earn"
                                    fill
                                    priority
                                    style={{
                                        objectFit: "contain",
                                    }}
                                />
                            </Box>
                        </Box>

                        {/* & */}
                        <Box
                            sx={{
                                position: "relative",
                                width: {
                                    xs: "46px",
                                    sm: "62px",
                                    md: "92px",
                                },
                                height: {
                                    xs: "46px",
                                    sm: "62px",
                                    md: "92px",
                                },
                                mt: {
                                    xs: "10px",
                                    md: "16px",
                                },
                            }}
                        >
                            <Image
                                src={andImage}
                                alt="And"
                                fill
                                priority
                                style={{
                                    objectFit: "contain",
                                }}
                            />
                        </Box>
                    </Box>

                    {/* Reward Card */}
                    <Box
                        sx={{
                            width: {
                                xs: "100%",
                                sm: "434px",
                                md: "514px",
                            },
                            maxWidth: "100%",
                            background: "#3A3D84",
                            border: "1.5px solid rgba(255,255,255,0.8)",
                            borderRadius: "8px",
                            px: {
                                xs: "18px",
                                md: "28px",
                            },
                            py: {
                                xs: "16px",
                                md: "20px",
                            },
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: "Open Sans",
                                color: "#FFFFFF",
                                fontWeight: 400,
                                fontSize: {
                                    xs: "24px",
                                    sm: "30px",
                                    md: "36px",
                                },
                                lineHeight: "100%",
                                mb: "8px",
                            }}
                        >
                            Refer friends & get
                        </Typography>

                        <Typography
                            sx={{
                                fontFamily: "Montserrat",
                                fontWeight: 800,
                                color: "#FFFF0B",
                                fontSize: {
                                    xs: "28px",
                                    sm: "34px",
                                    md: "41px",
                                },
                                lineHeight: "100%",
                                whiteSpace: "nowrap",
                            }}
                        >
                            ₹50,000 CREDITED*
                        </Typography>
                    </Box>
                </Box>

                {/* RIGHT SIDE */}
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
                        position: "relative",
                        minHeight: {
                            xs: "260px",
                            sm: "360px",
                            md: "552px",
                        },
                    }}
                >
                    {/* Boy Image */}
                    <Box
                        sx={{
                            position: "relative",
                            width: {
                                xs: "300px",
                                sm: "440px",
                                md: "600px",
                            },
                            height: {
                                xs: "280px",
                                sm: "420px",
                                md: "552px",
                            },
                        }}
                    >
                        <Image
                            src="/refer-and-earn/bannerStudent.svg"
                            alt="Student"
                            fill
                            priority
                            style={{
                                objectFit: "contain",
                                objectPosition: "bottom center",
                            }}
                        />
                    </Box>
                    {/* Bottom Strip */}
                    <Box
                        sx={{
                            position: "absolute",
                            bottom: 0,
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "100%",
                            maxWidth: "1440px",
                            zIndex: 10,

                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                width: "100%",
                            }}
                        >
                            {/* Left Strip */}
                            <Box
                                sx={{
                                    width: {
                                        xs: "70%",
                                        md: "620px",
                                    },
                                    background:
                                        "linear-gradient(90deg, transparent 0%, rgba(46,49,140,0.95) 20%, rgba(46,49,140,0.95) 80%, transparent 100%)",
                                    py: "6px",
                                    px: "14px",
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: "#fff",
                                        fontSize: {
                                            xs: "11px",
                                            md: "16px",
                                        },
                                        fontFamily: "Open Sans",
                                        lineHeight: "120%",
                                    }}
                                >
                                    *Account transfer post successful enrolment
                                </Typography>
                            </Box>

                            {/* Right Text */}
                            <Typography
                                sx={{
                                    color: "#fff",
                                    fontSize: {
                                        xs: "11px",
                                        md: "14px",
                                    },
                                    fontFamily: "Open Sans",
                                    whiteSpace: "nowrap",
                                    ml: 2,
                                    position: "absolute",
                                    right: 0,
                                    bottom: "6px",
                                }}
                            >
                                *T&C Apply
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}