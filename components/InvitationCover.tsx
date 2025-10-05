import React from "react";
import { MailOpen } from "./Icons";

interface InvitationCoverProps {
  guestName: string;
  childName: string;
  onOpen: () => void;
}

const InvitationCover: React.FC<InvitationCoverProps> = ({
  guestName,
  childName,
  onOpen,
}) => {
  return (
    <div
      className="fixed inset-0 bg-cover bg-center flex flex-col items-center justify-center p-6 text-center text-white"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      <div className="absolute inset-0 bg-[#3A5A40]/70 backdrop-blur-sm"></div>
      <div className="relative z-10 flex flex-col items-center justify-between h-full w-full">
        <div className="mt-20 text-center">
          <p className="text-lg tracking-wider text-stone-200">
            The Aqiqah & Naming Ceremony of
          </p>
          <h1 className="font-great-vibes text-6xl my-4 text-white drop-shadow-lg">
            {childName}
          </h1>
        </div>

        <div className="mb-20 text-center">
          <p className="text-md text-stone-200">Kepada Yth.</p>
          <p className="text-xl font-semibold tracking-wider my-2 text-white">
            {guestName}
          </p>
          <button
            onClick={onOpen}
            className="bg-[#DAD7CD]/90 hover:bg-[#DAD7CD] text-[#3A5A40] font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 flex items-center gap-3 mt-6 animate-pulse-slow"
          >
            <MailOpen className="w-5 h-5" />
            Buka Undangan
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvitationCover;
