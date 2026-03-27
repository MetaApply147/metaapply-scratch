import { Typography, Box } from '@mui/material';

type Props = {
  title: string;
  highlight?: string;
  title2?: string;
};

export default function SectionHeader({ title, highlight, title2 }: Props) {
  return (
    <Box mb={{ xs: 3, md: 6.5 }}>
      <Typography variant="heading07">
        {title}{" "}

        {highlight && (
          <Box component="span" sx={{ color: 'primary.main' }}>
            {highlight}
          </Box>
        )}{" "}

        {title2}
      </Typography>
    </Box>
  );
}