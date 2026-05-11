"use client";

import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

import CustomSlider from "@/components/common/CustomSlider";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";

import CallIcon from "@mui/icons-material/CallOutlined";
import LocationOnIcon from '@mui/icons-material/LocationOn';
/* ================= TYPES ================= */

type StudyCenter = {
    id: number;
    city: string;
    state: string;
    phone: string;
    address: string;
    image: string;
};

const studyCentres: StudyCenter[] = [
    {
        id: 1,
        city: "Bengaluru",
        state: "Karnataka",
        phone: "+91- 7428006970",
        address:
            "Ground Floor, Phoenix Pinnacle Building, Ulsoor Road, Banglore - 560042",
        image: "/about-us/center-1.svg",
    },
    {
        id: 2,
        city: "Pune",
        state: "Gujarat",
        phone: "+91- 7428006970",
        address:
            "Ground Floor, Phoenix Pinnacle Building, Ulsoor Road, Banglore - 560042",
        image: "/about-us/center-2.svg",
    },
    {
        id: 3,
        city: "Ahmedabad",
        state: "Gujarat",
        phone: "+91- 7428006970",
        address:
            "Ground Floor, Phoenix Pinnacle Building, Ulsoor Road, Banglore - 560042",
        image: "/about-us/center-3.svg",
    },
    {
        id: 4,
        city: "Jaipur",
        state: "Rajasthan",
        phone: "+91- 7428006970",
        address:
            "Ground Floor, Phoenix Pinnacle Building, Ulsoor Road, Banglore - 560042",
        image: "/about-us/center-4.svg",
    },
    {
        id: 5,
        city: "Jaipur",
        state: "Rajasthan",
        phone: "+91- 7428006970",
        address:
            "Ground Floor, Phoenix Pinnacle Building, Ulsoor Road, Banglore - 560042",
        image: "/about-us/center-4.svg",
    },
];

/* ================= COMPONENT ================= */

export default function StudyAbroadCentresSection() {

    return (
        <Section
            spacing="lg"
            sx={{ backgroundColor: "#F7FBFF" }}>


            <SectionHeader title="Walk-in to your nearest" highlight="Study Abroad Centre" />

            <CustomSlider
                data={studyCentres}
                slidesPerView={4}
                spaceBetween={20}
                breakpoints={{
                    0: {
                        slidesPerView: 1.15,
                        spaceBetween: 16,
                    },
                    480: {
                        slidesPerView: 1.4,
                        spaceBetween: 16,
                    },
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 18,
                    },
                    900: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                renderItem={(item) => (

                    <Box
                        sx={{
                            width: "100%",
                            borderRadius: "16px",
                            overflow: "hidden",
                            backgroundColor: "#FFFFFF",
                            boxShadow: "0px 4px 20px rgba(0,0,0,0.06)",
                            display: "flex",
                            flexDirection: "column",
                            height: "100%",
                        }}
                    >
                        {/* IMAGE */}
                        <Box
                            sx={{
                                position: "relative",
                                width: "100%",
                                height: {
                                    xs: 190,
                                    sm: 200,
                                },
                            }}
                        >
                            <Image
                                src={item.image}
                                alt={item.city}
                                fill
                                style={{
                                    objectFit: "cover",
                                }}
                            />
                        </Box>

                        {/* CONTENT */}
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "12px",
                                p: "20px",
                                flexGrow: 1,
                            }}
                        >
                            {/* TITLE */}
                            <Box>
                                <Typography
                                    sx={{
                                        fontFamily: "Plus Jakarta Sans",
                                        fontWeight: 600,
                                        fontSize: "20px",
                                        lineHeight: "150%",
                                        color: "#0B1B2B",
                                    }}
                                >
                                    {item.city}
                                </Typography>

                                <Typography
                                    sx={{
                                        fontFamily: "Open Sans",
                                        fontWeight: 400,
                                        fontSize: "12px",
                                        lineHeight: "20px",
                                        color: "#5F5F5F",
                                    }}
                                >
                                    {item.state}
                                </Typography>
                            </Box>

                            {/* PHONE */}
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                }}
                            >
                                <CallIcon
                                    sx={{
                                        fontSize: 16,
                                        color: "#FF2E83",
                                    }}
                                />

                                <Typography
                                    sx={{
                                        fontFamily: "Open Sans",
                                        fontWeight: 400,
                                        fontSize: "12px",
                                        lineHeight: "20px",
                                        color: "#4A4A4A",
                                    }}
                                >
                                    {item.phone}
                                </Typography>
                            </Box>

                            {/* ADDRESS */}
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                    gap: "8px",
                                }}
                            >
                                <LocationOnIcon
                                    sx={{
                                        fontSize: 16,
                                        color: "#FF2E83",
                                        mt: "2px",
                                    }}
                                />

                                <Typography
                                    sx={{
                                        fontFamily: "Open Sans",
                                        fontWeight: 400,
                                        fontSize: "12px",
                                        lineHeight: "16px",
                                        color: "#4A4A4A",
                                    }}
                                >
                                    {item.address}
                                </Typography>
                            </Box>

                            {/* BUTTON */}
                            <Button
                                fullWidth
                                variant="outlined"
                                sx={{
                                    mt: "auto",
                                    height: "46px",
                                    borderRadius: "12px",
                                    border: "1px solid #FF2E83",
                                    color: "#FF2E83",
                                    textTransform: "none",
                                    fontFamily: "Plus Jakarta Sans",
                                    fontWeight: 500,
                                    fontSize: "16px",
                                    lineHeight: "20px",

                                    "&:hover": {
                                        border: "1px solid #FF2E83",
                                        backgroundColor: "rgba(255,46,131,0.04)",
                                    },
                                }}
                            >
                                Book a Visit
                            </Button>
                        </Box>
                    </Box>
                )}
            />
        </Section>
    );
}