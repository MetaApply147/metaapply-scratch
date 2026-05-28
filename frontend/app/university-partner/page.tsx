import HeroBanner from '@/components/banner/HeroBanner';
import GlobalJourneyCTA from '@/components/sections/GlobalJourneyCTA';
import GlobalReachSection from '@/components/sections/Pages/university-partner/GlobalReachSection';
import MetaApplyAmplifySection from '@/components/sections/Pages/university-partner/MetaApplyAmplifySection';
import TransformCareersSection from '@/components/sections/Pages/university-partner/TransformCareersSection';
import UniversityPathwaySection from '@/components/sections/Pages/university-partner/UniversityPathwaySection';
import WhyPartnerSection from '@/components/sections/Pages/university-partner/WhyPartnerSection';

import SuccessStories from '@/components/sections/SuccessStories';

import { baseFields } from '@/config/forms/base.fields';

export default function UniversityPartnerPage() {

    return (
        <>
            <HeroBanner slug="university-partner" size="medium" minHeight={"712px"} leftComponentWidth={"796px"} />
            <TransformCareersSection />
            <GlobalReachSection />
            <WhyPartnerSection />
            <UniversityPathwaySection />
            <GlobalJourneyCTA
                title="MetaApply Amplify - Grow your Global Presence with Us"
                description="Want more than recruitment? MetaApply Amplify gives your university full 360° marketing support — digital campaigns, brand visibility, and targeted student outreach, all under one roof."
                buttonText="Connect Today"
            />
            <SuccessStories page="university-partner" type="testimonial" />
        </>
    );
}

