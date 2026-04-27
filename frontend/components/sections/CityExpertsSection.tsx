'use client';

import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { getServices } from "@/services/httpServices";
import SectionHeader from '../common/SectionHeader';
import Section from '../common/Section';
import StarIcon from '@mui/icons-material/Star';

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
  if (!blocks || !Array.isArray(blocks)) return null;

  return blocks.map((block: any, index: number) => {
    if (block.type === "paragraph") {
      const text = block.children
        ?.map((child: any) => child.text)
        .join("");

      if (!text?.trim()) return <br key={index} />;

      return (
        <Typography key={index} variant="body05" component="p" mb={2}>
          {text}
        </Typography>
      );
    }

    return null;
  });
};

/* ================= COMPONENT ================= */

export default function CityExpertsSection() {
  const [data, setData] = useState<CityExpert[]>([]);
  const [activeCity, setActiveCity] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await getServices("/city-experts", {
        populate: {
            image: true,
            features: true,
            testimonial: {
            populate: {
                avatar: true,
            },
            },
        },
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

  const avatarUrl = activeData.testimonial?.avatar?.url;


  return (
    <Section spacing="lg" sx={{backgroundColor: 'yellow.50'}}>
        <SectionHeader
        title="Meet Our Experts"
        highlight="in Your City"
        />
        
        {/* ================= TABS ================= */}
        <Box display="flex" gap={{sm: 1, md: 2, lg:5}} mb={4} sx={{overflow: 'auto', pb: '12px'}}>
            {data.map((item) => (
            <Typography
                key={item.id}
                onClick={() => setActiveCity(item.city)}
                variant="heading12"
                sx={{
                fontSize: {xs: 16, md: '18px' ,lg: '18px' ,xl: '20px'},
                cursor: "pointer",
                fontWeight: 500,
                px: 1.5,
                pb: 0.5,
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
            gridTemplateColumns={{ xs: "1fr", md: "1.5fr 2fr" }}
            gap={{ xs: 3,md: 2, lg: 7}}
        >
            {/* LEFT IMAGE */}
            <Box
            sx={{
                borderRadius: {xs: '16px', sm: '20px'},
                overflow: "hidden",
                position: 'relative',
                height: {xs: '400px',sm: '638px'},
                width: '100%',
            }}
            >
            <Image
                src={getImageUrl(activeData.image?.url)}
                alt={activeData.city}
                fill
                style={{  objectFit: "cover" }}
            />
            </Box>

            {/* RIGHT CONTENT */}
            <Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
            {/* FEATURES */}
                <Box>
                    <Box
                        sx={{
                        py: 3.5,
                        px: {xs: 3, lg: 5},
                        borderRadius: 6,
                        backgroundColor: "common.white",
                        boxShadow: "0 8px 24px -8px #C0C0C040",
                        color: "text.secondary",
                        mb: 3,
                        display: "grid",
                        gridTemplateColumns: {xs: "1fr", sm: "1fr 1fr"},
                        gap: {xs: 1 ,lg: 2},
                        }}
                    >
                        {activeData.features?.map((f, i) => (
                        <Box key={i} display="flex" gap={1} alignItems="start">
                            <Box sx={{height: {xs: 18, sm: 20}, width: {xs: 18, sm: 20}, position: 'relative', mt: '2px'}}>
                                <Image src='../green-circle-check.svg' fill alt="Check" style={{objectFit: 'contain'}}/>
                            </Box>
                            <Typography variant="body05" sx={{fontSize: {md: 14, lg: 16}}}>{f.title}</Typography>
                        </Box>
                        ))}
                    </Box>

                    {/* TESTIMONIAL */}
                    <Box
                        sx={{
                        py: 3,
                        px: {xs: 3, sm: 5},
                        borderRadius: 6,
                        backgroundColor: "common.white",
                        boxShadow: "0 8px 24px -8px #C0C0C040",
                        mb: 3,
                        }}
                    >   
                        
                        <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}} mb={4}>
                            {/* Image Quotes */}
                            <Image src="../Home/blueQuotes.svg" height={36} width={50} alt="quotes"/>

                            {/* RATING */}
                            <Box mb={1}>
                            {[...Array(activeData.testimonial?.rating || 0)].map((_, i) => (
                                <StarIcon key={i} sx={{color: "orange.main"}} />
                            ))}
                            </Box>
                        </Box>

                        {/* TEXT */}
                        <Typography variant="body05" component="div" sx={{color: "text.secondary"}}>
                        {parseRichText(activeData.testimonial?.text)}
                        </Typography>

                        <Divider sx={{borderColor: "#E9EFF5", mt: 2.5, mb: 2.5}}/>

                        {/* USER */}
                        <Box display="flex" alignItems="center" gap={2}>
                            <Box sx={{height: {xs: 75,lg: 90}, 
                            width: {xs: 75,lg: 90}, position: "relative"}}>
                              <Image
                                  src={getImageUrl(avatarUrl) || "/default-avatar.png"}
                                  alt={activeData.testimonial?.name}
                                  fill
                                  style={{ borderRadius: "50%", objectFit: "contain" }}
                              />
                            </Box>

                            <Box>
                                <Typography variant="heading12" sx={{fontSize: {xs: 18, sm: 20}}}>
                                {activeData.testimonial?.name}
                                </Typography>
                                <Typography variant="body05" component="p" sx={{color: "text.secondary",fontSize: {xs: 14, sm: 16}}}>
                                {activeData.testimonial?.designation}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* CTA BUTTON */}
                <Link href={activeData.ctaUrl?.toLowerCase() || "#"}>
                    <Button variant="contained" size="large">
                    {activeData.ctaText || "Book Your Visit Today"}
                    </Button>
                </Link>
            </Box>
        </Box>
    </Section>
    
  );
}