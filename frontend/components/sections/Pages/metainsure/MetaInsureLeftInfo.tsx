'use client';

import SectionHeader from '@/components/common/SectionHeader';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

export default function MetaInsureLeftInfo() {
  const cards = [
    {
      id: 1,
      title: 'Travel Insurance',
      desc: 'Protects against trip delays, baggage loss, cancellation, and travel-related emergencies during international journey.',
      image: '/Services-images/travel-insurance.webp',
    },
    {
      id: 2,
      title: 'Health Insurance',
      desc: 'Covers hospitalisation, doctor visits, prescription drugs, and emergency medical treatments while you\'re studying abroad.',
      image: '/Services-images/health-insurance.webp',
    },
  ];

  return (
    <Box>
     
      <SectionHeader title='Types of' highlight='International Insurance'/>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3.5 }}>
        {cards.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: 'flex',
              gap: 3,
              alignItems: 'center',
              backgroundColor: 'common.white',
              borderRadius: '16px',
              pr: 4,
              pl: 3,
              py: 3,
              boxShadow: '0px 8px 32px 0px #A5A5A526',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: 162,
                height: 200,
                borderRadius: '12px',   
                minWidth: 162            
              }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                style={{ objectFit: 'cover', borderRadius: '12px' }}
              />
            </Box>

            <Box>
              <Typography
                variant="heading10"
                component='h5'
                sx={{
                  fontWeight: 500,
                  color: 'secondary.main',
                  mb: 2,
                  display: 'block',
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body05"
                component='p'
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.6,
                }}
              >
                {item.desc}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}