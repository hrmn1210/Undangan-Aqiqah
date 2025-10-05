import React, { useState, useRef, useCallback } from "react";
import InvitationCover from "./components/InvitationCover";
import Hero from "./components/Hero";
import InvitationDetails from "./components/InvitationDetails";
import Countdown from "./components/Countdown";
import Gallery from "./components/Gallery";
import Gift from "./components/Gift";
import Wishes from "./components/Wishes";
import MusicPlayer from "./components/MusicPlayer";
import Closing from "./components/Closing";

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const invitationData = {
    childName: "Muhammad Al Fatih",
    fatherName: "Ridho Alfa Rizki",
    motherName: "Mesi",
    guestName: "Bapak/Ibu/Saudara/i",
    eventDate: "2025-10-26T10:00:00",
    address: "Jl. Purnajaya 1 Jalur II, No.28",
    mapsLink: "https://maps.app.goo.gl/agt4PS9oJdgr5YZ56",
  };

  const handleOpenInvitation = useCallback(() => {
    setIsOpen(true);
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error("Audio playback failed:", error);
          setIsPlaying(false);
        });
    }
  }, []);

  const togglePlay = useCallback(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  if (!isOpen) {
    return (
      <InvitationCover
        guestName={invitationData.guestName}
        onOpen={handleOpenInvitation}
        childName={invitationData.childName}
      />
    );
  }

  return (
    <div className="bg-[#FBF9F7] text-[#36454F] antialiased overflow-x-hidden font-light">
      <main className="max-w-xl mx-auto bg-white">
        <Hero
          childName={invitationData.childName}
          fatherName={invitationData.fatherName}
          motherName={invitationData.motherName}
        />
        <InvitationDetails
          address={invitationData.address}
          mapsLink={invitationData.mapsLink}
          eventDate={invitationData.eventDate}
        />
        <Countdown targetDate={invitationData.eventDate} />
        <Gallery />
        <Gift />
        <Wishes />
        <Closing childName={invitationData.childName} />
      </main>
      <MusicPlayer isPlaying={isPlaying} onTogglePlay={togglePlay} />
      <audio
        ref={audioRef}
        src="https://firebasestorage.googleapis.com/v0/b/invitation-digital-f9112.appspot.com/o/sound%2FA%20Thousand%20Years%20-%20Christina%20Perri.mp3?alt=media&token=c130327f-2736-4076-90e9-b57d07963d11"
        loop
      />
    </div>
  );
};

export default App;
