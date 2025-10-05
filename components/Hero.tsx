import React from "react";
import { Floral } from "./Icons";

interface HeroProps {
  childName: string;
  fatherName: string;
  motherName: string;
}

const Hero: React.FC<HeroProps> = ({ childName, fatherName, motherName }) => {
  return (
    <section
      className="relative h-[90vh] flex flex-col items-center justify-center text-center text-white p-6 bg-cover bg-bottom"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#3A5A40]/80 to-transparent"></div>
      <div className="relative z-10 flex flex-col items-center">
        <p
          className="text-lg tracking-wider mb-2 text-stone-200 fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Tasyakuran Aqiqah & Gunting Rambut
        </p>
        <div className="my-4 fade-in" style={{ animationDelay: "0.5s" }}>
          <Floral className="w-24 h-24 text-white/80" />
        </div>
        <h1
          className="font-great-vibes text-7xl md:text-8xl my-4 drop-shadow-md fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          {childName}
        </h1>
        <p
          className="text-md mt-4 text-stone-200 fade-in"
          style={{ animationDelay: "1.1s" }}
        >
          Putra dari:
        </p>
        <h2
          className="text-2xl font-semibold mt-1 fade-in"
          style={{ animationDelay: "1.4s" }}
        >
          {fatherName} & {motherName}
        </h2>
      </div>
    </section>
  );
};

export default Hero;
