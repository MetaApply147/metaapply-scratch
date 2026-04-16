import { fetchEvents } from "@/services/events";
import EventsPageSection from "@/components/sections/Pages/events/EventsPageSection";

const EventsPage = async () => {
  const events = await fetchEvents();

  console.log("EVENTS:", events); // check in terminal

  return <EventsPageSection />;
};

export default EventsPage;