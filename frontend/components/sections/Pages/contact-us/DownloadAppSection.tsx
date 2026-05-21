'use client';

import Image from 'next/image';
import { Box, Container, Stack, Typography } from '@mui/material';

export default function DownloadAppSection() {
    return (
        <Box
            sx={{
                position: 'relative',
                overflow: 'hidden',
                background: '#F7F7F7',

                pt: {
                    xs: 7,
                    sm: 8,
                    md: 0,
                },

                pb: {
                    xs: 8,
                    md: 0,
                },
            }}
        >
            {/* CURVE BG */}
            <Box
                sx={{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: '100%',

                    height: {
                        xs: '140px',
                        sm: '170px',
                        md: '204px',
                    },

                    zIndex: 1,
                }}
            >
                <Image
                    src="/contact-us/download-bg.svg"
                    alt="curve bg"
                    fill
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center bottom',
                    }}
                />
            </Box>

            <Container
                maxWidth="xl"
                sx={{
                    position: 'relative',
                    zIndex: 2,
                }}
            >
                <Box
                    sx={{
                        display: 'grid',

                        gridTemplateColumns: {
                            xs: '1fr',
                            md: '570px 1fr',
                        },

                        alignItems: 'center',

                        gap: {
                            xs: 5,
                            sm: 6,
                            md: 10,
                        },

                        minHeight: {
                            md: '500px',
                        },
                    }}
                >
                    {/* LEFT IMAGE */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',

                            order: {
                                xs: 2,
                                md: 1,
                            },
                        }}
                    >
                        <Box
                            sx={{
                                position: 'relative',

                                width: {
                                    xs: '290px',
                                    sm: '400px',
                                    md: '570px',
                                },

                                height: {
                                    xs: '320px',
                                    sm: '430px',
                                    md: '500px',
                                },
                            }}
                        >
                            <Image
                                src="/contact-us/appMobile.svg"
                                alt="MetaApply App"
                                fill
                                priority
                                style={{
                                    objectFit: 'contain',
                                }}
                            />
                        </Box>
                    </Box>

                    {/* RIGHT CONTENT */}
                    <Box
                        sx={{
                            maxWidth: {
                                xs: '100%',
                                md: '620px',
                            },

                            order: {
                                xs: 1,
                                md: 2,
                            },

                            textAlign: {
                                xs: 'left',
                                md: 'left',
                            },
                        }}
                    >
                        {/* HEADING */}
                        <Box
                            sx={{
                                mb: {
                                    xs: 2,
                                    md: 3,
                                },
                            }}
                        >
                            <Typography
                                sx={{
                                    typography: {
                                        xs: 'heading05',
                                        md: 'heading04',
                                    },

                                    color: '#000',

                                    fontWeight: 700,

                                    lineHeight: {
                                        xs: '100%',
                                        md: '110%',
                                    },

                                    mb: '4px',
                                }}
                            >
                                Download
                            </Typography>

                            <Typography
                                sx={{
                                    typography: {
                                        xs: 'heading10',
                                        md: 'heading08',
                                    },

                                    color: '#5B5B5B',

                                    fontWeight: 700,

                                    lineHeight: {
                                        xs: '110%',
                                        md: '120%',
                                    },
                                }}
                            >
                                Our{' '}
                                <Box
                                    component="span"
                                    sx={{
                                        color: '#2E3192',
                                    }}
                                >
                                    Meta
                                </Box>
                                <Box
                                    component="span"
                                    sx={{
                                        color: '#FF3185',
                                    }}
                                >
                                    Apply
                                </Box>{' '}
                                App
                            </Typography>
                        </Box>

                        {/* DESCRIPTION */}
                        <Typography
                            sx={{
                                typography: 'body06',

                                color: '#000',

                                opacity: 0.9,

                                maxWidth: '617px',

                                lineHeight: '150%',

                                mb: {
                                    xs: 3,
                                    md: 4,
                                },
                            }}
                        >
                            Introducing MetaApply&apos;s app, your ultimate
                            study abroad partner! Begin your academic journey
                            with us, where you'll receive tailored program
                            suggestions, assistance with international
                            university selection, a simplified application
                            process, and much more. Experience the power of
                            MetaApply&apos;s AI-driven robust engine and enjoy
                            the convenience of technology as you explore study
                            abroad opportunities.
                        </Typography>

                        {/* QR + STORE SECTION */}
                        <Stack
                            spacing={{
                                xs: 2.5,
                                md: 3,
                            }}
                        >
                            {/* PLAYSTORE */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',

                                    gap: {
                                        xs: 2,
                                        md: 4,
                                    },
                                }}
                            >
                                {/* QR */}
                                <Box
                                    sx={{
                                        '& img': {
                                            width: {
                                                xs: '100px',
                                                md: '100px',
                                            },

                                            height: {
                                                xs: '100px',
                                                md: '100px',
                                            },

                                            objectFit: 'contain',
                                            display: 'block',
                                        },
                                    }}
                                >
                                    <Image
                                        src="/contact-us/Playstoreapp.webp"
                                        alt="Playstore QR"
                                        width={100}
                                        height={100}
                                        className="qrcode"
                                    />
                                </Box>

                                {/* BUTTON */}
                                <Box
                                    component="a"
                                    href="#"
                                    sx={{
                                        display: 'block',

                                        '& img': {
                                            width: {
                                                xs: '230px',
                                                md: '262px',
                                            },

                                            height: {
                                                xs: '60px',
                                                md: '68px',
                                            },

                                            objectFit: 'contain',
                                            display: 'block',
                                        },
                                    }}
                                >
                                    <Image
                                        src="/contact-us/G-Play.svg"
                                        alt="Google Play"
                                        width={262}
                                        height={68}
                                    />
                                </Box>
                            </Box>

                            {/* APP STORE */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',

                                    gap: {
                                        xs: 2,
                                        md: 4,
                                    },
                                }}
                            >
                                {/* QR */}
                                <Box
                                    sx={{
                                        '& img': {
                                            width: {
                                                xs: '100px',
                                                md: '100px',
                                            },

                                            height: {
                                                xs: '100px',
                                                md: '100px',
                                            },

                                            objectFit: 'contain',
                                            display: 'block',
                                        },
                                    }}
                                >
                                    <Image
                                        src="/contact-us/AppStore-qr.webp"
                                        alt="App Store QR"
                                        width={100}
                                        height={100}
                                        className="qrcode"
                                    />
                                </Box>

                                {/* BUTTON */}
                                <Box
                                    component="a"
                                    href="#"
                                    sx={{
                                        display: 'block',

                                        '& img': {
                                            width: {
                                                xs: '230px',
                                                md: '262px',
                                            },

                                            height: {
                                                xs: '60px',
                                                md: '68px',
                                            },

                                            objectFit: 'contain',
                                            display: 'block',
                                        },
                                    }}
                                >
                                    <Image
                                        src="/contact-us/App-Store.svg"
                                        alt="App Store"
                                        width={262}
                                        height={68}
                                    />
                                </Box>
                            </Box>
                        </Stack>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}