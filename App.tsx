
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
import Preloader from './components/Preloader';

type View = 'home' | 'company' | 'vision';

const App: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState<View>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
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
    window.addEventListener('scroll', handleScroll);

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
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [currentView, isTransitioning, isLoading]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const navigateTo = (view: View) => {
    if (view === currentView) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentView(view);
      window.scrollTo(0, 0);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 450);
  };

  return (
    <div className="relative min-h-screen">
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      {/* Top Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-black z-[100]">
        <div 
          className="h-full bg-[var(--blue)] transition-all duration-75 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Dynamic Background Grid */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at center, #2563EB 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          transform: `translate(${(cursorPos.x - window.innerWidth / 2) * 0.015}px, ${(cursorPos.y - window.innerHeight / 2) * 0.015}px)`
        }}
      ></div>

      {/* Page Transition Overlay - Pure Logo Branding */}
      <div 
        className={`fixed inset-0 z-[9998] bg-[var(--blue)] transition-transform duration-[400ms] ease-[cubic-bezier(0.23,1,0.32,1)] pointer-events-none flex flex-col items-center justify-center ${
          isTransitioning ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="absolute inset-0 bg-black/5 opacity-50"></div>
        
        {/* Transition Logo Content */}
        <div className={`transition-all duration-300 transform flex flex-col items-center ${isTransitioning ? 'opacity-100 scale-100 delay-150' : 'opacity-0 scale-95'}`}>
           <div className="heading-brutal text-white text-[12vw] md:text-[10vw] italic tracking-tighter drop-shadow-[8px_8px_0px_rgba(0,0,0,0.2)]">
             G2<span className="text-black">.</span>
           </div>
           <div className="w-12 h-1 bg-white/20 mt-4 overflow-hidden">
             <div className={`h-full bg-white transition-all duration-500 ${isTransitioning ? 'w-full' : 'w-0'}`}></div>
           </div>
        </div>
      </div>
      
      {/* Custom Cursor */}
      <div 
        className="custom-cursor hidden md:block" 
        style={{ 
          left: `${cursorPos.x}px`, 
          top: `${cursorPos.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 3 : 1})`,
          backgroundColor: isHovering ? 'var(--blue)' : 'white',
          opacity: isHovering ? 0.7 : 1,
          mixBlendMode: isHovering ? 'normal' : 'difference',
          border: 'none',
          transition: 'transform 0.1s ease-out, background-color 0.2s, mix-blend-mode 0.2s, opacity 0.2s',
          zIndex: 9999
        }} 
      />
      
      <Navbar onJoinClick={openModal} onNavigate={navigateTo} currentView={currentView} />
      
      <main className={`${isTransitioning ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200 relative z-10`}>
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
