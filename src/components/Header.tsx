import React from "react";

const Header: React.FC = () => {
  return (
    <div className="mb-6">
      <img
        src="/assets/bismillah.svg"
        alt="Bismillah"
        className="w-40 h-auto mx-auto object-cover mb-2 py-2 border-b border-gold"
      />
      <div className="w-64 h-auto mx-auto transform hover:scale-105 transition-transform duration-300">
        <img
          src="/assets/couple.webp"
          alt="Happy Couple"
          className="w-full h-full object-cover mb-10"
        />
      </div>
      <div className="relative mb-2 grid grid-cols-1 justify-items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 relative items-center max-w-4xl">
          <div className="flex justify-center items-center">
            <h1 className="text-6xl font-englishTitle font-bold px-4 mt-2 text-gold-dark text-center drop-shadow-md">
              Groom&nbsp;
              <br className="md:hidden" />
              &amp;&nbsp;Bride
            </h1>
          </div>
          <h1
            className="reverse text-7xl font-arabicTitle font-bold inline-block px-4 mt-8 text-gold-dark text-center drop-shadow-md"
            dir="rtl"
          >
            اسم الزوجين
          </h1>
        </div>
      </div>
      <div className="pb-2 space-y-2">
        <div className="mb-4 drop-shadow-sm">
          <p className="text-lg text-center text-jetText">───── ⋆⋅☆⋅⋆ ─────</p>
          <h2 className="mt-2 text-5xl font-arabicTitle font-bold text-center text-gold-dark">
            دعوة زفاف
          </h2>
          <h2 className="font-english text-2xl font-semibold my-2 text-center text-gold-dark">
            Wedding Invitation
          </h2>
          <p className="text-lg text-center text-jetText">───── ⋆⋅☆⋅⋆ ─────</p>
        </div>
        <div className="font-arabicAmiri space-y-2 text-2xl text-center text-jetText">
          <p>نتـشـرف بدعـوتـكم لتـشاركــونا فـرحـتنا</p>
          <p>وذلك بمـشــيـئـة الله تـعــالى</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
