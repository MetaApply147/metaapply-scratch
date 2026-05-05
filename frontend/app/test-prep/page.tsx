import HeroBanner from "@/components/banner/HeroBanner";
import FAQSection from "@/components/sections/FAQSection";
import AchiversSection from "@/components/sections/Pages/test-prep/AchieversSection";
import CTASection from "@/components/sections/Pages/test-prep/CTASection";
import JourneyToDreamScoreSection from "@/components/sections/Pages/test-prep/JourneyToDreamScoreSection";
import KnowExamsSection from "@/components/sections/Pages/test-prep/KnowExamsSection";
import OurFaculty from "@/components/sections/Pages/test-prep/OurFaculty";
import QuickOverviewSection from "@/components/sections/Pages/test-prep/QuickOverviewSection";
import QuizCTASection from "@/components/sections/Pages/test-prep/QuizCTASection";
import UpcomingBatches from "@/components/sections/Pages/test-prep/UpcomingBatches";
import WhyMetaApply from "@/components/sections/Pages/test-prep/WhyMetaapply";
import SuccessStories from "@/components/sections/SuccessStories";

export default function TestPrep() {
  const facultyData = [
    {
      title: "Results-Focused Mentorship",
      icon: { url: "/test-prep/Result-focused-mentorship.svg" },
    },
    {
      title: "Global Admissions Insight",
      icon: { url: "/test-prep/Global-admissions-insight.svg" },
    },
    {
      title: "Data-driven Coaching",
      icon: { url: "/test-prep/Data-driven-coaching.svg" },
    },
    {
      title: "Certified Test Specialists",
      icon: { url: "/test-prep/Certified-test-specialists.svg" },
    },
    {
      title: "15+ Years Experience",
      icon: { url: "/test-prep/15+-yrs-exp..svg" },
    },
    {
      title: "Personalised Learning Plans",
      icon: { url: "/test-prep/Personalised-learning-plans.svg" },
    },
  ];

  return (
    <>
      <HeroBanner
        slug="test-prep"
        minHeight={{ xs: 400, sm: 400, lg: 720 }}
        disableSectionPadding
        rightMaxWidth={580}
        alignSelf="flex-end"
      />
      <AchiversSection />
      <QuickOverviewSection />
      <KnowExamsSection />
      <QuizCTASection />
      <UpcomingBatches />
      <OurFaculty data={facultyData}/>
      <WhyMetaApply />
      <JourneyToDreamScoreSection />
      <SuccessStories page="test-prep" />
      <FAQSection page="test-prep" disablePadding />
      <CTASection />
    </>
  );
}
