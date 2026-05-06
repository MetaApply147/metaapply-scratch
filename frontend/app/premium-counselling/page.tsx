import CTASectionCommon from "@/components/sections/CTASectionCommon";
import FAQSection from "@/components/sections/FAQSection";
import AboutSection from "@/components/sections/Pages/premium-counselling/About";
import CounsellingProcessSection from "@/components/sections/Pages/premium-counselling/CounsellingProcess";
import PricingPlansSection from "@/components/sections/Pages/premium-counselling/PricingPlanSection";
import WhyMetaApplySection from "@/components/sections/Pages/premium-counselling/WhyMetaapplySection";
import TwoColumnFormSection from "@/components/sections/TwoColumnFormSection";
import { baseFields } from "@/config/forms/base.fields";

export default function PremiumCounselling() {
    const schema = {
        formId: "premium-counselling",
        fields: baseFields,
    };
    return (
        <>
            <TwoColumnFormSection
                formSchema={schema}
                formWidth="84%"
                alignEnd
            >
                <AboutSection />
            </TwoColumnFormSection>
            <WhyMetaApplySection/>
            <CounsellingProcessSection/>
            <PricingPlansSection/>
            <FAQSection page="premium-counselling" />
            <CTASectionCommon title="Your Journey to Academic Excellence Abroad Starts with Right Guidance" buttonText="Talk to Our Counsellors" image="/premium-counselling/girl.svg" ImageWidth="423px"/>
        </>
    )
}