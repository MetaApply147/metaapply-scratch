import HeroBanner from "@/components/banner/HeroBanner";
import CalculatorsSection from "@/components/sections/CalculatorsSection";
import CTASectionCommon from "@/components/sections/CTASectionCommon";
import FAQSection from "@/components/sections/FAQSection";
import MetaapplyProcess from "@/components/sections/MetaapplyProcess";
import DestinationBlogs from "@/components/sections/Pages/studyAbroad/DestinationBlogs";
import DestinationPageClient from "@/components/sections/Pages/studyAbroad/DestinationPageClient";
import ScholarshipProgrammes from "@/components/sections/Pages/studyAbroad/ScholarshipProgrammes";
import StudentTrust from "@/components/sections/Pages/studyAbroad/StudentTrust";
import TopUniversities from "@/components/sections/Pages/studyAbroad/TopUniversities";
import {
  fetchDestinations,
  fetchDestinationBySlug,
} from "@/services/destination";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const pages = await fetchDestinations();

  return pages.map((item: any) => ({
    slug: item.slug,
  }));
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const data = await fetchDestinationBySlug(slug);

  if (!data) {
    notFound();
  }

  const countryName = data.title.replace("Study in ", "");

  return (
    <>
      <HeroBanner
        heroData={data.hero}
        minHeight={{ xs: 400, sm: 400, lg: 650 }}
        disableSectionPadding
        width="40%"
      />

      <DestinationPageClient data={data} countryName={countryName} />

      <StudentTrust/>

      <TopUniversities data={data?.topUniversities} countryName={countryName}/>

      <ScholarshipProgrammes data={data}/>

      <CalculatorsSection/>

      <MetaapplyProcess/>

      <DestinationBlogs  destinationTitle={data.title} countryName={countryName}/>

      <FAQSection page={`study-in-${countryName}`} disablePadding/>

      <CTASectionCommon title="Ready to begin your Journey?" description="Explore top universities, programs, and opportunities in UK aligned with your future goals." buttonText="Talk to Our Experts" image="/study-abroad/Inner-pages/CTA-Girl.webp" ImageWidth="423px"/>
    </>
  );
}
