'use client';

import {
    Box,
    Button,
    Container,
    Typography,
} from '@mui/material';

export default function TransformSuccessSection() {
    return (
        <Box
            component="section"
            sx={{
                px: {
                    xs: 2,
                    sm: 3,
                    md: 5,
                },

                mt: {
                    xs: 6,
                    md: '80px',
                },

                mb: {
                    xs: 6,
                    md: '100px',
                },
            }}
        >
            {/* MAIN WRAPPER */}
            <Box
                sx={{
                    width: '100%',

                    maxWidth: '1840px',

                    mx: 'auto',
                    background: 'linear-gradient(262.64deg, #5D0031 -2.68%, #000052 31.59%)',


                    borderTopRightRadius: {
                        xs: '40px',
                        md: '80px',
                    },

                    borderBottomLeftRadius: {
                        xs: '40px',
                        md: '80px',
                    },

                    overflow: 'hidden',

                    boxShadow: '20px 25px 75px 0px #ABABAB33',

                }}
            >
                <Container>
                    <Box
                        sx={{
                            minHeight: {
                                xs: 'auto',
                                lg: '421px',
                            },

                            pt: {
                                xs: 5,
                                md: '55px',
                            },

                            display: 'flex',

                            flexDirection: {
                                xs: 'column',
                                lg: 'row',
                            },

                            alignItems: 'center',

                            justifyContent: 'space-between',

                            gap: {
                                xs: 5,
                                lg: '48px',
                            },
                        }}
                    >
                        {/* LEFT CONTENT */}
                        <Box
                            sx={{
                                width: '100%',
                                maxWidth: {
                                    xs: '100%',
                                    md: '760px',
                                    lg: '875px',
                                },

                                display: 'flex',

                                flexDirection: 'column',

                                alignItems: {
                                    xs: 'center',
                                    lg: 'flex-start',
                                },

                                textAlign: {
                                    xs: 'center',
                                    lg: 'left',
                                },
                                flex: 1,

                                minWidth: 0,
                                mb: {
                                    xs: 4,
                                    md: 3,
                                }
                            }}
                        >
                            {/* HEADING */}
                            <Typography
                                sx={{
                                    fontWeight: 500,

                                    fontFamily:
                                        'Plus Jakarta Sans',

                                    fontSize: {
                                        xs: '34px',
                                        sm: '42px',
                                        lg: '42px',
                                    },

                                    lineHeight: {
                                        xs: '48px',
                                        sm: '48px',
                                        md: "48px",
                                        lg: '52px',
                                        xl: '62px',
                                    },

                                    letterSpacing: '0%',

                                    color: '#FFFFFF',

                                    maxWidth: {
                                        xs: '100%',
                                        lg: '875px',
                                    },
                                }}
                            >
                                Transforming university
                                outreach into global
                                student success through
                                powerful solutions.
                            </Typography>

                            {/* BUTTON */}
                            <Button
                                sx={{
                                    mt: {
                                        xs: 4,
                                        lg: '48px',
                                    },

                                    width: {
                                        xs: '100%',
                                        sm: '211px',
                                    },

                                    maxWidth: '211px',

                                    height: '60px',

                                    borderRadius:
                                        '12px',

                                    px: '32px',

                                    py: '12px',

                                    textTransform:
                                        'none',

                                    background:
                                        'linear-gradient(90deg, #FF3185 0%, #FF7BB0 100%)',


                                    fontFamily:
                                        'Plus Jakarta Sans',

                                    fontWeight: 600,

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
                                Connect Today
                            </Button>
                        </Box>

                        {/* RIGHT IMAGE */}
                        <Box
                            sx={{
                                width: '100%',

                                maxWidth: {
                                    xs: '320px',
                                    sm: '400px',
                                    lg: '466px',
                                },

                                display: 'flex',

                                justifyContent:
                                    'center',

                                alignItems: 'center',

                                flexShrink: 1,

                                minWidth: 0,
                            }}
                        >
                            <Box
                                component="img"
                                src="/metaapply-amplify/transform-success-illustration.svg"
                                alt="Transform Success"
                                sx={{
                                    width: '100%',

                                    height: 'auto',

                                    objectFit:
                                        'contain',

                                    display:
                                        'block',
                                }}
                            />
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}