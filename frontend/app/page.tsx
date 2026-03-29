import Section from '@/components/common/Section';
import SectionHeader from '@/components/common/SectionHeader';
import CounterSection from "@/components/sections/CounterSection";
import PartneredUniversities from '@/components/sections/PartneredUniversities';
import PopularDestinations from '@/components/sections/PopularDestinations';
import SuccessStories from '@/components/sections/SuccessStories';
import FAQSection from '@/components/sections/FAQSection';
import ServicesSection from '@/components/sections/ServicesSection';
import CityExpertsSection from '@/components/sections/CityExpertsSection';
import PlanYourJourney from '@/components/sections/home/PlanYourJourney';
import HomeRecruitmentPartner from '@/components/sections/home/HomeRecruitmentPartner';
import BaseBanner from '@/components/banner/BaseBanner';
import BannerContent from '@/components/banner/BannerContent';

export default function Home() {
  return (
    <>
      {/*  Hero Section */}
      <BaseBanner
        backgroundImage="/Home/home_banner.webp"
        minHeight={796}
        left={
          <BannerContent
            title="One Application,"
            highlight="Multiple Universities"
            description="Compare, shortlist, and apply to 450+ global universities-all in one go."
          />
        }
      />

      {/* Counters */}
      <CounterSection />

      {/* Partnered Universities */}
      <PartneredUniversities />

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

      {/* FAQs */}
      <FAQSection page="home" />


       
      
      
      
      
    </>
    
  );
}