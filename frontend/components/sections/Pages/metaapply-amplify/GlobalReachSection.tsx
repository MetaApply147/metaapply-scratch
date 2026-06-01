'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import SectionHeader from '@/components/common/SectionHeader';

const offices = [
    {
        title: '31 Offices in Brazil',
        image: '/metaapply-amplify/Brazil.svg',
    },
    {
        title: '08 Offices in India',
        image: '/metaapply-amplify/India.webp',
    },
    {
        title: '03 Offices in UAE',
        image: '/metaapply-amplify/UAE.svg',
    },
    {
        title: '02 Offices in UK',
        image: '/metaapply-amplify/UK.svg',
    },
    {
        title: '01 Office in Ireland',
        image: '/metaapply-amplify/Ireland.svg',
    },
    {
        title: '01Office in Australia',
        image: '/metaapply-amplify/Australia.svg',
    },
];

export default function GlobalReachSection() {
    return (
        <Box
            component="section"
            sx={{
                width: '100%',

                maxWidth: '1500px',

                mx: 'auto',

                px: {
                    xs: 2,
                    sm: 3,
                    md: 4,
                    lg: '44px',
                },

                py: {
                    xs: 6,
                    sm: 7,
                    md: 8,
                    lg: '80px',
                },
            }}
        >
            {/* SECTION WRAPPER */}
            <Box
                sx={{
                    width: '100%',

                    maxWidth: '1411px',

                    mx: 'auto',
                }}
            >
                {/* HEADING */}
                <Box
                    sx={{
                        mb: {
                            xs: 4,
                            sm: 5,
                            md: '62px',
                        },
                    }}
                >
                    <SectionHeader
                        title="Our"
                        highlight="Global Reach"
                        mb="0px"
                    />
                </Box>

                {/* GRID */}
                <Box
                    sx={{
                        display: 'grid',

                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: 'repeat(2,1fr)',
                            lg: 'repeat(3,1fr)',
                        },

                        columnGap: {
                            xs: 3,
                            sm: 4,
                            md: 6,
                            lg: '25px',
                        },

                        rowGap: {
                            xs: 5,
                            sm: 6,
                            md: '72px',
                        },

                        alignItems: 'start',
                    }}
                >
                    {offices.map((item) => (
                        <Box
                            key={item.title}
                            sx={{
                                width: '100%',

                                maxWidth: {
                                    xs: '260px',
                                    md: '236px',
                                },

                                mx: {
                                    xs: 'auto',
                                    lg: '0',
                                },

                                display: 'flex',

                                flexDirection: 'column',

                                alignItems: 'center',

                                textAlign: 'center',
                            }}
                        >
                            {/* TITLE */}
                            <Typography
                                sx={{
                                    fontFamily: 'var(--font-heading)',

                                    fontWeight: 700,

                                    fontSize: {
                                        xs: '22px',
                                        sm: '24px',
                                        md: '27.6px',
                                    },

                                    lineHeight: '100%',

                                    color: '#2C3688',

                                    mb: {
                                        xs: 2,
                                        md: '25px',
                                    },

                                    minHeight: {
                                        xs: '52px',
                                        md: '36px',
                                    },

                                    display: 'flex',

                                    alignItems: 'center',

                                    justifyContent: 'center',
                                }}
                            >
                                {item.title}
                            </Typography>

                            {/* MAP IMAGE */}
                            <Box
                                sx={{
                                    position: 'relative',

                                    width: '100%',

                                    height: {
                                        xs: '180px',
                                        sm: '200px',
                                        md: '237px',
                                    },
                                }}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    style={{
                                        objectFit: 'contain',
                                    }}
                                />
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}