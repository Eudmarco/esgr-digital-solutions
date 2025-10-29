import React from 'react';

interface HeroProps {
    setPage: (page: 'services') => void;
}

const Hero: React.FC<HeroProps> = ({ setPage }) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-black">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
            style={{ backgroundImage: "url('https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/ESGR/esgr_background.avif')" }}
        ></div>
        <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black via-transparent to-black/20 z-0"></div>

        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4 animate-on-scroll is-visible">
            ESGR: O Futuro da <span className="text-cyan-400">Transformação Digital</span> ao Seu Alcance
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-8 animate-on-scroll is-visible" style={{ animationDelay: '0.3s' }}>
            Desenvolvimento de Sistemas Inteligentes, SEO Otimizado por IA, Tráfego Pago, Social Media e Vídeos Institucionais para Impulsionar Seu Negócio.
            </p>
            <div className="animate-on-scroll is-visible" style={{ animationDelay: '0.6s' }}>
            <button
                onClick={() => setPage('services')}
                className="hero-button bg-lime-400 text-black font-bold py-4 px-8 rounded-lg shadow-lg shadow-lime-500/40 hover:bg-lime-500 hover:scale-105 transform transition-all duration-300"
            >
                Descubra Nossas Soluções
            </button>
            </div>
      </div>
    </section>
  );
};

export default Hero;