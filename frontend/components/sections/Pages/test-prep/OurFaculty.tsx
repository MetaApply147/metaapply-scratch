'use client';

import { Box, Typography } from '@mui/material';
import Section from '@/components/common/Section';
import SectionHeader from '@/components/common/SectionHeader';
import Image from 'next/image';

/* ================= CARD ================= */

function FeatureCard({
  icon,
  title,
  marginLeft
}: {
  icon: string;
  title: string;
  marginLeft: string;
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        backgroundColor: 'common.white',
        p: '15px 20px',
        borderRadius: '12px',
        boxShadow: '0px 4px 15px rgba(0,0,0,0.1)',
        width: 392,
        ml: {marginLeft},
        minHeight: '114px'
      }}
    >
        <Image src={icon} alt={title} height={64} width={64} style={{objectFit: 'contain'}}/>

      {/* TEXT */}
      <Typography
        variant='heading12'
        sx={{lineHeight: 'normal'}}
      >
        {title}
      </Typography>
    </Box>
  );
}

/* ================= MAIN ================= */

export default function OurFaculty() {
  return (
    <Section
      sx={{
        background:
          'url(/nextstep/Key-Program-Bg.webp)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          '&::before': {
                content: '""',
                position: 'absolute',
                background: 'url(/test-prep/Faculty.webp)',
                height: '90%',
                width: '90%',
                bottom: '50px',
                backgroundSize: '642px auto',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                zIndex: 0
            }
      }}
    >
      {/* TITLE */}
      <SectionHeader title='Our' highlight='Faculty' />

      {/* MAIN FLEX WRAPPER */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          p: '8em 0 8em'
        }}
      >
        {/* LEFT COLUMN */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 5.2,
          }}
        >
          <FeatureCard
            icon="/test-prep/Result-focused-mentorship.svg"
            title="Results-Focused Mentorship"
            marginLeft="-4%"
          />

          <FeatureCard
            icon="/test-prep/Global-admissions-insight.svg"
            title="Global Admissions Insight"
            marginLeft="8%"
          />

          <FeatureCard
            icon="/test-prep/Data-driven-coaching.svg"
            title="Data-driven Coaching"
            marginLeft="-1%"
          />
        </Box>

        {/* RIGHT COLUMN */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 5.5,
          }}
        >
          <FeatureCard
            icon="/test-prep/Certified-test-specialists.svg"
            title="Certified Test Specialists"
            marginLeft="29%"
          />

          <FeatureCard
            icon="/test-prep/15+-yrs-exp..svg"
            title="15+ Years Experience"
            marginLeft="48%"
          />

          <FeatureCard
            icon="/test-prep/Personalised-learning-plans.svg"
            title="Personalised Learning Plans"
            marginLeft="39%"
          />
        </Box>
      </Box>
    </Section>
  );
}