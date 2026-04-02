import ServicesProcessSlider from '@/components/sections/ServicesProcessSlider';
import { Box, Container } from '@mui/material';

const metaFinanceData = [
  { id: 1, title: 'Application Received', icon: '/Services-images/Submit-travel-info.svg' },
  { id: 2, title: 'Counselling & Assessment', icon: '/Services-images/Get-flight-ops.svg' },
  { id: 3, title: 'Document Checklist & Collection', icon: '/Services-images/Compare&choose.svg' },
  { id: 4, title: 'Loan Application & Submission', icon: '/Services-images/Confirm-booking.svg' },
  { id: 5, title: 'Bank Coordination & Follow-up', icon: '/Services-images/Receive-eticket.svg' },
  { id: 6, title: 'Loan Sanction & Disbursement', icon: '/Services-images/Pack&fly.svg' },
];

export default function MetaFinanceProcess() {
  return (
   
<Box component="section">
  <Container maxWidth="lg">
    <ServicesProcessSlider 
      highlightText=" Education Loan Process"
      title="MetaFinance"
      data={metaFinanceData}
      slidesPerView={6}
    />
  </Container>
</Box>
    
    
  );
}


