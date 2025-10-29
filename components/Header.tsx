
import React, { useState, useEffect } from 'react';
import type { Page } from '../App';

interface HeaderProps {
    setPage: (page: Page) => void;
    page: Page;
}

const Header: React.FC<HeaderProps> = ({ setPage, page }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (targetPage: Page) => {
        setPage(targetPage);
        setIsMenuOpen(false);
    };

    const navLinks = [
        { label: 'Serviços', page: 'services' as Page },
        { label: 'Por que nós?', page: 'why-us' as Page },
    ];

    return (
        <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-lg border-b border-purple-500/20' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <button onClick={() => handleNavClick('home')} className="flex-shrink-0">
                        <img src="https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/ESGR/logo_esgr.png" alt="ESGR Logo" className="h-8 w-auto" />
                    </button>
                    <nav className="hidden md:flex items-center space-x-8">
                        <button 
                            onClick={() => handleNavClick('home')} 
                            className={`transition-colors ${page === 'home' ? 'text-cyan-400 font-bold' : 'text-gray-300 hover:text-cyan-400'}`}
                        >
                            Home
                        </button>
                        {navLinks.map(link => (
                            <button 
                                key={link.label} 
                                onClick={() => handleNavClick(link.page)} 
                                className={`transition-colors ${page === link.page ? 'text-cyan-400 font-bold' : 'text-gray-300 hover:text-cyan-400'}`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </nav>
                    <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                        <span className="material-symbols-outlined">
                            {isMenuOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-black/90 backdrop-blur-lg`}>
                <nav className="flex flex-col items-center space-y-4 py-4">
                     <button 
                        onClick={() => handleNavClick('home')} 
                        className={`py-2 transition-colors ${page === 'home' ? 'text-cyan-400 font-bold' : 'text-gray-300 hover:text-cyan-400'}`}
                    >
                        Home
                    </button>
                    {navLinks.map(link => (
                        <button 
                            key={link.label} 
                            onClick={() => handleNavClick(link.page)} 
                            className={`py-2 transition-colors ${page === link.page ? 'text-cyan-400 font-bold' : 'text-gray-300 hover:text-cyan-400'}`}
                        >
                            {link.label}
                        </button>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
