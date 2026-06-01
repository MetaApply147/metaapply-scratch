import HeroBanner from '@/components/banner/HeroBanner';
import FAQSection from '@/components/sections/FAQSection';
import FeatureCardsSection from '@/components/sections/FeatureCardsSection';
import AboutAmplifySection from '@/components/sections/Pages/metaapply-amplify/AboutAmplifySection';
import AmplifyPackagesSection from '@/components/sections/Pages/metaapply-amplify/AmplifyPackagesSection';
import GlobalReachSection from '@/components/sections/Pages/metaapply-amplify/GlobalReachSection';
import TransformSuccessSection from '@/components/sections/Pages/metaapply-amplify/TransformSuccessSection';
import SuccessStories from '@/components/sections/SuccessStories';

export default function MetaapplyAmplifyPage() {
    const revenueData = [
        {
            id: 1,
            title: "Regional-Expertise",
            description:
                "In-country staff in 10+ markets for faster response and stronger agent ecosystem.",
            icon: "/metaapply-amplify/Regional-Expertise.svg",
        },

        {
            id: 2,
            title: "Scalable Model",
            description:
                "One partner managing all channels — B2B, B2C, and digital recruitment.",
            icon: "/metaapply-amplify/Scalable-Model.svg",
        },

        {
            id: 3,
            title: "Guaranteed ROI",
            description:
                "Transparent targets, measurable conversions, and performance-linked sales bonuses.",
            icon: "/metaapply-amplify/Guaranteed-ROI.svg",
        },

        {
            id: 4,
            title: "Cost-efficient",
            description:
                "Fixed monthly retainer with clear ROI — no hidden costs, no fragmented agencies.",
            icon: "/metaapply-amplify/Cost-efficient.svg",
        },

        {
            id: 5,
            title: "Lead Generation",
            description:
                "Transparent targets, measurable conversions, and performance-linked sales bonuses.",
            icon: "/metaapply-amplify/Lead-Generation.svg",
        },

        {
            id: 6,
            title: "Build a Global Brand",
            description:
                "Transparent targets, measurable conversions, and performance-linked sales bonuses.",
            icon: "/metaapply-amplify/Global-Brand.svg",
        },
    ];

    return (
        <>
            <HeroBanner slug="metaapply-amplify" minHeight={{ xs: 400, sm: 500, lg: 620 }} size="medium" disableSectionPadding
                alignSelf="flex-end" />
            <AboutAmplifySection />
            <FeatureCardsSection
                title="Why Partners Choose"
                highlight="MetaApply to Grow Revenue"
                items={revenueData}
                background={"#FFFFFF"}
            />
            <GlobalReachSection/>
            <AmplifyPackagesSection/>
            <TransformSuccessSection/>
            <SuccessStories page="metaapply-amplify" type="testimonial" />
            <FAQSection page="metaapply-amplify" />
        </>
    );
}

