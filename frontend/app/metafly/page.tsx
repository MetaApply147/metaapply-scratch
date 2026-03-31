import FAQSection from '@/components/sections/FAQSection';
import ServingDestinations from '@/components/sections/ServicesPageDestinations';
import SuccessStories from '@/components/sections/SuccessStories';
import HeroBanner from '@/components/banner/HeroBanner';
import DynamicLeadForm from "@/components/forms/DynamicLeadForm";
import { metaflyForm } from "@/config/forms/metafly.form";

export default function MetaFlyPage() {
  return (
    <>
      <section className="max-w-md mx-auto p-8 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Enquire Now</h2>
        <DynamicLeadForm schema={metaflyForm} />
      </section>
      {/* Hero Section */}
      <HeroBanner slug="metafly" size="medium" />

      {/* Success Story */}
      <ServingDestinations />
      <SuccessStories page="metafly" type="testimonial" />
      <FAQSection page="metafly" />



    </>
  );
}