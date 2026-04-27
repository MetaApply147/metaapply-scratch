import CounterSection from "@/components/sections/CounterSection";
import PartneredUniversities from '@/components/sections/PartneredUniversities';
import PopularDestinations from '@/components/sections/PopularDestinations';
import SuccessStories from '@/components/sections/SuccessStories';
import FAQSection from '@/components/sections/FAQSection';
import ServicesSection from '@/components/sections/ServicesSection';
import CityExpertsSection from '@/components/sections/CityExpertsSection';
import PlanYourJourney from '@/components/sections/home/PlanYourJourney';
import HomeRecruitmentPartner from '@/components/sections/home/HomeRecruitmentPartner';
import EventsOffers from '@/components/sections/home/EventsOffers';
import HeroBanner from '@/components/banner/HeroBanner';
import Section from "@/components/common/Section";
import StepperForm from "@/components/sections/home/StepperForm/StepperForm";

export default function Home() {
  return (
    <>
    
      {/*  Hero Section */}
      <HeroBanner slug="home" size="large" minHeight={{ xs: 400, sm: 600, lg: 796 }} leftExtra={<StepperForm />}/>

      {/* Counters */}
      <Section spacing="lg" sx={{p: '0 !important'}}>
        <CounterSection />
      </Section>

      {/* Partnered Universities */}
      <PartneredUniversities isHome />

      {/* Meet Experts */}
      <CityExpertsSection/>

      {/* Success Story */}
      <SuccessStories page="home" type="video" />

      {/* Plan Your Journey */}
      <PlanYourJourney/>

      {/* Popular Destinations */}
      <PopularDestinations/>

      {/* Recruitment Partner */}
      <HomeRecruitmentPartner/>

      {/* Our Services */}
      <ServicesSection/>

      {/* Event Offers */}
      <EventsOffers/>

      {/* FAQs */}
      <FAQSection page="home" />
    </>
    
  );
}