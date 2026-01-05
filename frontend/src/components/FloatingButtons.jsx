import React, { useState } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';
import { contactInfo } from '../data/mock';

const FloatingButtons = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Expanded Options */}
      {isOpen && (
        <div className="flex flex-col gap-3 animate-in slide-in-from-bottom-2">
          {/* WhatsApp */}
          <a
            href={`https://wa.me/15551234567?text=Hi, I'm interested in your garage door services.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-all hover:scale-105"
          >
            <MessageCircle size={22} />
            <span className="font-medium">WhatsApp</span>
          </a>

          {/* Phone Call */}
          <a
            href={`tel:${contactInfo.phone}`}
            className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full shadow-lg transition-all hover:scale-105"
          >
            <Phone size={22} />
            <span className="font-medium">Call Now</span>
          </a>
        </div>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          isOpen
            ? 'bg-slate-700 hover:bg-slate-800 rotate-90'
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
        aria-label="Contact options"
      >
        {isOpen ? (
          <X className="text-white" size={24} />
        ) : (
          <Phone className="text-white" size={24} />
        )}
      </button>

      {/* Pulse Animation (only when closed) */}
      {!isOpen && (
        <div className="absolute bottom-0 right-0 w-14 h-14 bg-blue-600 rounded-full animate-ping opacity-30 pointer-events-none" />
      )}
    </div>
  );
};

export default FloatingButtons;
