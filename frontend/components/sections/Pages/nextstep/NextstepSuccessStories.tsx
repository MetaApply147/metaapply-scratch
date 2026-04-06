'use client';

import { Box, Container, Typography } from '@mui/material';
import Section from '@/components/common/Section';
import SectionHeader from '@/components/common/SectionHeader';
import CustomSlider from '@/components/common/CustomSlider';
import Image from 'next/image';

const stories = [
  {
    description:
      "MetaApply IE supported our institution in a truly impactful way. Their NextStep programme not only enhanced our students’ communication and interview skills but also gave them the confidence to succeed in competitive placements. We’ve witnessed a visible improvement in student readiness and recruiter satisfaction.",
    title: "Dr. Kavita Sharma",
    role: "Partner University",
  },
  {
    description:
      "Partnering with MetaApply IE was one of the best decisions we made for our students. The integrated career-readiness modules blended seamlessly with our academic cycle, helping our students prepare step by step. Employers have specifically acknowledged the professionalism and clarity our students now bring to interviews.",
    title: "Prof. Arvind Menon",
    role: "Partner University",
  },
  {
    description:
      "Our students benefitted greatly from the fast-track bootcamp by MetaApply IE. From resume-building workshops to mock interviews, the entire training was practical and engaging. The placement outcomes this year have been remarkable, and our students feel more confident about their future careers.",
    title: "Mrs. Neha Kapoor",
    role: "Partner University",
  },
];

export default function NextstepSuccessStories() {
  const renderItem = (item: any) => {
    return (
        <Box
          sx={{
            height: '100%',
            borderRadius: '16px',
            p: '1.5em 2em',
            backgroundColor: 'common.white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: 3.5,
            border: '1px solid transparent',
            background: 'linear-gradient(#fff, #fff) padding-box, linear-gradient(90deg, #BF0E2E 33%, #044B94 77%) border-box'
          }}
        >
          {/* Content */}
          <Box>
            <Image height={30} width={29} src='/nextstep/quotes.svg' alt='Quotes' />

            <Typography
              component='p'
              variant='body05'
              mt={3}
              sx={{
                color: '#505050',
              }}
            >
              {item.description}
            </Typography>
          </Box>

          {/* Author */}
          <Box>
            <Typography
              component='p'
              variant='body05'
              fontWeight={700}
            >
              {item.title}
            </Typography>

            <Typography
              component='p'
              variant='body06'
            >
              {item.role}
            </Typography>
          </Box>
        </Box>
    );
  };

  return (
    <Section
      spacing="lg"
      sx={{
        backgroundColor: '#E8F6FF',
      }}
    >
        <SectionHeader title="Our" highlight="Success Stories" />

        <Box>
          <CustomSlider
            data={stories}
            renderItem={renderItem}
            slidesPerView={3}
            spaceBetween={0}
            breakpoints={{
              0: { slidesPerView: 1 },
              600: { slidesPerView: 2 },
              900: { slidesPerView: 3 },
            }}
          />
        </Box>
    </Section>
  );
}