import HeroBanner from '@/components/banner/HeroBanner';
import PartneredUniversities from '@/components/sections/PartneredUniversities';
import FAQSection from '@/components/sections/FAQSection';
import SuccessStories from '@/components/sections/SuccessStories';
import PopularDestinations from '@/components/sections/PopularDestinations';
import ServicesSection from '@/components/sections/ServicesSection';
export default function StudyAbroadPage() {

    return (
        <>
            <HeroBanner slug="study-abroad" size="medium" />

            {/* <PartneredUniversities /> */}

            <PopularDestinations />
            <ServicesSection />
            <SuccessStories page="home" type="video" />

            <FAQSection page="study-abroad" />
        </>
    );
}