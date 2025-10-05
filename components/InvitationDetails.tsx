
import React from 'react';
import { Calendar, Clock, MapPin } from './Icons';

interface InvitationDetailsProps {
    address: string;
    mapsLink: string;
    eventDate: string;
}

const InvitationDetails: React.FC<InvitationDetailsProps> = ({ address, mapsLink, eventDate }) => {
    const date = new Date(eventDate);
    const eventDay = date.toLocaleDateString('id-ID', { weekday: 'long' });
    const eventDateFormatted = date.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    const eventTime = date.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', hour12: false });

    return (
        <section className="py-20 px-6 bg-[#FBF9F7] text-center fade-in">
             <div className="max-w-2xl mx-auto mb-12">
                <p className="italic text-slate-600 leading-relaxed">"Dan Dialah yang menjadikan bintang-bintang bagimu, agar kamu menjadikannya petunjuk dalam kegelapan di darat dan di laut. Sesungguhnya Kami telah menjelaskan tanda-tanda kebesaran (Kami) kepada orang-orang yang mengetahui."</p>
                <p className="mt-2 font-semibold text-slate-700">(QS. Al-An'am: 97)</p>
            </div>
            
            <h2 className="font-great-vibes text-6xl text-[#3A5A40] mb-4">Save The Date</h2>
            <p className="max-w-md mx-auto mb-12 text-slate-500">
                Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dalam acara tasyakuran kami.
            </p>
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg mx-auto border-t-4 border-[#A3B18A]">
                <div className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0">
                    <div className="flex flex-col items-center space-y-2">
                        <Calendar className="w-10 h-10 text-[#588157]" />
                        <p className="font-semibold text-lg text-[#344E41]">{eventDay}</p>
                        <p className="text-slate-600">{eventDateFormatted}</p>
                    </div>
                    <div className="w-px h-24 bg-stone-200 hidden md:block"></div>
                    <div className="flex flex-col items-center space-y-2">
                        <Clock className="w-10 h-10 text-[#588157]" />
                        <p className="font-semibold text-lg text-[#344E41]">Pukul</p>
                        <p className="text-slate-600">{eventTime} WIB - Selesai</p>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-stone-200 flex flex-col items-center space-y-3">
                    <MapPin className="w-10 h-10 text-[#588157]" />
                    <p className="font-semibold text-lg text-[#344E41]">Lokasi</p>
                    <p className="px-4 text-slate-600">{address}</p>
                    <a
                        href={mapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 bg-[#3A5A40] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#344E41] transition-colors shadow-md"
                    >
                        Lihat Peta
                    </a>
                </div>
            </div>
        </section>
    );
};

export default InvitationDetails;
