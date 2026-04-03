import HeroBanner from '@/components/banner/HeroBanner';
import TwoColumnFormSection from '@/components/sections/TwoColumnFormSection';
import FAQSection from '@/components/sections/FAQSection';
import ComfortConvenience from '@/components/sections/Pages/metastay/ComfortConvenience';
import MetaStayLeftInfo from '@/components/sections/Pages/metastay/MetaStayLeftInfo';
import MetaStayProcess from '@/components/sections/Pages/metastay/MetaStayProcess';
import SuccessStories from '@/components/sections/SuccessStories';
import AccomodationDestination from '@/components/sections/Pages/metastay/AccomodationDestination';
import AccommodationOptions from '@/components/sections/Pages/metastay/AccomodationOptions';
import { baseFields } from '@/config/forms/base.fields';

export default function MetaStayPage() {
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
      {/* HERO */}
      <HeroBanner slug="metastay" size="medium" />

      {/* PROCESS */}
      <MetaStayProcess />

      {/* Accomodation Destination */}
      <AccomodationDestination/>

      {/* TWO COLUMN SECTION */}
      <TwoColumnFormSection formSchema={schema} formWidth={'84%'}>
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