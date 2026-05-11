"use client";

import SectionHeader from "@/components/common/SectionHeader";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function StorySection() {
    return (
        <Box
            sx={{
                width: "100%",
                background: "#FFFFFF",
                py: {
                    xs: "60px",
                    md: "80px",
                    lg: "100px",
                },
                px: {
                    xs: "16px",
                    sm: "24px",
                    md: "40px",
                },
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "1314px",
                    position: "relative",
                }}
            >
                {/* TOP CONTENT */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: {
                            xs: "column",
                            md: "row",
                        },
                        alignItems: {
                            xs: "flex-start",
                            md: "flex-start",
                        },
                        justifyContent: "space-between",
                        gap: {
                            xs: "24px",
                            md: "32px",
                        },
                        position: "relative",
                        zIndex: 2,
                    }}
                >
                    {/* LEFT TEXT */}
                    <Box
                        sx={{
                            width: "100%",
                            maxWidth: {
                                xs: "100%",
                                md: "919px",
                            },
                        }}
                    >
                        <SectionHeader
                            title="Our"
                            highlight="Story"
                            mb="18px"
                        />

                        <Typography
                            sx={{
                                fontFamily: "Open Sans",
                                fontWeight: 400,
                                fontSize: {
                                    xs: "15px",
                                    sm: "16px",
                                    md: "18px",
                                },
                                color: "#202020",
                            }}
                        >
                            MetaApply IE is a global leader in international education, with end-to-end 
                            specialised services in higher education and language learning. Our mission is 
                            to revolutionise the study abroad journey through robust, AI-powered 
                            recommendations that connect students to world-class programmes at the best 
                            universities around the world. A proud venture of MetaApply 
                            (MAPPLY EDUCATION PRIVATE LIMITED) and IE Intercâmbio, MetaApply IE empowers 
                            students to navigate their educational journeys with ease. We make sure to 
                            transcend boundaries in reaching every aspirant, empowering them to achieve 
                            their global dreams.
                        </Typography>
                    </Box>

                    {/* ROBOT IMAGE */}
                    <Box
                        sx={{
                            position: {
                                xs: "relative",
                                lg: "absolute",
                            },
                            right: {
                                lg: "20px",
                            },
                            top: {
                                lg: "-10px",
                            },
                            width: {
                                xs: "220px",
                                sm: "280px",
                                md: "320px",
                                lg: "327px",
                            },
                            height: {
                                xs: "450px",
                                sm: "560px",
                                md: "650px",
                                lg: "675px",
                            },
                            mx: {
                                xs: "auto",
                                md: "0",
                            },
                            zIndex: 3,
                            flexShrink: 0,
                        }}
                    >
                        <Image
                            src="/about-us/MISA.svg"
                            alt="MISA Robot"
                            fill
                            style={{
                                objectFit: "contain",
                            }}
                            priority
                        />
                    </Box>
                </Box>

                {/* BOTTOM CARD */}
<Box
    sx={{
        width: "100%",
        borderRadius: "10px",
        overflow: "hidden",
        position: "relative",
        minHeight: {
            xs: "auto",
            md: "405px",
        },

        /* FIX */
        mt: {
            xs: "20px",
            sm: "30px",
            md: "40px",
            lg: "48px",
        },
    }}
>
    {/* BACKGROUND IMAGE */}
    <Box
        sx={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
        }}
    >
        <Image
            src="/about-us/MISA-BG.svg"
            alt="MISA Background"
            fill
            style={{
                objectFit: "cover",
            }}
        />
    </Box>

    {/* CONTENT */}
    <Box
        sx={{
            position: "relative",
            zIndex: 2,
            width: {
                xs: "100%",
                lg: "867px",
            },
            pt: {
                xs: "40px",
                md: "60px",
            },
            pb: {
                xs: "40px",
                md: "50px",
            },
            pl: {
                xs: "24px",
                sm: "40px",
                md: "56px",
            },
            pr: {
                xs: "24px",
                md: "40px",
            },
        }}
    >
        <Box
    sx={{
        display: "flex",
        alignItems: "flex-end",
        gap: "12px",
        flexWrap: "wrap",
        mb: "24px",
    }}
>
    {/* LEFT */}
    <Box
        sx={{
            display: "flex",
            flexDirection: "column",
        }}
    >
        <Typography
            sx={{
                fontFamily: "Plus Jakarta Sans",
                fontWeight: 600,
                fontSize: {
                    xs: "16px",
                    md: "20px",
                },
                color: "#FFFFFF",
            }}
        >
            Meet
        </Typography>

        <Typography
            sx={{
                fontFamily: "Plus Jakarta Sans",
                fontWeight: 700,
                fontSize: {
                    xs: "32px",
                    md: "40px",
                },
                color: "#FFFFFF",
            }}
        >
            MISA
        </Typography>
    </Box>

    {/* RIGHT */}
    <Typography
        sx={{
            fontFamily: "Plus Jakarta Sans",
            fontWeight: 700,
            fontSize: {
                xs: "22px",
                md: "20px",
            },
            color: "#FFFFFF",
            mb: {
                xs: "0px",
                md: "6px",
            },
        }}
    >
        - My International Study Advisor
    </Typography>
</Box>

        <Typography
            sx={{
                fontFamily: "Open Sans",
                fontWeight: 400,
                fontSize: {
                    xs: "15px",
                    md: "16px",
                },
                color: "#FFFFFF",
                maxWidth: "867px",
            }}
        >
            Introducing MISA, your ultimate study abroad advisor and all things study abroad. MISA goes 
            beyond the ordinary, offering end-to-end assistance for your study abroad journey to ensure 
            it's not just seamless but also exciting and fulfilling. From university shortlisting to 
            admission processes, visa applications, travel arrangements, accommodation, financial guidance,
             and beyond, MISA is your reliable companion every step of the way. As the educational landscape
              evolves with the rise of EdTech and the integration of AI, MISA stays ahead of the curve, 
              leveraging technology to enhance your experience and provide personalised support. Think of 
              MISA as your 24/7 available trusted partner, best friend, counsellor, and personal guide, 
              committed to turning your study abroad dreams into reality. 
        </Typography>
    </Box>
</Box>
            </Box>
        </Box>
    );
}