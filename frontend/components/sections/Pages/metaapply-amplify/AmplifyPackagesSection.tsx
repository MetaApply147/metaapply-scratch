'use client';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {
    Box,
    Button,
    Typography,
} from '@mui/material';

import SectionHeader from '@/components/common/SectionHeader';

const packages = [
    {
        title: 'Essential',
        description:
            'Ideal for market-entry universities seeking visibility & steady pipeline.',
        titleColor: '#27A5A5',
        bg: '#ECFCFC',
    },
    {
        title: 'Growth',
        description:
            'Ideal for mid-scale universities seeking higher conversions & brand recall.',
        titleColor: '#3166C8',
        bg: '#EEF4FF',
    },
    {
        title: 'Premium',
        description:
            'Ideal for large universities seeking global diversity and enrolment scale.',
        titleColor: '#E99D1F',
        bg: '#FFF8E8',
    },
];

export default function AmplifyPackagesSection() {
    return (
        <Box
            component="section"
            sx={{
                width: '100%',

                maxWidth: '1415px',

                mx: 'auto',

                px: {
                    xs: 2,
                    sm: 3,
                    md: 4,
                    lg: '44px',
                },

                pt: {
                    xs: 6,
                    md: '80px',
                },

                pb: {
                    xs: 6,
                    md: '90px',
                },
            }}
        >
            {/* HEADING */}
            <Box
                sx={{
                    mb: {
                        xs: 4,
                        md: '59px',
                    },
                }}
            >
                <SectionHeader
                    title="Amplify"
                    highlight="Packages"
                    mb="0px"
                />
            </Box>

            {/* CARDS */}
            <Box
                sx={{
                    display: 'grid',

                    gridTemplateColumns: {
                        xs: '1fr',
                        sm: 'repeat(2,1fr)',
                        lg: 'repeat(3,1fr)',
                    },

                    gap: {
                        xs: 2,
                        md: '24px',
                    },

                    mb: {
                        xs: 4,
                        md: '36px',
                    },
                }}
            >
                {packages.map((item) => (
                    <Box
                        key={item.title}
                        sx={{
                            width: '100%',

                            minHeight: {
                                xs: '190px',
                                md: '208px',
                            },

                            borderRadius: '20px',

                            overflow: 'hidden',

                            background: '#FFFFFF',

                            boxShadow:
                                '0px 13.72px 54.89px rgba(213,213,213,0.25)',

                            display: 'flex',

                            flexDirection: 'column',
                        }}
                    >
                        {/* TOP AREA */}
                        <Box
                            sx={{
                                position: 'relative',

                                background: item.bg,

                                minHeight: {
                                    xs: '96px',
                                    md: '96px',
                                },

                                px: {
                                    xs: 3,
                                    md: '24px',
                                },

                                pt: {
                                    xs: 3,
                                    md: '24px',
                                },

                                borderTopLeftRadius: '20px',

                                borderTopRightRadius: '20px',
                            }}
                        >
                            {/* HEART */}
                            <Box
                                sx={{
                                    position: 'absolute',

                                    top: '12px',

                                    right: '12px',

                                    width: '32px',

                                    height: '32px',

                                    borderRadius: '16px',

                                    background: '#FFFFFF',

                                    display: 'flex',

                                    alignItems: 'center',

                                    justifyContent: 'center',

                                    boxShadow:
                                        '0px 4px 4px rgba(29,29,29,0.25)',
                                }}
                            >
                                <FavoriteBorderIcon
                                    sx={{
                                        fontSize: '20px',
                                        color: '#7E7878',
                                    }}
                                />
                            </Box>

                            {/* TITLE */}
                            <Typography
                                sx={{
                                    '&': {
                                        fontWeight: 600,
                                    },

                                    fontSize: {
                                        xs: '28px',
                                        md: '32px',
                                    },

                                    lineHeight: {
                                        xs: '38px',
                                        md: '42px',
                                    },

                                    letterSpacing: '-2%',

                                    color: item.titleColor,
                                }}
                            >
                                {item.title}
                            </Typography>
                        </Box>

                        {/* DESCRIPTION */}
                        <Box
                            sx={{
                                px: {
                                    xs: 3,
                                    md: '24px',
                                },

                                pt: {
                                    xs: 3,
                                    md: '20px',
                                },

                                pb: {
                                    xs: 3,
                                    md: '24px',
                                },

                                flex: 1,
                            }}
                        >
                            <Typography
                                sx={{
                                    '&': {
                                        fontWeight: 400,
                                    },

                                    fontSize: '16px',

                                    lineHeight: '130%',

                                    color: '#202020',

                                    maxWidth: '354px',
                                }}
                            >
                                {item.description}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>

            {/* CTA ROW */}
            <Box
                sx={{
                    display: 'flex',

                    flexDirection: {
                        xs: 'column',
                        md: 'row',
                    },

                    alignItems: {
                        xs: 'flex-start',
                        md: 'center',
                    },

                    justifyContent: 'space-between',

                    gap: {
                        xs: 3,
                        md: '32px',
                    },
                }}
            >
                {/* TEXT */}
                <Typography
                    sx={{
                        '&': {
                            fontWeight: 500,
                        },
                        fontSize: {
                            xs: '22px',
                            sm: '24px',
                            md: '28px',
                        },

                        lineHeight: {
                            xs: '34px',
                            md: '42px',
                        },

                        letterSpacing: '0%',

                        color: '#031621',

                        maxWidth: '890px',
                    }}
                >
                    Download the brochure to unlock full
                    pricing and enrolment plans.
                </Typography>

                {/* BUTTON */}
                <Button
                    sx={{
                        width: {
                            xs: '100%',
                            sm: '212px',
                        },

                        maxWidth: '212px',

                        height: '60px',

                        borderRadius: '12px',

                        px: '32px',

                        py: '12px',

                        textTransform: 'none',

                        background:
                            'linear-gradient(90deg, #FF3185 0%, #FF7BB0 100%)',

                        '&': {
                            fontWeight: 600,
                        },
                        fontSize: '20px',

                        lineHeight: '100%',

                        color: '#FFFFFF',

                        flexShrink: 0,

                        '&:hover': {
                            background:
                                'linear-gradient(90deg, #FF3185 0%, #FF7BB0 100%)',
                        },
                    }}
                >
                    Download Now
                </Button>
            </Box>
        </Box>
    );
}