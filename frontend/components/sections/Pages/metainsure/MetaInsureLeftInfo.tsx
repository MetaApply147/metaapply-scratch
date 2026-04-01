'use client';

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
      image: '/Services-images/travel-insurance.webp',
    },
  ];

  return (
    <Box>
      <Typography
        variant="heading07"
        sx={{
          mb: 4,
          fontWeight: 600,
          display: 'block',
        }}
      >
        Types of{' '}
        <Box component="span" sx={{ color: 'primary.main' }}>
          International Insurance
        </Box>
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        {cards.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: 'flex',
              gap: 4,
              alignItems: 'center',
              backgroundColor: 'common.white',
              borderRadius: '16px',
              pr: 6,
              pl: 3.5,
              py: 3,
              boxShadow: '0px 8px 28px 0px #DDDDDD66',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: 250,
                height: 180,
                borderRadius: '12px',               
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
                variant="body01"
                sx={{
                  fontWeight: 500,
                  color: 'secondary.main',
                  mb: 1,
                  display: 'block',
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body05"
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