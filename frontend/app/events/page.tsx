import EventsPageSection from "@/components/sections/Pages/events/EventsPageSection";
import HeroBanner from "@/components/banner/HeroBanner";

const EventsPage = async () => {
  return (
    <>
      <HeroBanner
        slug="events"
        minHeight={{ xs: 400, sm: 400, lg: 450 }}
        size="medium"
        disableSectionPadding
        rightMaxWidth={480}
        alignSelf="flex-end"
      />

      <EventsPageSection />
    </>
  );
};

export default EventsPage;
