import Section from '@/components/common/Section';
import SectionHeader from '@/components/common/SectionHeader';
import CounterSection from "@/components/sections/CounterSection";
import PartneredUniversities from '@/components/sections/PartneredUniversities';
import PopularDestinations from '@/components/sections/PopularDestinations';
import SuccessStories from '@/components/sections/SuccessStories';
import FAQSection from '@/components/sections/FAQSection';

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

      {/* FAQs */}
      
        
        <FAQSection page="home" />


        <FAQSection page="metafly" />
      
      
      
      
    </>
    
  );
}