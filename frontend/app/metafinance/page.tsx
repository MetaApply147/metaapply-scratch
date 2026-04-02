import HeroBanner from '@/components/banner/HeroBanner';
import FAQSection from '@/components/sections/FAQSection';
import SuccessStories from '@/components/sections/SuccessStories';
import TwoColumnFormSection from '@/components/sections/TwoColumnFormSection';
import { metaflyForm } from "@/config/forms/metafly.form";
import MetaFinanceLeftInfo from '@/components/sections/Pages/metafinance/MetaFinanceLeftInfo';
import MetaFinanceProcess from '@/components/sections/Pages/metafinance/MetaFinanceProcess';
import PopularDestinations from '@/components/sections/PopularDestinations';
import MetaFinanceImportance from '@/components/sections/Pages/metafinance/MetaFinanceImportance';
import ContentSection from '@/components/sections/Pages/metafinance/ContentSection';
import EligibleRequirement from '@/components/sections/Pages/metafinance/EligibleRequirement';
import BankingPartners from '@/components/sections/Pages/metafinance/BankingPartners';


export default function MetaFinancePage() {
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
            <TwoColumnFormSection formSchema={metaflyForm}>
                    <MetaFinanceLeftInfo />
            </TwoColumnFormSection>

            {/* PROCESS */}
            <MetaFinanceProcess/>

            {/* Popular Destination section */}
            <PopularDestinations/>

            {/* Success Story */}
            <SuccessStories page="metafinance" type="testimonial" />

            <FAQSection page="metafinance" />
        </>
    );
}