import FAQSection from '@/components/sections/FAQSection';
import HeroBanner from '@/components/banner/HeroBanner';
import SuccessStories from '@/components/sections/SuccessStories';
import ServingDestinations from '@/components/sections/ServicesPageDestinations';
import MetaInsureLeftInfo from '@/components/sections/Pages/metainsure/MetaInsureLeftInfo';
import ContentSection from '@/components/sections/Pages/metainsure/ContentSection';
import TwoColumnFormSection from '@/components/sections/TwoColumnFormSection';
import InsuranceImportance from '@/components/sections/Pages/metainsure/InsuranceImportance';
import { baseFields } from '@/config/forms/base.fields';

export default function MetaInsurePage() {
    const schema = {
        formId: "k-12",
        fields: baseFields,
        extraPayload: {
            mx_Program_Products: "",
            mx_Marketing_Pages: ""
        },
    };
    return (
        <>
            <HeroBanner slug="metainsure" size="medium" />
            
            {/* Content section  */}
            <ContentSection/>
            
            {/* Importance of Insurance  */}
            <InsuranceImportance />

            {/* TWO COLUMN SECTION */}
            <TwoColumnFormSection formSchema={schema} formWidth={'84%'}>
                <MetaInsureLeftInfo />
            </TwoColumnFormSection>
            
            {/* Success Story */}
            <ServingDestinations  bgColor="gray.50"/>

            {/* Success Story */}
            <SuccessStories page="metainsure" type="testimonial" cta={{
                label: "Talk to Our Expert",
                link: "/#",
                }}
            />

            <FAQSection page="metainsure" />
        </>
    );
}