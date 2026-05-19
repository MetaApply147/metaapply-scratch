'use client';

import { Box, Container, Typography } from '@mui/material';
import SectionHeader from '@/components/common/SectionHeader';

const perksData = [
    {
        icon: '/student-ambassador/Perks&Privileges.svg',
        title: 'Perks & Privileges',
        description:
            'Earn up to ₹50,000* as referral commissions, vouchers, event invites and merch!',
    },
    {
        icon: '/student-ambassador/EarnWhileYouLearn.svg',
        title: 'Earn While You Learn',
        description:
            'Get exclusive access to paid internship opportunities and real-world experience.',
    },
    {
        icon: '/student-ambassador/BoostThatResume.svg',
        title: 'Boost That Resume',
        description:
            'Add certificates, ambassador experience and leadership skills to your CV.',
    },
    {
        icon: '/student-ambassador/BuildYourProfile.svg',
        title: 'Build Your Profile',
        description:
            'Plan events, promote the brand, and build skills that matter.',
    },
    {
        icon: '/student-ambassador/BeCampusFamous.svg',
        title: 'Be Campus-famous',
        description:
            'Create content, build your personal brand, and own your campus spotlight.',
    },
    {
        icon: '/student-ambassador/NetworkThatWorks.svg',
        title: 'Network that Works',
        description:
            'Learn from industry pros and connect with global student network.',
    },
];

export default function PerksProgramSection() {
    return (
        <Box
            sx={{
                position: 'relative',

                overflow: 'hidden',

                backgroundColor: '#F8F8F8',

                backgroundImage:
                    'url("/student-ambassador/Perks-Background.webp")',

                backgroundRepeat: 'no-repeat',

                backgroundPosition: {
                    xs: 'bottom left',
                    lg: 'left bottom',
                },

                backgroundSize: {
                    xs: '100% auto',
                    sm: '85% auto',
                    md: '70% auto',
                    lg: '55% auto',
                },

                pt: {
                    xs: '20px',
                    md: '40px',
                    lg: '60px',
                },

                pb: {
                    xs: '0px',
                    md: '0px',
                    lg: '60px',
                },
            }}
        >
            <Container maxWidth="xl">
                {/* MAIN WRAPPER */}
                <Box
                    sx={{
                        display: 'flex',

                        alignItems: {
                            xs: 'stretch',
                            lg: 'center',
                        },

                        justifyContent: 'space-between',

                        flexDirection: {
                            xs: 'column-reverse',
                            lg: 'row',
                        },

                        position: 'relative',

                        zIndex: 2,
                    }}
                >
                    {/* LEFT IMAGE */}
                    <Box
                        sx={{
                            flex: 1,

                            display: 'flex',

                            justifyContent: {
                                xs: 'center',
                                lg: 'flex-start',
                            },

                            alignItems: 'flex-end',

                            position: 'relative',

                            width: '100%',

                            minHeight: {
                                xs: '420px',
                                sm: '520px',
                                md: '620px',
                                lg: '820px',
                            },
                        }}
                    >
                        <Box
                            component="img"
                            src="/student-ambassador/perks_boy.svg"
                            alt="student"

                            sx={{
                                position: {
                                    xs: 'relative',
                                    lg: 'absolute',
                                },

                                bottom: {
                                    xs: '-6px',
                                    lg: '-60px',
                                },

                                left: {
                                    lg: '-60px',
                                },

                                width: {
                                    xs: '360px',
                                    sm: '450px',
                                    md: '540px',
                                    lg: '620px',
                                    xl: '760px',
                                },

                                maxWidth: '100%',

                                height: 'auto',

                                objectFit: 'contain',

                                display: 'block',

                                zIndex: 2,
                            }}
                        />
                    </Box>

                    {/* RIGHT CONTENT */}
                    <Box
                        sx={{
                            width: '100%',

                            maxWidth: {
                                xs: '100%',
                                lg: '640px',
                            },

                            flexShrink: 0,

                            position: 'relative',

                            zIndex: 3,

                            pt: {
                                xs: 0,
                                lg: '20px',
                            },
                        }}
                    >
                        <SectionHeader
                            title="Perks of the"
                            highlight="Program"
                            mb="40px"
                        />

                        <Box
                            sx={{
                                display: 'flex',

                                flexDirection: 'column',

                                gap: {
                                    xs: '16px',
                                    md: '24px',
                                },
                            }}
                        >
                            {perksData.map((item, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        width: '100%',

                                        minHeight: {
                                            xs: '86px',
                                            md: '108px',
                                        },

                                        background:
                                            'linear-gradient(90deg, #FFFFFF 0%, #FFECF4 100%)',

                                        borderRadius: '999px',

                                        display: 'flex',

                                        alignItems: 'center',

                                        gap: {
                                            xs: '12px',
                                            md: '20px',
                                        },

                                        px: {
                                            xs: '12px',
                                            md: '16px',
                                        },

                                        py: {
                                            xs: '12px',
                                            md: '16px',
                                        },
                                    }}
                                >
                                    {/* ICON */}
                                    <Box
                                        component="img"
                                        src={item.icon}
                                        alt={item.title}

                                        sx={{
                                            width: {
                                                xs: '56px',
                                                md: '84px',
                                            },

                                            height: {
                                                xs: '56px',
                                                md: '84px',
                                            },

                                            minWidth: {
                                                xs: '56px',
                                                md: '84px',
                                            },

                                            objectFit: 'contain',

                                            flexShrink: 0,
                                        }}
                                    />

                                    {/* TEXT */}
                                    <Typography
                                        sx={{
                                            typography: {
                                                xs: 'body07',
                                                md: 'body05',
                                            },

                                            color: '#454545',

                                            lineHeight: {
                                                xs: '22px',
                                                md: '28px',
                                            },
                                        }}
                                    >
                                        <Box
                                            component="span"
                                            sx={{
                                                fontWeight: 600,

                                                fontSize: {
                                                    xs: '15px',
                                                    md: '20px',
                                                },

                                                lineHeight: '120%',
                                            }}
                                        >
                                            {item.title}
                                        </Box>{' '}
                                        - {item.description}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}