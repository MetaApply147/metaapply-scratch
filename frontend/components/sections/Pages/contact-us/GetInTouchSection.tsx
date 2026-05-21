'use client';

import Image from 'next/image';
import { Box, Container, Typography } from '@mui/material';
import DynamicLeadForm from '@/components/forms/DynamicLeadForm';
import SectionHeader from '@/components/common/SectionHeader';
import { contactUsBaseFields } from '@/config/forms/base.fields';

const schema = {
    formId: 'contact-us',
    submitLabel: 'Enquire Now',
    fields: contactUsBaseFields,
};

export default function GetInTouchSection() {
    return (
        <Box
            sx={{
                position: 'relative',
                overflow: 'hidden',
                background: '#fff',
                pt: { xs: 7, md: 10 },
                pb: { xs: '280px', md: '240px' },
                '@keyframes misaMove': {
                    '0%': {
                        transform: 'translateX(0px)',
                    },

                    '50%': {
                        transform: 'translateX(330px)',
                    },

                    '100%': {
                        transform: 'translateX(0px)',
                    },
                },
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,

                    backgroundImage:
                        'url(/contact-us/getintouch-banner.svg)',

                    backgroundSize: '100% 100%',

                    backgroundPosition: 'center',

                    backgroundRepeat: 'no-repeat',

                    zIndex: 1,
                }}
            />
            <Box sx={{ position: 'relative', zIndex: 2 }}>
                <Container maxWidth="xl">
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: {
                                xs: '1fr',
                                lg: '1fr 540px',
                            },
                            alignItems: 'flex-start',
                            gap: { xs: 6, lg: 8 },
                        }}
                    >
                        <Box>
                            <SectionHeader
                                title="Get In"
                                highlight="Touch!"
                                mb="18px"
                            />

                            <Typography
                                sx={{
                                    typography: { xs: 'body04', md: 'body03' },
                                    color: 'common.black',
                                    maxWidth: '600px',
                                    lineHeight: '150%',
                                    mb: '24px',
                                    fontSize: { md: '20px' },
                                }}
                            >
                                Have questions, suggestions, or just want to say
                                hello? We'd love to hear from you! Reach out to
                                us today and let's start a conversation about how
                                we can work together to achieve your goals.
                            </Typography>
                            <Box>
                                <Typography
                                    component="h3"
                                    sx={{
                                        fontFamily: 'var(--font-heading)',
                                        fontWeight: 700,
                                        fontSize: { xs: '72px', md: '100px' },
                                        lineHeight: 'normal',
                                        margin: 0,
                                        background:
                                            'linear-gradient(180deg, #dae6f7, #cdddf5)',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        userSelect: 'none',
                                    }}
                                >
                                    MISA
                                </Typography>

                                <Typography
                                    component="p"
                                    sx={{
                                        lineHeight: '150%',
                                        color: '#acc4e7',
                                        maxWidth: '479px',
                                        fontSize: '16px',
                                        mb: 0,
                                    }}
                                >
                                    My International Study Advisor is more than just
                                    our brand's mascot; it represents our initiative
                                    to give the education industry a technological
                                    boost. MISA epitomises our values: speed,
                                    intelligence, innovation, and the relentless
                                    pursuit of excellence. With MISA, we aim to make
                                    global education accessible to everyone. We
                                    understand how complex it is for students to
                                    navigate the entire study abroad process alone and
                                    that they need assistance at every step.
                                </Typography>

                                <Box
                                    component="img"
                                    src="/contact-us/MISA 1.svg"
                                    alt="MISA"
                                    sx={{
                                        display: 'block',
                                        marginTop: '-175px',
                                        maxWidth: '220px',
                                        width: '100%',
                                        position: 'relative',
                                        left: '-40px',

                                        animation: 'misaMove 4s ease-in-out infinite',
                                        zIndex: 3,
                                    }}
                                />
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: {
                                    xs: 'center',
                                    lg: 'flex-end',
                                },
                                position: 'relative',
                                zIndex: 5,
                            }}
                        >
                            <DynamicLeadForm
                                schema={schema}
                                showTitle={true}
                                Setwidth={{
                                    xs: '100%',
                                    sm: '520px',
                                }}
                                borderRadius={true}
                                boxShadow={true}
                            />
                        </Box>

                    </Box>
                </Container>
            </Box>

        </Box>
    );
}