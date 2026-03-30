'use client';

import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';

type Props = {
  logo: string;
  showLogo?: boolean; 
  title: string;
  highlight?: string;
  description?: string;
  ctaText?: string;
  ctaUrl?: string;
  ctaTarget?: '_self' | '_blank';
  textColor?: 'light' | 'dark';
  size?: 'default' | 'medium';
};

export default function BannerContent({
  logo,
  showLogo,
  title,
  highlight,
  description,
  ctaText,
  ctaUrl,
  ctaTarget = '_self',
  textColor = 'dark',
  size = 'default',
}: Props) {
  const color = textColor === 'light' ? 'common.white' : 'navyBlue.700';

  const sizeStyles = {
    default: {
      lineHeight: '88px',
    },
    medium: {
      fontSize: '48px',
      lineHeight: '64px',
    },
  };
  return (
    <Box>
      {showLogo && logo && (
        <Box mb={0.5}>
          <Image
            src={logo}
            alt="logo"
            width={120}
            height={65}
            style={{ 
              objectFit: 'contain',
              height: '100%',
              width: 'auto' 
            }}
          />
        </Box>
      )}
      <Typography
        variant="heading03"
        component="h1"
        sx={{
          color,
          ...sizeStyles[size],
        }}
      >
        {title}{' '}
        {highlight && (
          <span
            style={{
              background:
                'linear-gradient(97.87deg, #EF3EFF -4.59%, #C83535 101.21%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'block',
            }}
          >
            {highlight}
          </span>
        )}
      </Typography>

      {description && (
        <Typography
          mt={1}
          mb={5}
          color={textColor === 'light' ? 'common.white' : 'text.secondary'}
          variant="heading12"
          component="p"
          fontWeight={400}
        >
          {description}
        </Typography>
      )}

      {ctaText && ctaUrl && (
        <Button
          href={ctaUrl}
          target={ctaTarget}
          variant="contained"
          size='medium'
          sx={{
            padding: '17px 38px',
          }}
        >
          {ctaText}
        </Button>
      )}
    </Box>
  );
}