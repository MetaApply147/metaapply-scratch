'use client';

import { Box, Container } from '@mui/material';
import DynamicLeadForm from '@/components/forms/DynamicLeadForm';
import Section from '../common/Section';

type Props = {
  formSchema: any;
  formWidth?: any;
  children: React.ReactNode;
};

export default function TwoColumnFormSection({
  formSchema,
  children,
  formWidth
}: Props) {
  return (
    <Section component="section" sx={{ background: '#F7FBFF' }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1.1fr 1fr' },
          gap: '8em',
          alignItems: 'center',
        }}
      >
        {/* LEFT (DYNAMIC) */}
        <Box>
          {children}
        </Box>

        {/* RIGHT (COMMON DESIGN, DYNAMIC FORM) */}
        <Box>
          <DynamicLeadForm schema={formSchema} Setwidth={formWidth}   />
        </Box>
      </Box>
    </Section>
  );
}