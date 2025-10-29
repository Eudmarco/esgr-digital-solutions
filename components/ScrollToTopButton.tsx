import React from 'react';

interface ScrollToTopButtonProps {
    isVisible: boolean;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ isVisible }) => {
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-24 right-6 bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-purple-700 hover:scale-110 transform z-30 scroll-top-transition
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
            aria-label="Voltar ao topo"
        >
            <span className="material-symbols-outlined text-3xl text-white">
                keyboard_arrow_up
            </span>
        </button>
    );
};

export default ScrollToTopButton;