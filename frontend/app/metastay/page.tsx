import HeroBanner from '@/components/banner/HeroBanner';
import FAQSection from '@/components/sections/FAQSection';
import SuccessStories from '@/components/sections/SuccessStories';

export default function MetaFlyPage() {
    return (
        <>
            <HeroBanner slug="metastay" size="medium"/>

            {/* Success Story */}
            <SuccessStories page="metastay" type="testimonial" />
            

            <FAQSection page="metastay" />
        </>
    );
}