import React, { useState } from "react";
import { GiftIcon, ClipboardCheck, Clipboard, QrCode } from "./Icons";

const Gift: React.FC = () => {
  const [copiedBank, setCopiedBank] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const bankAccount = "1234567890";

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedBank(true);
      setTimeout(() => setCopiedBank(false), 2000);
    });
  };

  return (
    <section className="py-20 px-6 bg-[#DAD7CD] fade-in">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="font-great-vibes text-6xl text-[#3A5A40] mb-4">
          Angpao Digital
        </h2>
        <p className="mb-12 text-slate-600">
          Doa restu Anda adalah hadiah terindah bagi kami. Namun jika Anda ingin
          memberikan tanda kasih, kami dengan senang hati menerimanya sebagai
          bentuk dukungan dan doa untuk putra kami.
        </p>
        <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-[#A3B18A] flex flex-col items-center">
          <GiftIcon className="w-12 h-12 text-[#588157] mb-4" />
          <div className="mb-6">
            <p className="font-bold text-lg mb-1 text-[#344E41]">BCA</p>
            <p className="text-slate-600 mb-2">a.n. Budi Setiawan</p>
            <div className="flex items-center gap-2 bg-stone-100 rounded-full px-4 py-2">
              <p
                id="bank-account"
                className="text-lg font-mono tracking-wider text-[#3A5A40]"
              >
                {bankAccount}
              </p>
              <button
                onClick={() => handleCopy(bankAccount)}
                className="p-2 rounded-full hover:bg-stone-200 transition-colors"
                aria-label="Salin nomor rekening"
              >
                {copiedBank ? (
                  <ClipboardCheck className="w-5 h-5 text-green-600" />
                ) : (
                  <Clipboard className="w-5 h-5 text-slate-500" />
                )}
              </button>
            </div>
            {copiedBank && (
              <p className="text-sm text-green-600 mt-2">
                Nomor rekening disalin!
              </p>
            )}
          </div>
          <div className="w-full border-t border-stone-200 pt-6">
            <button
              onClick={() => setShowQR(true)}
              className="w-full flex items-center justify-center gap-2 bg-[#3A5A40] text-white font-semibold py-2.5 px-4 rounded-md hover:bg-[#344E41] transition-colors"
            >
              <QrCode className="w-5 h-5" /> Kirim via QRIS
            </button>
          </div>
        </div>
      </div>

      {showQR && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowQR(false)}
        >
          <div
            className="bg-white p-6 rounded-lg text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-semibold mb-4 text-[#3A5A40]">
              Scan QRIS
            </h3>
            <img
              src="/hero.png"
              alt="QRIS Code"
              className="mx-auto w-[200px] h-[200px]"
            />
            <p className="text-sm text-slate-500 mt-4">a.n. Budi Setiawan</p>
            <button
              onClick={() => setShowQR(false)}
              className="mt-6 bg-stone-200 text-stone-700 px-6 py-2 rounded-full text-sm"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gift;
