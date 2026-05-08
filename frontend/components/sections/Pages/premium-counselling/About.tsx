"use client";

import SectionHeader from "@/components/common/SectionHeader";
import { Box, Typography } from "@mui/material";

export default function AboutSection() {
    return (
        <Box
            sx={{
                width: "1211px",
                height: "578px",
                borderRadius: "60px",
                overflow: "hidden",
                position: "relative",
                backgroundImage: "url('/premium-counselling/about.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",

                px: "78px",
                pt: "160px",
            }}
        >
            {/* CONTENT */}
            <Box
                sx={{
                    width: "648px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "44px",
                }}
            >
                {/* TOP */}
                <Box>
                    <SectionHeader
                        title="About"
                        highlight="Premium Counselling"
                        mb="12px"
                    />

                    <Typography
                        component="p"
                        sx={{
                            fontFamily: "Open Sans",
                            fontWeight: 400,
                            fontSize: "20px",
                            lineHeight: "100%",
                            color: "#730098",
                        }}
                    >
                        To those who dare to dream big, we are here to help them achieve it!
                    </Typography>
                </Box>

                {/* PARA */}
                <Typography
                    component="p"
                    sx={{
                        fontFamily: "Open Sans",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "24px",
                        color: "#031621",
                    }}
                >
                    Every year, millions of students aspire to study abroad, yet only a
                    select few get the chance to secure places at the world’s top
                    universities. With thousands of choices and intense global competition,
                    success demands more than ambition. MetaApply Premium Counselling
                    ensures you stand apart—offering personalised mentorship, strategic
                    guidance, and complete end-to-end support. We provide the clarity,
                    precision, and expertise required to turn elite education dream into
                    reality and shape tomorrow’s global leaders today.
                </Typography>
            </Box>
        </Box>
    );
}