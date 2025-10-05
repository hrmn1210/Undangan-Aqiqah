import React from "react";

interface ClosingProps {
  childName: string;
}

const Closing: React.FC<ClosingProps> = ({ childName }) => {
  return (
    <section
      className="relative py-24 px-6 text-center text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      <div className="absolute inset-0 bg-[#3A5A40]/80"></div>
      <div className="relative z-10 max-w-xl mx-auto">
        <p className="mb-6 text-stone-200 leading-relaxed">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga,
          apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu
          kepada putra kami.
        </p>
        <p className="mb-8 text-stone-200 leading-relaxed">
          Atas kehadiran dan doa restunya, kami ucapkan terima kasih.
        </p>
        <h3 className="font-great-vibes text-5xl mb-2">
          Wassalamu'alaikum Wr. Wb.
        </h3>
        <div className="mt-16">
          <p className="text-lg text-stone-200">Hormat kami yang berbahagia,</p>
          <h4 className="font-great-vibes text-4xl mt-2">
            Keluarga Budi & Siti
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Closing;
