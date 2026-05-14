'use client';

import { Box, Typography } from '@mui/material';

export default function ReferralContent() {
  return (
    <Box
      sx={{
        maxWidth: '499px',
      }}
    >
      <Typography
        sx={{
          fontFamily: 'Open Sans',
          fontWeight: 700,
          fontSize: {
            xs: '36px',
            md: '32px',
          },
          lineHeight: '44px',
          color: '#2E318C',
          mb: '20px',
        }}
      >
        Refer your friends to study abroad and start earning
      </Typography>

      <Typography
        sx={{
          fontFamily: 'Open Sans',
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '28px',
          color: '#000000',
        }}
      >
        Know someone dreaming of studying abroad but unsure where to start? This is your chance to nudge them in the right direction. Refer a friend, sibling, or colleague and help them unlock global education opportunities — from top universities to life-changing international exposure. Your referral could be the push they need to take that first confident step towards their future. A minute is all it takes to set someone up for a lifetime of global opportunities.
      </Typography>
    </Box>
  );
}