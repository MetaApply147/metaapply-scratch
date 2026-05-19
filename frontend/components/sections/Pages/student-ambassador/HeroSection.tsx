'use client';

import { Box, Button, Container, Typography } from '@mui/material';

export default function HeroSection() {
    return (
        <Box
            sx={{
                position: 'relative',
                overflow: 'hidden',

                backgroundColor: '#F8F8F8',

                backgroundImage:
                    'url("/student-ambassador/Hero-Background.webp")',

                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',

                minHeight: {
                    xs: 'auto',
                    md: '820px',
                },

                pt: {
                    xs: '110px',
                    md: 0,
                },

                pb: {
                    xs: '0px',
                    md: 0,
                },

                display: 'flex',
                alignItems: 'center',
            }}
        >
            {/* TOP LEFT YELLOW CIRCLE */}
            <Box
                sx={{
                    position: 'absolute',

                    top: {
                        xs: '118px',
                        md: '18px',
                    },

                    left: {
                        xs: '-12px',
                        md: '-8px',
                    },

                    width: {
                        xs: '36px',
                        md: '58px',
                    },

                    height: {
                        xs: '36px',
                        md: '58px',
                    },

                    borderRadius: '50%',

                    background:
                        'linear-gradient(180deg, #F9E48A 0%, #E7C84D 100%)',

                    zIndex: 1,
                }}
            />

            {/* BLUE DOT TOP */}
            <Box
                sx={{
                    position: 'absolute',

                    left: {
                        xs: '6px',
                        md: '160px',
                    },

                    top: {
                        xs: '160px',
                        md: '42px',
                    },

                    width: {
                        xs: '8px',
                        md: '10px',
                    },

                    height: {
                        xs: '8px',
                        md: '10px',
                    },

                    borderRadius: '50%',

                    backgroundColor: '#42A5F5',

                    zIndex: 1,
                }}
            />

            {/* PINK DOT */}
            <Box
                sx={{
                    position: 'absolute',

                    top: {
                        xs: '118px',
                        md: '42px',
                    },

                    right: {
                        xs: '14px',
                        md: '74px',
                    },

                    width: {
                        xs: '28px',
                        md: '50px',
                    },

                    height: {
                        xs: '28px',
                        md: '50px',
                    },

                    borderRadius: '50%',

                    background:
                        'linear-gradient(180deg, #FFE7EE 0%, #F8C8D6 100%)',

                    zIndex: 1,
                }}
            />

            {/* BOTTOM BLUE DOT */}
            <Box
                sx={{
                    position: 'absolute',

                    bottom: {
                        xs: '285px',
                        md: '110px',
                    },

                    left: {
                        xs: '58%',
                        md: '52%',
                    },

                    width: {
                        xs: '8px',
                        md: '10px',
                    },

                    height: {
                        xs: '8px',
                        md: '10px',
                    },

                    borderRadius: '50%',

                    backgroundColor: '#42A5F5',

                    zIndex: 1,
                }}
            />

            {/* COIN */}
            <Box
                component="img"
                src="/student-ambassador/Coin.svg"
                alt="coin"

                sx={{
                    position: 'absolute',

                    left: {
                        xs: '-24px',
                        md: '-24px',
                    },

                    bottom: {
                        xs: '18px',
                        md: '-70px',
                    },

                    width: {
                        xs: '82px',
                        md: '276px',
                    },

                    height: 'auto',

                    zIndex: 1,
                }}
            />

            <Container
                maxWidth="xl"
                sx={{
                    position: 'relative',
                    zIndex: 2,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',

                        alignItems: 'center',

                        justifyContent: 'space-between',

                        flexDirection: {
                            xs: 'column',
                            lg: 'row',
                        },

                        gap: {
                            xs: '10px',
                            md: '24px',
                        },

                        minHeight: {
                            xs: 'auto',
                            lg: '720px',
                        },
                    }}
                >
                    {/* LEFT CONTENT */}
                    <Box
                        sx={{
                            width: '100%',

                            maxWidth: {
                                xs: '100%',
                                lg: '822px',
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

                            position: 'relative',

                            zIndex: 2,

                            pt: {
                                xs: '24px',
                                md: 0,
                            },
                        }}
                    >
                        {/* TAG */}
                        <Box
                            sx={{
                                display: 'inline-flex',

                                alignItems: 'center',
                                justifyContent: 'center',

                                px: {
                                    xs: '18px',
                                    md: '27px',
                                },

                                py: {
                                    xs: '10px',
                                    md: '12px',
                                },

                                borderRadius: '50px',

                                backgroundColor: '#E3E4FF',

                                position: 'relative',

                                mb: {
                                    xs: '26px',
                                    md: '40px',
                                },

                                maxWidth: {
                                    xs: '90%',
                                    md: 'fit-content',
                                },
                            }}
                        >
                            <Typography
                                sx={{
                                    typography: 'heading14',

                                    color: '#474747',

                                    fontWeight: 600,

                                    lineHeight: '120%',

                                    fontSize: {
                                        xs: '14px',
                                        md: '24px',
                                    },
                                }}
                            >
                                MetaApply Global Student Ambassador
                            </Typography>

                            {/* STARS */}
                            <Box
                                component="img"
                                src="/student-ambassador/Star.svg"
                                alt="stars"

                                sx={{
                                    position: 'absolute',

                                    top: {
                                        xs: '-22px',
                                        md: '-40px',
                                    },

                                    right: {
                                        xs: '-8px',
                                        md: '-24px',
                                    },

                                    width: {
                                        xs: '20px',
                                        md: '34px',
                                    },

                                    height: 'auto',

                                    zIndex: 2,
                                }}
                            />
                        </Box>

                        {/* HEADING */}
                        <Typography
                            sx={{
                                color: '#474747',

                                fontWeight: 600,

                                letterSpacing: '0px',

                                lineHeight: {
                                    xs: '125%',
                                    md: '128%',
                                },

                                maxWidth: {
                                    xs: '100%',
                                    lg: '834px',
                                },

                                mb: {
                                    xs: '28px',
                                    md: '42px',
                                },

                                fontSize: {
                                    xs: '30px',
                                    sm: '42px',
                                    md: '52px',
                                },

                                '& br': {
                                    display: {
                                        xs: 'none',
                                        md: 'block',
                                    },
                                },
                            }}
                        >
                            Be the Voice of Your{' '}
                            <Box
                                component="span"
                                sx={{
                                    color: 'pink.400',
                                }}
                            >
                                Campus
                            </Box>{' '}
                            Become a{' '}
                            <Box
                                component="span"
                                sx={{
                                    color: 'pink.400',
                                }}
                            >
                                Leader
                            </Box>{' '}
                            of Tomorrow
                        </Typography>

                        {/* BUTTON */}
                        <Button
                            disableElevation
                            sx={{
                                minWidth: {
                                    xs: '160px',
                                    md: '210px',
                                },

                                height: {
                                    xs: '46px',
                                    md: '56px',
                                },

                                borderRadius: '10px',

                                background:
                                    'linear-gradient(180deg, #FF7CB1 0%, #FF3185 100%)',

                                color: 'common.white',

                                fontWeight: 700,

                                textTransform: 'none',

                                fontSize: {
                                    xs: '18px',
                                    md: '20px',
                                },

                                px: {
                                    xs: '24px',
                                    md: '30px',
                                },

                                py: '8px',

                                boxShadow: 'none',

                                '&:hover': {
                                    background:
                                        'linear-gradient(180deg, #FF7CB1 0%, #FF3185 100%)',
                                },
                            }}
                        >
                            Apply Now
                        </Button>
                    </Box>

                    {/* RIGHT IMAGE */}
                    <Box
                        sx={{
                            width: '100%',

                            maxWidth: {
                                xs: '320px',
                                sm: '360px',
                                md: '507px',
                            },

                            position: 'relative',

                            display: 'flex',

                            justifyContent: 'center',

                            alignItems: 'flex-end',

                            zIndex: 2,

                            mt: {
                                xs: '20px',
                                md: 0,
                            },
                        }}
                    >
                        {/* CURLY ARROW */}
                        <Box
                            component="img"
                            src="/student-ambassador/CurvyArrow.svg"
                            alt="curvy-arrow"

                            sx={{
                                position: 'absolute',

                                top: {
                                    xs: '10%',
                                    md: '5%',
                                },

                                right: {
                                    xs: '-10px',
                                    md: '-27%',
                                },

                                width: {
                                    xs: '110px',
                                    md: '210px',
                                },

                                height: 'auto',

                                zIndex: 3,
                            }}
                        />

                        {/* GIRL */}
                        <Box
                            component="img"
                            src="/student-ambassador/banner_girl.svg"
                            alt="student ambassador"

                            sx={{
                                width: '100%',

                                maxWidth: {
                                    xs: '260px',
                                    sm: '320px',
                                    md: '507px',
                                },

                                height: 'auto',

                                objectFit: 'contain',

                                display: 'block',

                                position: 'relative',

                                zIndex: 2,
                            }}
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}