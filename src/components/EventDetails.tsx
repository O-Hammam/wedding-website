import "./EventDetails.css";

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
      <div
        className={`event-details relative font-semibold font-arabicAmiri border-4 p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 ${
          event.titleEn === "Marriage Ceremony"
            ? "border-sage-dark bg-sage-light"
            : "border-gold-dark bg-gold-light"
        }`}
        dir="rtl"
      >
        <div className="space-y-2 text-2xl mb-6 text-sage-dark">
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
        <div className="font-english space-y-2 text-md text-jetText">
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
      <div className="col-span-full mb-8 mt-2 relative">
        <div className="max-w-4xl mx-auto mt-8">
          <p className="text-center text-gold-dark font-bold font-arabicAmiri text-xl mb-2">
            •✦• ── •• الــخــريــطــة •• ── •✦•
          </p>
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
          <p className="text-center text-gold-dark font-bold font-arabicAmiri text-xl mt-4">
            •✦• ────── ••• ────── •✦•
          </p>
        </div>
      </div>
    </div>
  );
};
