'use client';

import { useEffect, useState } from "react";
import { Box, Typography, Divider, Button } from "@mui/material";
import Link from "next/link";
import { getServices } from "@/services/httpServices";
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";

/* ================= TYPES ================= */

type Coverage = {
    id: number;
    title?: string;
    media_url?: string;
    published_date?: string;
    channel?: string;
};

/* ================= HELPER ================= */

const isValidUrl = (url?: string) => {
    if (!url) return false;
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
};

/* ================= COMPONENT ================= */

export default function MediaCoverage() {
    const [data, setData] = useState<Coverage[]>([]);
    const [loading, setLoading] = useState(true);

    // ✅ pagination state
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const pageSize = 20;

    /* ================= FETCH ================= */

    const fetchData = async () => {
        try {
            setLoading(true);

            const res = await getServices("/media-coverages", {
                sort: "published_date:desc",
                pagination: {
                    page: page,
                    pageSize: pageSize,
                },
            });

            console.log("MEDIA API:", res);

            if (!res?.isSuccess) {
                setLoading(false);
                return;
            }

            // ✅ Strapi v5 structure
            const items = res?.data?.data || [];
            const meta = res?.data?.meta?.pagination;

            setData(items);
            setTotalPages(meta?.pageCount || 1);

        } catch (err) {
            console.error("Fetch error:", err);
        } finally {
            setLoading(false);
        }
    };

    /* ================= EFFECT ================= */

    useEffect(() => {
        fetchData();
    }, [page]); // ✅ page change pe API call

    /* ================= UI ================= */

    return (
        <Section spacing="lg">
            <Box>
                <SectionHeader title="Media" highlight="Coverage" />

                <Box mt={4}>
                    {/* LOADING */}
                    {loading && <Typography>Loading coverage...</Typography>}

                    {/* EMPTY */}
                    {!loading && data.length === 0 && (
                        <Typography>No media coverage found</Typography>
                    )}

                    {/* LIST */}
                    {data.map((item) => {
                        const validLink = isValidUrl(item.media_url);

                        return (
                            <Box key={item.id} py={2}>
                                {/* TITLE */}
                                {validLink ? (
                                    <Link
                                        href={item.media_url as string}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: "18px",
                                                color: "#1a237e",
                                                cursor: "pointer",
                                                "&:hover": { textDecoration: "underline" },
                                            }}
                                        >
                                            {item.title}
                                        </Typography>
                                    </Link>
                                ) : (
                                    <Typography
                                        sx={{
                                            fontSize: "18px",
                                            color: "#1a237e",
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                )}

                                {/* DATE + CHANNEL */}
                                <Box mt={1} display="flex" gap={3}>
                                    <Typography color="text.secondary">
                                        {item.published_date
                                            ? new Date(item.published_date).toLocaleDateString(
                                                "en-GB",
                                                {
                                                    day: "numeric",
                                                    month: "long",
                                                    year: "numeric",
                                                }
                                            )
                                            : ""}
                                    </Typography>

                                    <Typography color="text.secondary">
                                        {item.channel || "-"}
                                    </Typography>
                                </Box>

                                <Divider sx={{ mt: 2 }} />
                            </Box>
                        );
                    })}

                    {/* ✅ PAGINATION CONTROLS */}
                    {!loading && totalPages > 1 && (
                        <Box mt={4} display="flex" justifyContent="center" gap={2}>
                            <Button
                                variant="outlined"
                                disabled={page === 1}
                                onClick={() => setPage((prev) => prev - 1)}
                            >
                                Prev
                            </Button>

                            <Typography alignSelf="center">
                                Page {page} of {totalPages}
                            </Typography>

                            <Button
                                variant="outlined"
                                disabled={page === totalPages}
                                onClick={() => setPage((prev) => prev + 1)}
                            >
                                Next
                            </Button>
                        </Box>
                    )}
                </Box>
            </Box>
        </Section>
    );
}