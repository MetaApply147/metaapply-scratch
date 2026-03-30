import Section from '@/components/common/Section';
import SectionHeader from '@/components/common/SectionHeader';
import FAQSection from '@/components/sections/FAQSection';

import SuccessStories from '@/components/sections/SuccessStories';

export default function MetaFlyPage() {
    return (
        <>
            {/* Success Story */}
            <Section spacing="lg">
                <SuccessStories page="nextstep" type="testimonial" />
            </Section>

<<<<<<< HEAD
            <FAQSection page="nextstep" />
=======
            <FAQSection page="metafly" />

            
>>>>>>> a5f9a5c0dcf1232813dc2651a290d9d00befce8a
        </>
    );
}