"use client";

import { Box, Button, Typography } from "@mui/material";

export default function StudyJourneySection() {
    return (
        <Box
            sx={{
                width: "100%",
                background: "#FFFFFF",
                py: { xs: "40px", md: "80px" },
            }}
        >
            {/* BACKGROUND SECTION */}
            <Box
                sx={{
                    width: "100%",
                    minHeight: { xs: "380px", md: "464px" },

                    backgroundImage:
                        "url('/meet-misa/CTA-Background.svg')",

                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    px: { xs: 2, sm: 4, md: "70px" },
                    py: { xs: 4, md: "80px" },
                }}
            >
                {/* GLASS CARD */}
                <Box
                    sx={{
                        width: "100%",
                        maxWidth: "1472px",

                        minHeight: { xs: "220px", md: "304px" },

                        borderRadius: "13.35px",

                        border: "1.34px solid rgba(255,255,255,0.4)",

                        background: "rgba(255, 255, 255, 0.30)",

                        backdropFilter: "blur(8px)",
                        WebkitBackdropFilter: "blur(8px)",

                        display: "flex",
                        flexDirection: "column",

                        alignItems: "center",
                        justifyContent: "center",

                        gap: { xs: 3, md: "53px" },

                        px: { xs: 3, md: "70px" },
                        py: { xs: 5, md: "80px" },

                        textAlign: "center",
                    }}
                >
                    {/* TITLE */}
                    <Typography
                        sx={{
                            maxWidth: "580px",

                            fontFamily: "Plus Jakarta Sans",
                            fontWeight: 800,

                            fontSize: {
                                xs: "30px",
                                sm: "38px",
                                md: "48px",
                            },

                            lineHeight: {
                                xs: "40px",
                                md: "58px",
                            },

                            letterSpacing: "2%",

                            color: "#FFFFFF",
                        }}
                    >
                        Map your Study Abroad Journey with MISA
                    </Typography>

                    {/* BUTTON */}
                    <Button
                        sx={{
                            minWidth: "153px",
                            height: "49px",

                            borderRadius: "8px",

                            background: "#FFFFFF",

                            textTransform: "none",

                            fontFamily: "Plus Jakarta Sans",
                            fontWeight: 600,
                            fontSize: "16px",
                            lineHeight: "26px",

                            color: "#031621",

                            px: "24px",

                            "&:hover": {
                                background: "#FFFFFF",
                            },
                        }}
                    >
                        Talk to me
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}