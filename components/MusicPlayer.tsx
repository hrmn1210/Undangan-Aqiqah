
import React from 'react';
import { Music, MusicOff } from './Icons';

interface MusicPlayerProps {
    isPlaying: boolean;
    onTogglePlay: () => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ isPlaying, onTogglePlay }) => {
    return (
        <button
            onClick={onTogglePlay}
            className="fixed bottom-5 right-5 w-12 h-12 bg-[#3A5A40]/80 backdrop-blur-sm text-white rounded-full flex items-center justify-center shadow-lg z-50 transform hover:scale-110 transition-transform"
            aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
            <div className={` ${isPlaying ? 'animate-spin-slow' : ''}`}>
                {isPlaying ? <Music className="w-6 h-6" /> : <MusicOff className="w-6 h-6" />}
            </div>
             <style>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 8s linear infinite;
                }
            `}</style>
        </button>
    );
};

export default MusicPlayer;
