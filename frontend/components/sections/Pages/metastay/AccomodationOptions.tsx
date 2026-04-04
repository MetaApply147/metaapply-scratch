'use client';

import Section from '@/components/common/Section';
import SectionHeader from '@/components/common/SectionHeader';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

type CardType = {
  title: string;
  description?: string;
  image: string;
  label?: string;
};

const cards: CardType[] = [
  {
    title: 'Non-Ensuite',
    image: '/Services-images/ensuite.webp',
    description: 'Experience community living with a roommate.',
    label: 'Non-Ensuite',
  },
  {
    title: 'Ensuite',
    image: '/Services-images/ensuite.webp',
    description: 'Experience community living with a roommate.',
    label: 'Non-Ensuite',
  },
  {
    title: 'Shared Room',
    description: 'Experience community living with a roommate.',
    image: '/Services-images/ensuite.webp',
    label: 'Non-Ensuite',
  },
  {
    title: 'Shared Apartment',
    description: 'Experience community living with a roommate.',
    image: '/Services-images/ensuite.webp',
    label: 'Non-Ensuite',
  },
  {
    title: 'Studio Apartment',
    description: 'Experience community living with a roommate.',
    image: '/Services-images/ensuite.webp',
    label: 'Non-Ensuite',
  },
  {
    title: 'Homestay',
    description: 'Experience community living with a roommate.',
    image: '/Services-images/ensuite.webp',
    label: 'Non-Ensuite',
  },
];

export default function AccommodationOptions() {
  return (
    <Section sx={{ background: 'linear-gradient(180deg, transparent, #FFE5F0)' }}>
      <SectionHeader title="Your Abroad" highlight="Accommodation Options" />

      {/* GRID */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)', 
            lg: 'repeat(4, 1fr)', 
          },
          gap: {
            xs: '12px',
            sm: '14px',
            md: '16px', 
          },
        }}
      >
        {cards.map((item, index) => {
          let gridColumn;

          // ✅ SAME DESKTOP LOGIC (unchanged)
          if (index === 0) gridColumn = '1 / 2';
          if (index === 1) gridColumn = '2 / 3';
          if (index === 2) gridColumn = '3 / 4';
          if (index === 3) gridColumn = '2 / 3';
          if (index === 4) gridColumn = '3 / 4';
          if (index === 5) gridColumn = '4 / 5';

          const isEven = index % 2 === 0;

          return (
            <Box
              key={index}
              sx={{
                gridColumn: {
                  xs: 'auto',
                  sm: 'auto',
                  md: gridColumn, 
                },
                position: 'relative',
                height: {
                  xs: 220,
                  sm: 260,
                  md: 325, 
                },
                overflow: 'hidden',
                cursor: 'pointer',

                '&:hover .overlay': {
                  opacity: 1,
                },
                '&:hover .desc': {
                  opacity: 1,
                  transform: 'translateY(0)',
                },
                '&:hover .label': {
                  opacity: 1,
                  transform: 'translateY(0)',
                },
                '&:hover .title': {
                  opacity: 0,
                },
              }}
            >
              {/* IMAGE */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                style={{ objectFit: 'cover' }}
              />

             
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background: isEven
                    ? 'linear-gradient(180deg, transparent, #E2E2E200)'
                    : 'linear-gradient(180deg, transparent, #2D348B)',
                }}
              />

              
              <Box
                className="overlay"
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background: isEven
                    ? 'linear-gradient(180deg, rgba(0,0,0,0.2), #E2E2E2)'
                    : 'linear-gradient(180deg, rgba(0,0,0,0.2), #2D348B)',
                  opacity: 0,
                  transition: '0.3s',
                }}
              />

              {/* CONTENT */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: { xs: 12, sm: 16, md: 25 }, 
                  left: { xs: 10, sm: 12, md: 16 },
                  right: { xs: 10, sm: 12, md: 16 },
                  color: 'common.white',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                {/* TITLE */}
                <Typography
                  className="title"
                  variant="heading12"
                  component="h6"
                  fontWeight={600}
                  sx={{
                    color: 'secondary.main',
                    backgroundColor: 'common.white',
                    borderRadius: '0',
                    p: '8px',
                    textAlign: 'center',
                    minWidth: '100%',
                    margin: '0 auto',
                    position: 'absolute',
                    bottom: '0',
                    opacity: 1,
                    fontSize: {xs: '14px', sm: '18px', md: '16px', lg: '20px' },
                    transition: 'opacity 0.4s ease, transform 0.4s ease',
                  }}
                >
                  {item.title}
                </Typography>

                {/* LABEL */}
                <Typography
                  className="label"
                  variant="heading12"
                  component="p"
                  sx={{
                    mt: 1,
                    opacity: 0,
                    transform: 'translateY(10px)',
                    transition: '0.3s',
                    textAlign: 'center',
                    color: isEven ? '#2E318C' : 'common.white',
                  }}
                >
                  {item.label}
                </Typography>

                {/* DESCRIPTION */}
                <Typography
                  className="desc"
                  variant="body05"
                  component="p"
                  sx={{
                    mt: 1,
                    opacity: 0,
                    transform: 'translateY(10px)',
                    transition: '0.3s',
                    textAlign: 'center',
                    color: isEven ? 'text.secondary' : 'common.white',
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Section>
  );
}