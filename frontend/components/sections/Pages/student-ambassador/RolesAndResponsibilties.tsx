'use client';

import { Box, Container, Typography } from '@mui/material';
import SectionHeader from '@/components/common/SectionHeader';

const rolesData = [
    {
        title: 'The Brand Voice',
        description:
            'Build awareness about MetaApply, promote our vision and values among your peers.',
        image: '/student-ambassador/Brand_Voice.svg',
    },
    {
        title: 'The Idea Generator',
        description:
            'Be it an event idea or a new way to connect with students – your voice matters here.',
        image: '/student-ambassador/Business_Idea.svg',
    },
    {
        title: 'The Campus Connector',
        description:
            'Be our voice at the campus gatherings, manage fun events, and make things happen.',
        image: '/student-ambassador/Campus_Connector.svg',
    },
    {
        title: 'The Content Creator',
        description:
            "Make the kind of content you'd double-tap. Reels, posts, stories – you do you!",
        image: '/student-ambassador/Content_Creator.svg',
    },
    {
        title: 'The Referral Genius',
        description:
            'Introduce students to MetaApply and earn referral commission for successful leads.',
        image: '/student-ambassador/Referral_Genius.svg',
    },
];

export default function RolesResponsibilities() {
    return (
        <Box
            sx={{
                background: '#FFF6FA',

                py: {
                    xs: '56px',
                    md: '80px',
                    lg: '100px',
                },

                overflow: 'hidden',
            }}
        >
            <Container maxWidth="xl">
                {/* MAIN WRAPPER */}
                <Box
                    sx={{
                        width: '100%',

                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    {/* HEADER */}
                    {/* HEADER */}
                    <Box
                        sx={{
                            width: '100%',

                            maxWidth: {
                                lg: '1534px',
                            },

                            alignSelf: {
                                lg: 'center',
                            },

                            mb: {
                                xs: '42px',
                                md: '56px',
                            },
                        }}
                    >
                        <SectionHeader
                            title="Roles and"
                            highlight="Responsibilities"
                            mb="0px"
                        />
                    </Box>

                    {/* CARDS */}
                    <Box
                        sx={{
                            display: 'flex',

                            alignItems: 'flex-start',

                            justifyContent: 'center',

                            flexWrap: {
                                xs: 'wrap',
                                lg: 'nowrap',
                            },

                            gap: {
                                xs: '64px 20px',
                                sm: '64px 24px',
                                lg: '36px',
                            },
                        }}
                    >
                        {rolesData.map((item, index) => (
                            <Box
                                key={index}
                                sx={{
                                    width: {
                                        xs: '100%',
                                        sm: '278px',
                                    },

                                    maxWidth: '278px',

                                    display: 'flex',
                                    flexDirection: 'column',

                                    alignItems: 'center',

                                    flexShrink: 0,
                                }}
                            >
                                {/* IMAGE */}
                                <Box
                                    component="img"
                                    src={item.image}
                                    alt={item.title}
                                    sx={{
                                        width: {
                                            xs: '150px',
                                            md: '177px',
                                        },

                                        height: 'auto',

                                        objectFit: 'contain',

                                        position: 'relative',

                                        zIndex: 1,

                                        mb: '-38px',
                                    }}
                                />

                                {/* CARD */}
                                <Box
                                    sx={{
                                        width: '100%',

                                        minHeight: '168px',

                                        background: '#FFFFFF',

                                        borderRadius: '20px',

                                        pt: '24px',

                                        pb: '24px',

                                        px: '18px',

                                        display: 'flex',
                                        flexDirection: 'column',

                                        alignItems: 'center',

                                        textAlign: 'center',

                                        gap: '10px',

                                        position: 'relative',

                                        zIndex: 2,

                                        boxShadow: `
                                            0px 8px 17px rgba(171,171,171,0.10),
                                            0px 31px 31px rgba(171,171,171,0.09),
                                            0px 69px 41px rgba(171,171,171,0.05),
                                            0px 122px 49px rgba(171,171,171,0.01)
                                        `,
                                    }}
                                >
                                    {/* TITLE */}
                                    <Typography
                                        sx={{
                                            typography: 'heading12',

                                            color: '#424242',

                                            fontWeight: 600,

                                            fontSize: {
                                                xs: '18px',
                                                md: '20px',
                                            },

                                            lineHeight: '52px',

                                            whiteSpace: 'nowrap',

                                            textAlign: 'center',
                                        }}
                                    >
                                        {item.title}
                                    </Typography>

                                    {/* DESCRIPTION */}
                                    <Typography
                                        sx={{
                                            typography: 'body05',

                                            width: '100%',

                                            maxWidth: '242px',

                                            color: '#474747',

                                            fontWeight: 400,

                                            fontSize: {
                                                xs: '14px',
                                                md: '16px',
                                            },

                                            lineHeight: '20px',

                                            textAlign: 'center',
                                        }}
                                    >
                                        {item.description}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}