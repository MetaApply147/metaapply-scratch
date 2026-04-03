import HeroSection from "@/components/sections/Pages/k-12/HeroSection";
import AboutSection from "@/components/sections/Pages/k-12/AboutSection";
import K12GuideSection from "@/components/sections/Pages/k-12/K12GuideSection";
import PartnerSchoolSection from "@/components/sections/Pages/k-12/PartnerSchoolSection";
import SkillsSection from "@/components/sections/Pages/k-12/SkillsSection";
import LearningExperiencesSection from "@/components/sections/Pages/k-12/LearningExperiencesSection";
import CTABannerSection from "@/components/sections/Pages/k-12/CTABannerSection";
import FAQSection from "@/components/sections/FAQSection";

export default function MetaFlyPage() { 
    return (
        <>
            {/* 1. Hero / Enquire Now */}
            <HeroSection />
        
            {/* 2. About Us + 3 coloured cards */}
            <AboutSection />
        
            {/* 3. K-12 Guide: Elementary / Middle / High School */}
            <K12GuideSection />
        
            {/* 4. Our Partner School + Explore image panel */}
            <PartnerSchoolSection />
        
            {/* 5. 21st Century Skills (dark bg, 2 rows of 5 icon tiles) */}
            <SkillsSection />
        
            {/* 6. Redefining Learning Experiences (4 photo cards) */}
            <LearningExperiencesSection />
        
            {/* 7. CTA Banner – "Your child's future deserves..." */}
            <CTABannerSection />
        
            {/* <FAQSection /> */}
            <FAQSection page="metafly" />

        </>
    );
}