'use client';

import { Box, Container, Typography } from '@mui/material';
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
        title: '01 Office in Australia',
        image: '/metaapply-amplify/Australia.svg',
    },
];

export default function GlobalReachSection() {
    return (
        <Box
            component="section"
            sx={{
                px: {
                    xs: 2,
                    sm: 3,
                    md: 0,
                },

                py: {
                    xs: 6,
                    sm: 7,
                    md: 8,
                    lg: '80px',
                },
            }}
        >
            {/* MAIN WRAPPER */}
            <Box
                sx={{
                    width: '100%',

                    maxWidth: '1832px',

                    mx: 'auto',
                }}
            >
                <Container>
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
                                lg: 'repeat(3,minmax(0,1fr))',
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
                                        md: '320px',
                                        lg: '360px',
                                    },

                                    mx: {
                                        xs: 'auto',
                                        lg: 0,
                                    },

                                    display: 'flex',

                                    flexDirection: 'column',

                                    alignItems: 'center',

                                    textAlign: 'center',

                                    minWidth: 0,
                                }}
                            >
                                {/* TITLE */}
                                <Typography
                                    sx={{
                                        fontFamily:
                                            'var(--font-heading)',

                                        fontWeight: 700,

                                        fontSize: {
                                            xs: '22px',
                                            sm: '24px',
                                            md: '27.6px',
                                        },

                                        lineHeight: 1.1,

                                        color: '#2C3688',

                                        mb: {
                                            xs: 2,
                                            md: '25px',
                                        },

                                        whiteSpace:
                                            'nowrap',

                                        minHeight: {
                                            xs: '32px',
                                            md: '36px',
                                        },

                                        display: 'flex',

                                        alignItems: 'center',

                                        justifyContent:
                                            'center',

                                        textAlign: 'center',
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

                                        flexShrink: 0,
                                    }}
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        style={{
                                            objectFit:
                                                'contain',
                                        }}
                                    />
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}