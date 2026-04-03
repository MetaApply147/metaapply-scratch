'use client';

import SectionHeader from '@/components/common/SectionHeader';
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
      {/* <Typography
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
      </Typography> */}
      <SectionHeader title='Types of' highlight='Education Loan'/>

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