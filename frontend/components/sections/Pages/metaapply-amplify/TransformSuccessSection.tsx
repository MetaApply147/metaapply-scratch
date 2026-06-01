'use client';

import { Box, Button, Typography } from '@mui/material';

export default function TransformSuccessSection() {
    return (
        <Box
            component="section"
            sx={{
                width: '100%',

                px: {
                    xs: 2,
                    sm: 3,
                    md: 4,
                    lg: 5,
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
            <Box
                sx={{
                    width: '100%',

                    maxWidth: '1840px',

                    mx: 'auto',

                    minHeight: {
                        xs: 'auto',
                        lg: '421px',
                    },

                    background:
                        'linear-gradient(90deg, #000052 0%, #5D0031 100%)',

                    borderTopRightRadius: {
                        xs: '40px',
                        md: '80px',
                    },

                    borderBottomLeftRadius: {
                        xs: '40px',
                        md: '80px',
                    },

                    overflow: 'hidden',

                    px: {
                        xs: 3,
                        sm: 4,
                        md: 6,
                        lg: '80px',
                    },

                    py: {
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

                    boxShadow:
                        '20px 25px 75px rgba(171,171,171,0.20)',
                }}
            >
                {/* LEFT CONTENT */}
                <Box
                    sx={{
                        width: '100%',

                        maxWidth: {
                            xs: '100%',
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

                        flexShrink: 0,
                    }}
                >
                    {/* HEADING */}
                    <Typography
                        sx={{
                            fontWeight: 500,

                            fontSize: {
                                xs: '34px',
                                sm: '42px',
                                lg: '42px',
                            },

                            lineHeight: {
                                xs: '48px',
                                sm: '58px',
                                lg: '62px',
                            },

                            letterSpacing: '0%',

                            color: '#FFFFFF',

                            maxWidth: {
                                xs: '100%',
                                lg: '875px',
                            },
                        }}
                    >
                        Transforming university outreach
                        into global student success
                        through powerful solutions.
                    </Typography>

                    {/* BUTTON */}
                    <Button
                        sx={{
                            mt: {
                                xs: 4,
                                lg: '48px',
                            },

                            width: '211px',

                            height: '60px',

                            borderRadius: '12px',

                            px: '32px',

                            py: '12px',

                            textTransform: 'none',

                            background:
                                'linear-gradient(90deg, #FF3185 0%, #FF7BB0 100%)',

                            fontFamily:
                                'var(--font-plus-jakarta)',

                            fontWeight: 600,

                            fontSize: '20px',

                            lineHeight: '100%',

                            color: '#FFFFFF',

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

                        justifyContent: 'center',

                        alignItems: 'center',

                        flexShrink: 0,
                    }}
                >
                    <Box
                        component="img"
                        src="/metaapply-amplify/transform-success-illustration.svg"
                        alt="Transform Success"

                        sx={{
                            width: '100%',

                            height: 'auto',

                            objectFit: 'contain',

                            display: 'block',
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
}