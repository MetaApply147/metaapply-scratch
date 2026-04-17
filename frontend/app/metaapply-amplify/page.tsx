import HeroBanner from '@/components/banner/HeroBanner';
import FAQSection from '@/components/sections/FAQSection';
import SuccessStories from '@/components/sections/SuccessStories';

import { baseFields } from '@/config/forms/base.fields';

export default function MetaapplyAmplifyPage() {

    return (
        <>
            <HeroBanner slug="metaapply-amplify" size="medium" />





            {/* Success Story */}
            <SuccessStories page="metaapply-amplify" type="testimonial" cta={{
                label: "Talk to Our Expert",
                link: "/#",
            }} />

            <FAQSection page="metaapply-amplify" />
        </>
    );
}

