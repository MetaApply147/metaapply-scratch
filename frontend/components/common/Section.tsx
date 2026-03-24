'use client';
import { Box, Container, BoxProps } from '@mui/material';

type SectionProps = BoxProps & {
  children: React.ReactNode;
  container?: boolean;
  spacing?: 'sm' | 'md' | 'lg';
};

const spacingMap = {
  sm: { py: { xs: 4, md: 6 } },
  md: { py: { xs: 6, md: 10 } },
  lg: { py: { xs: 8, md: 11.25 } },
};

export default function Section({
  children,
  container = true,
  spacing = 'md',
  ...props
}: SectionProps) {
  return (
    <Box {...spacingMap[spacing]} {...props}>
      {container ? <Container maxWidth="xl">{children}</Container> : children}
    </Box>
  );
}