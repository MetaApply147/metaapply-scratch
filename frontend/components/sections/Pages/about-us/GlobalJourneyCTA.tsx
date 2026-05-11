'use client';

import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';

const features = [
  'Shortlist the right universities for your profile',
  'Build a personalised study abroad roadmap',
  'Unlock scholarships and financial aid options',
];

export default function GlobalJourneyCTA() {
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
      {/* BACKGROUND GRADIENT */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,

          background:
            'linear-gradient(262.64deg, #5D0031 -2.68%, #000052 31.59%)',
        }}
      />

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

              color: 'common.white',
            }}
          >
            {/* HEADING */}
            <Typography
              component="h2"
              sx={{
                fontSize: {
                  xs: '28px',
                  sm: '34px',
                  md: '40px',
                },

                fontWeight: 500,
                lineHeight: '130%',

                mb: {
                  xs: 3,
                  md: 4,
                },

                fontFamily: 'Plus Jakarta Sans',
              }}
            >
              Ready to Start your Global Journey?
            </Typography>

            {/* FEATURES */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',

                gap: {
                  xs: '14px',
                  md: '18px',
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
                      minWidth: 20,
                    }}
                  >
                    <Image
                      src="/about-us/tick.svg"
                      alt="tick"
                      fill
                    />
                  </Box>

                  <Typography
                    sx={{
                      fontSize: {
                        xs: '15px',
                        sm: '18px',
                        md: '20px',
                      },

                      fontWeight: 400,
                      lineHeight: '140%',

                      color: 'common.white',
                      fontFamily: 'Open Sans',
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* BUTTON */}
            <Button
              variant="contained"
              sx={{
                width: 'fit-content',

                minWidth: {
                  xs: '210px',
                  sm: '255px',
                },

                height: {
                  xs: '56px',
                  sm: '62px',
                },

                px: '32px',
                py: '12px',

                borderRadius: '12px',

                background:
                  'linear-gradient(90deg, #FF31B5 0%, #FF7BB8 100%)',

                fontSize: {
                  xs: '18px',
                  sm: '20px',
                },

                fontWeight: 600,
                lineHeight: '100%',
                textTransform: 'none',
                boxShadow: 'none',
                fontFamily: 'Plus Jakarta Sans',

                '&:hover': {
                  background:
                    'linear-gradient(90deg, #FF31B5 0%, #FF7BB8 100%)',
                  boxShadow: 'none',
                },
              }}
            >
              Talk to Our Experts
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
            src="/about-us/global-journey-right.svg"
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