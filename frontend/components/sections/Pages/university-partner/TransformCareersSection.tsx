'use client';

import { Box, Typography } from '@mui/material';
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

                px: 0,
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    maxWidth: '1319px',
                    mx: 'auto',

                    px: {
                        xs: 2,
                        sm: 3,
                        md: 4,
                    },

                    display: 'flex',
                    flexDirection: 'column',

                    gap: {
                        xs: 2,
                        sm: 2.5,
                        md: 4,
                    },
                }}
            >
                <Box
                    sx={{
                        width: '100%',

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
                            xs: 0.5,
                            sm: 0,
                        },
                    }}
                >
                    MetaApply connects your institution to a global pipeline
                    of serious, qualified students ready to study abroad.
                    From first enquiry to final enrolment, we manage the
                    complete recruitment journey seamlessly. This allows your
                    admissions team to focus on student success instead of
                    operational workload. Trusted by leading universities
                    worldwide, our data-driven recruitment model delivers
                    quality, not just applications. With expert counselling,
                    global reach, and end-to-end support, we help institutions
                    grow international enrolments efficiently.
                </Typography>
            </Box>
        </Box>
    );
}