import React, { useState, useEffect } from "react";
import { Heart, Quote, Trash } from "./Icons";

interface Wish {
  id: number;
  name: string;
  message: string;
}

const initialWishes: Wish[] = [];

const WISHES_STORAGE_KEY = "aqiqah_wishes";

const Wishes: React.FC = () => {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    try {
      const savedWishes = localStorage.getItem(WISHES_STORAGE_KEY);
      if (savedWishes) {
        setWishes(JSON.parse(savedWishes));
      } else {
        setWishes(initialWishes);
        localStorage.setItem(WISHES_STORAGE_KEY, JSON.stringify(initialWishes));
      }
    } catch (error) {
      console.error("Failed to load wishes from localStorage", error);
      setWishes(initialWishes);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && message.trim()) {
      const newWish: Wish = {
        id: Date.now(),
        name,
        message,
      };
      const updatedWishes = [newWish, ...wishes];
      setWishes(updatedWishes);
      localStorage.setItem(WISHES_STORAGE_KEY, JSON.stringify(updatedWishes));
      setName("");
      setMessage("");
    }
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus ucapan ini?")) {
      const updatedWishes = wishes.filter((wish) => wish.id !== id);
      setWishes(updatedWishes);
      localStorage.setItem(WISHES_STORAGE_KEY, JSON.stringify(updatedWishes));
    }
  };

  return (
    <section className="py-20 px-6 bg-[#FBF9F7] fade-in">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-great-vibes text-6xl text-[#3A5A40] mb-4">
          Ucapan & Doa
        </h2>
        <p className="mb-12 text-slate-500">
          Kirimkan ucapan dan doa terbaik Anda untuk putra kami. Kehadiran dan
          doa Anda adalah anugerah terindah.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-lg p-8 text-left mb-12 border-t-4 border-[#A3B18A]"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Nama
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A3B18A] transition-shadow"
              placeholder="Tuliskan nama Anda"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Ucapan & Doa
            </label>
            <textarea
              id="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A3B18A] transition-shadow"
              placeholder="Tuliskan ucapan dan doa Anda di sini"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#3A5A40] text-white font-semibold py-3 px-4 rounded-md hover:bg-[#344E41] transition-colors flex items-center justify-center gap-2"
          >
            <Heart className="w-5 h-5" />
            Kirim Ucapan
          </button>
        </form>

        <div className="space-y-6 max-h-96 overflow-y-auto pr-4 custom-scrollbar">
          {wishes.map((wish) => (
            <div
              key={wish.id}
              className="group bg-white rounded-lg shadow p-5 text-left flex gap-4 relative"
            >
              <div className="flex-shrink-0 text-[#A3B18A]">
                <Quote className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-[#344E41]">{wish.name}</h4>
                <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                  {wish.message}
                </p>
              </div>
              <button
                onClick={() => handleDelete(wish.id)}
                className="absolute top-3 right-3 p-1.5 rounded-full bg-stone-100/50 text-stone-400 opacity-0 group-hover:opacity-100 hover:bg-red-100 hover:text-red-500 transition-all duration-300"
                aria-label="Hapus ucapan"
              >
                <Trash className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wishes;
