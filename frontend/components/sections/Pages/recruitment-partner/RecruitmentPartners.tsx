"use client";

import { Box, Container, Typography, useMediaQuery } from "@mui/material";
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
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
                    px: { xs: 1, md: 0 },

                    // dashed line
                    "&::before": {
                        content: '""',
                        display: isLast ? "none" : { xs: "none", md: "block" },
                        position: "absolute",
                        top: "50px",
                        left: "68%",
                        width: "64%",
                        borderTop: "1.5px dashed #6E0092",
                    },
                }}
            >
                {/* arrow */}
                {!isLast && (
                    <ArrowForwardIosIcon
                        sx={{
                            position: "absolute",
                            top: "40px",
                            right: { md: "-12px" },
                            display: { xs: "none", sm: "none", md: "none", lg: "block" },
                            fontSize: 22,
                            color: "#6E0092",
                            zIndex: 2,
                        }}
                    />
                )}

                {/* ICON WRAPPER */}
                <Box
                    sx={{
                        width: { xs: 80, md: 100 },
                        height: { xs: 80, md: 100 },
                        borderRadius: "50%",
                        background: "#6E0092",
                        boxShadow: "-26px -26px 13px -30.33px #676565 inset",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: "auto",
                        mb: 3,
                        position: "relative",
                    }}
                >
                    <Box
                        sx={{
                            width: { xs: 38, md: 46 },
                            height: { xs: 38, md: 46 },
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
                        maxWidth: { xs: "100%", md: "80%" },
                        mx: "auto",
                        lineHeight: 1.5,
                        fontSize: { xs: "14px", md: "16px" },
                    }}
                >
                    {item.title}
                </Typography>
            </Box>
        );
    };

    return (
        <Box
            sx={{
                background: "url(/study-abroad/Background-2.webp)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "24px",
                overflow: "hidden",
                mx: { xs: 2, md: 4 },
                py: { xs: 7, md: 10 },
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
            <Container maxWidth="xl">
                {/* HEADING */}
                <SectionHeader
                    title="How MetaApply Works with"
                    highlight={highlightHeading}
                />

                {/* MOBILE -> SLIDER */}
                {isMobile ? (
                    <CustomSlider
                        data={journey}
                        slidesPerView={2}
                        spaceBetween={10}
                        showArrows
                        showPagination={true}
                        loop={false}
                        disablePadding
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            480: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                        }}
                        renderItem={(item: JourneyItem) => {
                            const index = journey.findIndex((j) => j.id === item.id);

                            return <JourneyCard item={item} index={index} />;
                        }}
                    />
                ) : (
                    /* DESKTOP -> NORMAL FLEX (NO SLIDER) */
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: "repeat(6, 1fr)",
                            gap: 2,
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
    );
}