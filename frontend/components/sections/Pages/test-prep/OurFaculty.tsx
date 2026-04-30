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
  display: "flex",
  alignItems: "center",
  gap: { xs: 1.5, md: 2 },
  backgroundColor: "common.white",
  px: { xs: 2, md: "20px" },
  py: { xs: 2, md: "15px" },
  borderRadius: "12px",
  boxShadow: "0px 4px 15px rgba(0,0,0,0.1)",
  width: "100%",
  maxWidth: {
    xs: "100%",
    sm: "420px",
    md: "392px",
  },
  ml: {
    xs: 0,
    md: marginLeft,
  },
  minHeight: {
    xs: "90px",
    md: "114px",
  },
  mx: "auto",
}}
    >
        <Image  src={icon}
  alt={title}
  height={64}
  width={64}
  style={{
    objectFit: "contain",
    width: "clamp(48px, 8vw, 64px)",
    height: "auto",
  }}/>

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
  background: "url(/nextstep/Key-Program-Bg.webp)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  overflow: "hidden",

  "&::before": {
    content: '""',
    position: "absolute",
    background: "url(/test-prep/Faculty.webp)",
    width: "100%",
    height: "100%",
    left: "50%",
    transform: "translateX(-50%)",

    bottom: {
      xs: "60px",
      md: "30px",
      lg: "20px",
    },

    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",

    backgroundSize: {
      xs: "250px auto",
      sm: "300px auto",
      md: "420px auto",
      lg: "640px auto",
    },

    zIndex: 0,
    opacity: 1,
  },
}}
    >
      {/* TITLE */}
      <SectionHeader title='Our' highlight='Faculty' />

      {/* MAIN FLEX WRAPPER */}
<Box
  sx={{
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      lg: "1fr 1fr",
    },

    gap: {
      xs: 3,
      lg: 0,
    },

    pt: {
      xs: 4,
      md: "6em",
      lg: "8em",
    },

    pb: {
      xs: 6,
      md: "6em",
      lg: "8em",
    },

    minHeight: {
      lg: "720px",
    },

    position: "relative",
    zIndex: 2,
    alignItems: "center",
  }}
>
        {/* LEFT COLUMN */}
        <Box
            sx={{
    display: "flex",
    flexDirection: "column",
    gap: { xs: 2.5, md: 5.2 },
    alignItems: {
      xs: "center",
      md: "flex-start",
    },
    mt: { md: "40px" },
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
    display: "flex",
    flexDirection: "column",
    gap: { xs: 2.5, md: 5.5 },
    alignItems: {
      xs: "center",
      md: "flex-start",
    },
    mt: {
      xs: 0,
      md: "90px",
    },
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