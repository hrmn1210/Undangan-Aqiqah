
import React from 'react';
import useCountdown from '../hooks/useCountdown';

interface CountdownProps {
    targetDate: string;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
    const { days, hours, minutes, seconds } = useCountdown(targetDate);

    const CountdownItem = ({ value, label }: { value: number; label: string }) => (
        <div className="flex flex-col items-center justify-center bg-white rounded-lg p-4 w-20 h-20 md:w-24 md:h-24 shadow-lg">
            <span className="text-3xl md:text-4xl font-bold text-[#3A5A40]">{String(value).padStart(2, '0')}</span>
            <span className="text-xs uppercase tracking-wider text-slate-500 mt-1">{label}</span>
        </div>
    );

    return (
        <section className="py-20 px-6 bg-[#A3B18A] fade-in">
            <div className="relative text-white text-center">
                 <h2 className="font-great-vibes text-5xl mb-10 text-[#FBF9F7]">Menuju Hari Acara</h2>
                <div className="flex justify-center gap-3 md:gap-5">
                    <CountdownItem value={days} label="Hari" />
                    <CountdownItem value={hours} label="Jam" />
                    <CountdownItem value={minutes} label="Menit" />
                    <CountdownItem value={seconds} label="Detik" />
                </div>
            </div>
        </section>
    );
};

export default Countdown;
