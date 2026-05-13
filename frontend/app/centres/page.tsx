import HeroBanner from "@/components/banner/HeroBanner";
import FAQSection from "@/components/sections/FAQSection";
import MetaapplyProcess from "@/components/sections/MetaapplyProcess";
import PopularDestinations from "@/components/sections/PopularDestinations";

const EventsPage = async () => {
  return (
    <>
      <HeroBanner
        slug="centres"
        minHeight={{ xs: 400, sm: 400, lg: 700 }}
        size="large"
        rightMaxWidth={480}
        alignSelf="flex-end"
        leftComponentWidth={'60%'}
      />

      <MetaapplyProcess/>

      <PopularDestinations/>

      <FAQSection page="centres"/>

    </>
  );
};

export default EventsPage;
