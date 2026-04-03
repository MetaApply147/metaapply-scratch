import FAQSection from '@/components/sections/FAQSection';
import ServingDestinations from '@/components/sections/ServicesPageDestinations';
import SuccessStories from '@/components/sections/SuccessStories';
import HeroBanner from '@/components/banner/HeroBanner';
import { baseFields } from '@/config/forms/base.fields';
import MetaFlyProcess from '@/components/sections/Pages/metafly/MetaFlyProcess';
import TwoColumnFormSection from '@/components/sections/TwoColumnFormSection';
import MetaFlyLeftInfo from '@/components/sections/Pages/metafly/MetaFlyLeftInfo';

export default function MetaFlyPage() {
  const schema = {
      formId: "k-12",
      fields: baseFields,
      extraPayload: {
          mx_Program_Products: "",
          mx_Marketing_Pages: ""
      },
  };

  return (
    <>
      {/* Hero Section */}
      <HeroBanner slug="metafly" size="medium" />

      {/* Process section  */}
      <MetaFlyProcess/>

      {/* MetaFly Content Form Section */}
      <TwoColumnFormSection formSchema={schema} formWidth={'84%'} bgColor="#F7FBFF">
        <MetaFlyLeftInfo />
      </TwoColumnFormSection>

      {/* Services */}
      <ServingDestinations/>

      {/* Success Story */}
      <SuccessStories page="metafly" type="testimonial" bgColor={'#F2F2F285'} 
        cta={{
          label: "Talk to Our Expert",
          link: "/#",
        }}/>

      {/* FAQs */}
      <FAQSection page="metafly" />



    </>
  );
}