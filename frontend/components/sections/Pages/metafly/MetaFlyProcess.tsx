import ServicesProcessSlider from '@/components/common/ServicesProcessSlider';
import { Box, Container } from '@mui/material';

const metaFlyData = [
  { id: 1, title: 'Submit Travel Info', icon: '/Services-images/Submit-travel-info.svg' },
  { id: 2, title: 'Get Flight Options', icon: '/Services-images/Get-flight-ops.svg' },
  { id: 3, title: 'Compare & Choose', icon: '/Services-images/Compare&choose.svg' },
  { id: 4, title: 'Confirm Booking', icon: '/Services-images/Confirm-booking.svg' },
  { id: 5, title: 'Receive E-ticket', icon: '/Services-images/Receive-eticket.svg' },
  { id: 6, title: 'Pack & Fly', icon: '/Services-images/Pack&fly.svg' },
];

export default function MetaFlyProcess() {
  return (
   
<Box component="section">
  <Container maxWidth="lg">
    <ServicesProcessSlider 
      highlightText=" Easy Process "
      title="MetaFly"
      data={metaFlyData}
      slidesPerView={6}
    />
  </Container>
</Box>
    
    
  );
}


