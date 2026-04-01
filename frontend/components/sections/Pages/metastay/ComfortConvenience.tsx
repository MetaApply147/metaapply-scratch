'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';

export default function ComfortConvenience() {
  const amenities = [
    { id: 1, title: 'Laundry Room', icon: '/Services-images/laundry-room.svg' },
    { id: 2, title: 'Vacuum Cleaner', icon: '/Services-images/vacuum-cleaner.svg' },
    { id: 3, title: 'Communal TV', icon: '/Services-images/communal-tv.svg' },
    { id: 4, title: 'Tumble Dryer', icon: '/Services-images/tumble-dryer.svg' },
    { id: 5, title: 'Onsite Maintenance', icon: '/Services-images/onsite-maintenance.svg' },
    { id: 6, title: 'Bicycle Storage', icon: '/Services-images/bicycle-storage.svg' },
    { id: 7, title: 'Cinema', icon: '/Services-images/cinema.svg' },
    { id: 8, title: 'Games Room', icon: '/Services-images/games-room.svg' },
    { id: 9, title: 'Furnished Common Area', icon: '/Services-images/furnished-common-area.svg' },
    { id: 10, title: 'Oven', icon: '/Services-images/oven.svg' },
  ];

  return (
    <Box sx={{ py: 6 }}>
      <Typography
        variant="heading07"
        sx={{
          fontWeight: 600,
          display: 'block',
          mb: 5,
        }}
      >
        Comfort Meets Convenience in{' '}
        <Box component="span" sx={{ color: 'primary.main' }}>
          Every Stay
        </Box>
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          rowGap: 5,
          columnGap: 3,
        }}
      >
        {amenities.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1.5,
            }}
          >
            <Image
              src={item.icon}
              alt={item.title}
              width={78}
              height={78}
              style={{ objectFit: 'contain' }}
            />
            <Typography
              variant="body06"
              sx={{
                fontWeight: 500,
                textAlign: 'center',
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