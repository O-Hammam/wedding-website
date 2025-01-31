import React, { useEffect, useState } from "react";
import EventDetails from "./EventDetails";
import Header from "./Header";
import { events } from "../data/events";

const MarriageCeremony: React.FC = () => {
  const [showEventDetails, setShowEventDetails] = useState(false);

  useEffect(() => {
    const timerEventDetails = setTimeout(() => {
      setShowEventDetails(true);
    }, 2000); // Delay before showing EventDetails

    return () => {
      clearTimeout(timerEventDetails);
    };
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 container mx-auto px-4 py-4">
      <Header
        headerTagAr={events.ceremony.headerTagAr}
        headerTagEn={events.ceremony.headerTagEn}
      />
      <div
        className={`transition-all duration-700 ease-in-out max-h-screen ${
          showEventDetails ? "slide-down" : "hidden"
        }`}
      >
        <EventDetails event={events.ceremony} />
      </div>
    </div>
  );
};

export default MarriageCeremony;
