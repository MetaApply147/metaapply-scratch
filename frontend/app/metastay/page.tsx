import HeroBanner from '@/components/banner/HeroBanner';
import TwoColumnFormSection from '@/components/common/TwoColumnFormSection';
import FAQSection from '@/components/sections/FAQSection';
import MetaStayLeftInfo from '@/components/sections/Pages/metastay/MetaStayLeftInfo';
import MetaStayProcess from '@/components/sections/Pages/metastay/MetaStayProcess';
import SuccessStories from '@/components/sections/SuccessStories';
import { metaflyForm } from "@/config/forms/metafly.form";

export default function MetaStayPage() {
  return (
    <>
      {/* HERO */}
      <HeroBanner slug="metastay" size="medium" />

      {/* PROCESS */}
      <MetaStayProcess />

      {/* TWO COLUMN SECTION */}
      <TwoColumnFormSection formSchema={metaflyForm}>
            <MetaStayLeftInfo />
      </TwoColumnFormSection>

      {/* SUCCESS STORIES */}
      <SuccessStories page="metastay" type="testimonial" />

      {/* FAQ */}
      <FAQSection page="metastay" />
    </>
  );
}