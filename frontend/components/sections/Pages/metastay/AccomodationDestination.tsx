'use client';

import { Box, Typography, Skeleton, Alert, Button } from '@mui/material';
import Image from 'next/image';
import CustomSlider from '@/components/common/CustomSlider';
import SectionHeader from '@/components/common/SectionHeader';
import Section from '@/components/common/Section';
import VerifiedIcon from '@mui/icons-material/Verified';

type Props = {
  bgColor?: string
}

export default function AccomodationDestination({bgColor}: Props) {
  const cards = [
    {
      id: 1,
      title: 'United Kingdom',
      image: '/Services-images/United_kingdom.webp',
      tag: 'Experience vibrant city living',
      tagColor: '#DCF3FF',
      pointer1: 'Rent per week : <b>£166 Pound*</b>',
      pointer2: 'Minimum Duration of Stay - <b>9–10-month contracts*</b>'
    },
    {
      id: 2,
      title: 'United Kingdom',
      image: '/Services-images/United_kingdom.webp',
      tag: 'Affordable stays ',
      tagColor: '#FFF3D4',
      pointer1: 'Rent per week : £166 Pound*',
      pointer2: 'Minimum Duration of Stay - 9–10-month contracts*'
    },
    {
      id: 3,
      title: 'United Kingdom',
      image: '/Services-images/United_kingdom.webp',
      tag: 'Experience vibrant city living',
      tagColor: '#DAFFE4',
      pointer1: 'Rent per week : £166 Pound*',
      pointer2: 'Minimum Duration of Stay - 9–10-month contracts*'
    },
    {
      id: 4,
      title: 'United Kingdom',
      image: '/Services-images/United_kingdom.webp',
      tag: 'Experience vibrant city living',
      tagColor: '#DCF3FF',
      pointer1: 'Rent per week : £166 Pound*',
      pointer2: 'Minimum Duration of Stay - 9–10-month contracts*'
    },
  ];

  return (
    <Section spacing='lg' sx={{backgroundColor: '#F7FBFF'}}>
        <SectionHeader title='Accommodation' highlight='Destinations'/>
        <CustomSlider
            data={cards}
            spaceBetween={0}
            slidesPerView={3}
            renderItem={(item) => (
                <Box
                sx={{
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: `0px 8.19px 18.43px 0px #A1A1A11A, 0px 137.23px 55.3px 0px #A1A1A103`,
                }}
                >
                    {/* IMAGE */}
                    <Box>
                        <Box sx={{height: '220px', width: '100%', position: 'relative'}}>
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                style={{objectFit: 'cover'}}
                            />
                        </Box>
                        
                        <Box sx={{p: "16px 18px 32px", backgroundColor: 'common.white'}}>
                            <Typography variant='heading11'>{item.title}</Typography>
                            <Box sx={{backgroundColor: `${item.tagColor}`, borderRadius: '16px', p: '2px 12px', width: 'max-content'}} mt={0.5}>
                                <Typography variant='body05' component='p' sx={{color: '#4B4B4B'}}>{item.tag}</Typography>
                            </Box>
                            <Box mt={2.5}>
                                <Box sx={{display: 'flex', gap: 1.2, mb: 1.5}}>
                                    <VerifiedIcon sx={{color: '#00AD70'}}/>
                                    <Typography sx={{color: '#4B4B4B'}} variant='body05'>{item.pointer1}</Typography>
                                </Box>
                                <Box sx={{display: 'flex', gap: 1.2}}>
                                    <VerifiedIcon sx={{color: '#00AD70'}}/>
                                    <Typography sx={{color: '#4B4B4B'}} variant='body05'>{item.pointer2}</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            )}
        />
    </Section>
  );
}