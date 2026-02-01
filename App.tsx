
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AffiliateGuide from './components/AffiliateGuide';
import Features from './components/Features';
import Trust from './components/Trust';
import Targeting from './components/Targeting';
import Company from './components/Company';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import CompanyPage from './pages/CompanyPage';
import VisionPage from './pages/VisionPage';

type View = 'home' | 'company' | 'vision';

const App: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState<View>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && target instanceof Element) {
        const isInteractive = 
          target.tagName === 'A' || 
          target.tagName === 'BUTTON' || 
          target.closest('a') ||
          target.closest('button') ||
          target.closest('.neo-button') ||
          target.classList.contains('cursor-pointer') ||
          window.getComputedStyle(target).cursor === 'pointer';
        
        setIsHovering(!!isInteractive);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      observer.disconnect();
    };
  }, [currentView, isTransitioning]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const navigateTo = (view: View) => {
    if (view === currentView) return;
    
    // ページ遷移演出開始
    setIsTransitioning(true);
    
    // 幕が閉じきったタイミングでビューを切り替える
    setTimeout(() => {
      setCurrentView(view);
      window.scrollTo(0, 0);
      
      // 幕を開ける
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }, 600);
  };

  return (
    <div className="relative min-h-screen">
      {/* 
        Page Transition Overlay (Curtain Effect)
      */}
      <div 
        className={`fixed inset-0 z-[9998] bg-black transition-transform duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] pointer-events-none ${
          isTransitioning ? 'translate-y-0' : '-translate-y-full'
        }`}
      />
      <div 
        className={`fixed inset-0 z-[9997] bg-[var(--blue)] transition-transform duration-700 delay-100 ease-[cubic-bezier(0.87,0,0.13,1)] pointer-events-none ${
          isTransitioning ? 'translate-y-0' : 'translate-y-full'
        }`}
      />

      {/* Custom Cursor */}
      <div 
        className="custom-cursor hidden md:block" 
        style={{ 
          left: `${cursorPos.x}px`, 
          top: `${cursorPos.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 2.5 : 1})`,
          backgroundColor: isHovering ? 'var(--blue)' : 'white',
          opacity: isHovering ? 0.6 : 1,
          mixBlendMode: isHovering ? 'normal' : 'difference',
          border: 'none',
          transition: 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), background-color 0.2s, mix-blend-mode 0.2s, opacity 0.2s',
          zIndex: 9999
        }} 
      />
      
      <Navbar onJoinClick={openModal} onNavigate={navigateTo} currentView={currentView} />
      
      <main className={`${isTransitioning ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
        {currentView === 'home' ? (
          <>
            <Hero onActionClick={openModal} />
            <About />
            <AffiliateGuide />
            <Features />
            <Trust />
            <Targeting onActionClick={openModal} />
            <Company />
          </>
        ) : currentView === 'company' ? (
          <CompanyPage />
        ) : (
          <VisionPage />
        )}
      </main>

      <Footer />

      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;
