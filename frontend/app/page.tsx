import Section from '@/components/common/Section';
import SectionHeader from '@/components/common/SectionHeader';
import CounterSection from "@/components/sections/CounterSection";
import PartneredUniversities from '@/components/sections/PartneredUniversities';

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
    </>
    
  );
}