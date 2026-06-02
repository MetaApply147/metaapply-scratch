'use client';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import {
    Box,
    Button,
    Container,
    Typography,
} from '@mui/material';

import SectionHeader from '@/components/common/SectionHeader';

const packages = [
    {
        title: 'Essential',
        description:
            'Ideal for market-entry universities seeking visibility & steady pipeline.',
        titleColor: '#27A5A5',
        bgImage: '/metaapply-amplify/green-package.svg',
    },

    {
        title: 'Growth',
        description:
            'Ideal for mid-scale universities seeking higher conversions & brand recall.',
        titleColor: '#3166C8',
        bgImage: '/metaapply-amplify/blue-package.svg',
    },

    {
        title: 'Premium',
        description:
            'Ideal for large universities seeking global diversity and enrolment scale.',
        titleColor: '#E99D1F',
        bgImage: '/metaapply-amplify/yellow-package.svg',
    },
];

export default function AmplifyPackagesSection() {
    return (
        <Box
            component="section"
            sx={{
                px: {
                    xs: 2,
                    sm: 3,
                    md: 0,
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
            {/* MAIN WRAPPER */}
            <Box
                sx={{
                    width: '100%',

                    maxWidth: '1832px',

                    mx: 'auto',
                }}
            >
                <Container>
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
                                sm: 'repeat(2,minmax(0,1fr))',
                                lg: 'repeat(3,minmax(0,1fr))',
                            },

                            gap: {
                                xs: 2,
                                md: '24px',
                            },

                            mb: {
                                xs: 4,
                                md: '36px',
                            },

                            alignItems: 'stretch',
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

                                    borderRadius:
                                        '20px',

                                    overflow: 'hidden',

                                    background:
                                        '#FFFFFF',

                                    boxShadow: "0px 13.72px 54.89px 0px #D5D5D540",


                                    display: 'flex',

                                    flexDirection:
                                        'column',

                                    minWidth: 0,
                                }}
                            >
                                {/* TOP AREA */}
                                <Box
                                    sx={{
                                        position:
                                            'relative',

                                        backgroundImage: `url(${item.bgImage})`,

                                        backgroundSize: 'cover',

                                        backgroundPosition: 'center',

                                        backgroundRepeat: 'no-repeat',

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

                                        borderTopLeftRadius:
                                            '20px',

                                        borderTopRightRadius:
                                            '20px',
                                    }}
                                >
                                    {/* HEART */}
                                    <Box
                                        sx={{
                                            position:
                                                'absolute',

                                            top: '12px',

                                            right: '12px',

                                            width: '32px',

                                            height: '32px',

                                            borderRadius:
                                                '16px',

                                            background:
                                                '#FFFFFF',

                                            display:
                                                'flex',

                                            alignItems:
                                                'center',

                                            justifyContent:
                                                'center',

                                            boxShadow:
                                                '0px 4px 4px rgba(29,29,29,0.25)',
                                        }}
                                    >
                                        <FavoriteBorderIcon
                                            sx={{
                                                fontSize:
                                                    '20px',

                                                color:
                                                    '#7E7878',
                                            }}
                                        />
                                    </Box>

                                    {/* TITLE */}
                                    <Typography
                                        sx={{
                                            fontWeight: 600,
                                            fontFamily: "Plus Jakarta Sans",
                                            fontSize: {
                                                xs: '28px',
                                                md: '32px',
                                            },

                                            lineHeight:
                                            {
                                                xs: '38px',
                                                md: '42px',
                                            },

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

                                        display: 'flex',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize:
                                                '16px',
                                            fontFamily: "Open Sans",

                                            lineHeight:
                                                '130%',

                                            color:
                                                '#202020',

                                            maxWidth:
                                                '354px',
                                        }}
                                    >
                                        {
                                            item.description
                                        }
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

                            justifyContent:
                                'space-between',

                            gap: {
                                xs: 3,
                                md: '32px',
                            },
                        }}
                    >
                        {/* TEXT */}
                        <Typography
                            sx={{
                                fontWeight: 500,
                                fontFamily: "Plus Jakarta Sans",
                                fontSize: {
                                    xs: '22px',
                                    sm: '24px',
                                    md: '28px',
                                },

                                lineHeight: {
                                    xs: '34px',
                                    md: '42px',
                                },

                                color: '#031621',

                                maxWidth: {
                                    xs: '100%',
                                    lg: '890px',
                                },
                            }}
                        >
                            Download the brochure to unlock
                            full pricing and enrolment plans.
                        </Typography>

                        {/* BUTTON */}
                        <Button
                            sx={{
                                width: {
                                    xs: '100%',
                                    sm: '212px',
                                },

                                maxWidth:
                                    '212px',

                                height: '60px',

                                borderRadius:
                                    '12px',

                                px: '32px',

                                py: '12px',

                                textTransform:
                                    'none',

                                background:
                                    'linear-gradient(90deg, #FF3185 0%, #FF7BB0 100%)',

                                fontWeight: 600,

                                fontSize:
                                    '20px',

                                lineHeight:
                                    '100%',

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
                </Container>
            </Box>
        </Box>
    );
}