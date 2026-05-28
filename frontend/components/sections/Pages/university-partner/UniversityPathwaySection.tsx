'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import SectionHeader from '@/components/common/SectionHeader';

type PathwayItem = {
    icon: string;
    title: string;
};

type Props = {
    items?: PathwayItem[];
};

const defaultItems: PathwayItem[] = [
    {
        icon: '/university-partner/students.svg',
        title: 'Thousands of active,\nenrolled-intent students',
    },
    {
        icon: '/university-partner/countries.svg',
        title: 'Students from 50+\ncountries',
    },
    {
        icon: '/university-partner/applications.svg',
        title: 'Applications reviewed\nbefore they reach you',
    },
    {
        icon: '/university-partner/recruitment.svg',
        title: 'Streamlined recruitment,\nstart to finish',
    },
];

export default function UniversityPathwaySection({
    items = defaultItems,
}: Props) {
    return (
        <Box
            component="section"
            sx={{
                mx: { xs: 2, md: 4, lg: 5 },
                mb: { xs: 5, md: 8 },

                position: 'relative',
                overflow: 'hidden',

                borderRadius: '20px',

                background: '#fff',

                px: {
                    xs: 3,
                    md: '44px',
                },

                py: {
                    xs: 5,
                    md: '40px',
                },

                '&::before': {
                    content: '""',

                    position: 'absolute',
                    inset: 0,

                    backgroundImage:
                        'url("/university-partner/bg-img.svg")',

                    backgroundSize: 'cover',
                    backgroundPosition: 'center',

                    opacity: 1,

                    pointerEvents: 'none',
                },
            }}
        >
            {/* HEADER */}
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 2,

                    mb: {
                        xs: 6,
                        md: '52px',
                    },
                }}
            >
                <SectionHeader
                    title="University"
                    highlight="Pathway"
                />
            </Box>

            {/* MAIN WRAPPER */}
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 2,

                    maxWidth: '1323px',

                    mx: 'auto',
                }}
            >
                {/* CENTER CONNECTOR LINE */}
                <Box
                    sx={{
                        display: {
                            xs: 'none',
                            lg: 'block',
                        },

                        position: 'absolute',

                        top: '100px',
                        left: '11%',

                        width: '78%',

                        borderTop: '1px dashed #15186C',

                        zIndex: 1,
                    }}
                />

                {/* ARROWS */}
                {[1, 2, 3].map((item) => (
                    <Box
                        key={item}
                        sx={{
                            display: {
                                xs: 'none',
                                lg: 'block',
                            },

                            position: 'absolute',

                            top: '95px',

                            left:
                                item === 1
                                    ? '24%'
                                    : item === 2
                                        ? '49.5%'
                                        : '75%',

                            width: '12px',
                            height: '12px',

                            borderTop: '2px solid #15186C',
                            borderRight: '2px solid #15186C',

                            transform: 'rotate(45deg)',

                            zIndex: 2,
                        }}
                    />
                ))}

                {/* ITEMS */}
                <Box
                    sx={{
                        position: 'relative',

                        display: 'grid',

                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: 'repeat(2,1fr)',
                            lg: 'repeat(4,1fr)',
                        },

                        gap: {
                            xs: 6,
                            md: 4,
                        },

                        alignItems: 'start',
                    }}
                >
                    {items.map((item) => (
                        <Box
                            key={item.title}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',

                                textAlign: 'center',

                                position: 'relative',
                                zIndex: 3,
                            }}
                        >
                            {/* CIRCLE */}
                            <Box
                                sx={{
                                    width: '200px',
                                    height: '200px',

                                    borderRadius: '50%',

                                    background: '#FFFFFF',

                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',

                                    boxShadow:
                                        '0px 2px 32px rgba(178, 178, 178, 0.20)',

                                    mb: '24px',
                                }}
                            >
                                <Box
                                    sx={{
                                        position: 'relative',

                                        width: '100px',
                                        height: '100px',
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
                            </Box>

                            {/* TEXT */}
                            <Typography
                                sx={{
                                    maxWidth: '242px',

                                    fontSize: '20px',
                                    lineHeight: '24px',

                                    fontWeight: 500,

                                    color: '#202020',

                                    whiteSpace: 'pre-line',
                                }}
                            >
                                {item.title}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}