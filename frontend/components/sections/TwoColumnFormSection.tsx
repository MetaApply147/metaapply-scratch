'use client';

import { Box, Container } from '@mui/material';
import DynamicLeadForm from '@/components/forms/DynamicLeadForm';
import Section from '../common/Section';

type Props = {
  formSchema: any;
  formWidth?: any;
  children: React.ReactNode;
  bgColor?: string 
};

export default function TwoColumnFormSection({
  formSchema,
  children,
  formWidth,
  bgColor
}: Props) {
  return (
    <Section spacing="lg" sx={{ backgroundColor: bgColor }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1.1fr 1fr' },
          gap: {xs: 3, sm: 4, md: 6},
          alignItems: 'center',
        }}
      >
        {/* LEFT (DYNAMIC) */}
        <Box>
          {children}
        </Box>

        {/* RIGHT (COMMON DESIGN, DYNAMIC FORM) */}
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
          <DynamicLeadForm schema={formSchema} Setwidth={formWidth}   />
        </Box>
      </Box>
    </Section>
  );
}