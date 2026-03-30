'use client';

import { Box, Typography, Skeleton, Alert, Button } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getServices } from '@/services/httpServices';
import CustomSlider from '@/components/common/CustomSlider';
import SectionHeader from '../common/SectionHeader';
import Section from '../common/Section';
import CheckIcon from '@mui/icons-material/Check';

/* ================= TYPES ================= */

type Destination = {
  id: number;
  title: string;
  imageUrl: string;
  tag?: string;
  tagColor?: string;
  popularCourses?: string;
  studentCities?: string;
  countryGuideLink?: string;
  exploreMoreLink?: string;
};

/* ================= CONFIG ================= */

const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

if (!BASE_URL) {
  throw new Error('Missing API URL');
}

/* ================= HELPERS ================= */

const getImageUrl = (url?: string): string | null => {
  if (!url) return null;
  if (url.startsWith('http')) return url;
  return `${BASE_URL}${url.startsWith('/') ? url : `/${url}`}`;
};

/* ================= COMPONENT ================= */

export default function PopularDestinations() {
  const [data, setData] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const res = await getServices('/popular-destinations', {
          populate: 'image',
          sort: ['order:asc'],
        });

        if (!res.isSuccess) {
          throw new Error(
            typeof res.message === 'string'
              ? res.message
              : res.message?.message || 'Failed to fetch'
          );
        }

        const mapped = (res.data?.data || [])
          .map((item: any) => {
            const imageUrl = getImageUrl(item?.image?.url);
            if (!imageUrl) return null;

            return {
              id: item.id,
              title: item.title,
              imageUrl,
              tag: item.tag,
              tagColor: item.tagColor,
              popularCourses: item.popularCourses,
              studentCities: item.studentCities,
              countryGuideLink: item.countryGuideLink,
              exploreMoreLink: item.exploreMoreLink,
            };
          })
          .filter(Boolean) as Destination[];

        setData(mapped);
      } catch (err: any) {
        setError(err?.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Section spacing="lg">
      <SectionHeader
        title="Popular"
        highlight="Destinations"
      />
      <Box>

        {/* ERROR */}
        {error && <Alert severity="error">{error}</Alert>}

        {/* LOADING */}
        {loading && (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} variant="rounded" width="100%" height={300} />
            ))}
          </Box>
        )}

        {/* SLIDER */}
        {!loading && !error && (
          <CustomSlider
            data={data}
            spaceBetween={0}
            slidesPerView={3}
            renderItem={(item) => (
              <Box
                sx={{
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: `0px 8.19px 18.43px 0px #A1A1A11A, 0px 137.23px 55.3px 0px #A1A1A103`,
                }}
              >
                {/* IMAGE */}
                <Box sx={{ position: 'relative' }}>
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={400}
                    height={220}
                    sizes="(max-width: 768px) 100vw, 400px"
                    style={{ width: '100%', height: 'auto' }}
                  />

                  {item.tag && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 15,
                        left: 12,
                        px: 1.8,
                        py: 0.3,
                        borderRadius: 2,
                        color: 'common.white',
                        background: item.tagColor || '#000',
                        border: `1px solid #fff`
                      }}
                    >
                      <Typography variant='heading15' fontWeight={500}>{item.tag}</Typography>
                    </Box>
                  )}
                </Box>

                {/* CONTENT */}
                <Box sx={{ px: 2, pt: 2, pb: 3.8 }}>
                  <Typography  mb={1} variant='heading11' component='h5' color='navyBlue.500'>
                    {item.title}
                  </Typography>

                  <Box sx={{display: 'flex', gap: 1.2}} mb={1.75}>
                    <CheckIcon sx={{color: 'navyBlue.500', fontSize: 20}}/>
                    <Typography variant="body05" mb={0} color='text.secondary' component='p'>
                      Popular Courses: <span style={{fontWeight: 600}}>{item.popularCourses}</span>
                    </Typography>
                  </Box>

                  <Box sx={{display: 'flex', gap: 1.2}}>
                    <CheckIcon sx={{color: 'navyBlue.500', fontSize: 20}}/>
                    <Typography variant="body05" mb={0} color='text.secondary' component='p'>
                      Student Friendly Cities - <span style={{fontWeight: 600}}>{item.studentCities}</span>
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }} mt={5}>
                    <Button variant="contained" size="medium" sx={{fontWeight: 500, padding: '16px 30px'}}>
                      <Image src='/Home/download_arrow.svg' height={16} width={16} alt='Download' style={{marginRight: "6px"}}/> Country Guide
                    </Button>

                    <Button variant="outlined" size="medium" sx={{fontWeight: 500, padding: '16px 30px'}}>
                      Explore More
                    </Button>
                  </Box>
                </Box>
              </Box>
            )}
          />
        )}
      </Box>
    </Section>
    
  );
}