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
  onClick,
  isSelected,
}: EventCardProps) => {
  return (
    <div
      onClick={onClick}
      className={`
        cursor-pointer transition-all duration-300 ease-in-out relative
        border-4 rounded-md
        ${title === "Marriage Ceremony" ? "text-sage-dark" : ""}
        ${title === "Wedding Reception" ? "text-gold-dark" : ""}
        ${
          !isSelected
            ? "bg-neutral-50 hover:shadow-xl"
            : isSelected && title === "Marriage Ceremony"
            ? "bg-sage-light border-sage-dark shadow-2xl"
            : isSelected && title === "Wedding Reception"
            ? "bg-gold-light border-gold-dark shadow-2xl"
            : "hover:shadow-xl"
        }
      `}
    >
      <div className="py-3 px-2">
        {/* Arabic Section */}
        <div>
          <h3 className="text-3xl font-arabicTitle text-center mb-4" dir="rtl">
            {titleAr}
          </h3>
        </div>
        {/* English Section */}
        <div className="mb-2">
          <h3 className="text-2xl font-englishTitle text-center mt-2">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};
