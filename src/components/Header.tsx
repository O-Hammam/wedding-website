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
          src="/assets/omarwsalma-3.webp"
          alt="Happy Couple"
          className="w-full h-full object-cover mb-8"
        />
      </div>
      <div className="relative mb-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative items-center">
          <div className="flex justify-center items-center">
            <h1 className="text-6xl font-englishTitle font-bold px-4 pt-2 text-gold-dark text-center drop-shadow-md">
              Groom&nbsp;
              <br className="md:hidden" />
              &amp;&nbsp;Bride
            </h1>
          </div>
          <h1
            className="reverse text-7xl font-arabicTitle font-bold inline-block px-4 pt-4 text-gold-dark text-center drop-shadow-md"
            dir="rtl"
          >
            عُمَر وَسَلْمَىٰ
          </h1>
        </div>
      </div>
      <div className="pb-2 space-y-2">
        <div className="mb-4 drop-shadow-sm">
          <p className="text-lg text-center text-sage-dark">
            ───── ⋆⋅☆⋅⋆ ─────
          </p>
          <h2 className="text-5xl font-arabicTitle font-bold text-center text-gold-dark">
            دعوة زفاف
          </h2>
          <h2 className="font-englishTitle text-2xl font-semibold mt-2 text-center text-gold-dark">
            Wedding Invitation
          </h2>
          <p className="text-lg text-center text-sage-dark">
            ───── ⋆⋅☆⋅⋆ ─────
          </p>
        </div>
        <p className="font-arabicAmiri text-2xl text-center text-sage-dark">
          نتشرف بدعوتكم لتشاركونا فرحتنا
        </p>
        <p className="font-arabicAmiri text-2xl text-center text-sage-dark">
          وذلك بمشيئة الله تعالى
        </p>
      </div>
    </div>
  );
};

export default Header;
