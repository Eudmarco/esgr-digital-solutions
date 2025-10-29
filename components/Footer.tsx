
import React from 'react';
import type { LegalDocKey } from '../types';

interface FooterProps {
    onLegalLinkClick: (docKey: LegalDocKey) => void;
}

const Footer: React.FC<FooterProps> = ({ onLegalLinkClick }) => {
  const legalLinks: { key: LegalDocKey, label: string }[] = [
      { key: 'terms', label: 'Termos de Uso' },
      { key: 'privacy', label: 'Política de Privacidade' },
      { key: 'cookies', label: 'Política de Cookies' },
      { key: 'lgpd', label: 'Termo LGPD' },
  ];

  return (
    <footer className="bg-gray-900/50 border-t border-purple-500/20 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-300">
        <p className="font-bold text-lg text-white">ESGR Desenvolvimento de Sistemas & Marketing Digital</p>
        <p>Rua Francisco Bodini, 114 - Nova Jaguariúna, Jaguariúna - SP</p>
        <p>CNPJ 35.489.200/0001-34</p>
        <div className="mt-6 flex justify-center flex-wrap gap-4 sm:gap-6">
          {legalLinks.map((link) => (
              <button 
                  key={link.key}
                  onClick={() => onLegalLinkClick(link.key)}
                  className="text-sm hover:text-cyan-400 transition-colors"
              >
                  {link.label}
              </button>
          ))}
        </div>
        <p className="mt-8 text-sm">&copy; {new Date().getFullYear()} ESGR. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;