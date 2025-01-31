import React from "react";
import { useState, useEffect, useRef } from "react";
import { EventCard } from "./components/EventCard";
import { EventDetails } from "./components/EventDetails";
import { events } from "./data/events";
import Header from "./components/Header";
import "./Home.css";

const Home: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<
    "ceremony" | "reception" | null
  >(null);
  const [showEventCards, setShowEventCards] = useState(false);
  const eventCardRef = useRef<HTMLDivElement | null>(null);

  const handleEventClick = (event: "ceremony" | "reception") => {
    setSelectedEvent(selectedEvent === event ? null : event);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEventCards(true);
    }, 2000); // Delay before showing event cards

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (selectedEvent && eventCardRef.current) {
      eventCardRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedEvent]);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="container mx-auto px-4 py-4">
        <Header
          headerTagAr={events.reception.headerTagAr}
          headerTagEn={events.reception.headerTagEn}
        />

        {/* Event Cards Container */}
        <div ref={eventCardRef} className="space-y-6 scroll-mt-4">
          {showEventCards && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <EventCard
                  title={events.reception.titleEn}
                  titleAr={events.reception.titleAr}
                  date={""}
                  onClick={() => handleEventClick("reception")}
                  isSelected={selectedEvent === "reception"}
                  time={""}
                  venue={""}
                  venueAr={""}
                  isCollapsed={false}
                />
              </div>
              <div>
                <EventCard
                  title={events.ceremony.titleEn}
                  titleAr={events.ceremony.titleAr}
                  date={""}
                  onClick={() => handleEventClick("ceremony")}
                  isSelected={selectedEvent === "ceremony"}
                  time={""}
                  venue={""}
                  venueAr={""}
                  isCollapsed={false}
                />
              </div>
            </div>
          )}

          {/* Event Details Container */}
          <div
            className={`transition-all duration-700 ease-in-out ${
              selectedEvent
                ? "max-h-screen"
                : "max-h-0 overflow-hidden max-w-none"
            }`}
          >
            {selectedEvent === "ceremony" && (
              <EventDetails event={events.ceremony} />
            )}
            {selectedEvent === "reception" && (
              <EventDetails event={events.reception} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
