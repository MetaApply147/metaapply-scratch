'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import CustomSlider from '@/components/common/CustomSlider';
import SectionHeader from '../common/SectionHeader';
import Section from '../common/Section';

/* ================= TYPES ================= */

type PartnerBenefit = {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    bg: string;
};

/* ================= STATIC DATA ================= */

const partnerData: PartnerBenefit[] = [
    {
        id: 1,
        title: 'High & Timely',
        subtitle: 'payouts',
        description:
            'To be a leading study abroad recruitment partner, you need your skills to be valued. At MetaApply, we give you the best commissions and on-time payouts.',
        image: '/recruitment-partner/TimelyPayout.svg',
        bg: 'linear-gradient(180deg,#ffe0e6,#e6dfff)',
    },
    {
        id: 2,
        title: 'Easy-to-access',
        subtitle: 'Portal',
        description:
            'Managing thousands of students on Excel is complex. MetaApply gives you a smart portal to shortlist student needs in a few clicks.',
        image: '/recruitment-partner/PortalIcon.svg',
        bg: 'linear-gradient(180deg,#e6ecff,#dfe3ff)',
    },
    {
        id: 3,
        title: 'User-friendly',
        subtitle: 'Documentation',
        description:
            'Get personalised support at every step. Our experts are available 24/7 to assist you with any challenges.',
        image: '/recruitment-partner/Documentation.svg',
        bg: 'linear-gradient(180deg,#ffe6eb,#f0dfff)',
    },
    {
        id: 4,
        title: 'Complete',
        subtitle: 'Transparency',
        description:
            'Track your students’ journey and commissions easily with our fully transparent system.',
        image: '/recruitment-partner/Transparency.svg',
        bg: 'linear-gradient(180deg,#e6ecff,#dfe3ff)',
    },
];

/* ================= COMPONENT ================= */

export default function RecruitmentPartner() {
    return (
        <Section spacing="lg">
            <SectionHeader
                title="Become a"
                highlight="Recruitment Partner With Us"
            />

            <Box mt={4}>
                <CustomSlider
                    data={partnerData}
                    slidesPerView={4}
                    spaceBetween={20}
                    renderItem={(item) => (
                        <Box
                            sx={{
                                borderRadius: 4,
                                p: 3,
                                textAlign: 'center',
                                background: item.bg,
                                height: '100%',
                                boxShadow: '0px 10px 30px rgba(0,0,0,0.08)',
                            }}
                        >
                            {/* ICON */}
                            <Box mb={2} sx={{ height: '80px', width: '80px', position: 'relative' }}>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                />
                            </Box>

                            {/* TITLE */}
                            <Typography
                                variant='heading12'
                                component='h6'
                                sx={{
                                    color: '#ff2c74',
                                }}
                            >
                                {item.title}
                            </Typography>

                            {/* SUBTITLE */}
                            <Typography
                                variant='heading12'
                                component='h6'
                                sx={{
                                    mb: 1,
                                }}
                            >
                                {item.subtitle}
                            </Typography>

                            {/* DESCRIPTION */}
                            <Typography
                                variant='body06'
                                component='p'
                            >
                                {item.description}
                            </Typography>
                        </Box>
                    )}
                />
            </Box>
        </Section>
    );
}