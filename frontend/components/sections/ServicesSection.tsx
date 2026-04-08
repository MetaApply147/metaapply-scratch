'use client';

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SectionHeader from '../common/SectionHeader';
import Section from '../common/Section';
import Link from "next/link";
import { link } from "fs";

/* ================= DATA ================= */

const services = [
  {
    title: "MetaFinance",
    desc: "Education Loan Assistance Simplified",
    image: "/Home/metaFinanace.webp",
    logo:  "/Home/metafinance_logo.webp",
    topBgColor: "#FFF0EB",
    borderColor: "#DD6A49",
    gradient: "linear-gradient(106.5deg, #DD6A49 22.23%, #E7896E 77.77%)",
    link: '/metafinance',
  },
  {
    title: "MetaFly",
    desc: "Hassle-free Discounted Flights for Student Travel",
    image: "/Home/metaFly.webp",
    logo:  "/Home/metafly_logo.webp",
    topBgColor: "#FCFBFF",
    borderColor: "#8366F1",
    gradient: "linear-gradient(106.5deg, #7352EF 22.23%, #9E87F8 77.77%)",
    link: '/metafly',
  },
  {
    title: "MetaStay",
    desc: "Budget-friendly Student Accommodation",
    image: "/Home/MetaStay.webp",
    logo:  "/Home/metastay_logo.webp",
    topBgColor: "#F1FFFA",
    borderColor: "#30A87D",
    gradient: "linear-gradient(106.5deg, #30A87D 22.23%, #15C988 77.77%)",
    link: '/metastay',
  },
  {
    title: "MetaInsure",
    desc: "Student Travel & Health Insurance",
    image: "/Home/MetaInsure.webp",
    logo:  "/Home/metainsure_logo.webp",
    topBgColor: "#EFF9FF",
    borderColor: "#307CA4",
    gradient: "linear-gradient(106.5deg, #307CA4 22.23%, #32A3E0 77.77%)",
    link: '/metainsure',
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
            gap={{xs: 2, md: 4, xl: 5}}
        >
            {services.map((service, index) => (
            <Link href={service.link} key={index}>
                <Box
                    sx={{
                    borderRadius: "16px",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0px 10px 10px 0px #C3C3C340",
                    border: `1px solid ${service.borderColor}`,
                    display: 'flex',
                    height: '100%',
                    flexDirection: 'column',
                    "&:hover": {
                        transform: "translateY(-6px)",
                    },
                    }}
                >
                    {/* TOP IMAGE SECTION */}
                    <Box
                    sx={{
                        background: `${service.topBgColor}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        py: 4.2
                    }}
                    >
                        <Image
                            src={service.image}
                            alt={service.title}
                            width={100}
                            height={100}
                            style={{width: 'auto', height: '100px'}}
                        />
                    </Box>

                    {/* BOTTOM CONTENT */}
                    <Box
                    sx={{
                        pt: 1.75,
                        px: 2.75,
                        pb: 3,
                        color: "#fff",
                        background: service.gradient,
                        display: "flex",
                        flexDirection: "column",
                        height: '100%'
                    }}
                    >
                        
                        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1.75}>
                            <Image
                                src={service.logo}
                                alt={service.title}
                                width={140}
                                height={42}
                                style={{width: 'auto', height: "42px"}}
                            />
                            <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
                        </Box>

                        <Typography variant="body05" component='p' sx={{maxWidth: '85%'}}>
                            {service.desc}
                        </Typography>
                    </Box>
                </Box>
            </Link>
            ))}
        </Box>
    </Section>
    
  );
}