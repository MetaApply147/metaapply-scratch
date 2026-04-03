import HeroBanner from '@/components/banner/HeroBanner';
import TwoColumnFormSection from '@/components/sections/TwoColumnFormSection';
import FAQSection from '@/components/sections/FAQSection';
import ComfortConvenience from '@/components/sections/Pages/metastay/ComfortConvenience';
import MetaStayLeftInfo from '@/components/sections/Pages/metastay/MetaStayLeftInfo';
import MetaStayProcess from '@/components/sections/Pages/metastay/MetaStayProcess';
import SuccessStories from '@/components/sections/SuccessStories';
import { metaflyForm } from "@/config/forms/metafly.form";
import AccomodationDestination from '@/components/sections/Pages/metastay/AccomodationDestination';
import AccommodationOptions from '@/components/sections/Pages/metastay/AccomodationOptions';

export default function MetaStayPage() {
  return (
    <>
      {/* HERO */}
      <HeroBanner slug="metastay" size="medium" />

      {/* PROCESS */}
      <MetaStayProcess />

      {/* Accomodation Destination */}
      <AccomodationDestination/>

      {/* TWO COLUMN SECTION */}
      <TwoColumnFormSection formSchema={metaflyForm} formWidth={'84%'}>
        <MetaStayLeftInfo />
      </TwoColumnFormSection>

      {/* Accomodation Optinons */}
      <AccommodationOptions/>

      <ComfortConvenience/>

      {/* SUCCESS STORIES */}
      <SuccessStories page="metastay" type="testimonial" bgColor={'#F2F2F285'}  cta={{
        label: "Talk to Our Expert",
        link: "/#",
      }} />

      {/* FAQ */}
      <FAQSection page="metastay" />
    </>
  );
}