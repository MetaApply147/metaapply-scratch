import FAQSection from '@/components/sections/FAQSection';
import ServingDestinations from '@/components/sections/ServicesPageDestinations';
import SuccessStories from '@/components/sections/SuccessStories';
import HeroBanner from '@/components/banner/HeroBanner';
import { metaflyForm } from "@/config/forms/metafly.form";
import MetaFlyProcess from '@/components/sections/Pages/metafly/MetaFlyProcess';
import TwoColumnFormSection from '@/components/common/TwoColumnFormSection';
import MetaFlyLeftInfo from '@/components/sections/Pages/metafly/MetaFlyLeftInfo';

export default function MetaFlyPage() {
  const schema = {
    formId: "metafly_form",
    submitLabel: "Apply Now",
    fields: metaflyForm,

    extraPayload: {
      Program_Products: "Study Abroad",
    },
  };

  return (
    <>
      {/* Hero Section */}
      <HeroBanner slug="metafly" size="medium" />

      {/* Process section  */}
      <MetaFlyProcess/>

      {/* MetaFly Content Form Section */}
      <TwoColumnFormSection formSchema={metaflyForm}>
        <MetaFlyLeftInfo />
      </TwoColumnFormSection>

      {/* Services */}
      <ServingDestinations />

      {/* Success Story */}
      <SuccessStories page="metafly" type="testimonial" />

      {/* FAQs */}
      <FAQSection page="metafly" />



    </>
  );
}