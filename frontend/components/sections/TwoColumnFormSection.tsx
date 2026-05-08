'use client';

import { Box, Container } from '@mui/material';
import DynamicLeadForm from '@/components/forms/DynamicLeadForm';
import Section from '../common/Section';

type Props = {
  formSchema: any;
  formWidth?: any;
  children: React.ReactNode;
  bgColor?: string ;
  alignEnd?: boolean;
  formOffset?: string;
formTop?: string;
};

export default function TwoColumnFormSection({
  formSchema,
  children,
  formWidth,
  bgColor,
  alignEnd = false,
  formOffset = "0px",
formTop = "0px",
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
        <Box
  sx={{
    display: "flex",
    justifyContent: alignEnd ? "flex-end" : "center",

    position: "relative",

    ml: formOffset,
    mt: formTop,

    zIndex: 5,
  }}
>
          <DynamicLeadForm schema={formSchema} Setwidth={formWidth}   />
        </Box>
      </Box>
    </Section>
  );
}