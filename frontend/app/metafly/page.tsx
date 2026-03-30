import FAQSection from '@/components/sections/FAQSection';
import ServingDestinations from '@/components/sections/ServicesPageDestinations';
import SuccessStories from '@/components/sections/SuccessStories';

export default function MetaFlyPage() {
  return (
    <>
      {/* Success Story */}
      <ServingDestinations />
      <SuccessStories page="metafly" type="testimonial" />
      <FAQSection page="metafly" />



    </>
  );
}