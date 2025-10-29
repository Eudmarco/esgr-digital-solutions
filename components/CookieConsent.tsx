
import React from 'react';

interface CookieConsentProps {
  onAccept: () => void;
  onReject: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onAccept, onReject }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900/80 backdrop-blur-sm border-t border-purple-500/20 p-4 z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-300 text-center sm:text-left">
          Nós usamos cookies para melhorar sua experiência. Ao continuar a navegar, você concorda com nosso uso de cookies.
        </p>
        <div className="flex items-center gap-4 flex-shrink-0">
          <button onClick={onAccept} className="bg-lime-400 text-black font-bold py-2 px-4 rounded-md text-sm hover:bg-lime-500 transition-colors">
            Aceitar Todos
          </button>
           <button onClick={onReject} className="bg-gray-700 text-white font-bold py-2 px-4 rounded-md text-sm hover:bg-gray-600 transition-colors">
            Rejeitar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
