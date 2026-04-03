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
        component='h2'
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
        component='p'
        sx={{
          color: 'text.secondary',
          mb: 7.5,
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
          gap: 4,
          maxWidth: '75%',
          m: '0 auto',
        }}
      >
        {cards.map((item) => (
          <Box
            key={item.id}
            sx={{
              backgroundColor: 'common.white',
              borderRadius: '12px',
              pt: 1.5,
              px: 1.5,
              pb: 2,
              textAlign: 'center',
              boxShadow: '0px 8px 28px 0px #DDDDDD66',
            }}
          >
            <Box sx={{display: 'flex', justifyContent: 'center', height: '80px', width: '80px', m: '0 auto 10px' }}>
              <Image
                src={item.icon}
                alt={item.title}
                height={80}
                width={80}
                style={{ objectFit: 'contain', }}
              />
            </Box>

            <Typography variant="body03" component='h6'>
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}