import { useEffect, useState } from "react";

const LandingPage: React.FC = () => {
  const [showNames, setShowNames] = useState(false);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timerNames = setTimeout(() => {
      setShowNames(true);
    }, 1000); // Delay before showing names

    const timerImage = setTimeout(() => {
      setShowImage(true);
    }, 500); // Delay before showing image

    return () => {
      clearTimeout(timerNames);
      clearTimeout(timerImage);
    };
  }, []);
  return (
    <div className="min-h-screen bg-neutral-50 container mx-auto px-4 py-4">
      <div
        className={`w-64 h-auto mx-auto transform hover:scale-105 transition-transform duration-300 ${
          showImage ? "slide-down" : "hidden"
        }`}
      >
        <img
          src="/assets/couple.webp"
          alt="Happy Couple"
          className="w-full h-full object-cover mb-10"
        />
      </div>
      <div className="relative mb-2 grid grid-cols-1 justify-items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 relative items-center max-w-4xl">
          <div className="flex justify-center items-center">
            <h1
              className={`text-7xl leading-[0.8] font-englishTitle font-bold px-4 mt-3 text-gold-dark text-center drop-shadow-md ${
                showNames ? "slide-down" : "hidden"
              }`}
            >
              Groom&nbsp;
              <br className="md:hidden" />
              &amp;&nbsp;Bride
            </h1>
          </div>
          <h1
            className={`reverse text-7xl font-arabicTitle font-bold inline-block px-4 mt-8 text-gold-dark text-center drop-shadow-md ${
              showNames ? "slide-down" : "hidden"
            }`}
            dir="rtl"
          >
            اسم الزوجين
          </h1>
        </div>
        <div
          className={`pb-2 space-y-2 ${showNames ? "slide-down" : "hidden"}`}
        >
          <p className="mt-6 text-lg text-center text-jetText">
            ───── ⋆⋅☆⋅⋆ ─────
          </p>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
