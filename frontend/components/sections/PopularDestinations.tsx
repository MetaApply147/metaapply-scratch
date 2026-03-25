'use client';

import {Box, Button, Card, CardActions, CardContent, CardMedia, Container, Typography, Skeleton, Alert,} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CheckIcon from '@mui/icons-material/Check';
import DownloadIcon from '@mui/icons-material/Download';
import { getServices } from '@/services/httpServices'; 
import 'swiper/css';
import 'swiper/css/navigation';

/* ================= CONSTANTS ================= */
const LOAD_TIMEOUT = 10000;
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000;

/* ================= TYPES ================= */
type StrapiImage = {
  url?: string;
  alternativeText?: string | null;
};

type DestinationItem = {
  id: number;
  title: string;
  tag: string;
  tagColor: string;
  popularCourses: string;
  studentCities: string;
  countryGuideLink: string;
  exploreMoreLink: string;
  order: number;
  imageUrl: string;
  imageAlt: string;
};

type ApiResponse<T> = {
  isSuccess: boolean;
  statusCode?: number;
  data?: T;
  message?: string | null;
};

/* ================= HELPER FUNCTIONS ================= */

/**
 * Sanitizes and validates URL
 */
const buildImageUrl = (imageUrl: string | undefined): string => {
  if (!imageUrl || typeof imageUrl !== 'string') return '';

  if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
    return imageUrl;
  }

  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
  if (!baseUrl) {
    console.error('NEXT_PUBLIC_STRAPI_URL environment variable is not set');
    return '';
  }

  return `${baseUrl}${imageUrl}`;
};

/**
 * Sanitizes alt text to prevent XSS
 */
const sanitizeAltText = (text: string | undefined | null): string => {
  if (!text) return 'destination image';
  return text
    .slice(0, 120)
    .replace(/[<>]/g, '')
    .toLowerCase()
    .trim();
};

/**
 * Validates internal URL path
 */
const isValidUrl = (url: string): boolean => {
  if (!url) return false;
  return url.startsWith('/') || url === '#';
};

/**
 * Validates and transforms destination data
 */
const mapDestinationData = (item: unknown): DestinationItem | null => {
  if (!item || typeof item !== 'object') return null;

  const dest = item as Record<string, unknown>;

  const id = typeof dest.id === 'number' ? dest.id : null;
  const title = typeof dest.title === 'string' ? dest.title.slice(0, 200) : 'Destination';
  const tag = typeof dest.tag === 'string' ? dest.tag.slice(0, 50) : '';
  const tagColor = typeof dest.tagColor === 'string' ? dest.tagColor : '#FF3185';
  const order = typeof dest.order === 'number' ? dest.order : 0;

  if (id === null) return null;

  const image = dest.image;
  const imageUrl = buildImageUrl(
    typeof image === 'object' && image && 'url' in image ? String(image.url) : undefined
  );

  const imageAlt = sanitizeAltText(
    typeof image === 'object' && image && 'alternativeText' in image
      ? String(image.alternativeText)
      : title
  );

  const popularCourses = typeof dest.popularCourses === 'string' ? dest.popularCourses.slice(0, 200) : '';
  const studentCities = typeof dest.studentCities === 'string' ? dest.studentCities.slice(0, 200) : '';
  const countryGuideLink = typeof dest.countryGuideLink === 'string' && isValidUrl(dest.countryGuideLink) ? dest.countryGuideLink : '#';
  const exploreMoreLink = typeof dest.exploreMoreLink === 'string' && isValidUrl(dest.exploreMoreLink) ? dest.exploreMoreLink : '#';

  return {
    id,
    title,
    tag,
    tagColor,
    order,
    imageUrl,
    imageAlt,
    popularCourses,
    studentCities,
    countryGuideLink,
    exploreMoreLink,
  };
};

export default function PopularDestinations() {
  const [destinations, setDestinations] = useState<DestinationItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  /**
   * Fetches destinations with retry logic
   */
  const fetchDestinations = useCallback(async (retryCount = 0) => {
    try {
      setLoading(true);
      setError(null);

      const res = (await Promise.race([
        getServices('/popular-destinations', {
          populate: '*',
          sort: ['order:asc'],
          pagination: { pageSize: 100 },
        }),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Request timeout')), LOAD_TIMEOUT)
        ),
      ])) as ApiResponse<{ data: unknown[] }>;

      if (!res.isSuccess) {
        throw new Error(res.message || 'Failed to fetch destinations');
      }

      if (!Array.isArray(res.data?.data)) {
        throw new Error('Invalid data format received from API');
      }

      const mapped = res.data.data
        .map(mapDestinationData)
        .filter((item): item is DestinationItem => item !== null)
        .sort((a, b) => a.order - b.order);

      if (mapped.length === 0 && res.data.data.length > 0) {
        console.warn('No valid destination data could be extracted');
      }

      setDestinations(mapped);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';

      if (retryCount < MAX_RETRIES) {
        console.warn(`Retry ${retryCount + 1}/${MAX_RETRIES} after ${RETRY_DELAY}ms`);
        setTimeout(() => fetchDestinations(retryCount + 1), RETRY_DELAY);
        return;
      }

      console.error('Failed to load destinations:', errorMessage);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDestinations();
  }, [fetchDestinations]);

  return (
    <Box component="section" sx={{ py: { xs: 4, md: 6 }, backgroundColor: 'common.white' }}>
      <Container maxWidth="xl">
        
        {/* HEADER */}
        <Box
          sx={{
            mb: { xs: 3, md: 4 },
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="heading06">
            Popular{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              Destinations
            </Box>
          </Typography>

          {/* NAV BUTTONS */}
          <Box sx={{ display: 'flex', gap: 1, flexShrink: 0 }}>
            <Box
              component="button"
              onClick={() => swiperRef.current?.slidePrev()}
              sx={navBtn}
              aria-label="Previous destination"
            >
              <ArrowBackIosNewIcon sx={{ fontSize: 16 }} aria-hidden="true" />
            </Box>

            <Box
              component="button"
              onClick={() => swiperRef.current?.slideNext()}
              sx={navBtnActive}
              aria-label="Next destination"
            >
              <ArrowForwardIosIcon sx={{ fontSize: 16 }} aria-hidden="true" />
            </Box>
          </Box>
        </Box>

        {/* ERROR STATE */}
        {error && (
          <Alert severity="error" sx={{ mb: 3 }} role="alert">
            {error}
          </Alert>
        )}

        {/* LOADING STATE */}
        {loading && !error && (
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 3 }}>
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={`skeleton-${i}`} variant="rounded" height={320} />
            ))}
          </Box>
        )}

        {/* EMPTY STATE */}
        {!loading && !error && destinations.length === 0 && (
          <Box textAlign="center">
            <Typography>No destinations available at the moment.</Typography>
          </Box>
        )}

        {/* SWIPER */}
        {!loading && !error && destinations.length > 0 && (
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              600: { slidesPerView: 2 },
              900: { slidesPerView: 3 },
            }}
          >
            {destinations.map((item) => (
              <SwiperSlide key={`destination-${item.id}`}>
                <Box sx={{ pt: 0.5, pb: 2.5, px: 0.5 }}>
                  <Card sx={cardStyle}>
                    
                    {/* IMAGE */}
                    <Box sx={{ position: 'relative' }}>
                      {item.imageUrl ? (
                        <Box sx={{ height: 210, position: 'relative', overflow: 'hidden' }}>
                          <Image
                            src={item.imageUrl}
                            alt={item.imageAlt}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
                            priority={false}
                            loading="lazy"
                            quality={85}
                            style={{ objectFit: 'cover' }}
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              console.warn(`Failed to load image for destination: ${item.title}`);
                            }}
                          />
                        </Box>
                      ) : (
                        <CardMedia sx={{ height: 210, bgcolor: '#f0f0f0' }} />
                      )}

                      {item.tag && (
                        <Box sx={tagStyle(item.tagColor)} role="status" aria-label={`Tag: ${item.tag}`}>
                          <Typography variant="body06" color="white">
                            {item.tag}
                          </Typography>
                        </Box>
                      )}
                    </Box>

                    {/* CONTENT */}
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="heading12" sx={{ mb: 2 }}>
                        {item.title}
                      </Typography>

                      {item.popularCourses && (
                        <InfoRow text={`Popular Courses: ${item.popularCourses}`} />
                      )}
                      {item.studentCities && (
                        <InfoRow text={`Student Friendly Cities: ${item.studentCities}`} />
                      )}
                    </CardContent>

                    {/* BUTTONS */}
                    <CardActions sx={{ px: 2.5, pb: 2.5, gap: 1, flexWrap: 'wrap' }}>
                      <Button
                        component={Link}
                        href={item.countryGuideLink}
                        variant="contained"
                        startIcon={<DownloadIcon />}
                        sx={primaryBtn}
                        size="small"
                      >
                        Country Guide
                      </Button>

                      <Button
                        component={Link}
                        href={item.exploreMoreLink}
                        variant="outlined"
                        sx={secondaryBtn}
                        size="small"
                      >
                        Explore More
                      </Button>
                    </CardActions>
                  </Card>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Container>
    </Box>
  );
}

/* ✅ SMALL REUSABLE COMPONENT */
const InfoRow = ({ text }: { text: string }) => (
  <Box sx={{ display: 'flex', gap: 1, mb: 1.5, alignItems: 'flex-start' }}>
    <CheckIcon sx={{ fontSize: 18, flexShrink: 0, mt: 0.3 }} aria-hidden="true" />
    <Typography variant="body06">{text}</Typography>
  </Box>
);

/* ✅ STYLES */
const cardStyle = {
  height: '100%',
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid #e5e7eb',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    boxShadow: '0 12px 28px rgba(0,0,0,0.12)',
    transform: 'translateY(-4px)',
  },
};

const navBtn = {
  width: 36,
  height: 36,
  border: '1px solid #D0D0D0',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  background: 'transparent',
  transition: 'all 0.2s ease',
  '&:hover': {
    borderColor: '#999',
  },
  '&:active': {
    transform: 'scale(0.95)',
  },
};

const navBtnActive = {
  ...navBtn,
  borderColor: 'primary.main',
  color: 'primary.main',
};

const tagStyle = (color?: string) => ({
  position: 'absolute',
  top: 10,
  left: 10,
  px: 1.2,
  py: 0.3,
  borderRadius: '8px',
  background: color || '#FF3185',
});

const primaryBtn = {
  background:
    'linear-gradient(270.04deg, #FF3185 33.28%, #FF7BB0 99.98%)',
};

const secondaryBtn = {
  borderColor: 'primary.main',
  color: 'primary.main',
};