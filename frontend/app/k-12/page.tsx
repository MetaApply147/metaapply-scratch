import Section from '@/components/common/Section';
import SectionHeader from '@/components/common/SectionHeader';
import FAQSection from '@/components/sections/FAQSection';

import SuccessStories from '@/components/sections/SuccessStories';

export default function MetaFlyPage() {
    return (
        <>
            {/* Success Story */}
            <Section spacing="lg">
                <SectionHeader
                    title="Our"
                    highlight="Success Stories"
                />
                <SuccessStories page="metafly" type="testtestimonial" />
            </Section>

            <FAQSection page="metafly" />
        </>
    );
}