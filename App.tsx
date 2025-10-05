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
    fatherName: "Budi Setiawan",
    motherName: "Siti Rahayu",
    guestName: "Bapak/Ibu/Saudara/i",
    eventDate: "2024-12-25T10:00:00",
    address: "Jl. Bahagia Selalu No. 123, Jakarta",
    mapsLink: "https://maps.app.goo.gl/HAjG8Zkud4eYd7Nq6",
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
      <audio ref={audioRef} src="/musik.mp3" loop />
    </div>
  );
};

export default App;
