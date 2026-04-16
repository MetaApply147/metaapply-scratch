"use client";

import { useEffect, useState } from "react";
import { fetchEvents } from "@/services/events";
import EventsTabs from "./EventsTabs";

const EventsPageSection = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [upcoming, setUpcoming] = useState<any[]>([]);
  const [past, setPast] = useState<any[]>([]);

  useEffect(() => {
    const loadEvents = async () => {
    const data = await fetchEvents();

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const upcomingEvents = data.filter(
        (event: any) => event.category === "upcoming"
    );

    const pastEvents = data.filter(
        (event: any) => event.category === "past"
    );

      setEvents(data);
      setUpcoming(upcomingEvents);
      setPast(pastEvents);
    };

    loadEvents();
  }, []);

  return (
    <>
      <EventsTabs upcoming={upcoming} past={past} />
    </>
  );
};

export default EventsPageSection;