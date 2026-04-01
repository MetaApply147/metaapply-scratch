'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';

export default function MetaFinanceLeftInfo() {
  const cards = [
    {
      id: 1,
      title: 'Secured',
      desc: 'Refers to loan that is given to the applicant in the form of a collateral, like property or fixed deposit. A secured loan has less rate of interest. ',
      image: '/Services-images/secured.webp',
    },
    {
      id: 2,
      title: 'Unsecured',
      desc: 'Refers to a loan type without any collaterals. However, banks do check the applicant’s financial profile. An unsecured loan carries a high interest rate.',
      image: '/Services-images/unsecured.webp',
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
          Education Loan
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
                width: 350,
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