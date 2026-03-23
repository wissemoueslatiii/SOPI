import React from "react";
import { Phone, MessageCircle } from "lucide-react";

const PHONE_E164 = "+21627604160";
const WHATSAPP_NUMBER = "27604160"; // sans +

const StickyCTA: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-sm">
      <div className="bg-sopi-teal/95 backdrop-blur-md text-white rounded-2xl shadow-2xl flex items-center justify-around p-3 border border-white/10">
        {/* Call */}
        <a
          href={`tel:${PHONE_E164}`}
          className="flex flex-col items-center justify-center p-2 px-4 hover:text-sopi-peach transition-colors"
          aria-label="Appeler SOPI"
        >
          <Phone size={20} />
          <span className="text-[10px] mt-1 uppercase font-bold tracking-wider">Appeler</span>
        </a>

        <div className="w-[1px] h-8 bg-white/20" />

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-2 px-4 hover:text-green-400 transition-colors"
          aria-label="Contacter SOPI sur WhatsApp"
        >
          <MessageCircle size={20} />
          <span className="text-[10px] mt-1 uppercase font-bold tracking-wider">WhatsApp</span>
        </a>

        <div className="w-[1px] h-8 bg-white/20" />
      </div>
    </div>
  );
};

export default StickyCTA;