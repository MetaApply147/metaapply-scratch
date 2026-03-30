import FAQSection from '@/components/sections/FAQSection';
import HeroBanner from '@/components/banner/HeroBanner';
import SuccessStories from '@/components/sections/SuccessStories';

export default function MetaFlyPage() {
    return (
        <>
            <HeroBanner slug="metainsure" size="medium"/>

            {/* Success Story */}
            <SuccessStories page="metainsure" type="testimonial" />
           

            <FAQSection page="metainsure" />
        </>
    );
}