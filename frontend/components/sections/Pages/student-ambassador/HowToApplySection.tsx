'use client';

import DynamicLeadForm from '@/components/forms/DynamicLeadForm';
import SectionHeader from '@/components/common/SectionHeader';

import {
    Box,
    Container,
    Typography,
} from '@mui/material';

import { studentAmbassadorBaseFields } from '@/config/forms/base.fields';

const schema = {
    formId: 'student-ambassador',
    submitLabel: 'Fill The Details',
    fields: studentAmbassadorBaseFields,
};

const steps = [
    {
        title: 'Fill the Application Form',
        description:
            "Share a few quick details about yourself and why you're excited to be part of the movement.",
    },

    {
        title: 'Get Shortlisted Instantly',
        description:
            "Our team will review your application. If you're a great fit, you'll hear from us right away — no long waits!",
    },

    {
        title: 'Kick-start Your Journey',
        description:
            'Once selected, you’ll receive your official onboarding kit, tasks, and rewards checklist. Welcome to the crew!',
    },
];

export default function HowToApplySection() {
    return (
        <Box
            sx={{
                py: {
                    xs: 7,
                    sm: 8,
                    md: 10,
                },

                background: '#2E318C',

                overflow: 'hidden',
            }}
        >
            <Container maxWidth="xl">
                <Box
                    sx={{
                        display: 'grid',

                        gridTemplateColumns: {
                            xs: '1fr',
                            lg: '1fr 540px',
                        },

                        gap: {
                            xs: 6,
                            md: 8,
                            lg: 10,
                        },

                        alignItems: 'center',
                    }}
                >
                    {/* LEFT */}
                    <Box>
                        <SectionHeader
                            title="How To Apply?"
                            color="common.white"

                        />

                        <Box
                            sx={{
                                display: 'flex',

                                alignItems: 'stretch',

                                gap: {
                                    xs: '14px',
                                    md: '18px',
                                },
                            }}
                        >
                            {/* PINK LINE */}
                            <Box
                                sx={{
                                    width: '2px',

                                    borderRadius: '20px',

                                    background: 'linear-gradient(180deg, #FF3185 0%, #FF7CB1 100%)',

                                    minHeight: {
                                        xs: '100%',
                                        md: '442px',
                                    },

                                    mt: '6px',
                                }}
                            />

                            {/* STEPS */}
                            <Box
                                sx={{
                                    display: 'flex',

                                    flexDirection: 'column',

                                    gap: {
                                        xs: '16px',
                                        md: '20px',
                                    },

                                    width: '100%',

                                    maxWidth: '596px',
                                }}
                            >
                                {steps.map((item, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            border:
                                                '1px solid rgba(255,255,255,0.85)',

                                            borderRadius: '20px',

                                            px: {
                                                xs: '18px',
                                                md: '20px',
                                            },

                                            py: {
                                                xs: '18px',
                                                md: '24px',
                                            },

                                            minHeight: {
                                                xs: 'auto',
                                                md: '134px',
                                            },

                                            display: 'flex',

                                            flexDirection: 'column',

                                            gap: '8px',

                                            transition: '0.3s ease',

                                            '&:hover': {
                                                borderColor: '#FFFFFF',

                                                transform:
                                                    'translateY(-2px)',
                                            },
                                        }}
                                    >
                                        {/* TITLE */}
                                        <Typography
                                            sx={{
                                                typography: {
                                                    xs: 'heading13',
                                                    md: 'heading12',
                                                },

                                                color: 'common.white',

                                                lineHeight: '150%',
                                            }}
                                        >
                                            {item.title}
                                        </Typography>

                                        {/* DESCRIPTION */}
                                        <Typography
                                            sx={{
                                                typography: {
                                                    xs: 'body06',
                                                    md: 'body05',
                                                },

                                                color: 'common.white',

                                                opacity: 0.8,

                                                lineHeight: '150%',
                                            }}
                                        >
                                            {item.description}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Box>

                    {/* RIGHT FORM */}
                    <Box
                        sx={{
                            width: '100%',

                            display: 'flex',

                            justifyContent: {
                                xs: 'center',
                                lg: 'flex-end',
                            },
                        }}
                    >
                        <DynamicLeadForm
                            schema={schema}
                            Setwidth={{
                                xs: '100%',
                                sm: '530px',
                                md: '556px',
                            }}
                            showTitle={true}
                            boxShadow={true}
                            borderRadius={true}
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}