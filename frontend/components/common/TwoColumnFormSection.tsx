'use client';

import { Box, Container } from '@mui/material';
import DynamicLeadForm from '@/components/forms/DynamicLeadForm';

type Props = {
  formSchema: any;
  children: React.ReactNode;
};

export default function TwoColumnFormSection({
  formSchema,
  children,
}: Props) {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 10 }, background: '#f7f8fb' }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.2fr 0.8fr' },
            gap: '8em',
            alignItems: 'center',
          }}
        >
          {/* LEFT (DYNAMIC) */}
          <Box>
            {children}
          </Box>

          {/* RIGHT (COMMON DESIGN, DYNAMIC FORM) */}
          <Box
            sx={{
              backgroundColor: '#fff',
              borderRadius: '20px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              p: 3,
            }}
          >
            <DynamicLeadForm schema={formSchema} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}