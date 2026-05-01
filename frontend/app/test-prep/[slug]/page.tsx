import CTASectionCommon from "@/components/sections/CTASectionCommon";
import FAQSection from "@/components/sections/FAQSection";
import HeroSection from "@/components/sections/Pages/testPrepInner/HeroSection";
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

        <FAQSection page="ielts"/>

      {/* <CTASectionCommon title="" description="" image=""/> */}
    </>
  );
}