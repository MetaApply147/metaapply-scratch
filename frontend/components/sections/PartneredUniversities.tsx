'use client';

import { Box, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import axios from 'axios';

const STRAPI_URL = 'http://localhost:1337';

type PartnerItem = {
  id: number;
  title?: string;
  order?: number;
  logo?: {
    url?: string;
    alternativeText?: string | null;
  } | null;
};

export default function PartneredUniversities() {
  const [partners, setPartners] = useState<PartnerItem[]>([]);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const res = await axios.get(`${STRAPI_URL}/api/partners?populate=*`);
        const data = res?.data?.data || [];

        const normalized = data.map((item: any) => ({
          id: item.id,
          title: item.title || item.attributes?.title || '',
          order: item.order || item.attributes?.order || 0,
          logo: item.logo || item.attributes?.logo || null,
        }));

        normalized.sort((a: PartnerItem, b: PartnerItem) => (a.order || 0) - (b.order || 0));
        setPartners(normalized);
      } catch (error) {
        console.error('Partners fetch error:', error);
      }
    };

    fetchPartners();
  }, []);

  return (
    <Box
      sx={{
        py: { xs: 4, md: 5 },
        backgroundColor: 'common.white',
      }}
    >
      <Container maxWidth="xl">
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
            sx={{              
              lineHeight: 1.15,
            }}
          >
            Our Exclusive <Box component="span" sx={{ color: 'primary.main' }}>Partnered Universities</Box>
            <CheckBoxIcon 
            sx={{
              height: '30px',
              width: '30px',
              lineHeight: 1.5,
              color: '#22c55e',
            }}/>
          </Typography>
        </Box>

        <Grid
          container
          rowSpacing={{ xs: 2, md: 3 }}
          columnSpacing={{ xs: 2, md: 3 }}
          justifyContent='center'
          sx={{ px: 2, py: 4 }}
        >
          {partners.map((item) => {
            const logoUrl = item.logo?.url ? `${STRAPI_URL}${item.logo.url}` : '';

            return (
              <Grid size={{ xs: 6, sm: 4, md: 2.4 }} key={item.id}>
                <Box
                  sx={{
                    minHeight: { xs: 90, md: 105 },
                    backgroundColor: 'common.white',
                    borderRadius: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 28px rgba(0,0,0,0.08)',
                    },
                  }}
                >
                  {logoUrl ? (
                    <Image
                      src={logoUrl}
                      alt={item.logo?.alternativeText || item.title || 'partner logo'}
                      width={180}
                      height={80}
                      style={{
                      width: '100%',
                      height: 'auto',                      
                    }}
                    />
                  ) : (
                    <Typography>{item.title}</Typography>
                  )}
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}