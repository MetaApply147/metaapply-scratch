'use client';

import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';

import SectionHeader from '@/components/common/SectionHeader';

type PartnerItem = {
    icon: string;
    title: string;
};

const items: PartnerItem[] = [
    {
        icon: '/university-partner/vetted-applications.svg',
        title: 'Hassle-free & vetted applications',
    },
    {
        icon: '/university-partner/success-manager.svg',
        title: 'Dedicated Product Success Manager',
    },
    {
        icon: '/university-partner/contact.svg',
        title: 'Reach 5000+ agent network across the world with a single contact',
    },
    {
        icon: '/university-partner/visa-desk.svg',
        title: 'Dedicated Visa Desk for each country',
    },
];

export default function WhyPartnerSection() {
    return (
        <Box
            component="section"
            sx={{
                width: '100%',
                px: {
                    xs: 2,
                    sm: 3,
                    md: 0,
                },

                py: {
                    xs: 5,
                    sm: 6,
                    md: 8,
                },
            }}
        >
            <Container>
                <Box
                    sx={{
                        width: '100%',

                        maxWidth: '1400px',

                        mx: 'auto',
                    }}
                >
                    {/* HEADER */}
                    <Box
                        sx={{
                            mb: {
                                xs: 4,
                                sm: 5,
                                md: '52px',
                            },
                        }}
                    >
                        <SectionHeader
                            title="Why"
                            highlight="Partner with Us?"
                        />
                    </Box>

                    {/* CARDS WRAPPER */}
                    <Box
                        sx={{
                            display: 'grid',

                            gridTemplateColumns: {
                                xs: '1fr',
                                sm: 'repeat(2, 1fr)',
                                lg: 'repeat(4, 1fr)',
                            },

                            gap: {
                                xs: 2,
                                sm: 3,
                                md: 4,
                            },

                            width: '100%',
                        }}
                    >
                        {items.map((item) => (
                            <Box
                                key={item.title}
                                sx={{
                                    width: '100%',

                                    minHeight: {
                                        xs: 220,
                                        sm: 240,
                                        md: 248,
                                    },

                                    borderRadius: '20px',

                                    background:
                                        'rgba(255, 255, 255, 0.8)',

                                    display: 'flex',

                                    flexDirection: 'column',

                                    alignItems: 'center',

                                    justifyContent: 'center',

                                    textAlign: 'center',

                                    boxShadow:
                                        '0px 10px 40px rgba(168, 168, 168, 0.20)',

                                    backdropFilter: 'blur(2px)',

                                    px: {
                                        xs: 2,
                                        sm: 3,
                                    },

                                    py: {
                                        xs: 3,
                                        sm: 4,
                                    },
                                }}
                            >
                                {/* ICON */}
                                <Box
                                    sx={{
                                        position: 'relative',

                                        width: {
                                            xs: 64,
                                            sm: 72,
                                            md: 80,
                                        },

                                        height: {
                                            xs: 64,
                                            sm: 72,
                                            md: 80,
                                        },

                                        mb: {
                                            xs: 2.5,
                                            md: 3,
                                        },

                                        flexShrink: 0,
                                    }}
                                >
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        fill
                                        style={{
                                            objectFit: 'contain',
                                        }}
                                    />
                                </Box>

                                {/* TITLE */}
                                <Typography
                                    sx={{
                                        width: '100%',

                                        typography: {
                                            xs: 'heading14',
                                            sm: 'heading13',
                                            md: 'heading12',
                                        },

                                        lineHeight: {
                                            xs: '22px',
                                            sm: '24px',
                                        },
                                        '&': {
                                            fontWeight: 500,
                                        },

                                        color: '#202020',

                                        textAlign: 'center',

                                        wordBreak:
                                            'break-word',

                                        overflowWrap:
                                            'break-word',

                                        textWrap: 'balance',
                                    }}
                                >
                                    {item.title}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}