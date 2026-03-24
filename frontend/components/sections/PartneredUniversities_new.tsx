'use client';

// ========================================
// PARTNERED UNIVERSITIES COMPONENT
// A beginner-friendly guide to this section
// ========================================

// ===== IMPORTS (Bringing in tools we need) =====
import { Box, Container, Typography, Alert, CircularProgress, Skeleton } from '@mui/material';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { getServices } from '@/services/httpServices';  // Our API helper

// ===== TYPES (Blueprint for our data) =====
/**
 * Type = Blueprint for what our data looks like
 * 
 * Example: A partner might look like this:
 * {
 *   id: 1,
 *   title: "Harvard University",
 *   order: 1,
 *   logo: {
 *     url: "/uploads/harvard_logo.png",
 *     alternativeText: "Harvard Logo"
 *   }
 * }
 */
type PartnerItem = {
  id: number;                    // Unique ID
  title?: string;                // University name (optional with ?)
  order?: number;                // Which position to show it
  logo?: {                        // Image data
    url?: string;                // Path to image
    alternativeText?: string | null;  // For accessibility
  } | null;
};

// ========================================
// MAIN COMPONENT
// ========================================
/**
 * What this component does:
 * ✅ Fetches universities from backend
 * ✅ Shows loading spinners
 * ✅ Handles errors
 * ✅ Displays in grid layout
 * ✅ Lets users retry
 * 
 * Think of it like a movie:
 * Scene 1: Loading (showing spinners)
 * Scene 2: Error (something went wrong)
 * Scene 3: Success (showing data)
 * Scene 4: Empty (no data found)
 */
export default function PartneredUniversities() {
  // ===== STATE (Component's memory) =====
  // These variables "remember" information across renders
  
  // What universities did we fetch?
  const [partners, setPartners] = useState<PartnerItem[]>([]);
  
  // Are we still fetching data?
  const [loading, setLoading] = useState(true);
  
  // Did something go wrong?
  const [error, setError] = useState<string | null>(null);
  
  // How many times did user click "Retry"?
  const [retryCount, setRetryCount] = useState(0);
  
  // Don't let user retry forever
  const maxRetries = 3;

  // ===== HELPER FUNCTIONS =====
  
  /**
   * normalizePartnerData
   * 
   * WHY? Backend sends confusing format, we make it clean
   * 
   * ANALOGY: Like organizing a messy desk
   * - Take items out of boxes
   * - Put in neat folders
   * - Throw away trash
   * - Arrange by priority
   */
  const normalizePartnerData = useCallback((data: any[]): PartnerItem[] => {
    // Is it actually an array? If not, return empty
    if (!Array.isArray(data)) return [];

    return data
      // STEP 1: Convert to our nice format
      .map((item: any) => ({
        id: item.id,
        title: item.title || item.attributes?.title || '',
        order: item.order || item.attributes?.order || 0,
        logo: item.logo || item.attributes?.logo || null,
      }))
      // STEP 2: Sort by order (so #1 appears first)
      .sort((a: PartnerItem, b: PartnerItem) => (a.order || 0) - (b.order || 0))
      // STEP 3: Remove broken entries (no ID or title)
      .filter((item: PartnerItem) => item.id && item.title);
  }, []);

  /**
   * fetchPartners
   * 
   * WHAT: Get universities from backend
   * HOW: 
   * 1. Tell user "loading..." (show spinner)
   * 2. Ask backend for data
   * 3. Clean up the data
   * 4. Save it
   * 5. Handle any problems
   */
  const fetchPartners = useCallback(async () => {
    try {
      // Step 1: Turn on loading, clear old error
      setLoading(true);
      setError(null);

      // Step 2: Ask backend for universities
      // Using our httpServices that talks to Azure backend
      const res = await getServices('/partnered-universities?populate=*');
      const data = res?.data?.data || [];  // Get data or empty array

      // Step 3 & 4: Clean the data and save it
      const normalized = normalizePartnerData(data);
      setPartners(normalized);

      // Step 5: Warn if no data
      if (normalized.length === 0) {
        console.warn('No partners found!');
      }
    } catch (fetchError) {
      // Oh no! Something went wrong
      const errorMsg = fetchError instanceof Error 
        ? fetchError.message 
        : 'Something went wrong';
      
      setError(errorMsg);
      console.error('Error fetching partners:', errorMsg);
    } finally {
      // No matter what, turn off loading spinner
      setLoading(false);
    }
  }, [normalizePartnerData]);

  /**
   * handleRetry
   * 
   * User clicked "Retry", so try again!
   * 
   * Strategy: Use exponential backoff
   * - Try 1: Wait 1 second (if server busy, give it time)
   * - Try 2: Wait 2 seconds (getting more patient)
   * - Try 3: Wait 4 seconds (very patient now)
   * 
   * ANALOGY: Like calling a busy friend
   * - Call 1: Wait a bit, try again
   * - Call 2: Wait longer, try again
   * - Call 3: Wait even longer, try again
   */
  const handleRetry = useCallback(() => {
    // Did user exceed retry limit?
    if (retryCount < maxRetries) {
      // Increase retry counter
      setRetryCount((prev) => prev + 1);
      
      // Wait, then try fetching again
      // Math.pow(2, retryCount) = 2^retryCount
      // retryCount=0: 2^0 = 1 second
      // retryCount=1: 2^1 = 2 seconds
      // retryCount=2: 2^2 = 4 seconds
      setTimeout(() => {
        fetchPartners();
      }, Math.pow(2, retryCount) * 1000);
    }
  }, [fetchPartners, retryCount]);

  // ===== EFFECTS (Run code at specific times) =====
  
  /**
   * useEffect with [] = Run once when component loads
   * 
   * ANALOGY: Like mounting a TV on wall
   * - You do it once when you get the TV
   * - You don't do it every day
   */
  useEffect(() => {
    fetchPartners();
  }, [fetchPartners]);

  // Our backend URL
  const API_BASE_URL = 'https://strapi-backend.azurewebsites.net';

  // ========================================
  // RENDER (What we show on screen)
  // ========================================
  return (
    <Box sx={{ py: { xs: 4, md: 5 }, backgroundColor: 'common.white' }}>
      <Container maxWidth="xl">
        
        {/* ===== HEADER BANNER ===== */}
        {/* The golden/tan box at the top with the title */}
        <Box sx={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 1.5,
          px: { xs: 2, md: 3 },
          py: 2.2,
          borderRadius: '16px',
          background: 'linear-gradient(90deg, #f4e4ad 0%, #efe7d4 100%)',
          mb: { xs: 5, md: 7 },
        }}>
          <Typography variant="heading07" sx={{ lineHeight: 1.15 }}>
            Our Exclusive{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              Partnered Universities
            </Box>
          </Typography>
          <CheckBoxIcon sx={{ height: '30px', width: '30px', color: '#22c55e', flexShrink: 0 }} />
        </Box>

        {/* ===== SCENE 1: LOADING STATE ===== */}
        {/* While fetching, show 6 skeleton cards as placeholders */}
        {loading && partners.length === 0 && (
          <Grid container rowSpacing={{ xs: 2, md: 3 }} columnSpacing={{ xs: 2, md: 3 }} justifyContent="center" sx={{ px: 2, py: 4 }}>
            {/* Create 6 skeletons (gray boxes that look like cards) */}
            {[...Array(6)].map((_, i) => (
              // @ts-ignore - Using legacy Grid API
              <Grid xs={6} sm={4} md={2} key={`skeleton-${i}`}>
                <Skeleton variant="rounded" width="100%" height={105} sx={{ borderRadius: '18px' }} />
              </Grid>
            ))}
          </Grid>
        )}

        {/* ===== SCENE 2: ERROR STATE ===== */}
        {/* Something went wrong - show error message and retry button */}
        {error && partners.length === 0 && (
          <Box sx={{ py: 4 }}>
            {/* Red alert box with error message */}
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
            
            {/* Show retry button only if tries remaining */}
            {retryCount < maxRetries && (
              <Box sx={{ display: 'flex', gap: 2 }}>
                {/* Show which attempt this is */}
                <Typography variant="body2" color="text.secondary">
                  Attempt {retryCount + 1} of {maxRetries}
                </Typography>
                
                {/* Clickable retry button */}
                <Typography onClick={handleRetry} sx={{
                  cursor: 'pointer',  // Shows it's clickable
                  color: 'primary.main',  // Blue color
                  fontWeight: 600,  // Bold
                  '&:hover': { textDecoration: 'underline' },  // Underline on hover
                }}>
                  Retry Now
                </Typography>
              </Box>
            )}
          </Box>
        )}

        {/* ===== SCENE 3: SUCCESS STATE ===== */}
        {/* We got data! Show all the universities */}
        {!error && partners.length > 0 && (
          <Grid container rowSpacing={{ xs: 2, md: 3 }} columnSpacing={{ xs: 2, md: 3 }} justifyContent="center" sx={{ px: 2, py: 4 }}>
            {/* Loop through each partner */}
            {partners.map((item) => {
              // Build the full image URL
              // Example: "https://strapi-backend.azurewebsites.net" + "/uploads/logo.png"
              const logoUrl = item.logo?.url
                ? `${API_BASE_URL}${item.logo.url}`
                : '';

              return (
                // @ts-ignore - Using legacy Grid API
                <Grid xs={6} sm={4} md={2} key={item.id}>
                  {/* Show university logo in a card */}
                  <Box sx={{
                    minHeight: { xs: 90, md: 105 },
                    backgroundColor: 'common.white',
                    borderRadius: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(0,0,0,0.05)',
                    // Hover effect: lift card up
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 28px rgba(0,0,0,0.08)',
                    },
                  }}>
                    {/* Do we have an image? */}
                    {logoUrl ? (
                      <Image
                        src={logoUrl}
                        alt={item.logo?.alternativeText || item.title || 'partner logo'}
                        width={180}
                        height={80}
                        style={{ width: '100%', height: 'auto' }}
                      />
                    ) : (
                      // No image? Show university name instead
                      <Typography>{item.title}</Typography>
                    )}
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        )}

        {/* ===== SCENE 4: EMPTY STATE ===== */}
        {/* Data loaded, no error, but no partners found */}
        {!loading && !error && partners.length === 0 && (
          <Box sx={{ py: 4, textAlign: 'center' }}>
            <Typography color="text.secondary">
              No partnered universities found.
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}

// ========================================
// KEY CONCEPTS FOR BEGINNERS
// ========================================
// 
// useState: Remember data between renders
// useEffect: Run code at specific times
// useCallback: Prevent unnecessary function recreations
// map(): Loop through array
// filter(): Remove items that don't match
// sort(): Put in order
// sx prop: Inline styling for MUI components
//
// 4 Scenes: Loading → Error → Success → Empty
// Each scene shows different UI based on state
//
// Exponential Backoff: Smart retry strategy
// Try 1 (wait 1sec) → Try 2 (wait 2sec) → Try 3 (wait 4sec)
//
// Error Boundary: Catch errors before they break app
// 