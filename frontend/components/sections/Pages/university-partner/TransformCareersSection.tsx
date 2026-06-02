'use client';

import { Box, Container, Typography } from '@mui/material';

import SectionHeader from '@/components/common/SectionHeader';

export default function TransformCareersSection() {
    return (
        <Box
            component="section"
            sx={{
                py: {
                    xs: 5,
                    sm: 7,
                    md: 9,
                    lg: 10,
                },
                px: {
                    xs: 2,
                    sm: 3,
                    md: 0,
                },

                overflow: 'hidden',
            }}
        >
            <Container>
                <Box
                    sx={{
                        width: '100%',

                        maxWidth: '1280px',
                        display: 'flex',

                        flexDirection: 'column',

                        gap: {
                            xs: 2,
                            sm: 2.5,
                            md: 4,
                        },
                    }}
                >
                    {/* HEADING */}
                    <Box
                        sx={{
                            width: '100%',

                            textAlign: {
                                xs: 'left',
                                lg: 'left',
                            },

                            '& br': {
                                display: {
                                    xs: 'none',
                                    md: 'block',
                                },
                            },
                        }}
                    >
                        <SectionHeader
                            title="Transform"
                            highlight="Careers and Lives"
                            mb="0px"
                        />
                    </Box>

                    {/* DESCRIPTION */}
                    <Typography
                        sx={{
                            width: '100%',

                            maxWidth: {
                                xs: '100%',
                                md: '1150px',
                            },

                            typography: {
                                xs: 'body06',
                                sm: 'body05',
                                md: 'body05',
                            },

                            color: 'text.body',

                            lineHeight: {
                                xs: '24px',
                                sm: '26px',
                                md: '28px',
                            },

                            wordBreak: 'break-word',

                            pr: {
                                xs: 0,
                                sm: 0,
                            },

                            textAlign: 'left',
                        }}
                    >
                        MetaApply connects your institution to a
                        global pipeline of serious, qualified
                        students ready to study abroad. From first
                        enquiry to final enrolment, we manage the
                        complete recruitment journey seamlessly.
                        This allows your admissions team to focus
                        on student success instead of operational
                        workload. Trusted by leading universities
                        worldwide, our data-driven recruitment
                        model delivers quality, not just
                        applications. With expert counselling,
                        global reach, and end-to-end support, we
                        help institutions grow international
                        enrolments efficiently.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}