'use client';

import Image from 'next/image';
import {
    Box,
    Container,
    Grid,
    Stack,
    Typography,
} from '@mui/material';

import SectionHeader from '@/components/common/SectionHeader';

const contactCards = [
    {
        icon: '/contact-us/phone-img.svg',
        title: 'Call Us at',
        value: '+91 95607 08184',
    },
    {
        icon: '/contact-us/mail-img.svg',
        title: 'Email Us at',
        value: 'info@metaapply.io',
    },
];

export default function ConnectWithUsSection() {
    return (
        <Box
            component="section"
            sx={{
                pb: {
                    xs: 6,
                    md: 8,
                },
                background:
                    'linear-gradient(0deg, #E5E6FF 0%, rgba(229,230,255,0) 100%)',
            }}
        >
            <Container maxWidth="xl">
                <SectionHeader
                    title="Connect with"
                    highlight="Us"
                />

                <Grid
                    container
                    spacing={3}
                    alignItems="stretch"
                >
                    {/* LEFT SIDE */}
                    <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex' }}>
                        <Stack
                            spacing={3}
                            sx={{
                                height: '100%',
                                flex: 1,
                            }}
                        >
                            {contactCards.map((item) => (
                                <Box
                                    key={item.title}
                                    sx={{
                                        backgroundColor: 'common.white',
                                        border: '1px solid rgba(204,204,204,0.28)',
                                        borderRadius: '10px',
                                        boxShadow: '0px 4px 4px rgba(0,0,0,0.15)',
                                        px: { xs: 3, md: 4 },
                                        py: { xs: 4, md: 4 },
                                        flex: 1,
                                        minHeight: { xs: '220px', md: '222px' },
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                    }}
                                >
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        width={75}
                                        height={75}
                                        style={{
                                            objectFit: 'contain',
                                            marginBottom: '20px',
                                        }}
                                    />

                                    <Typography
                                        sx={{
                                            typography: 'body04',
                                            color: '#777777',
                                        }}
                                    >
                                        {item.title}
                                    </Typography>

                                    <Typography
                                        component="h6"
                                        sx={{
                                            typography: 'heading12',
                                            color: 'text.primary',
                                        }}
                                    >
                                        {item.value}
                                    </Typography>
                                </Box>
                            ))}
                        </Stack>
                    </Grid>

                    {/* RIGHT SIDE */}
                    <Grid size={{ xs: 12, md: 8 }}>
                        <Box
                            sx={{
                                backgroundColor: 'common.white',
                                border: '1px solid rgba(204,204,204,0.28)',
                                borderRadius: '10px',
                                boxShadow: '0px 4px 4px rgba(0,0,0,0.15)',
                                p: { xs: 3, md: 4 },
                                minHeight: { md: '520px' },
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            {/* TOP INFO */}
                            <Stack
                                direction="row"
                                spacing={3}
                                alignItems="flex-start"
                                sx={{ mb: 3 }}
                            >
                                <Image
                                    src="/contact-us/building-icon.svg"
                                    alt="building"
                                    width={75}
                                    height={75}
                                    style={{
                                        objectFit: 'contain',
                                        flexShrink: 0,
                                    }}
                                />

                                <Box>
                                    <Typography
                                        component="h6"
                                        sx={{
                                            typography: 'heading12',
                                            color: 'text.primary',
                                            mb: 1,
                                        }}
                                    >
                                        Global Excellence Centre
                                    </Typography>

                                    <Typography
                                        sx={{
                                            typography: 'body04',
                                            color: '#777777',
                                            mt: 0,
                                        }}
                                    >
                                        3rd Floor Plot No.A-67,
                                        Sector-64, Noida,
                                        Gautam Buddh Nagar,
                                        Uttar Pradesh - 201301,
                                        India
                                    </Typography>
                                </Box>
                            </Stack>

                            {/* MAP */}
                            <Box
                                sx={{
                                    flex: 1,
                                    borderRadius: '6px',
                                    overflow: 'hidden',
                                    minHeight: { xs: '280px', md: '350px' },
                                    '& iframe': {
                                        width: '100%',
                                        height: '100%',
                                        minHeight: '350px',
                                        border: 0,
                                        display: 'block',
                                    },
                                }}
                            >
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.51410904745!2d77.36992107532196!3d28.61860198518079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff6d66f4c3b%3A0xbc984ba5736442bb!2sMetaApply%20Study%20Abroad%20Services!5e0!3m2!1sen!2sin!4v1748000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="350"
                                    style={{ border: 0, display: 'block' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="MetaApply Location"
                                />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}