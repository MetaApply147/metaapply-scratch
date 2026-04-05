'use client';

import { Box, Typography } from '@mui/material';
import Section from '@/components/common/Section';
import CustomSlider from '@/components/common/CustomSlider';
import SectionHeader from '@/components/common/SectionHeader';
import Image from 'next/image';

/* ================= DATA ================= */

type FeatureItem = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const features: FeatureItem[] = [
  {
    id: 1,
    title: 'Institutional Brand Impact',
    description:
      'Improves reputation among students, parents & recruiters',
    image: '/nextstep/Institutional-Brand-Impact.webp',
  },
  {
    id: 2,
    title: 'NEP Aligned',
    description: 'Meets UGC and NAAC quality benchmarks',
    image: '/nextstep/Institutional-Brand-Impact.webp',
  },
  {
    id: 3,
    title: 'Placement & Internship Focused',
    description: 'Directly supports campus hiring success',
    image: '/nextstep/Institutional-Brand-Impact.webp',
  },
  {
    id: 4,
    title: 'Tier 2 & 3 Ready',
    description:
      'Designed for emerging education hubs, not just metros',
    image: '/nextstep/Institutional-Brand-Impact.webp',
  },
  {
    id: 5,
    title: 'NEP Aligned',
    description: 'Meets UGC and NAAC quality benchmarks',
    image: '/nextstep/Institutional-Brand-Impact.webp',
  },
  {
    id: 6,
    title: 'Placement & Internship Focused',
    description: 'Directly supports campus hiring success',
    image: '/nextstep/Institutional-Brand-Impact.webp',
  },
  {
    id: 7,
    title: 'Tier 2 & 3 Ready',
    description:
      'Designed for emerging education hubs, not just metros',
    image: '/nextstep/Institutional-Brand-Impact.webp',
  },
];

/* ================= CARD ================= */

function FeatureCard({ item }: { item: FeatureItem }) {
  return (
    <Box
      sx={{
        borderRadius: '20px',
        backgroundColor: 'common.white',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* IMAGE */}
      <Box sx={{height: '176px', width: '100%', position: 'relative'}}>
        <Image src={item.image} alt={item.title} fill style={{
          borderRadius: '20px 20px 0 0',
          objectFit: 'cover',
        }}/>
      </Box>

      {/* CONTENT */}
      <Box sx={{ p: 2.5 }}>
        <Typography
          variant='heading12'
          component='h6'
          mb={1.8}
        >
          {item.title}
        </Typography>

        <Typography
          variant='body05'
          sx={{
            color: '#505050',
          }}
        >
          {item.description}
        </Typography>
      </Box>
    </Box>
  );
}

/* ================= MAIN SECTION ================= */

export default function WhatMakesNextStep() {
  return (
    <Section
      spacing="lg"
      sx={{
        background:
          'url(/nextstep/What-makes-nextstep-unique.webp)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <SectionHeader title='What Makes' highlight='NextStep Unique'/>
      
      {/* SLIDER */}
      <CustomSlider
        data={features}
        slidesPerView={4}
        spaceBetween={8}
        renderItem={(item) => <FeatureCard item={item} />}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          900: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
      />
    </Section>
  );
}