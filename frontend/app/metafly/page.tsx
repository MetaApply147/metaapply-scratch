import FAQSection from '@/components/sections/FAQSection';
import SuccessStories from '@/components/sections/SuccessStories';

export default function MetaFlyPage() {
  return (
    <>
      {/* Success Story */}
        <SuccessStories page="metafly" type="testimonial" />

      <FAQSection page="metafly" />
      
    </>
  );
}