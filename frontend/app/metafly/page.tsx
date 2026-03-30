import FAQSection from '@/components/sections/FAQSection';
import SuccessStories from '@/components/sections/SuccessStories';
import HeroBanner from '@/components/banner/HeroBanner';

export default function MetaFlyPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroBanner slug="metafly" size="medium"/>

      {/* Success Story */}
        <SuccessStories page="metafly" type="testimonial" />

      <FAQSection page="metafly" />
      
    </>
  );
}