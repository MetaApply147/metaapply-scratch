'use client';

import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';

type Props = {
  title: string;
  description: string;
  buttonText: string;
  imageUrl?: string;
};

export default function MetaApplyAmplifySection({
  title,
  description,
  buttonText,
  imageUrl,
}: Props) {
  return (
    <Box
      component="section"
      sx={{
        mx: { xs: 2, md: 4, lg: 5 },
        mb: { xs: 5, md: 8 },

        borderRadius: {
          xs: '30px',
          md: '0 50px 0 50px',
        },

        overflow: 'hidden',

        background:
          'linear-gradient(90deg, #00095C 0%, #2A004F 100%)',
      }}
    >
      <Box
        sx={{
          display: 'grid',

          gridTemplateColumns: {
            xs: '1fr',
            md: '58% 42%',
          },

          alignItems: 'stretch',
        }}
      >
        {/* LEFT CONTENT */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',

            px: {
              xs: 3,
              sm: 5,
              md: 8,
              lg: 10,
            },

            py: {
              xs: 5,
              md: 7,
            },
          }}
        >
          <Box maxWidth="560px">
            {/* HEADING */}
            <Typography
              variant="heading05"
              component="h2"
              sx={{
                color: '#fff',

                fontWeight: 500,

                lineHeight: 1.15,

                mb: 3,

                fontSize: {
                  xs: '32px',
                  md: '48px',
                },
              }}
            >
              {title}
            </Typography>

            {/* DESCRIPTION */}
            <Typography
              variant="body03"
              sx={{
                color: '#fff',

                opacity: 0.9,

                lineHeight: 1.7,

                mb: 5,

                maxWidth: '540px',
              }}
            >
              {description}
            </Typography>

            {/* BUTTON */}
            <Button
              variant="contained"
              size="large"
              sx={{
                background:
                  'linear-gradient(90deg, #FF5BAA 0%, #FF4D8D 100%)',

                borderRadius: '12px',

                px: 4,
                py: 1.5,

                textTransform: 'none',

                fontWeight: 600,

                boxShadow: 'none',

                '&:hover': {
                  background:
                    'linear-gradient(90deg, #FF5BAA 0%, #FF4D8D 100%)',

                  boxShadow: 'none',
                },
              }}
            >
              {buttonText}
            </Button>
          </Box>
        </Box>

        {/* RIGHT IMAGE */}
        {imageUrl && (
          <Box
            sx={{
              position: 'relative',

              minHeight: {
                xs: '320px',
                md: '454px',
              },
            }}
          >
            <Image
              src={imageUrl}
              alt={title}
              fill
              priority
              style={{
                objectFit: 'cover',
              }}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}