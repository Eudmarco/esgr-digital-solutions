import React from 'react';
import { SERVICES_DATA } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Nossos Serviços</h2>
          <p className="text-lg text-gray-300 mt-2">Soluções completas para impulsionar seu negócio no mundo digital.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-900/50 border border-purple-500/30 rounded-lg p-6 text-center hover:bg-gray-900 hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-4">
                <span className="material-symbols-outlined text-5xl text-cyan-400">
                  {service.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;