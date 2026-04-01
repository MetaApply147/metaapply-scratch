import FAQSection from '@/components/sections/FAQSection';
import HeroBanner from '@/components/banner/HeroBanner';
import SuccessStories from '@/components/sections/SuccessStories';
import ServingDestinations from '@/components/sections/ServicesPageDestinations';
import TwoColumnFormSection from '@/components/common/TwoColumnFormSection';
import { metaflyForm } from "@/config/forms/metafly.form";
import MetaInsureLeftInfo from '@/components/sections/Pages/metainsure/MetaInsureLeftInfo';
import ContentSection from '@/components/sections/Pages/metainsure/ContentSection';
export default function MetaInsurePage() {
    return (
        <>
            <HeroBanner slug="metainsure" size="medium" />

            <ContentSection/>

            {/* TWO COLUMN SECTION */}
            <TwoColumnFormSection formSchema={metaflyForm}>
                    <MetaInsureLeftInfo />
            </TwoColumnFormSection>

            {/* Success Story */}
            <ServingDestinations />

            {/* Success Story */}
            <SuccessStories page="metainsure" type="testimonial" />

            <FAQSection page="metainsure" />
        </>
    );
}