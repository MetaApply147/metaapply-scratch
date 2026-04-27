import HeroBanner from '@/components/banner/HeroBanner';
import FAQSection from '@/components/sections/FAQSection';
import SuccessStories from '@/components/sections/SuccessStories';
import TwoColumnFormSection from '@/components/sections/TwoColumnFormSection';
import MetaFinanceLeftInfo from '@/components/sections/Pages/metafinance/MetaFinanceLeftInfo';
import MetaFinanceProcess from '@/components/sections/Pages/metafinance/MetaFinanceProcess';
import PopularDestinations from '@/components/sections/PopularDestinations';
import MetaFinanceImportance from '@/components/sections/Pages/metafinance/MetaFinanceImportance';
import ContentSection from '@/components/sections/Pages/metafinance/ContentSection';
import EligibleRequirement from '@/components/sections/Pages/metafinance/EligibleRequirement';
import BankingPartners from '@/components/sections/Pages/metafinance/BankingPartners';
import { baseFields } from '@/config/forms/base.fields';


export default function MetaFinancePage() {
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
            <HeroBanner slug="metafinance" size="medium"/>

            {/* Importance of Metafinance  */}
            <MetaFinanceImportance/>

            {/* Banking Partners */}
            <BankingPartners/>

            {/* Eligible Requirement */}
            <EligibleRequirement />

            {/* Loan Calculator */}
            <ContentSection/>

            {/* TWO COLUMN SECTION */}
            <TwoColumnFormSection formSchema={schema} formWidth={'84%'}>
                    <MetaFinanceLeftInfo />
            </TwoColumnFormSection>

            {/* PROCESS */}
            <MetaFinanceProcess/>

            {/* Popular Destination section */}
            <PopularDestinations bg="/study-abroad/Background-1.webp"/>

            {/* Success Story */}
            <SuccessStories page="metafinance" type="testimonial" cta={{
                label: "Talk to Our Expert",
                link: "/#",
            }}/>

            <FAQSection page="metafinance" />
        </>
    );
}