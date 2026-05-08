"use client";

import SectionHeader from "@/components/common/SectionHeader";
import {
    Box,
    Button,
    Typography,
} from "@mui/material";
import Image from "next/image";
import BlogCard from "../blogs/BlogCard";

const blogCards = [
    {
        slug: "misa-metaapply-ie-official-mascot",
        title: "MISA- MetaApply IE Official Mascot and Chatbot",
        excerpt:
            "Meet MISA - Your Personal Study Abroad Companion MISA (My International Study Advisor) is not just a chatbot - she's...",
        featuredImage: {
            url: "/meet-misa/WOW-1.svg",
        },
        author: {
            name: "Hemani Tandon",
            image: {
                url: "/blogs/author-icon.svg",
            },
        },
        publishedAt: "2025-06-28",
    },
    {
        slug: "introducing-misa",
        title: "Introducing MISA – My International Study Advisor",
        excerpt:
            "Do you remember the days when technology was just a word, one that confused us as much as it fascinated...",
        featuredImage: {
            url: "/meet-misa/WOW-2.svg",
        },
        author: {
            name: "Hemani Tandon",
            image: {
                url: "/blogs/author-icon.svg",
            },
        },
        publishedAt: "2025-06-28",
    },
];

export default function WordsOfWisdomSection() {
    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                py: "80px",
                background: "#FFFFFF",
            }}
        >
            <Box
                sx={{
                    width: "1319px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "53.83px",
                }}
            >
                {/* HEADING */}
                <SectionHeader
                    title="MISA"
                    highlight="Words of Wisdom"
                    mb="0px"
                />

                {/* CONTENT */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "20px",
                        flexWrap: "nowrap",
                    }}
                >
                    {/* BLOG CARDS */}
                    {/* BLOG CARDS */}
                    <Box
                        sx={{
                            display: "flex",
                            gap: "20px",
                        }}
                    >
                        {blogCards?.slice(0, 2).map((blog: any, index: number) => (
                            <Box
                                key={index}
                                sx={{
                                    width: "424px",
                                    flexShrink: 0,
                                }}
                            >
                                <BlogCard blog={blog} />
                            </Box>
                        ))}
                    </Box>
                    {/* RIGHT CTA CARD */}
                    <Box
                        sx={{
                            width: "424px",
                            height: "546px",
                            borderRadius: "24px",
                            overflow: "hidden",
                            position: "relative",
                            backgroundImage: "url('/meet-misa/blue-cover.svg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            flexShrink: 0,
                        }}
                    >
                        {/* CONTENT */}
                        <Box
                            sx={{
                                position: "relative",
                                zIndex: 2,
                                height: "100%",
                                px: "36px",
                                py: "36px",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <Box
                                sx={{
                                    width: "353px",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "39px",
                                }}
                            >
                                {/* TEXT */}
                                <Typography
                                    sx={{
                                        fontFamily: "Plus Jakarta Sans",
                                        fontWeight: 500,
                                        fontSize: "28px",
                                        lineHeight: "41.41px",
                                        letterSpacing: "0%",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    MISA shares insights on every study
                                    destination, scholarships, courses, top
                                    universities, and more. Explore our blogs
                                    to gain the right information.
                                </Typography>

                                {/* BUTTON */}
                                <Button
                                    sx={{
                                        width: "179px",
                                        height: "57px",
                                        borderRadius: "16px",
                                        background:
                                            "linear-gradient(180deg, #FF3185 0%, #FF7CB1 100%)",
                                        textTransform: "none",
                                        fontFamily: "Plus Jakarta Sans",
                                        fontWeight: 600,
                                        fontSize: "16px",
                                        lineHeight: "14.42px",
                                        color: "#FFFFFF",
                                        boxShadow: "none",
                                        "&:hover": {
                                            background:
                                                "linear-gradient(180deg, #FF3185 0%, #FF7CB1 100%)",
                                            boxShadow: "none",
                                        },
                                    }}
                                >
                                    Explore Now
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}