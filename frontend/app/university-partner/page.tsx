import HeroBanner from '@/components/banner/HeroBanner';

import SuccessStories from '@/components/sections/SuccessStories';

import { baseFields } from '@/config/forms/base.fields';

export default function UniversityPartnerPage() {

    return (
        <>
            <HeroBanner slug="university-partner" size="medium" />




            {/* Success Story */}
            <SuccessStories page="university-partner" type="testimonial" cta={{
                label: "Talk to Our Expert",
                link: "/#",
            }} />


        </>
    );
}

