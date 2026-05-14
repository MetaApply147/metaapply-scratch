'use client';

import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';

type Props = {
  title?: string;
  features?: string[];
  buttonText?: string;
  buttonUrl?: string;
  imageUrl?: string;
}

const defaultFeatures = [
  "Shortlist the right universities for your profile",
  "Build a personalised study abroad roadmap",
  "Unlock scholarships and financial aid options",
];

export default function GlobalJourneyCTA({
  title = "Ready to Start your Global Journey?",
  features = defaultFeatures,
  buttonText = "Talk to Our Experts",
  imageUrl = "/about-us/global-journey-right.svg",
}: Props) {
  return (
    <Box
      component="section"
      sx={{
        mx: { xs: 2, md: 4, lg: 5 },
        mb: { xs: 4, md: 6, lg: 8 },

        borderRadius: {
          xs: '24px',
          md: '0 40px 0 40px',
          lg: '0 50px 0 50px',
          xl: '0 80px 0 80px',
        },

        overflow: 'hidden',
        position: 'relative',

        boxShadow: '20px 25px 75px 0px #ABABAB33',
      }}
    >
      {/* MAIN GRID */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,

          display: 'grid',


          gridTemplateColumns: {
            xs: '1fr',
            md: '58% 42%',
          },

          alignItems: 'center',
        }}
      >
        {/* LEFT CONTENT */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'linear-gradient(262.64deg, #5D0031 -2.68%, #000052 31.59%)',

            py: {
              xs: 5,
              sm: 6,
              md: 7,
            },

            px: {
              xs: 3,
              sm: 5,
              md: 6,
              lg: 8,
            },
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: '620px',

              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'start',

              color: 'common.white',
            }}
          >
            {/* HEADING */}
            <Typography
             variant='heading07'
              component="h2"
              fontWeight={500}
              mb={4}
            >
              {title}
            </Typography>

            {/* FEATURES */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',

                gap: {
                  xs: '14px',
                  md: '16px',
                },

                mb: {
                  xs: 4,
                  md: 5,
                },
              }}
            >
              {features.map((item) => (
                <Box
                  key={item}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      width: 20,
                      height: 20,
                    }}
                  >
                    <Image
                      src="/about-us/tick.svg"
                      alt="tick"
                      fill
                    />
                  </Box>

                  <Typography
                    variant='body03'
                    component='p'
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* BUTTON */}
            <Button
              variant="contained"
              size='large'
            >
              {buttonText}
            </Button>
          </Box>
        </Box>

        {/* RIGHT IMAGE */}
        <Box
          sx={{
            position: 'relative',

            minHeight: {
              xs: '320px',
              sm: '400px',
              md: '454px',
            },

            height: '100%',
          }}
        >
          <Image
            src={imageUrl}
            alt="Global Journey"
            fill
            priority
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}