import React, { useState } from "react";
import { Expand, X } from "./Icons";

const Gallery: React.FC = () => {
  const images = [
    "/hero.png",
    "/hero.png",
    "/hero.png",
    "/hero.png",
    "/hero.png",
    "/hero.png",
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 px-6 bg-[#FBF9F7] fade-in">
      <div className="text-center">
        <h2 className="font-great-vibes text-6xl text-[#3A5A40] mb-4">
          Momen Bahagia
        </h2>
        <p className="max-w-md mx-auto mb-12 text-slate-500">
          Potret kebahagiaan kami bersama sang buah hati.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
        {images.map((src, index) => (
          <div
            key={index}
            className="group overflow-hidden rounded-lg shadow-md aspect-square relative cursor-pointer"
            onClick={() => setSelectedImage(src)}
          >
            <img
              src={src}
              alt={`Baby moment ${index + 1}`}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <Expand className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-5 right-5 text-white/80 hover:text-white"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-full rounded-lg shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
