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
    description:
      'Experience community living with a roommate.',
    label: 'Non-Ensuite',
  },
  {
    title: 'Ensuite',
    image: '/Services-images/ensuite.webp',
    description:
      'Experience community living with a roommate.',
    label: 'Non-Ensuite',
  },
  {
    title: 'Shared Room',
    description:
      'Experience community living with a roommate.',
    image: '/Services-images/ensuite.webp',
    label: 'Non-Ensuite',
  },
  {
    title: 'Shared Apartment',
    description:
      'Experience community living with a roommate.',
    image: '/Services-images/ensuite.webp',
    label: 'Non-Ensuite',
  },
  {
    title: 'Studio Apartment',
    description:
      'Experience community living with a roommate.',
    image: '/Services-images/ensuite.webp',
    label: 'Non-Ensuite',
  },
  {
    title: 'Homestay',
    description:
      'Experience community living with a roommate.',
    image: '/Services-images/ensuite.webp',
    label: 'Non-Ensuite',
  },
];

export default function AccommodationOptions() {
  return (
    <Section sx={{ background: 'linear-gradient(180deg, transparent, #FFE5F0)' }}>
      {/* HEADER */}
      <SectionHeader title='Your Abroad' highlight='Accommodation Options'/>

      {/* GRID */}
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '16px',
            }}
            >
            {cards.map((item, index) => {
                let gridColumn;

                // Row 1 → first 3 items
                if (index === 0) gridColumn = '1 / 2';
                if (index === 1) gridColumn = '2 / 3';
                if (index === 2) gridColumn = '3 / 4';

                // Row 2 → next 3 items (shifted right)
                if (index === 3) gridColumn = '2 / 3';
                if (index === 4) gridColumn = '3 / 4';
                if (index === 5) gridColumn = '4 / 5';

                const isEven = index % 2 === 0;

                return (
                <Box
                    key={index}
                    sx={{
                    gridColumn,
                    position: 'relative',
                    height: 325,
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
                        // transform: 'translateY(20px)',
                        opacity: 0
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

                    {/* BASE GRADIENT */}
                    <Box
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        background: isEven
                        ? 'linear-gradient(180deg, transparent, #E2E2E200)'
                        : 'linear-gradient(180deg, transparent, #2D348B)',
                    }}
                    />

                    {/* HOVER GRADIENT */}
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
                        bottom: 25,
                        left: 16,
                        right: 16,
                        color: 'common.white',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                    >
                    {/* TITLE */}
                    <Typography
                        className='title'
                        variant='heading12'
                        component='h6'
                        fontWeight={600}
                        sx={{
                            color: 'secondary.main',
                            backgroundColor: 'common.white',
                            borderRadius: '8px',
                            p: '8px',
                            textAlign: 'center',
                            minWidth: '210px',
                            margin: '0 auto',
                            position: 'absolute',
                            bottom: '0',
                            opacity: 1,
                            // transform: 'translateY(0)',
                            transition: 'opacity 0.4s ease, transform 0.4s ease',
                        }}
                    >
                        {item.title}
                    </Typography>

                    {/* DESCRIPTION (HOVER ONLY) */}
                    <Typography
                        className="label"
                        variant='heading12'
                        component='p'
                        sx={{
                        mt: 1,
                        opacity: 0,
                        transform: 'translateY(10px)',
                        transition: '0.3s',
                        textAlign: 'center',
                        color: isEven
                        ? '#2E318C'
                        : 'common.white',
                        }}
                    >
                        {item.label}
                    </Typography>
                    <Typography
                        className="desc"
                        variant='body05'
                        component='p'
                        sx={{
                        mt: 1,
                        opacity: 0,
                        transform: 'translateY(10px)',
                        transition: '0.3s',
                        textAlign: 'center',
                        color: isEven ? 'text.secondary' : 'common.white'
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