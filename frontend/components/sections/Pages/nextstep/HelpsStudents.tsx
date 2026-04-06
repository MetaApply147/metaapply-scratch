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

export default function HelpsStudents() {
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
                background: 'url(/nextstep/Program-features-img.webp)',
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
      <SectionHeader title='How NextStep' highlight='Helps Students' />

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
            icon="/nextstep/Bridges-the-campus-to-corporate-gap.svg"
            title="Bridges the Campus-to Corporate Gap"
            marginLeft="12%"
          />

          <FeatureCard
            icon="/nextstep/Interview-readiness.svg"
            title="Sharpens Interview Readiness"
            marginLeft="0"
          />

          <FeatureCard
            icon="/nextstep/Confidence&Community-skills.svg"
            title="Builds Confidence & Communication Skills"
            marginLeft="12%"
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
            icon="/nextstep/Interview-readiness.svg"
            title="Improves Placement Success"
            marginLeft="29%"
          />

          <FeatureCard
            icon="/nextstep/Right-carrer-direction.svg"
            title="Helps Discover Right Career Direction"
            marginLeft="auto"
          />

          <FeatureCard
            icon="/nextstep/Prepares-global-environments.svg"
            title="Prepares for Global Environments"
            marginLeft="29%"
          />
        </Box>
      </Box>
    </Section>
  );
}