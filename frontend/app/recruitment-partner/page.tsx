import HeroBanner from '@/components/banner/HeroBanner';
import FAQSection from '@/components/sections/FAQSection';
import SuccessStories from '@/components/sections/SuccessStories';
import PopularDestinations from '@/components/sections/PopularDestinations';
import ServicesSection from '@/components/sections/ServicesSection';
import PartneredUniversities from '@/components/sections/PartneredUniversities';
import { baseFields } from '@/config/forms/base.fields';
import FeatureCardsSection from '@/components/sections/FeatureCardsSection';
import RecruitmentPartners from '@/components/sections/Pages/recruitment-partner/RecruitmentPartners';
import PartnerPortalSection from '@/components/sections/Pages/recruitment-partner/PartnerPortal';
import CTASectionCommon from '@/components/sections/CTASectionCommon';
import MetaapplyProcess from '@/components/sections/MetaapplyProcess';
import StudyAbroadJourney from '@/components/sections/Pages/recruitment-partner/StudyAbroadJourney';
import JoinNetworkCTA from '@/components/sections/Pages/recruitment-partner/JoinNetworkCTA';

const revenueData = [
    {
        id: 1,
        title: "High & Timely payouts",
        description:
            "Earn competitive commissions with a reliable, on-time payout structure that supports consistent business growth.",
        icon: "/recruitment-partner/TimelyPayout.svg",
    },

    {
        id: 2,
        title: "Easy-to-Use Partner Portal",
        description:
            "Manage leads, track applications and monitor commissions seamlessly through a single platform. No manual Excel tracking needed.",
        icon: "/recruitment-partner/PortalIcon.svg",
    },

    {
        id: 3,
        title: "End-to-End Admission Support",
        description:
            "From application, visas to post-arrival process, we handle all execution so you can focus on acquiring more students and growing revenue.",
        icon: "/recruitment-partner/Support.svg",
    },

    {
        id: 4,
        title: "Complete Transparency & Control",
        description:
            "Track every student journey and commission in real time with full visibility and zero ambiguity.",
        icon: "/recruitment-partner/identifier.svg",
    },

    {
        id: 5,
        title: "One Application for Multiple Universities",
        description:
            "Maximise conversions by applying to multiple universities through a single application, saving time while increasing admit success rates.",
        icon: "/recruitment-partner/graduation.svg",
    },

    {
        id: 6,
        title: "Dedicated Relationship Manager",
        description:
            "Get a dedicated account manager to handle operations and provide ongoing support so you can scale without operational bottlenecks.",
        icon: "/recruitment-partner/relationship.svg",
    },
];


const journeySteps = [
    {
        id:1,
        title: "Partner Onboarding, Portal Access & Training",
        icon: "/recruitment-partner/Liquid glass button.svg",
    },
    {
        id:2,
        title: "You Submit Student Profiles & Requirements",
        icon: "/test-prep/Take-a-diagnostic-assessment.svg",
    },
    {
        id:3,
        title: "We Handle University Applications & Offer Processing",
        icon: "/test-prep/Get-a-personalised-studyplan.svg",
    },
    {
        id:4,
        title: "We Provide Visa Assistance & Documentation Support",
        icon: "/test-prep/Begin-mentor-guided-test-prep.svg",
    },
    {
        id:5,
        title: "We Support Pre-Departure & Student Services",
        icon: "/test-prep/Take-mock-tets.svg",
    },
    {
        id:6,
        title: "ou Track Applications & Receive Commission Payouts",
        icon: "/test-prep/Achieve-your-target-score.svg",
    },
];
export default function RecruitmentPartnerPage() {

    return (
        <>
            <HeroBanner slug="recruitment-partner" minHeight={{ xs: 400, sm: 500, lg: 600 }} size="medium" />
            <FeatureCardsSection
                title="Why Partners Choose"
                highlight="MetaApply to Grow Revenue"
                items={revenueData}
                background={"none"}
            />
            <RecruitmentPartners highlightHeading={"Recruitment Partners"} journey={journeySteps} />
            <PartnerPortalSection />
            <JoinNetworkCTA />
            <StudyAbroadJourney />
            <PartneredUniversities />
            <SuccessStories page="recruitment-partner" type="testimonial" />
            <FAQSection page="recruitment-partner" />
            <CTASectionCommon
                title="Higher commissions, on-time payouts & dedicated support - Become a MetaApply partner Today"
                buttonText="Join Our Network"
                image="/recruitment-partner/businessman-businesswoman.svg"
                ImageWidth="620px"
                componentSx={{
                    pt: { xs: 0, md: 0 }, mt: { xs: 0, md: 0 }
                }}
                imageSx={{
                    right: {
                        md: 10,
                        lg: -30,
                    },
                }}
            />
        </>
    );
}
