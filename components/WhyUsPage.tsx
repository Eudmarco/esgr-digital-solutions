import React from 'react';
import { WHY_US_DATA } from '../constants';

interface WhyUsPageProps {
  setPage: (page: 'home') => void;
}

const WhyUsPage: React.FC<WhyUsPageProps> = ({ setPage }) => {
    return (
        <div className="pt-24 sm:pt-32 pb-16 min-h-screen bg-black">
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
                        <h1 className="text-4xl sm:text-5xl font-bold text-white">Nossos Diferenciais</h1>
                        <p className="text-lg text-gray-300 mt-3">Entenda por que a ESGR é a parceira ideal para impulsionar a sua transformação digital.</p>
                    </div>

                    <div className="space-y-16">
                        {WHY_US_DATA.map((item, index) => (
                            <div 
                                key={item.title} 
                                className="bg-gray-900/50 border border-purple-500/30 rounded-lg p-6 sm:p-8 animate-on-scroll"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="material-symbols-outlined text-6xl text-cyan-400">
                                        {item.icon}
                                    </span>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-white">{item.title}</h2>
                                </div>
                                <p className="text-gray-200 mb-6">{item.detailedDescription}</p>
                                <h3 className="text-xl font-semibold text-white mb-3">Pontos-Chave:</h3>
                                <ul className="space-y-2">
                                    {item.keyPoints.map((point) => (
                                        <li key={point} className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-lime-400 text-2xl flex-shrink-0 mt-0.5">
                                                task_alt
                                            </span>
                                            <span className="text-gray-200">{point}</span>
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

export default WhyUsPage;