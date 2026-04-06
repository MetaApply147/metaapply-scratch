'use client';

import Section from '@/components/common/Section';
import SectionHeader from '@/components/common/SectionHeader';
import { Box, Typography, Button, Container } from '@mui/material';
import Image from 'next/image';

export default function NextStepCTA() {
  return (
    <Section spacing='lg' sx={{background: 'linear-gradient(90deg, #BF0E2E, #EE0081)', p: '0 !important'}}>

      {/* MAIN GRADIENT SECTION */}
      <Box
       sx={{
        display: 'flex',
        mt: '135px'
       }}
      >
          
          {/* CONTENT */}
          <Box
            sx={{
              maxWidth: { xs: '100%', md: '56%' },
              color: 'common.white',
              py: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              justifyContent: 'center'
            }}
          >
            <SectionHeader title='NextStep is built institution-first' mb="20px"/> 

            <Typography
            component='p'
            variant='body05'
            >
              Unlike conventional training programs, this specially designed
              initiative delivers measurable impact for institutions while
              empowering students.
            </Typography>

            <Button
              variant="contained"
              size='large'
              sx={{
                background: '#fff !important',
                color: 'text.primary',
                mt: 4,
              }}
            >
              Connect Now
            </Button>
          </Box>

          {/* RIGHT IMAGE */}
          <Box sx={{height: '522px', width: '605px', position: 'relative', mt: '-135px', mb: '-10px'}}>
             <Image src="/nextstep/CTA-Img.webp" fill alt='Nextstep' style={{objectFit: 'contain'}}/>
          </Box>
      </Box>
    </Section>
  );
}