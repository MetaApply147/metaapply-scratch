'use client';
import { Box, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useEffect, useMemo, useState, useRef } from 'react';

type CounterItem = {
  id: number;
  value: number;
  suffix: string;
  label: string;
  leadingZero?: boolean;
};

const counterData: CounterItem[] = [
  { id: 1, value: 40, suffix: '+', label: 'Study\nDestinations' },
  { id: 2, value: 75, suffix: 'K+', label: 'Student\nCommunity' },
  { id: 3, value: 5, suffix: 'K+', label: 'Enrolled\nStudents' },
  { id: 4, value: 7, suffix: '+', label: 'Study Abroad\nCentres', leadingZero: true },
];

function useCountUp(end: number, duration = 2000, start = 0, shouldStart = true) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!shouldStart) return;

    let startTimestamp: number | null = null;
    let animationFrameId = 0;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;

      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const current = Math.ceil(progress * (end - start) + start);

      setCount(current);

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);

    return () => window.cancelAnimationFrame(animationFrameId);
  }, [end, duration, start, shouldStart]);

  return count;
}

function useInView(ref: React.RefObject<HTMLDivElement | null>) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  return isVisible;
}

function CounterCard({
  value,
  suffix,
  label,
  leadingZero = false,
  showDivider,
  isVisible = false,
}: CounterItem & { showDivider: boolean; isVisible: boolean }) {
  const count = useCountUp(value, 2000, 0, isVisible);
  const lines = useMemo(() => label.split('\n'), [label]);

  const formattedCount = leadingZero
    ? String(count).padStart(2, '0')
    : String(count);

  return (
    <Box
      sx={{
        position: 'relative',
        textAlign: 'center',
        py: { xs: 3, md: 3.5 },
        px: { xs: 2, md: 2 },
      }}
    >
      {showDivider && (
        <Box
          sx={{
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            height: { xs: '80px', md: '125px' },
            width: 'auto',
          }}
        >
          <Box sx={{
            width: '2px',
            height: '100%',
            background: 'linear-gradient(180deg, #FFEADD 1.31%, #FF9CC5 33.87%, #FF3185 49.66%, #FFACCE 70.39%, #FFE4D2 99.99%)',
            borderRadius: '2px',
          }}/>
        </Box>
      )}

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 1, md: 3 },
        }}
      >
        <Typography
          variant="heading07"
          component="h3"
          sx={{
            lineHeight: '100%',
          }}
          aria-live="polite"
          aria-label={`${formattedCount}${suffix}`}
        >
          {formattedCount}
          {suffix}
        </Typography>

        <Typography
          variant="heading14"
          fontWeight={400}
          sx={{
            color: 'text.secondary',
            textAlign: 'center',
            lineHeight: "130%",
          }}
        >
          {lines.map((line, index) => (
            <Box component="span" key={`line-${index}`} sx={{ display: 'block' }}>
              {line}
            </Box>
          ))}
        </Typography>
      </Box>
    </Box>
  );
}

export default function CounterSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isVisible = useInView(containerRef);

  return (
    <Box
      ref={containerRef}
      component="section"
      sx={{
        py: { xs: 3, md: 2 },
        backgroundColor: 'common.white',
      }}
    >
      <Container maxWidth="xl">
        <Grid container>
          {counterData.map((item, index) => (
            <Grid size={{ xs: 6, md: 3 }} key={item.id}>
              <CounterCard
                {...item}
                showDivider={index !== counterData.length - 1}
                isVisible={isVisible}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}