'use client';

import { Box, Typography, Skeleton, Alert } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getServices } from '@/services/httpServices';
import CustomSlider from '@/components/common/CustomSlider';
import SectionHeader from '../common/SectionHeader';
import Section from '../common/Section';

/* ================= TYPES ================= */

type Destination = {
    id: number;
    name: string;
    flagUrl: string;
};

/* ================= CONFIG ================= */

const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

if (!BASE_URL) {
    throw new Error('Missing API URL');
}

/* ================= HELPERS ================= */

const getImageUrl = (url?: string): string | null => {
    if (!url) return null;

    // already full URL
    if (url.startsWith('http')) return url;

    // ensure no double slash
    return `${BASE_URL.replace(/\/$/, '')}/${url.replace(/^\//, '')}`;
};

/* ================= COMPONENT ================= */

export default function ServingDestinations() {
    const [data, setData] = useState<Destination[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const res = await getServices('/services-inner-page-destinations', {
                    populate: 'flag',
                    sort: ['order:asc'],
                });

                if (!res.isSuccess) {
                    throw new Error(
                        typeof res.message === 'string'
                            ? res.message
                            : res.message?.message || 'Failed to fetch'
                    );
                }

                const mapped = (res.data?.data || [])
                    .map((item: any) => {
                        // ✅ handle both Strapi formats
                        const rawUrl =
                            item?.flag?.url ||
                            item?.flag?.data?.attributes?.url;

                        const flagUrl = getImageUrl(rawUrl);

                        console.log('FINAL URL:', flagUrl); // ✅ debug

                        if (!flagUrl) return null;

                        return {
                            id: item.id,
                            name: item.countryname,
                            flagUrl,
                        };
                    })
                    .filter(Boolean) as Destination[];

                setData(mapped);
            } catch (err: any) {
                setError(err?.message || 'Something went wrong');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <Section spacing="lg">
            <SectionHeader
                title="Destinations"
                highlight="we are Serving"
            />

            <Box>
                {error && <Alert severity="error">{error}</Alert>}

                {loading && (
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        {Array.from({ length: 6 }).map((_, i) => (
                            <Skeleton key={i} variant="rounded" width={140} height={140} />
                        ))}
                    </Box>
                )}

                {!loading && !error && (
                    <CustomSlider
                        data={data}
                        spaceBetween={20}
                        slidesPerView={6}
                        breakpoints={{
                            320: { slidesPerView: 2 },
                            600: { slidesPerView: 3 },
                            900: { slidesPerView: 4 },
                            1200: { slidesPerView: 6 },
                        }}
                        renderItem={(item) => (
                            <Box
                                sx={{
                                    backgroundColor: '#fff',
                                    borderRadius: 3,
                                    boxShadow: '0px 4px 20px rgba(0,0,0,0.08)',
                                    textAlign: 'center',
                                    py: 3,
                                    px: 2,
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-6px)',
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 60,
                                        height: 60,
                                        margin: '0 auto',
                                        borderRadius: '50%',
                                        overflow: 'hidden',
                                        mb: 1.5,
                                    }}
                                >
                                    <Image
                                        src={item.flagUrl}
                                        alt={item.name}
                                        width={60}
                                        height={60}
                                        style={{ objectFit: 'cover' }}
                                    />
                                </Box>

                                <Typography variant="body2" fontWeight={500}>
                                    {item.name}
                                </Typography>
                            </Box>
                        )}
                    />
                )}
            </Box>
        </Section>
    );
}