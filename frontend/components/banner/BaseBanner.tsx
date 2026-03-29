'use client';

import { Box, Container } from '@mui/material';

type Props = {
  left: React.ReactNode;
  right?: React.ReactNode;
  reverse?: boolean;
  backgroundImage?: string;
  minHeight?: number;
};

export default function BaseBanner({
  left,
  right,
  reverse = false,
  backgroundImage,
  minHeight
}: Props) {
  return (
    <Box component='section'
        sx={{
            backgroundImage: backgroundImage
            ? `url(${backgroundImage})`
            : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            py: 10,
            minHeight: minHeight
        }}
        >
        <Container>
            <Box
            sx={{
                display: 'flex',
                flexDirection: {
                xs: 'column',
                md: reverse ? 'row-reverse' : 'row',
                },
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 4,
            }}
            >
            <Box flex={1}>{left}</Box>
                {right && <Box flex={1}>{right}</Box>}
            </Box>
        </Container>
    </Box>
    
  );
}