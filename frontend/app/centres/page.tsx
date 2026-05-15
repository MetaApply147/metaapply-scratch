import HeroBanner from "@/components/banner/HeroBanner";
import FAQSection from "@/components/sections/FAQSection";
import GlobalJourneyCTA from "@/components/sections/GlobalJourneyCTA";
import MetaapplyProcess from "@/components/sections/MetaapplyProcess";
import CentreService from "@/components/sections/Pages/centres/CentreService";
import PopularDestinations from "@/components/sections/PopularDestinations";
import StudyCentreGrid from "@/components/sections/StudyCentreGrid";

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
        isList={true}
      />

      <StudyCentreGrid buttonText="know More"/>

      <CentreService/>

      <MetaapplyProcess/>

      <PopularDestinations disablePadding/>

      <FAQSection page="centres"/>

      <GlobalJourneyCTA title="Visit Us for a Free 1:1 Counselling Session" buttonText="Book a Visit"  />

    </>
  );
};

export default EventsPage;
