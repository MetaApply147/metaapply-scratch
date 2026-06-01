'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import SectionHeader from '@/components/common/SectionHeader';

const pillars = [
    'Sales & Student Recruitment',
    'Visa Support',
    'Marketing and Branding',
    'Event',
    'Admission Process Backend Support',
    'Ancillary services- MetaFinance, MetaStay, Meta Insure & MetaFly',
];

const stats = [
    {
        icon: '/metaapply-amplify/graduate-student.svg',
        value: '5K+',
        label: 'Students helped',
    },
    {
        icon: '/metaapply-amplify/globe.svg',
        value: '30+',
        label: 'Study Destinations',
    },
    {
        icon: '/metaapply-amplify/students-helped.svg',
        value: '75K+',
        label: 'Student Community',
    },
    {
        icon: '/metaapply-amplify/university.svg',
        value: '400+',
        label: 'Partnered Universities',
    },
];

export default function AboutAmplifySection() {
    return (
        <Box
            component="section"
            sx={{
                width: '100%',

                maxWidth: '1832px',

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
            <Box
                sx={{
                    display: 'grid',

                    gridTemplateColumns: {
                        xs: '1fr',
                        md: '1fr 1fr',
                        xl: '602px 524px',
                    },

                    justifyContent: 'center',

                    gap: {
                        xs: 6,
                        sm: 7,
                        md: '60px',
                        lg: '100px',
                        xl: '189px',
                    },

                    alignItems: 'start',
                }}
            >
                {/* LEFT CONTENT */}
                <Box
                    sx={{
                        width: '100%',

                        maxWidth: {
                            xs: '100%',
                            xl: '602px',
                        },
                    }}
                >
                    {/* HEADING */}
                    <Box
                        sx={{
                            mb: {
                                xs: 2.5,
                                md: 4,
                            },
                        }}
                    >
                        <SectionHeader
                            title="About"
                            highlight="Amplify"
                            mb="0px"
                        />
                    </Box>

                    {/* DESCRIPTION */}
                    <Typography
                        sx={{
                            typography: {
                                xs: 'body06',
                                sm: 'body05',
                            },

                            lineHeight: {
                                xs: '24px',
                                sm: '28px',
                            },

                            color: 'text.body',

                            mb: {
                                xs: 3,
                                md: '28px',
                            },

                            maxWidth: '602px',
                        }}
                    >
                        Amplify is a tiered “university partnership” service that helps
                        universities boost international student recruitment across key
                        markets.
                    </Typography>

                    {/* SUB TITLE */}
                    <Typography
                        sx={{
                            typography: {
                                xs: 'body06',
                                sm: 'body05',
                            },

                            '&': {
                                fontWeight: 600,
                            },

                            lineHeight: {
                                xs: '24px',
                                sm: '28px',
                            },

                            color: 'text.body',

                            mb: {
                                xs: 2,
                                md: 3,
                            },
                        }}
                    >
                        We deliver comprehensive university support via our 6 core pillars:
                    </Typography>

                    {/* PILLARS */}
                    <Box
                        sx={{
                            display: 'flex',

                            flexDirection: 'column',

                            gap: {
                                xs: 1.5,
                                md: '12px',
                            },

                            width: '100%',

                            maxWidth: {
                                xs: '100%',
                                md: '520px',
                            },
                        }}
                    >
                        {pillars.map((item, index) => (
                            <Box
                                key={item}
                                sx={{
                                    width: '100%',

                                    minHeight: {
                                        xs: '44px',
                                        md: '38px',
                                    },

                                    borderRadius: '20px',

                                    background:
                                        'linear-gradient(90deg, #FFE1ED 0%, #FFFFFF 111.73%)',

                                    display: 'flex',

                                    alignItems: 'center',

                                    px: {
                                        xs: 1.5,
                                        md: '12px',
                                    },

                                    py: {
                                        xs: 1,
                                        md: '7px',
                                    },
                                }}
                            >
                                <Typography
                                    sx={{
                                        typography: {
                                            xs: 'body06',
                                            sm: 'body05',
                                        },

                                        lineHeight: {
                                            xs: '22px',
                                            sm: '28px',
                                        },

                                        color: 'text.body',

                                        wordBreak: 'break-word',
                                    }}
                                >
                                    {index + 1}. {item}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* RIGHT CONTENT */}
                <Box
                    sx={{
                        width: '100%',

                        maxWidth: {
                            xs: '100%',
                            xl: '524px',
                        },
                    }}
                >
                    {/* HEADING */}
                    <Box
                        sx={{
                            mb: {
                                xs: 2.5,
                                md: 4,
                            },
                        }}
                    >
                        <SectionHeader
                            title="Our"
                            highlight="Numbers"
                            mb="0px"
                        />
                    </Box>

                    {/* STATS GRID */}
                    <Box
                        sx={{
                            display: 'grid',

                            gridTemplateColumns: {
                                xs: '1fr',
                                sm: 'repeat(2,1fr)',
                            },

                            gap: {
                                xs: 2,
                                sm: 3,
                                md: '24px',
                            },
                        }}
                    >
                        {stats.map((item) => (
                            <Box
                                key={item.label}
                                sx={{
                                    width: '100%',

                                    minHeight: {
                                        xs: '170px',
                                        sm: '190px',
                                        md: '200px',
                                    },

                                    background: '#FFFFFF',

                                    borderRadius: '16px',

                                    px: {
                                        xs: 2.5,
                                        sm: 3,
                                        md: '24px',
                                    },

                                    py: {
                                        xs: 2.5,
                                        sm: 3,
                                        md: '32px',
                                    },

                                    boxShadow:
                                        '0px 10px 40px -1px #B9B9B926',

                                    display: 'flex',

                                    flexDirection: 'column',

                                    gap: {
                                        xs: 2,
                                        md: '24px',
                                    },
                                }}
                            >
                                {/* ICON */}
                                <Box
                                    sx={{
                                        position: 'relative',

                                        width: {
                                            xs: '64px',
                                            md: '77px',
                                        },

                                        height: {
                                            xs: '64px',
                                            md: '76px',
                                        },

                                        flexShrink: 0,
                                    }}
                                >
                                    <Image
                                        src={item.icon}
                                        alt={item.label}
                                        fill
                                        style={{
                                            objectFit: 'contain',
                                        }}
                                    />
                                </Box>

                                {/* CONTENT */}
                                <Box
                                    sx={{
                                        display: 'flex',

                                        flexDirection: 'column',

                                        gap: '4px',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontFamily: 'var(--font-heading)',

                                            fontWeight: 600,

                                            fontSize: {
                                                xs: '26px',
                                                sm: '28px',
                                                md: '32px',
                                            },

                                            lineHeight: {
                                                xs: '34px',
                                                sm: '38px',
                                                md: '42px',
                                            },

                                            letterSpacing: '0.15px',

                                            color: '#031621',
                                        }}
                                    >
                                        {item.value}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            typography: {
                                                xs: 'body06',
                                                sm: 'body05',
                                            },

                                            lineHeight: {
                                                xs: '22px',
                                                sm: '24px',
                                            },

                                            color: 'text.body',
                                        }}
                                    >
                                        {item.label}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}