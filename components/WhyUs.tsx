import React from 'react';
import { WHY_US_DATA } from '../constants';

interface WhyUsProps {
    setPage: (page: 'why-us') => void;
}

const WhyUs: React.FC<WhyUsProps> = ({ setPage }) => {
    return (
        <section id="why-us" className="py-16 sm:py-24 bg-black/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 animate-on-scroll">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">Por que escolher a ESGR?</h2>
                    <p className="text-lg text-gray-300 mt-2">Nossa abordagem combina tecnologia de ponta com uma parceria estratégica.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {WHY_US_DATA.map((item, index) => (
                        <div 
                            key={index} 
                            className="text-center p-6 animate-on-scroll"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="flex justify-center mb-4">
                                <span className="material-symbols-outlined text-6xl text-cyan-400">
                                    {item.icon}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-gray-300">{item.description}</p>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12 animate-on-scroll">
                    <button
                        onClick={() => setPage('why-us')}
                        className="hero-button bg-transparent border border-cyan-400 text-cyan-400 font-bold py-3 px-8 rounded-lg hover:bg-cyan-400/10 transform transition-all duration-300"
                    >
                        Saiba Mais
                    </button>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;