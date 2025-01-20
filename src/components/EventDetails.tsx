import React from "react";
import { events } from "../data/events";

type EventDetailsProps = {
  event: {
    titleEn: string;
    titleAr: string;
    dateEn: string;
    dateAr: string;
    timeEn: string;
    timeAr: string;
    venueEn: string;
    hallAr: string;
    venueAr: string;
    areaAr: string;
    mapUrl: string;
  };
};

export const EventDetails = ({ event }: EventDetailsProps) => {
  return (
    <div className="grid grid-cols-1 mt-8">
      {/* Arabic Section - Right Side */}
      <div
        className="reverse font-arabicAmiri border-4 border-gold p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-bl from-gold-light to-gray-100 relative transform hover:-translate-y-1"
        dir="rtl"
        style={{
          backgroundImage: `url('/assets/pattern.svg')`,
          backgroundRepeat: "repeat",
          backgroundSize: "1000px", // Adjust size as needed
          backgroundBlendMode: "hue", // Makes pattern subtle
          backgroundColor: "rgba(250, 250, 250, 0.75)",
        }}
      >
        <div className="space-y-2 text-2xl mb-6 text-zinc-600">
          <p className="flex flex-col justify-between items-center gap-2">
            {event.titleAr}
          </p>
          <p className="flex flex-col justify-between items-center gap-2">
            <span className="text-center">{event.dateAr}</span>
            <span className="text-center">{event.timeAr}</span>
          </p>
          <p className="flex flex-col justify-between items-center gap-2">
            <span className="text-center">{event.hallAr}</span>
            <span className="text-center">{event.venueAr}</span>
            <span className="text-center">{event.areaAr}</span>
          </p>
        </div>
        <div className="font-english space-y-2 text-md text-zinc-600">
          <p className="flex flex-col justify-between items-center gap-2 mt-2">
            <span className="text-center">
              {event.dateEn} at {event.timeEn}
            </span>
          </p>
          <p className="flex flex-col justify-between items-center gap-2 mt-1">
            <span className="text-center">{event.venueEn}</span>
          </p>
        </div>
      </div>
      {/* Map section */}
      <div className="col-span-full mb-8">
        <div className="max-w-4xl mx-auto mt-8">
          <div className="border-4 border-gold-light rounded-sm overflow-hidden shadow-xl">
            <iframe
              src={event.mapUrl}
              height="350"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
