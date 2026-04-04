import { Typography, Box } from '@mui/material';

type Props = {
  title: string;
  highlight?: string;
  title2?: string;
  highlightPosition?: 'start';
  color?: string;
};

export default function SectionHeader({ title, highlight, title2, highlightPosition, color }: Props) {
  const isStart = highlightPosition === 'start';
  return (
    <Box mb={{ xs: 3, md: 6.5 }}>
      <Typography variant="heading07" component="h2" sx={{lineHeight: "normal", color: color}}>
        {highlight && isStart && (
          <Box component="span" sx={{ color: 'primary.main' }}>
            {highlight}{" "}
          </Box>
        )}

        {title}{" "}

        {/* Default behavior: highlight AFTER title */}
        {highlight && !isStart && (
          <Box component="span" sx={{ color: 'primary.main' }}>
            {highlight}{" "}
          </Box>
        )}

        {title2}
      </Typography>
    </Box>
  );
}