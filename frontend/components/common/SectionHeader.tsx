import { Typography, Box } from '@mui/material';

type Props = {
  title: string;
  highlight?: string;
};

export default function SectionHeader({ title, highlight }: Props) {
  const parts = highlight ? title.split(highlight) : [title];

  return (
    <Box mb={{ xs: 3, md: 5 }}>
      <Typography variant="heading07">
        {parts[0]}
        {highlight && (
          <Box component="span" sx={{ color: 'primary.main' }}>
            {highlight}
          </Box>
        )}
        {parts[1]}
      </Typography>
    </Box>
  );
}