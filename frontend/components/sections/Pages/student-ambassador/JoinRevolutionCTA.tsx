'use client';

import { Box, Button, Container, Typography } from '@mui/material';

export default function JoinRevolutionCTA() {
    return (
        <Box
            sx={{
                py: {
                    xs: 6,
                    md: 10,
                },
            }}
        >
            <Container maxWidth="xl">
                <Box
                    sx={{
                        position: 'relative',

                        overflow: 'hidden',

                        borderRadius: {
                            xs: '24px',
                            md: '32px',
                        },

                        backgroundColor: '#AA265B',

                        border: '1.1px solid rgba(255,255,255,0.07)',

                        minHeight: {
                            xs: '320px',
                            md: '560px',
                        },

                        px: {
                            xs: '24px',
                            sm: '40px',
                            md: '60px',
                        },

                        py: {
                            xs: '50px',
                            md: '80px',
                        },

                        display: 'flex',

                        alignItems: 'center',

                        justifyContent: 'center',
                    }}
                >
                    {/* BACKGROUND IMAGE */}
                    <Box
                        component="img"
                        src="/student-ambassador/scholarshipCTABG.svg"
                        alt="cta background"

                        sx={{
                            position: 'absolute',

                            inset: 0,

                            width: '100%',

                            height: '100%',

                            objectFit: 'cover',

                            pointerEvents: 'none',

                            userSelect: 'none',
                        }}
                    />

                    {/* CONTENT */}
                    <Box
                        sx={{
                            position: 'relative',

                            zIndex: 2,

                            width: '100%',

                            maxWidth: '1185px',

                            mx: 'auto',

                            display: 'flex',

                            flexDirection: 'column',

                            alignItems: 'center',

                            justifyContent: 'center',

                            textAlign: 'center',
                        }}
                    >
                        {/* HEADING */}
                        <Typography
                            sx={{
                                typography: 'heading07',

                                color: 'common.white',

                                fontWeight: 400,

                                lineHeight: {
                                    xs: '42px',
                                    sm: '52px',
                                    md: '68px',
                                },

                                maxWidth: '1099px',
                            }}
                        >
                            Join MetaApply’s student-driven revolution —
                            <Box
                                component="span"
                                sx={{
                                    display: 'block',

                                    fontWeight: 700,
                                }}
                            >
                                build skills, build impact
                            </Box>
                        </Typography>

                        {/* BUTTON */}
                        <Button
                            disableElevation

                            sx={{
                                mt: {
                                    xs: '24px',
                                    md: '36px',
                                },

                                minWidth: {
                                    xs: '180px',
                                    md: '217px',
                                },

                                height: {
                                    xs: '52px',
                                    md: '59px',
                                },

                                px: {
                                    xs: '26px',
                                    md: '29.33px',
                                },

                                py: {
                                    xs: '7px',
                                    md: '7.33px',
                                },

                                borderRadius: '3.67px',

                                backgroundColor: 'common.white',

                                color: 'pink.400',

                                typography: 'heading12',

                                fontWeight: 700,

                                textTransform: 'none',

                                boxShadow: 'none',

                                '&:hover': {
                                    backgroundColor: 'common.white',
                                    boxShadow: 'none',
                                },
                            }}
                        >
                            Connect Now
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}