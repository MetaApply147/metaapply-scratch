import HeroBanner from "@/components/banner/HeroBanner";
import DestinationSections from "@/components/sections/Pages/studyAbroad/DestinationSections";
import StudyAbroadContent from "@/components/sections/Pages/studyAbroad/StudyAbroadContent";
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
    <div>
      <HeroBanner
        heroData={data.hero}
        minHeight={{ xs: 400, sm: 400, lg: 650 }}
        disableSectionPadding
        width="40%"
      />
      <StudyAbroadContent
        sections={[
          { id: "life-in", label: `Life in ${countryName}` },
          { id: "why-study", label: `Why Study in ${countryName}` },
          { id: "benefits", label: "Benefits" },
          { id: "eligibility", label: "Eligibility Criteria" },
          { id: "documents", label: "Required Documents" },
          { id: "visa", label: "Visa Requirements" },
          { id: "cost-of-study", label: `Cost of Study in ${countryName}` },
          { id: "universities", label: "Top Universities" },
          { id: "scholarships", label: "Scholarships" },
        ]}
      >
        <DestinationSections data={data} countryName={countryName}/>
      </StudyAbroadContent>
    </div>
  );
}
