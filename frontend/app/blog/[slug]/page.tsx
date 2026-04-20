import { fetchEvents } from "@/services/events";
import EventHero from "@/components/sections/Pages/eventinner/EventHero";
import EventMainSection from "@/components/sections/Pages/eventinner/EventMainSection";
import PastEvents from "@/components/sections/Pages/eventinner/PastEvents";

type Props = {
  params: Promise<{ slug: string }>;
};

const EventDetailPage = async ({ params }: Props) => {
  const { slug } = await params;

  const events = await fetchEvents();

  const event = events.find(
    (item: any) => item.slug?.toLowerCase() === slug?.toLowerCase()
  );

  if (!event) return <div>Event not found</div>;

  return (
    <>
      <EventHero event={event} />

      <EventMainSection event={event} />

      <PastEvents
        events={events.filter(
          (item: any) => item.slug !== event.slug
        )}
      />
    </>
  );
};

export default EventDetailPage;