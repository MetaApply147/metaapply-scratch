import HeroBanner from '@/components/banner/HeroBanner';
import FAQSection from '@/components/sections/FAQSection';
import SuccessStories from '@/components/sections/SuccessStories';

export default function MetaFinancePage() {
    return (
        <>
            <HeroBanner slug="metafinance" size="medium"/>

            {/* Success Story */}
            <SuccessStories page="metafinance" type="testimonial" />

            <FAQSection page="metafinance" />
        </>
    );
}