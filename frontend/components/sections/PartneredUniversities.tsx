'use client';

import { Box, Container, Typography, Skeleton, Alert } from '@mui/material';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { useEffect, useState, useCallback } from 'react';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { getServices } from '@/services/httpServices';

/* ================= TYPES ================= */

type StrapiLogo = {
  url?: string;
  alternativeText?: string | null;
  name?: string;
};

type StrapiPartner = {
  id: number;
  title?: string;
  order?: number;
  logo?: StrapiLogo;
};

type PartnerItem = {
  id: number;
  title: string;
  logoUrl: string;
  alt: string;
};

type ApiResponse<T> = {
  isSuccess: boolean;
  statusCode?: number;
  data?: T;
  message?: string | null;
};

/* ================= CONSTANTS ================= */

const LOAD_TIMEOUT = 10000; // 10 seconds
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

/* ================= HELPER FUNCTIONS ================= */

/**
 * Sanitizes alt text to prevent XSS and ensure accessibility
 */
const sanitizeAltText = (text: string | undefined | null): string => {
  if (!text) return 'partner logo';
  return text
    .slice(0, 120)
    .replace(/[<>]/g, '')
    .toLowerCase()
    .trim();
};

/**
 * Constructs secure image URL with validation
 */
const buildImageUrl = (logoUrl: string | undefined): string | null => {
  if (!logoUrl || typeof logoUrl !== 'string') return null;

  if (logoUrl.startsWith('http://') || logoUrl.startsWith('https://')) {
    return logoUrl;
  }

  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
  if (!baseUrl) {
    console.error('NEXT_PUBLIC_STRAPI_URL environment variable is not set');
    return null;
  }

  return `${baseUrl}${logoUrl}`;
};

/**
 * Validates and transforms API response
 */
const mapPartnerData = (item: unknown): PartnerItem | null => {
  if (!item || typeof item !== 'object') return null;

  const partner = item as Record<string, unknown>;

  const id = typeof partner.id === 'number' ? partner.id : null;
  const title = typeof partner.title === 'string' ? partner.title.slice(0, 200) : '';

  if (id === null) return null;

  const logo = partner.logo;
  const logoUrl = buildImageUrl(
    typeof logo === 'object' && logo && 'url' in logo
      ? String(logo.url)
      : undefined
  );

  const alt = sanitizeAltText(
    typeof logo === 'object' && logo && 'alternativeText' in logo
      ? String(logo.alternativeText)
      : title
  );

  return {
    id,
    title,
    logoUrl: logoUrl || '',
    alt,
  };
};

/* ================= COMPONENT ================= */

export default function PartneredUniversities() {
  const [partners, setPartners] = useState<PartnerItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Fetches partners with retry logic
   */
  const loadPartners = useCallback(async (retryCount = 0) => {
    try {
      setLoading(true);
      setError(null);

      const res = (await Promise.race([
        getServices('/partnered-universities', {
          populate: '*',
          sort: ['order:asc'],
          pagination: { pageSize: 100 },
        }),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Request timeout')), LOAD_TIMEOUT)
        ),
      ])) as ApiResponse<{ data: unknown[] }>;

      if (!res.isSuccess) {
        throw new Error(res.message || 'Failed to fetch partners');
      }

      if (!Array.isArray(res.data?.data)) {
        throw new Error('Invalid data format received from API');
      }

      const mapped = res.data.data
        .map(mapPartnerData)
        .filter((item): item is PartnerItem => item !== null);

      if (mapped.length === 0 && res.data.data.length > 0) {
        console.warn('No valid partner data could be extracted');
      }

      setPartners(mapped);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';

      if (retryCount < MAX_RETRIES) {
        console.warn(`Retry ${retryCount + 1}/${MAX_RETRIES} after ${RETRY_DELAY}ms`);
        setTimeout(() => loadPartners(retryCount + 1), RETRY_DELAY);
        return;
      }

      console.error('Failed to load partners:', errorMessage);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPartners();
  }, [loadPartners]);

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 4, md: 5 },
        backgroundColor: 'common.white',
      }}
    >
      <Container maxWidth="xl">
        {/* HEADER */}
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            px: { xs: 2, md: 3 },
            py: 2.2,
            borderRadius: '16px',
            background: 'linear-gradient(90deg, #f4e4ad 0%, #efe7d4 100%)',
            mb: { xs: 5, md: 7 },
          }}
        >
          <Typography variant="heading07" fontWeight={600} sx={{ lineHeight: 1.15, }}>
            Our Exclusive{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              Partnered Universities
            </Box>
            <CheckBoxIcon
              sx={{
                ml: 1,
                height: 30,
                width: 30,
                color: '#22c55e',
                verticalAlign: 'middle',
              }}
              aria-hidden="true"
            />
          </Typography>
        </Box>

        {/* ERROR STATE */}
        {error && (
          <Alert severity="error" sx={{ mb: 3 }} role="alert">
            {error}
          </Alert>
        )}

        {/* GRID */}
        {!error && (
          <Grid
            container
            rowSpacing={{ xs: 2, md: 3 }}
            columnSpacing={{ xs: 2, md: 3 }}
            justifyContent="center"
            sx={{ px: 2, py: 4 }}
          >
            {/* LOADING */}
            {loading &&
              Array.from({ length: 6 }).map((_, i) => (
                <Grid size={{ xs: 6, sm: 4, md: 2.4 }} key={`skeleton-${i}`}>
                  <Skeleton
                    variant="rounded"
                    height={100}
                    sx={{ borderRadius: '18px' }}
                  />
                </Grid>
              ))}

            {/* EMPTY STATE */}
            {!loading && partners.length === 0 && (
              <Typography textAlign="center" width="100%">
                No partners available at the moment.
              </Typography>
            )}

            {/* DATA */}
            {!loading &&
              partners.map((item) => (
                <Grid size={{ xs: 6, sm: 4, md: 2.4 }} key={`partner-${item.id}`}>
                  <Box
                    component="article"
                    sx={{
                      minHeight: { xs: 90, md: 105 },
                      backgroundColor: 'common.white',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease-in-out',
                      boxShadow: '0px 4px 30px 0px #CCCCCC4D',
                    }}
                  >
                    {item.logoUrl ? (
                      <Image
                        src={item.logoUrl}
                        alt={item.alt}
                        width={180}
                        height={80}
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 180px"
                        priority={false}
                        loading="lazy"
                        quality={85}
                        style={{
                          width: '100%',
                          height: 'auto',
                          maxHeight: '100%',
                          objectFit: 'contain',
                        }}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          console.warn(`Failed to load image for partner: ${item.title}`);
                        }}
                      />
                    ) : (
                      <Typography variant="body2" sx={{ px: 1, textAlign: 'center' }}>
                        {item.title}
                      </Typography>
                    )}
                  </Box>
                </Grid>
              ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}