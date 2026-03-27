import Section from '@/components/common/Section';
import SectionHeader from '@/components/common/SectionHeader';
import CounterSection from "@/components/sections/CounterSection";
import PartneredUniversities from '@/components/sections/PartneredUniversities';
import PopularDestinations from '@/components/sections/PopularDestinations';
import SuccessStories from '@/components/sections/SuccessStories';
import FAQSection from '@/components/sections/FAQSection';
import ServicesSection from '@/components/sections/ServicesSection';

export default function Home() {
  return (
    <>
      {/* Counters */}
      <CounterSection />

      {/* Partnered Universities */}
      {/* <Section spacing="lg">
        <SectionHeader
          title="Our Exclusive Partnered Universities"
          highlight="Partnered Universities"
        /> */}
      <PartneredUniversities />
      {/* </Section> */}

      {/* Success Story */}
      <Section spacing="lg">
        <SectionHeader
          title="Our"
          highlight="Success Stories"
        />
        <SuccessStories page="home" type="video" />
      </Section>

      {/* Popular Destinations */}
      <Section spacing="lg">
        <SectionHeader
          title="Popular"
          highlight="Destinations"
        />
        <PopularDestinations/>
      </Section>

      {/* Our Services */}
      <Section spacing="lg">
        <SectionHeader
          title="Our"
          highlight="Services"
        />
        <ServicesSection/>
      </Section>

      {/* FAQs */}
      <FAQSection page="home" />


       
      
      
      
      
    </>
    
  );
}