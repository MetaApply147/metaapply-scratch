'use client';

import { Box, Container, Typography, Skeleton, Alert } from '@mui/material';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getServices } from '@/services/httpServices';

/* ================= TYPES ================= */

type Partner = {
  id: number;
  logoUrl: string;
  alt: string;
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

export default function PartneredUniversities() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        setLoading(true);

        const res = await getServices('/partnered-universities', {
          populate: 'logo',
          sort: ['order:asc'],
          pagination: { pageSize: 100 },
        });

        if (!res.isSuccess) {
          const msg =
            typeof res.message === 'string'
              ? res.message
              : res.message?.message || 'Failed to fetch';

          throw new Error(msg);
        }

        const data = res.data?.data || [];

        const mapped = data
          .map((item: any) => {
            const logoUrl = getImageUrl(item?.logo?.url);

            if (!logoUrl) return null;

            return {
              id: item.id,
              logoUrl,
              alt: item?.logo?.alternativeText?.trim() || 'Partner university logo'
            };
          })
          .filter(Boolean) as Partner[];

        setPartners(mapped);
      } catch (err: any) {
        let message = 'Something went wrong';
        if (typeof err === 'string') {
          message = err;
        } else if (err?.message && typeof err.message === 'string') {
          message = err.message;
        } else if (err?.message?.message) {
          message = err.message.message; 
        }

        setError(message);
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  return (
    <Box sx={{ pt: { xs: 4, md: 5 }, pb: { xs: 4, md: 11.25 }, backgroundColor: 'common.white' }} component="section">
      <Container maxWidth="xl">

        {/* HEADER */}
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            pl: 3,
            pr: 5,
            py: 1.5,
            borderRadius: '16px',
            background: 'linear-gradient(94.85deg, #FEE9A4 0.85%, #FAFAFA 112.11%)',
            mb: 6,
          }}
        >
          <Typography variant='heading07' component="h2" fontWeight={600}>
            Our Exclusive{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              Partnered Universities
            </Box>
          </Typography>
        </Box>

        {/* ERROR */}
        {error && <Alert severity="error">{error}</Alert>}

        {/* GRID */}
        {!error && (
          <Grid container spacing={3} justifyContent="center">

            {/* LOADER */}
            {loading &&
              Array.from({ length: 6 }).map((_, i) => (
                <Grid size={{ xs: 6, sm: 4, md: 2.4 }} key={i}>
                  <Skeleton variant="rounded" height={100} />
                </Grid>
              ))}

            {/* EMPTY */}
            {!loading && partners.length === 0 && (
              <Typography>No partners available</Typography>
            )}

            {/* LOGOS */}
            {!loading &&
              partners.map((item) => (
                <Grid size={{ xs: 6, sm: 4, md: 2.4 }} key={item.id}>
                  <Box
                    sx={{
                      minHeight: 100,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '10px',
                      boxShadow: '0px 4px 30px #CCCCCC4D',
                    }}
                  >
                    <Image
                      src={item.logoUrl}
                      alt={item.alt}
                      width={180}
                      height={80}
                      sizes="(max-width: 768px) 50vw, 180px"
                      style={{ objectFit: 'contain' }}
                    />
                  </Box>
                </Grid>
              ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}