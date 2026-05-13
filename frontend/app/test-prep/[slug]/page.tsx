import CTASectionCommon from "@/components/sections/CTASectionCommon";
import FAQSection from "@/components/sections/FAQSection";
import OurFaculty from "@/components/sections/Pages/test-prep/OurFaculty";
import AdvantagesSection from "@/components/sections/Pages/testPrepInner/AdvantagesSection";
import CoursesSection from "@/components/sections/Pages/testPrepInner/CoursesSection";
import ExamOverview from "@/components/sections/Pages/testPrepInner/examOverview";
import GlanceSection from "@/components/sections/Pages/testPrepInner/GlanceSection";
import HeroSection from "@/components/sections/Pages/testPrepInner/HeroSection";
import JourneySliderSection from "@/components/sections/Pages/testPrepInner/JourneySliderSection";
import PrepSlider from "@/components/sections/Pages/testPrepInner/PrepSlider";
import SuccessStories from "@/components/sections/SuccessStories";
import { fetchExam, fetchExamBySlug } from "@/services/testPrep";
import { notFound } from "next/navigation";

/* ---------------------------------------
   Generate all dynamic pages
--------------------------------------- */
export async function generateStaticParams() {
  const exams = await fetchExam();

  return exams
    .map((item: any) => item.slug || item.attributes?.slug)
    .filter(Boolean)
    .map((slug: string) => ({ slug }));
}

/* ---------------------------------------
   Types
--------------------------------------- */
type Props = {
  params: Promise<{
    slug: string;
  }>;
};

/* ---------------------------------------
   Page
--------------------------------------- */
export default async function TestPrepPage({ params }: Props) {
  const { slug } = await params;

  const data = await fetchExamBySlug(slug);

  if (!data) {
    notFound();
  }

  const exam = data.attributes || data;

  return (
    <>
      <HeroSection data={exam.heroSection} />

      <ExamOverview overview={exam.examOverview} highlights={exam.highlight} />

      <GlanceSection
        examName={data.title}
        format={exam.Format}
        scoringPattern={exam.scoringPattern}
        examDates={exam.examDates}
      />

      <PrepSlider examName={data.title} slides={data.testprepSlides} />

      <JourneySliderSection
        highlightHeading={data.journeyHeading}
        journey={data.journey}
      />

      <AdvantagesSection show={exam.Advantage} data={exam.advantagesSection} />

      <OurFaculty data={exam.faculty}/>

      <SuccessStories page={`${exam.title}`} />

      <CoursesSection examName={exam.title} courses={exam.courses} />

      <FAQSection page={`${exam.title}`} disableBottomPadding/>

      <CTASectionCommon
        title={data.ctaText}
        buttonText="Connect Now"
        image="/test-prep/Innerpages/Girl_2.webp"
        ImageWidth="439px"
      />
    </>
  );
}
