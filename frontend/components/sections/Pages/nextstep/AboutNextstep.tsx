'use client';

import SectionHeader from '@/components/common/SectionHeader';
import { Box, Typography } from '@mui/material';
import CounterSection from '@/components/sections/CounterSection';

export default function AboutNextstep() {

  return (
    <Box>
      <SectionHeader title='About' highlight='NextStep Program' mb='30px' /> 

      <Typography
        variant="body03"
        component='p'
        sx={{
          color: 'text.secondary',
          mb: 7,
        }}
      >
        NextStep is a structured career readiness program developed by MetaApply IE, a global education and student success ecosystem. This high-impact program helps students build the mindset, communication skills, and real-world abilities to thrive in professional environments.
      </Typography>
      
      <Box sx={{background: 'linear-gradient(90deg, #FFE9F2, #FFD1E8)', borderRadius: '20px', p: '10px 10px'}}>
          <CounterSection counterWidth='full' 
            data={[
                { id: 1, value: 5, suffix: 'K+', label: 'Students Trained\nWorld-wide' },
                { id: 2, value: 7, suffix: '+', label: 'Study Abroad\nCentres', leadingZero: true },
                { id: 3, value: 40, suffix: '+', label: 'Study\nDestinations' },
                { id: 4, value: 75, suffix: 'K+', label: 'Global\nCommunity' },
            ]}/>
      </Box>
    </Box>
  );
}