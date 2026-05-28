'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import SectionHeader from '@/components/common/SectionHeader';

const points = [
    '1. Effortless Partner Search : Quickly find university partners that align with your goal.',

    '2. Seamless Transitions : Ensure smooth career progressions for students.',

    '3. Vision Alignment : Match students with universities that share their aspirations.',

    '4. Pool of Students : Facilitate connections for optimal student-university fit.',
];

export default function GlobalReachSection() {
    return (
        <Box
            component="section"
            sx={{
                width: '100%',
                background: "#F6FBFF",

                py: {
                    xs: 6,
                    sm: 8,
                    md: 10,
                },

                px: {
                    xs: 2,
                    sm: 3,
                    md: 4,
                    lg: 5,
                },
            }}
        >
            {/* MAIN CONTAINER */}
            <Box
                sx={{
                    width: '100%',
                    maxWidth: '1838px',

                    mx: 'auto',
                }}
            >
                {/* HEADING */}
                <Box
                    sx={{
                        mb: {
                            xs: 5,
                            md: 7,
                            lg: '68px',
                        },

                        width: '100%',

                        maxWidth: '1250px',

                        mx: 'auto',
                    }}
                >
                    <SectionHeader
                        title="Our"
                        highlight="Global Reach"
                    />
                </Box>

                {/* CONTENT */}
                <Box
                    sx={{
                        display: 'flex',

                        flexDirection: {
                            xs: 'column',
                            lg: 'row',
                        },

                        alignItems: {
                            xs: 'center',
                            lg: 'flex-start',
                        },

                        gap: {
                            xs: 5,
                            md: 7,
                            lg: '68px',
                        },
                    }}
                >
                    {/* LEFT IMAGE */}
                    <Box
                        sx={{
                            position: 'relative',

                            width: {
                                xs: '100%',
                                lg: 'calc(100% - 774px)',
                            },

                            maxWidth: {
                                xs: '500px',
                                md: '650px',
                                lg: '810px',
                            },

                            flexShrink: 1,

                            height: {
                                xs: '300px',
                                sm: '420px',
                                md: '520px',
                                lg: '597px',
                            },

                        }}
                    >
                        <Image
                            src="/university-partner/hand-holds-globe.svg"
                            alt="Global Reach"
                            fill
                            style={{
                                objectFit: 'contain',
                            }}
                            priority
                        />
                    </Box>

                    {/* RIGHT CONTENT */}
                    <Box
                        sx={{
                            width: '100%',

                            maxWidth: {
                                xs: '100%',
                                lg: '706px',
                            },

                            flexShrink: 0,

                            pt: {
                                xs: 0,
                                lg: '18px',
                            },
                        }}
                    >
                        {/* DESCRIPTION */}
                        <Typography
                            sx={{
                                mb: {
                                    xs: 4,
                                    md: 6,
                                    lg: '60px',
                                },

                                typography: {
                                    xs: 'body06',
                                    md: 'body05',
                                },

                                color: 'text.body',

                                lineHeight: {
                                    xs: '26px',
                                    md: '28px',
                                },
                            }}
                        >
                            Our global student recruitment network helps
                            enrol more than 10,000 students each year.
                            Physical presence, online technologies, easy
                            application processes, quality assurance and
                            local marketing support combine to transform
                            our partners&apos; internationalisation.
                        </Typography>

                        {/* POINTS */}
                        <Box
                            sx={{
                                display: 'flex',

                                flexDirection: 'column',

                                gap: {
                                    xs: 2,
                                    md: '18px',
                                },
                            }}
                        >
                            {points.map((point) => (
                                <Box
                                    key={point}
                                    sx={{
                                        width: '100%',

                                        display: 'flex',

                                        alignItems: 'center',

                                        px: {
                                            xs: 2,
                                            sm: 3,
                                            md: '34px',
                                        },

                                        py: {
                                            xs: 2,
                                            md: '22px',
                                        },

                                        borderRadius: {
                                            xs: '24px',
                                            md: '100px',
                                        },

                                        background:
                                            'linear-gradient(90.01deg, #FFCCE1 0.01%, #FFF2F7 87.11%)',

                                        boxShadow:
                                            '0px 8px 32px 0px #C6C6C640',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            typography: {
                                                xs: 'body06',
                                                md: 'body05',
                                            },

                                            '&': {
                                                fontWeight: 500,
                                            },

                                            lineHeight: {
                                                xs: '22px',
                                                md: '24px',
                                            },

                                            color: 'common.black',
                                        }}
                                    >
                                        {point}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}