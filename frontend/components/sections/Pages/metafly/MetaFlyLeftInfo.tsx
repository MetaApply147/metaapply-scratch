'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';

export default function MetaFlyLeftInfo() {
  const cards = [
    {
      id: 1,
      title: 'Enquiry',
      icon: '/Services-images/Enquire-call.svg',
    },
    {
      id: 2,
      title: 'Booking',
      icon: '/Services-images/visaSuccess.svg',
    },
    {
      id: 3,
      title: 'Travel',
      icon: '/Services-images/Get-flight-ops.svg',
    },
  ];

  return (
    <Box>
      <Typography
        variant="heading07"
        sx={{
          mb: 2,
          fontWeight: 600,
          display: 'inline',
        }}
      >
        Why Choose{' '}
        <Box component="span" sx={{ color: 'primary.main' }}>
          MetaFly
        </Box>
      </Typography>

      <Typography
        variant="body05"
        sx={{
          color: 'text.secondary',        
          lineHeight: 1.7,
          mb: 5,
          mt: 3,
          display: 'block',
        }}
      >
        Studying abroad is a once-in-a-lifetime opportunity that requires making the right decisions at the right time. From selecting the course, university, and country, to clearing English language exams, securing finances, obtaining a visa, and arranging accommodation – the journey is full of critical steps. 
            Flying abroad is the final milestone in this journey, and at MetaFly, we make sure you get the best experience. We help you find the most affordable flight tickets tailored to your study schedule, budget, and preferences.
            With exclusive student deals, flexible options, and round-the-clock support, MetaFly ensures your travel to your dream destination is smooth, cost-effective, and stress-free.
        
      </Typography>

      <Box
        sx={{
          display: 'flex',
          gap: 3,
        }}
      >
        {cards.map((item) => (
          <Box
            key={item.id}
            sx={{
              flex: 1,
              backgroundColor: 'common.white',
              borderRadius: '12px',
              py: 3,
              px: 2,
              textAlign: 'center',
              boxShadow: '0px 8px 28px 0px #DDDDDD66',  
            }}
          >
            <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
              <Image
                src={item.icon}
                alt={item.title}
                width={100}
                height={78}
                style={{ objectFit: 'contain' }}
              />
            </Box>

            <Typography
              variant="body03"
              sx={{
                fontWeight: 600,
              }}
            >
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}