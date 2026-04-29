import HeroBanner from "@/components/banner/HeroBanner";
import PartneredUniversities from "@/components/sections/PartneredUniversities";
import FAQSection from "@/components/sections/FAQSection";
import SuccessStories from "@/components/sections/SuccessStories";
import PopularDestinations from "@/components/sections/PopularDestinations";
import ServicesSection from "@/components/sections/ServicesSection";
import CTASection from "@/components/sections/CTASection";
import NumberCards from "@/components/sections/NumberCards";
import CalculatorsSection from "@/components/sections/CalculatorsSection";
import MetaapplyProcess from "@/components/sections/MetaapplyProcess";

export default function StudyAbroadPage() {
   const NumberCardData = [
    {
      number: "01",
      cardTitle: "Quality Education",
      cardDescription: "The foreign curriculum is practical-based learning, making you learn through real-world experiences", 
    },
    {
      number: "02",
      cardTitle: "Networking Opportunities",
      cardDescription: "Studying abroad gives you the opportunity to connect with international students and expand your network", 
    },
    {
      number: "03",
      cardTitle: "Skill Enhancement",
      cardDescription: "Studying abroad means exploring the unknown yourself, eventually enhancing skills like problem-solving and decision-making", 
    },
    {
      number: "04",
      cardTitle: "Global Job Market",
      cardDescription: "Degree from a foreign university opens door for you to work anywhere in the world", 
    },
  ];

  return (
    <>
    {/* hero section */}
      <HeroBanner
        slug="study-abroad"
        minHeight={{ xs: 400, sm: 400, lg: 720 }}
        disableSectionPadding
        rightMaxWidth={580}
        alignSelf="flex-end"
      />

      {/* Number Card section */}
      <NumberCards
        sectionTitle="Why"
        sectionHighlight="Study Abroad"
        cards={NumberCardData}
        gridTemplateColumns={{
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={4}
      />

      {/* <PartneredUniversities /> */}
      <PopularDestinations bg="/study-abroad/Background-1.webp" tagline="Your global journey starts here—explore top-tier universities across 30+ countries."/>

      {/* Calculators Section */}
      <CalculatorsSection/>

      {/* Popular Universities */}
      <PartneredUniversities bg="/study-abroad/Background-2.webp"/>

      {/* Services Section */}
      <ServicesSection />

      {/* MetaApply process */}
      <MetaapplyProcess disablePadding/>

      {/* Success Story */}
      <SuccessStories page="study-abroad" type="video" />

      {/* FAQs  */}
      <FAQSection page="study-abroad" disablePadding/>

        {/* CTA section */}
      <CTASection/>
    </>
  );
}
