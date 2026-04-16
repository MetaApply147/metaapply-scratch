import HeroBanner from '@/components/banner/HeroBanner';
import FAQSection from '@/components/sections/FAQSection';
import SuccessStories from '@/components/sections/SuccessStories';
import PopularDestinations from '@/components/sections/PopularDestinations';
import ServicesSection from '@/components/sections/ServicesSection';
import PartneredUniversities from '@/components/sections/PartneredUniversities';
import { baseFields } from '@/config/forms/base.fields';

export default function RecruitmentPartnerPage() {

    return (
        <>
            <HeroBanner slug="recruitment-partner" size="medium" />

            {/* Partnered Universities */}
            <PartneredUniversities />

            {/* Our Services */}
            <ServicesSection />

            {/* Popular Destination section */}
            <PopularDestinations bgColor='#F7FBFF' />

            {/* Success Story */}
            <SuccessStories page="recruitment-partner" type="testimonial" cta={{
                label: "Talk to Our Expert",
                link: "/#",
            }} />

            <FAQSection page="recruitment-partner" />
        </>
    );
}

