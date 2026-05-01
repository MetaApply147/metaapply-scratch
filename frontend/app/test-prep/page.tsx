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
import { Box } from "@mui/material";

export default function TestPrep() {
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
      <OurFaculty />
      <WhyMetaApply />
      <JourneyToDreamScoreSection />
      <SuccessStories page="test-prep" />
      <FAQSection page="test-prep" disablePadding />
      <CTASection />
    </>
  );
}
