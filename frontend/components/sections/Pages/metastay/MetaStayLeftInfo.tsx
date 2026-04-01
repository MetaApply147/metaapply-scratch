'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';

export default function MetaStayLeftInfo() {
  const cards = [
    {
      id: 1,
      title: 'Free Services',
      icon: '/Services-images/Services-Icon.svg',
    },
    {
      id: 2,
      title: 'Verified Properties',
      icon: '/Services-images/Properties-Icon.svg',
    },
    {
      id: 3,
      title: 'Best Prices',
      icon: '/Services-images/Money_bag.svg',
    },
    {
      id: 4,
      title: '30+ Countries',
      icon: '/Services-images/20-Countries.svg',
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
        Why to Choose{' '}
        <Box component="span" sx={{ color: 'primary.main' }}>
          MetaStay
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
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy. Lorem Ipsum is simply
        dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 3,
        }}
      >
        {cards.map((item) => (
          <Box
            key={item.id}
            sx={{
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

            <Typography variant="body03" sx={{ fontWeight: 600 }}>
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}