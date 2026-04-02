import HeroBanner from '@/components/banner/HeroBanner';
import FAQSection from '@/components/sections/FAQSection';
import SuccessStories from '@/components/sections/SuccessStories';
import TwoColumnFormSection from '@/components/sections/TwoColumnFormSection';
import { metaflyForm } from "@/config/forms/metafly.form";
import MetaFinanceLeftInfo from '@/components/sections/Pages/metafinance/MetaFinanceLeftInfo';
import MetaFinanceProcess from '@/components/sections/Pages/metafinance/MetaFinanceProcess';
import PopularDestinations from '@/components/sections/PopularDestinations';

export default function MetaFinancePage() {
    return (
        <>
            <HeroBanner slug="metafinance" size="medium"/>

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