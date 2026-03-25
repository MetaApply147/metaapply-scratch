'use client';

import { Box, Container, Typography, Skeleton, Alert } from '@mui/material';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { useEffect, useState, useCallback, useRef } from 'react';
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
const MAX_PARTNERS = 100;

/**
 * Allowlist of trusted image domains.
 * Add your CDN / Strapi hostname(s) here.
 * Example: ['cms.yourdomain.com', 'cdn.yourdomain.com']
 */
const ALLOWED_IMAGE_DOMAINS: string[] = (
  process.env.NEXT_PUBLIC_ALLOWED_IMAGE_DOMAINS ?? ''
)
  .split(',')
  .map((d) => d.trim())
  .filter(Boolean);

/* ================= HELPER FUNCTIONS ================= */

/**
 * Sanitizes alt text to prevent XSS and ensure accessibility.
 * Strips HTML-injectable and attribute-breaking characters.
 */
const sanitizeAltText = (text: string | undefined | null): string => {
  if (!text) return 'partner logo';
  return text
    .slice(0, 120)
    .replace(/[<>"'&]/g, '')
    .trim() || 'partner logo';
};

/**
 * Validates and constructs a secure image URL.
 * - Rejects non-string / empty values.
 * - Allows absolute URLs only if the hostname is in ALLOWED_IMAGE_DOMAINS.
 * - Constructs absolute URL from relative paths using NEXT_PUBLIC_STRAPI_URL.
 */
const buildImageUrl = (logoUrl: string | undefined): string | null => {
  if (!logoUrl || typeof logoUrl !== 'string') return null;

  try {
    // Absolute URL path — validate domain against allowlist
    if (logoUrl.startsWith('http://') || logoUrl.startsWith('https://')) {
      if (ALLOWED_IMAGE_DOMAINS.length > 0) {
        const { hostname } = new URL(logoUrl);
        const trusted = ALLOWED_IMAGE_DOMAINS.some((domain) =>
          hostname === domain || hostname.endsWith(`.${domain}`)
        );
        if (!trusted) {
          if (process.env.NODE_ENV === 'development') {
            console.warn(`Blocked image from untrusted domain: ${hostname}`);
          }
          return null;
        }
      }
      return logoUrl;
    }

    // Relative path — prepend Strapi base URL
    const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
    if (!baseUrl) {
      if (process.env.NODE_ENV === 'development') {
        console.error('NEXT_PUBLIC_STRAPI_URL environment variable is not set');
      }
      return null;
    }

    return `${baseUrl.replace(/\/$/, '')}/${logoUrl.replace(/^\//, '')}`;
  } catch {
    return null;
  }
};

/**
 * Validates and transforms a raw API item into a typed PartnerItem.
 * Returns null if the item is malformed.
 */
const mapPartnerData = (item: unknown): PartnerItem | null => {
  if (!item || typeof item !== 'object') return null;

  const partner = item as Record<string, unknown>;
  const id = typeof partner.id === 'number' ? partner.id : null;
  if (id === null) return null;

  const title =
    typeof partner.title === 'string' ? partner.title.slice(0, 200) : '';

  const logo =
    partner.logo && typeof partner.logo === 'object'
      ? (partner.logo as Record<string, unknown>)
      : null;

  const logoUrl = buildImageUrl(
    logo && typeof logo.url === 'string' ? logo.url : undefined
  );

  const altSource =
    logo && typeof logo.alternativeText === 'string'
      ? logo.alternativeText
      : title;

  return {
    id,
    title,
    logoUrl: logoUrl ?? '',
    alt: sanitizeAltText(altSource),
  };
};

/* ================= COMPONENT ================= */

export default function PartneredUniversities() {
  const [partners, setPartners] = useState<PartnerItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Tracks whether the component is still mounted to prevent state updates after unmount
  const isMountedRef = useRef(true);
  // Holds the timeout ID for retries so we can clear it on unmount
  const retryTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /**
   * Fetches partners with retry logic, unmount safety, and timeout via AbortController.
   */
  const loadPartners = useCallback(async (retryCount = 0) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), LOAD_TIMEOUT);

    try {
      if (isMountedRef.current) {
        setLoading(true);
        setError(null);
      }

      // getServices only accepts 2 args — use Promise.race for timeout,
      // and manually check the AbortController signal afterward.
      const fetchPromise = getServices('/partnered-universities', {
        populate: '*',
        sort: ['order:asc'],
        pagination: { pageSize: MAX_PARTNERS },
      });

      const abortPromise = new Promise<never>((_, reject) => {
        controller.signal.addEventListener('abort', () =>
          reject(new DOMException('Request timed out', 'AbortError'))
        );
      });

      const res = (await Promise.race([
        fetchPromise,
        abortPromise,
      ])) as ApiResponse<{ data: unknown[] }>;

      clearTimeout(timeoutId);

      if (!isMountedRef.current) return;

      if (!res.isSuccess) {
        setError(res.message ?? 'Failed to fetch partners');
        setLoading(false);
        return;
      }

      if (!Array.isArray(res.data?.data)) {
        throw new Error('Invalid data format received from API');
      }

      const mapped = res.data.data
        .map(mapPartnerData)
        .filter((item): item is PartnerItem => item !== null);

      if (
        process.env.NODE_ENV === 'development' &&
        mapped.length === 0 &&
        res.data.data.length > 0
      ) {
        console.warn('No valid partner data could be extracted from API response');
      }

      if (isMountedRef.current) {
        setPartners(mapped);
        setLoading(false);
      }
    } catch (err) {
      clearTimeout(timeoutId);

      if (!isMountedRef.current) return;

      const errorMessage =
        err instanceof Error ? err.message : 'Unknown error occurred';

      // Don't retry on user-initiated aborts
      const isAbort =
        err instanceof DOMException && err.name === 'AbortError';

      if (!isAbort && retryCount < MAX_RETRIES) {
        if (process.env.NODE_ENV === 'development') {
          console.warn(
            `Retry ${retryCount + 1}/${MAX_RETRIES} in ${RETRY_DELAY}ms`
          );
        }
        retryTimerRef.current = setTimeout(
          () => loadPartners(retryCount + 1),
          RETRY_DELAY
        );
        // Keep loading=true while retrying — don't fall through to setLoading(false)
        return;
      }

      if (process.env.NODE_ENV === 'development') {
        console.error('Failed to load partners:', errorMessage);
      }

      setError(isAbort ? 'Request timed out. Please try again.' : errorMessage);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    isMountedRef.current = true;
    loadPartners();

    return () => {
      // Prevent any in-flight state updates after unmount
      isMountedRef.current = false;
      // Cancel any pending retry timer
      if (retryTimerRef.current) {
        clearTimeout(retryTimerRef.current);
      }
    };
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
          <Typography
            variant="heading07"
            fontWeight={600}
            sx={{ lineHeight: 1.15 }}
          >
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
            {/* LOADING SKELETONS */}
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

            {/* PARTNER CARDS */}
            {!loading &&
              partners.map((item) => (
                <Grid
                  size={{ xs: 6, sm: 4, md: 2.4 }}
                  key={`partner-${item.id}`}
                >
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
                          if (process.env.NODE_ENV === 'development') {
                            console.warn(
                              `Failed to load image for partner: ${item.title}`
                            );
                          }
                        }}
                      />
                    ) : (
                      <Typography
                        variant="body2"
                        sx={{ px: 1, textAlign: 'center' }}
                      >
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