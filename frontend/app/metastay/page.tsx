import HeroBanner from '@/components/banner/HeroBanner';
import FAQSection from '@/components/sections/FAQSection';
import MetaStayProcess from '@/components/sections/Pages/metastay/MetaStayProcess';
import SuccessStories from '@/components/sections/SuccessStories';

export default function MetaFlyPage() {
    return (
        <>
            <HeroBanner slug="metastay" size="medium"/>

            {/* Process section  */}
            <MetaStayProcess />
            
            {/* Success Story */}
            <SuccessStories page="metastay" type="testimonial" />
            

            <FAQSection page="metastay" />
        </>
    );
}