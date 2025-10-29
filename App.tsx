import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CookieConsent from './components/CookieConsent';
import Modal from './components/Modal';
import ScrollToTopButton from './components/ScrollToTopButton';
import ServicesPage from './components/ServicesPage';
import WhyUsPage from './components/WhyUsPage';
import { LEGAL_DOCS } from './constants';
import type { LegalDocKey } from './types';

export type Page = 'home' | 'services' | 'why-us';

function App() {
  const [page, setPage] = useState<Page>('home');
  const [loaded, setLoaded] = useState(false);
  const [showCookieConsent, setShowCookieConsent] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContentKey, setModalContentKey] = useState<LegalDocKey | null>(null);
  const [isScrollToTopVisible, setIsScrollToTopVisible] = useState(false);

  useEffect(() => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      setTimeout(() => {
        preloader.classList.add('fade-out');
        setTimeout(() => {
          preloader.style.display = 'none';
          setLoaded(true);
        }, 800); 
      }, 2500);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Dynamic Page Titles
    switch (page) {
      case 'services':
        document.title = 'Nossas Soluções | ESGR';
        break;
      case 'why-us':
        document.title = 'Nossos Diferenciais | ESGR';
        break;
      case 'home':
      default:
        document.title = 'ESGR: O Futuro da Transformação Digital';
        break;
    }
  }, [page]);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (consent === null) {
      setShowCookieConsent(true);
    }
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrollToTopVisible(true);
      } else {
        setIsScrollToTopVisible(false);
      }

      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('is-visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setShowCookieConsent(false);
  };

  const handleRejectCookies = () => {
    localStorage.setItem('cookie_consent', 'rejected');
    setShowCookieConsent(false);
  };

  const handleLegalLinkClick = (docKey: LegalDocKey) => {
    setModalContentKey(docKey);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContentKey(null);
  };

  const renderPage = () => {
    switch (page) {
      case 'services':
        return <ServicesPage setPage={setPage} />;
      case 'why-us':
        return <WhyUsPage setPage={setPage} />;
      case 'home':
      default:
        return (
          <>
            <Hero setPage={setPage} />
            <Services />
            <WhyUs setPage={setPage} />
          </>
        );
    }
  };

  const modalDoc = modalContentKey ? LEGAL_DOCS[modalContentKey] : null;

  return (
    <div className={`bg-black text-white font-sans main-content ${loaded ? 'loaded' : ''}`}>
      <Header setPage={setPage} page={page} />
      <main>
        {renderPage()}
      </main>
      <Footer onLegalLinkClick={handleLegalLinkClick} />
      <WhatsAppButton />
      <ScrollToTopButton isVisible={isScrollToTopVisible} />
      {showCookieConsent && (
        <CookieConsent onAccept={handleAcceptCookies} onReject={handleRejectCookies} />
      )}
      {modalDoc && (
          <Modal isOpen={isModalOpen} onClose={closeModal} title={modalDoc.title}>
            {modalDoc.content}
          </Modal>
      )}
    </div>
  );
}

export default App;