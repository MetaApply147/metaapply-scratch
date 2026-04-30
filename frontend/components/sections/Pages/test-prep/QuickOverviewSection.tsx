'use client';

import { Box, Typography } from '@mui/material';
import Section from '@/components/common/Section';
import SectionHeader from '@/components/common/SectionHeader';
import Image from 'next/image';

const benefits = [
    {
        icon: '/test-prep/Required-for-university-admissions.svg',
        title: 'Required for university admissions',
    },
    {
        icon: '/test-prep/Enhance-scholarship-opporunities.svg',
        title: 'Enhances scholarship opportunities',
    },
    {
        icon: '/test-prep/support-visa-applications.svg',
        title: 'Supports visa applications',
    },
    {
        icon: '/test-prep/Globally-accepted-by-top-universities.svg',
        title: 'Globally accepted by top universities',
    },
    {
        icon: '/test-prep/Opens-global-path.svg',
        title: 'Opens global path',
    },
];

export default function QuickOverviewSection() {
    return (
        <Section
            spacing="lg"
            sx={{
                background: 'url(/test-prep/Background-2.webp)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
            }}
        >
            <Box
                sx={{
                    maxWidth: '1321px',
                    mx: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '52px',
                }}
            >
                {/* Header */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: { xs: '10px', md: '40px' }
                    }}
                >
                    <SectionHeader title='Exams to Study Abroad-' highlight='A Quick Overview' mb={"0"} />

                    {/* Paragraphs */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: { xs: '18px', md: '24px' },
                            maxWidth: '1317px',
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: 'Open Sans',
                                fontWeight: 400,
                                fontSize: { xs: '15px', md: '16px' },
                                lineHeight: { xs: '30px', md: '26px' },
                                color: '#202020',
                            }}
                        >
                            To study abroad, students are often required to take specific
                            standardised admissions or language proficiency tests as part of
                            the admission process. These exams are mainly divided into two
                            categories.
                        </Typography>

                        <Typography
                            sx={{
                                fontFamily: 'Open Sans',
                                fontWeight: 400,
                                fontSize: { xs: '15px', md: '16px' },
                                lineHeight: { xs: '30px', md: '26px' },
                                color: '#202020',
                            }}
                        >
                            The first category includes English Language Proficiency Tests
                            (ELPT), which assess skills such as reading, writing, listening,
                            and speaking. Recognised English proficiency tests include IELTS,
                            TOEFL, PTE Academic, and Duolingo English Test (DET).
                        </Typography>

                        <Typography
                            sx={{
                                fontFamily: 'Open Sans',
                                fontWeight: 400,
                                fontSize: { xs: '15px', md: '16px' },
                                lineHeight: { xs: '30px', md: '26px' },
                                color: '#202020',
                            }}
                        >
                            The second category includes admission tests such as SAT and ACT
                            for undergraduate studies, and GRE and GMAT for postgraduate
                            courses. Each exam serves a specific purpose depending on the
                            country, university, and programme chosen, making the selection
                            of the right test an important step in the study abroad
                            application process.
                        </Typography>
                    </Box>
                </Box>

                {/* Why Section */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '32px',
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: 'Plus Jakarta Sans',
                            fontWeight: 600,
                            fontSize: { xs: '28px', md: '28px' },
                            lineHeight: { xs: '54px', md: '44px' },
                            color: '#031621',
                        }}
                    >
                        Why these tests matter?
                    </Typography>

                    {/* Cards */}
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: {
                                xs: '1fr',
                                sm: 'repeat(2, 1fr)',
                                lg: 'repeat(5, 1fr)',
                            },
                            gap: { xs: '20px', md: '24px' },
                        }}
                    >
                        {benefits.map((item, index) => (
                            <Box
                                key={index}
                                sx={{
                                    width: '100%',
                                    minHeight: { xs: '180px', md: '187px' },
                                    borderRadius: '16px',
                                    background: '#FFFFFF',
                                    border: '1px solid #E5E7EB',
                                    boxShadow: '0px 8px 40px rgba(180,180,180,0.2)',
                                    px: { xs: '20px', md: '24px' },
                                    py: { xs: '20px', md: '24px' },
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: { xs: '20px', md: '24px' },
                                }}
                            >
                                {/* Icon Box */}
                                <Box
                                    sx={{
                                        width: { xs: '72px', md: '64px' },
                                        height: { xs: '72px', md: '64px' },
                                        position: 'relative',
                                        flexShrink: 0,
                                    }}
                                >
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        fill
                                        style={{
                                            objectFit: 'contain',
                                        }}
                                    />
                                </Box>

                                {/* Text */}
                                <Typography
                                    sx={{
                                        fontFamily: 'Plus Jakarta Sans',
                                        fontWeight: 500,
                                        fontSize: { xs: '18px', md: '16px' },
                                        lineHeight: { xs: '30px', md: '22px' },
                                        color: '#031621',
                                    }}
                                >
                                    {item.title}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Section>
    );
}