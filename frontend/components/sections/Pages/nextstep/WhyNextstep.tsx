'use client';

import Section from '@/components/common/Section';
import SectionHeader from '@/components/common/SectionHeader';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

/* ================= DATA ================= */

const points = [
  {
    id: '01',
    text: 'Ensure NEP and UGC/NAAC compliance with structured, skill-based modules',
  },
  {
    id: '02',
    text: 'Enhance institutional credibility and brand reputation',
  },
  {
    id: '03',
    text: 'Improve placement and internship success for students',
  },
  {
    id: '04',
    text: 'Strengthen Outcome-Based Education (OBE) practices',
  },
  {
    id: '05',
    text: 'Attract and engage top recruiters consistently',
  },
  {
    id: '06',
    text: 'Add tangible value to the overall student experience',
  },
];

/* ================= COMPONENT ================= */

export default function WhyNextStep() {
  return (
    <Section>
      <Grid container spacing={4} alignItems="stretch">
        
        {/* LEFT CONTENT */}
        <Grid size={{ xs: 6, md: 7 }}>
          <SectionHeader title='Why NextStep Matters' highlight='for Institutions' mb='20px'/>

          {/* PARAGRAPH */}
          <Typography
            variant='body05'
            component='p'
            sx={{
              color: 'text.secondary',
              mb: 2,
            }}
          >
            In today’s competitive education landscape, institutions are
            evaluated not just by academic delivery, but{' '}
            <b>placement outcomes, brand perception, and regulatory compliance.</b>
          </Typography>

          <Typography
            variant='body05'
            component='p'
            sx={{
              color: 'text.secondary',
              mb: 4,
            }}
          >
            The National Education Policy (NEP), under Govt. of India and UGC
            guidelines, mandates <b>skill-based, outcome-driven education.</b>{' '}
            Institutions that fail to align risk losing credibility and falling
            short of accreditation benchmarks.
          </Typography>

          {/* SUB HEADING */}
          <Typography
          variant='heading10'
          component='h5'
            sx={{
              mb: 2.5,
            }}
          >
            How is it helping{' '}
            <Box
              component="span"
              sx={{
                color: 'primary.main',
              }}
            >
              institutions
            </Box>
          </Typography>

          {/* CARD GRID WRAPPER */}
          <Box
            sx={{
              position: 'relative',
              borderRadius: '20px',
              p: { xs: 2, md: '1.5em 1.8em 1.5em 2.5em'},
            //   background: '#FFF',
              border: '1px solid #FFBCD7',
              overflow: 'hidden',
            }}
          >
            {/* LEFT GRADIENT BORDER */}
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: '12px',
                background:
                  'linear-gradient(90deg, #BF0E2E, #EE0081)',
                borderTopLeftRadius: '20px',
                borderBottomLeftRadius: '20px',
              }}
            />

            {/* GRID */}
            <Grid container spacing={2}>
              {points.map((item) => (
                <Grid size={{ xs: 6, md: 4 }} key={item.id}>
                  <Box
                    sx={{
                      background: 'linear-gradient(150deg, #FFFFFF, #DFE0FF)',
                      borderRadius: '20px',
                      p: '1.5em 1em',
                      height: '100%',
                    }}
                  >
                    <Typography
                      variant='heading06'
                      fontWeight={700}
                      sx={{
                        color: 'navyBlue.400',
                        mb: 1,
                      }}
                    >
                      {item.id}
                    </Typography>

                    <Typography
                    variant='heading14'
                    fontWeight={500}
                    component='p'
                      sx={{
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>

        {/* RIGHT IMAGE */}
        <Grid size={{ xs: 6, md: 5 }}>
          <Box
            sx={{
              width: '100%',
              height: '100%',
              position: 'relative'
            }}
          >
            <Image src='/nextstep/Institution.webp' fill alt='Institution' style={{borderRadius: '20px'}}/>
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
}