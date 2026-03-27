'use client';

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SectionHeader from '../common/SectionHeader';
import Section from '../common/Section';

/* ================= DATA ================= */

const services = [
  {
    title: "MetaFinance",
    desc: "Education Loan Assistance Simplified",
    image: "/icons/finance.png",
    gradient: "linear-gradient(180deg, #f7d6c9, #e47c5a)",
  },
  {
    title: "MetaFly",
    desc: "Hassle-free Discounted Flights for Student Travel",
    image: "/icons/fly.png",
    gradient: "linear-gradient(180deg, #dcd6ff, #7b5cff)",
  },
  {
    title: "MetaStay",
    desc: "Budget-friendly Student Accommodation",
    image: "/icons/stay.png",
    gradient: "linear-gradient(180deg, #d6f5e8, #2bb673)",
  },
  {
    title: "MetaInsure",
    desc: "Student Travel & Health Insurance",
    image: "/icons/insure.png",
    gradient: "linear-gradient(180deg, #d6eaf5, #3b8dbd)",
  },
];

/* ================= COMPONENT ================= */

export default function ServicesSection() {
  return (
    <Section spacing="lg">
        <SectionHeader
            title="Our"
            highlight="Services"
        />
        {/* Cards */}
        <Box
            display="grid"
            gridTemplateColumns="repeat(auto-fit, minmax(240px, 1fr))"
            gap={3}
        >
            {services.map((service, index) => (
            <Box
                key={index}
                sx={{
                borderRadius: "16px",
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                },
                }}
            >
                {/* TOP IMAGE SECTION */}
                <Box
                sx={{
                    background: "#f5f5f5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 140,
                }}
                >
                <Image
                    src={service.image}
                    alt={service.title}
                    width={80}
                    height={80}
                />
                </Box>

                {/* BOTTOM CONTENT */}
                <Box
                sx={{
                    p: 2,
                    color: "#fff",
                    background: service.gradient,
                    minHeight: 120,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
                >
                <Box display="flex" justifyContent="space-between">
                    <Typography fontWeight={600}>
                    {service.title}
                    </Typography>

                    <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
                </Box>

                <Typography variant="body2" mt={1}>
                    {service.desc}
                </Typography>
                </Box>
            </Box>
            ))}
        </Box>
    </Section>
    
  );
}