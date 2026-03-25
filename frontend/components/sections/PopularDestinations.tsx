'use client';

import { Box, Container, Typography, Skeleton, Alert, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getServices } from '@/services/httpServices';

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
          const msg =
            typeof res.message === 'string'
              ? res.message
              : res.message?.message || 'Failed to fetch';
          throw new Error(msg);
        }

        const mapped = (res.data?.data || [])
          .map((item: any) => {
            const imageUrl = getImageUrl(item?.image?.url);
            console.log("IMAGE:", item.imageUrl);
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
        let message = 'Something went wrong';
        if (typeof err === 'string') message = err;
        else if (err?.message) message = err.message;

        setError(message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Box>

        {error && <Alert severity="error">{error}</Alert>}

        {!error && (
          <Grid container spacing={3}>

            {/* LOADING */}
            {loading &&
              Array.from({ length: 3 }).map((_, i) => (
                <Grid size={{ xs: 12, md: 4 }} key={i}>
                  <Skeleton variant="rounded" height={300} />
                </Grid>
              ))}

            {/* CARDS */}
            {!loading &&
              data.map((item) => (
                <Grid size={{ xs: 12, md: 4 }} key={item.id}>
                  <Box
                    sx={{
                      borderRadius: 3,
                      overflow: 'hidden',
                      boxShadow: '0 4px 30px rgba(0,0,0,0.1)',
                      backgroundColor: '#fff',
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

                      {/* TAG */}
                      {item.tag && (
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 10,
                            left: 10,
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 2,
                            fontSize: 12,
                            color: '#fff',
                            background: item.tagColor || '#000',
                          }}
                        >
                          {item.tag}
                        </Box>
                      )}
                    </Box>

                    {/* CONTENT */}
                    <Box sx={{ p: 2 }}>
                      <Typography fontWeight={600} mb={1}>
                        {item.title}
                      </Typography>

                      <Typography variant="body2" mb={1}>
                        {item.popularCourses}
                      </Typography>

                      <Typography variant="body2" mb={2}>
                        {item.studentCities}
                      </Typography>

                      {/* BUTTONS */}
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <Button
                          variant="contained"
                          size="small"
                          href={item.countryGuideLink || '#'}
                        >
                          Country Guide
                        </Button>

                        <Button
                          variant="outlined"
                          size="small"
                          href={item.exploreMoreLink || '#'}
                        >
                          Explore More
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              ))}
          </Grid>
        )}
    </Box>
  );
}