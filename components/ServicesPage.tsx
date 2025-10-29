import React from 'react';
import { SERVICES_DATA } from '../constants';

interface ServicesPageProps {
  setPage: (page: 'home') => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ setPage }) => {
  return (
    <div className="pt-24 sm:pt-32 pb-16 min-h-screen bg-gradient-to-b from-black to-gray-900/90">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={() => setPage('home')}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Voltar para a Home
          </button>

          <div className="text-center mb-12 animate-on-scroll is-visible">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">Nossas Soluções Detalhadas</h1>
            <p className="text-lg text-gray-300 mt-3">Descubra como cada um de nossos serviços pode transformar seu negócio e gerar resultados concretos.</p>
          </div>

          <div className="space-y-16">
            {SERVICES_DATA.map((service, index) => (
              <div 
                key={service.title} 
                className="bg-gray-900/50 border border-purple-500/30 rounded-lg p-6 sm:p-8 animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="material-symbols-outlined text-5xl text-cyan-400">
                    {service.icon}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">{service.title}</h2>
                </div>
                <p className="text-gray-200 mb-6">{service.detailedDescription}</p>
                <h3 className="text-xl font-semibold text-white mb-3">Principais Benefícios:</h3>
                <ul className="space-y-2">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-lime-400 text-2xl flex-shrink-0 mt-0.5">
                        task_alt
                      </span>
                      <span className="text-gray-200">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;