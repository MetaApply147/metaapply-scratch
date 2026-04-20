import HeroBanner from '@/components/banner/HeroBanner';
import PartneredUniversities from '@/components/sections/PartneredUniversities';
import FAQSection from '@/components/sections/FAQSection';
import SuccessStories from '@/components/sections/SuccessStories';
import PopularDestinations from '@/components/sections/PopularDestinations';

export default function StudyAbroadPage() {

    return (
        <>
            <HeroBanner slug="metaapply-amplify" size="medium" />

            <PartneredUniversities />

            <PopularDestinations />

            <SuccessStories page="home" type="video" />

            <FAQSection page="metaapply-amplify" />
        </>
    );
}