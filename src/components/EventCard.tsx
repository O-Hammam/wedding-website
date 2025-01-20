type EventCardProps = {
  title: string;
  titleAr: string;
  date: string;
  time: string;
  venue: string;
  venueAr: string;
  onClick: () => void;
  isSelected: boolean;
  isCollapsed: boolean;
};

export const EventCard = ({
  title,
  titleAr,
  date,
  time,
  venue,
  venueAr,
  onClick,
  isSelected,
  isCollapsed,
}: EventCardProps) => {
  return (
    <div
      onClick={onClick}
      className={`
        cursor-pointer transition-all duration-300 ease-in-out
        ${isSelected ? "col-span-2 h-auto" : "col-span-1"}
        ${
          isCollapsed
            ? "h-24 overflow-hidden opacity-70 hover:opacity-100"
            : "h-auto"
        }
        border-4 border-gold rounded-lg
        ${
          isSelected
            ? "bg-gold-light shadow-2xl"
            : "bg-neutral-50 hover:shadow-xl "
        }
      `}
    >
      <div className="py-4 px-2">
        {/* English Section */}
        <div className="mb-2">
          <h3 className="text-3xl font-englishTitle text-gold-dark text-center mb-2">
            {title}
          </h3>
          <p className="text-center text-zinc-700">{date}</p>
          {!isCollapsed && (
            <>
              <p className="text-center text-zinc-700 mt-2">{time}</p>
              <p className="text-center text-zinc-700 mt-2">{venue}</p>
            </>
          )}
        </div>

        {/* Arabic Section */}
        <div>
          <h3
            className="text-3xl font-arabicTitle text-gold-dark text-center mb-2"
            dir="rtl"
          >
            {titleAr}
          </h3>
          {!isCollapsed && (
            <p className="text-center text-zinc-700 mt-2" dir="rtl">
              {venueAr}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
