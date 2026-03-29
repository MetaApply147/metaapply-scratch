import { Box, Typography } from '@mui/material';

type Props = {
  title: string;
  highlight?: string;
  description?: string;
};

export default function BannerContent({
  title,
  highlight,
  description,
}: Props) {
  return (
    <Box>
      <Typography variant="heading03" component='h1' sx={{color: 'navyBlue.700', lineHeight: '88px'}}>
        {title}{' '}
        {highlight && (
          <span style={{
            background: 'linear-gradient(97.87deg, #EF3EFF -4.59%, #C83535 101.21%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'block',
            }}>
            {highlight}</span>
        )}
      </Typography>

      {description && (
        <Typography mt={3} color="text.secondary" variant='body03' component='p'>
          {description}
        </Typography>
      )}
    </Box>
  );
}