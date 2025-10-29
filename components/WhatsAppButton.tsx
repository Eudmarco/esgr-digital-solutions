import React from 'react';
import { WHATSAPP_LINK_FLOAT } from '../constants';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={WHATSAPP_LINK_FLOAT}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transform transition-all duration-300 z-30 animate-subtle-pulse"
      aria-label="Fale conosco"
    >
      <span className="material-symbols-outlined text-4xl text-white">
        forum
      </span>
    </a>
  );
};

export default WhatsAppButton;