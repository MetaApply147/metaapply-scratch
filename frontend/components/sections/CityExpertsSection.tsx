'use client';

import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { getServices } from "@/services/httpServices";
import SectionHeader from '../common/SectionHeader';
import Section from '../common/Section';

/* ================= TYPES ================= */

type Feature = {
  title: string;
};

type Testimonial = {
  text: string;
  rating: number;
  name: string;
  designation: string;
  avatar: {
    url: string;
  };
};

type CityExpert = {
  id: number;
  city: string;
  slug: string;
  image: { url: string };
  features: Feature[];
  testimonial: Testimonial;
  ctaText: string;
  ctaUrl: string;
  order: number;
};

/* ================= CONFIG ================= */

const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

/* ================= HELPERS ================= */

const getImageUrl = (url?: string) => {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  return `${BASE_URL}${url}`;
};

const parseRichText = (blocks: any) => {
  if (!blocks || !Array.isArray(blocks)) return "";

  return blocks
    .map((block) =>
      block.children?.map((child: any) => child.text).join("")
    )
    .join("\n");
};

/* ================= COMPONENT ================= */

export default function CityExpertsSection() {
  const [data, setData] = useState<CityExpert[]>([]);
  const [activeCity, setActiveCity] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await getServices("/city-experts", {
        populate: "*",
        sort: ["order:asc"],
      });

      if (!res.isSuccess) return;

      const cities: CityExpert[] = res.data.data;

      setData(cities);
      setActiveCity(cities[0]?.city);
    };

    fetchData();
  }, []);

  const activeData = data.find((c) => c.city === activeCity);

  if (!activeData) return null;

  return (
    <Section spacing="lg">
        <SectionHeader
        title="Meet Our Experts"
        highlight="in Your City"
        />
        
        {/* ================= TABS ================= */}
        <Box display="flex" gap={3} mb={4} flexWrap="wrap">
            {data.map((item) => (
            <Typography
                key={item.id}
                onClick={() => setActiveCity(item.city)}
                sx={{
                cursor: "pointer",
                fontWeight: 500,
                position: "relative",
                color: activeCity === item.city ? "#ff4081" : "#000",
                "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -4,
                    left: 0,
                    width: activeCity === item.city ? "100%" : "0%",
                    height: "2px",
                    background: "#ff4081",
                    transition: "0.3s",
                },
                }}
            >
                {item.city}
            </Typography>
            ))}
        </Box>

        {/* ================= CONTENT ================= */}
        <Box
            display="grid"
            gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
            gap={4}
        >
            {/* LEFT IMAGE */}
            <Box
            sx={{
                borderRadius: "16px",
                overflow: "hidden",
            }}
            >
            <Image
                src={getImageUrl(activeData.image?.url)}
                alt={activeData.city}
                width={600}
                height={500}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            </Box>

            {/* RIGHT CONTENT */}
            <Box>
            {/* FEATURES */}
            <Box
                sx={{
                p: 2,
                borderRadius: "16px",
                background: "#f5f5f5",
                mb: 3,
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 2,
                }}
            >
                {activeData.features?.map((f, i) => (
                <Box key={i} display="flex" gap={1} alignItems="center">
                    <Box
                    sx={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: "green",
                    }}
                    />
                    <Typography variant="body2">{f.title}</Typography>
                </Box>
                ))}
            </Box>

            {/* TESTIMONIAL */}
            <Box
                sx={{
                p: 3,
                borderRadius: "16px",
                background: "#f5f5f5",
                mb: 3,
                }}
            >
                {/* RATING */}
                <Box mb={1}>
                {"⭐".repeat(activeData.testimonial?.rating || 0)}
                </Box>

                {/* TEXT */}
                <Typography variant="body2" mb={2}>
                {parseRichText(activeData.testimonial?.text)}
                </Typography>

                {/* USER */}
                <Box display="flex" alignItems="center" gap={2}>
                <Image
                    src={getImageUrl(activeData.testimonial?.avatar?.url)}
                    alt={activeData.testimonial?.name}
                    width={40}
                    height={40}
                    style={{ borderRadius: "50%" }}
                />

                <Box>
                    <Typography fontWeight={600}>
                    {activeData.testimonial?.name}
                    </Typography>
                    <Typography variant="body2">
                    {activeData.testimonial?.designation}
                    </Typography>
                </Box>
                </Box>
            </Box>

            {/* CTA BUTTON */}
            <Link href={activeData.ctaUrl?.toLowerCase() || "#"}>
                <Button
                sx={{
                    borderRadius: "30px",
                    px: 4,
                    py: 1.5,
                    textTransform: "none",
                    fontWeight: 600,
                    background: "linear-gradient(90deg, #ff4081, #ff1a75)",
                    color: "#fff",
                    "&:hover": {
                    background: "linear-gradient(90deg, #ff1a75, #ff4081)",
                    },
                }}
                >
                {activeData.ctaText || "Book Your Visit Today"}
                </Button>
            </Link>
            </Box>
        </Box>
    </Section>
    
  );
}