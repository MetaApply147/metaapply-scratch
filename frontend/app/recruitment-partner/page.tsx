import HeroBanner from '@/components/banner/HeroBanner';
import FAQSection from '@/components/sections/FAQSection';
import SuccessStories from '@/components/sections/SuccessStories';
import PopularDestinations from '@/components/sections/PopularDestinations';
import ServicesSection from '@/components/sections/ServicesSection';
import PartneredUniversities from '@/components/sections/PartneredUniversities';
import RecruitmentPartner from '@/components/sections/Pages/recruitment/BecomeRecruitmentPartnerWithUs';
import { baseFields } from '@/config/forms/base.fields';

export default function RecruitmentPartnerPage() {

    return (
        <>
            <HeroBanner slug="recruitment-partner" minHeight={{ xs: 400, sm: 500, lg: 600 }} size="medium" />
            <RecruitmentPartner />
            {/* Partnered Universities */}
            <PartneredUniversities />

            {/* Our Services */}
            <ServicesSection />

            {/* Popular Destination section */}
            <PopularDestinations bg='#F7FBFF' />

            {/* Success Story */}
            <SuccessStories page="recruitment-partner" type="testimonial" />

            <FAQSection page="recruitment-partner" />
        </>
    );
}
