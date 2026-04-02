import { Typography, Box } from '@mui/material';

type Props = {
  title: string;
  highlight?: string;
  title2?: string;
  highlightPosition?: 'start';
};

export default function SectionHeader({ title, highlight, title2, highlightPosition }: Props) {
  const isStart = highlightPosition === 'start';
  return (
    <Box mb={{ xs: 3, md: 6.5 }}>
      <Typography variant="heading07" component="h2" sx={{lineHeight: "normal"}}>
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