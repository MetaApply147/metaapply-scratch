"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import SectionHeader from "@/components/common/SectionHeader";
import CustomSlider from "@/components/common/CustomSlider";
import Image from "next/image";
import CTASection from "../../CTASection";
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

export default function StudyAbroadJourney({ disablePadding = false }) {
    return (
        <Box
            component="section"
            sx={{ py: disablePadding ? "0" : { xs: 8, md: 11.25 } }}
        >
            <Container>
                <SectionHeader
                    title="Student's Study Abroad journey"
                    highlight="with MetaApply"
                />
            </Container>

            <Container>
                <CustomSlider
                    data={processSteps}
                    slidesPerView={7}
                    spaceBetween={0}
                    disablePadding
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        600: { slidesPerView: 2 },
                        900: { slidesPerView: 3 },
                        1200: { slidesPerView: 7 },
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
                                pt: Number(item.number) % 2 === 0 ? "64px" : "0",
                            }}
                        >
                            {/* text */}
                            <Box
                                sx={{
                                    mb: Number(item.number) % 2 !== 0 ? 3 : 0,
                                    mt: Number(item.number) % 2 === 0 ? 3 : 0,
                                    order: Number(item.number) % 2 === 0 ? 1 : -1,
                                }}
                            >
                                <Box
                                    display="flex"
                                    alignItems="flex-start"
                                >
                                    <Typography
                                        component="h3"
                                        variant="heading07"
                                        fontWeight={700}
                                        sx={{
                                            color: "primary.main",
                                            mr: 0.5,
                                            lineHeight: "40px !important",
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
                                            lineHeight: "19px",
                                            mt: 0.2,
                                            whiteSpace: "pre-line",
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                </Box>
                            </Box>

                            {/* ribbon */}
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    pl: "42px",
                                    width: "max-content",
                                    position: "relative",
                                    left: "0",
                                }}
                            >
                                {Array.from({
                                    length:
                                        item.number === processSteps.length.toString() ? 1 : 4,
                                }).map((_, i) => (
                                    <Box
                                        key={i}
                                        sx={{
                                            height: "97px",
                                            width: "58px",
                                            position: "relative",
                                            ml: i !== 0 ? "-10px" : 0,
                                        }}
                                    >
                                        <Image
                                            key={i}
                                            src={
                                                i === 0
                                                    ? "/study-abroad/dark-pink-vector.png"
                                                    : "/study-abroad/light-pink-vector.png"
                                            }
                                            alt="chevron"
                                            fill
                                            style={{ objectFit: "contain" }}
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
