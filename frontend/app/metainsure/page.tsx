import Section from '@/components/common/Section';
import SectionHeader from '@/components/common/SectionHeader';
import FAQSection from '@/components/sections/FAQSection';
import ServingDestinations from '@/components/sections/ServicesPageDestinations';
import SuccessStories from '@/components/sections/SuccessStories';

export default function MetaFlyPage() {
    return (
        <>

            {/* Success Story */}
            <ServingDestinations />
            <SuccessStories page="metainsure" type="testimonial" />
            <FAQSection page="metainsure" />
        </>
    );
}