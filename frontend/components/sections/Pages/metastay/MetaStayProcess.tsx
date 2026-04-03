import ServicesProcessSlider from '@/components/sections/ServicesProcessSlider';

const metaStayData = [
  { id: 1, title: 'Submit Travel Info', icon: '/Services-images/Submit-travel-info.svg' },
  { id: 2, title: 'Get Flight Options', icon: '/Services-images/Get-flight-ops.svg' },
  { id: 3, title: 'Enquire', icon: '/Services-images/Enquire-call.svg' },
  { id: 4, title: 'Confirm Booking', icon: '/Services-images/Confirm-booking.svg' },
  { id: 5, title: 'Deposit', icon: '/Services-images/Money_bag.svg' },
  
];

export default function MetaStayProcess() {
  return (
    <ServicesProcessSlider     
      highlightText="MetaStay"
      title="Process"
      highlightPosition='start'
      data={metaStayData}
      slidesPerView={5}
    />  
  );
}