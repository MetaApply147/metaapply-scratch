import FAQSection from '@/components/sections/FAQSection';
import HeroBanner from '@/components/banner/HeroBanner';
import SuccessStories from '@/components/sections/SuccessStories';
import ServingDestinations from '@/components/sections/ServicesPageDestinations';
export default function MetaInsurePage() {
    return (
        <>
            <HeroBanner slug="metainsure" size="medium" />

            {/* Success Story */}
            <SuccessStories page="metainsure" type="testimonial" />


            {/* Success Story */}
            <ServingDestinations />
            <SuccessStories page="metainsure" type="testimonial" />
            <FAQSection page="metainsure" />
        </>
    );
}