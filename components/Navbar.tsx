
import React, { useState } from 'react';

interface NavbarProps {
  onJoinClick?: () => void;
  onNavigate: (view: 'home' | 'company' | 'vision') => void;
  currentView: 'home' | 'company' | 'vision';
}

const Navbar: React.FC<NavbarProps> = ({ onJoinClick, onNavigate, currentView }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigate = (view: 'home' | 'company' | 'vision') => {
    onNavigate(view);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] z-[60] py-3 md:py-4 px-4 md:px-8 bg-white neo-border neo-shadow flex justify-between items-center">
        <div 
          className="text-2xl md:text-3xl font-black italic tracking-tighter heading-brutal cursor-pointer"
          onClick={() => handleNavigate('home')}
        >
          G2<span className="text-[var(--blue)]">.</span>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-[0.2em]">
          <button 
            onClick={() => handleNavigate('home')}
            className={`${currentView === 'home' ? 'text-[var(--blue)]' : 'hover:text-[var(--blue)]'} transition-colors uppercase`}
          >
            Home
          </button>
          <button 
            onClick={() => handleNavigate('vision')}
            className={`${currentView === 'vision' ? 'text-[var(--blue)]' : 'hover:text-[var(--blue)]'} transition-colors uppercase`}
          >
            Vision
          </button>
          <button 
            onClick={() => handleNavigate('company')}
            className={`${currentView === 'company' ? 'text-[var(--blue)]' : 'hover:text-[var(--blue)]'} transition-colors uppercase`}
          >
            Company
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={onJoinClick}
            className="neo-button bg-[var(--blue)] text-white px-4 md:px-5 py-2 text-[9px] md:text-[10px] font-black uppercase tracking-widest hidden sm:block"
          >
            Join Us
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 neo-border bg-black"
          >
            <span className={`w-5 h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-white transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[55] bg-white transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-32 px-10 gap-8">
          <button 
            onClick={() => handleNavigate('home')}
            className="heading-brutal text-6xl text-left italic border-b-4 border-black pb-2"
          >
            HOME<span className={currentView === 'home' ? 'text-[var(--blue)]' : ''}>.</span>
          </button>
          <button 
            onClick={() => handleNavigate('vision')}
            className="heading-brutal text-6xl text-left italic border-b-4 border-black pb-2"
          >
            VISION<span className={currentView === 'vision' ? 'text-[var(--blue)]' : ''}>.</span>
          </button>
          <button 
            onClick={() => handleNavigate('company')}
            className="heading-brutal text-6xl text-left italic border-b-4 border-black pb-2"
          >
            COMPANY<span className={currentView === 'company' ? 'text-[var(--blue)]' : ''}>.</span>
          </button>
          
          <div className="mt-auto mb-10">
            <button 
              onClick={() => { onJoinClick?.(); setIsMobileMenuOpen(false); }}
              className="neo-button bg-[var(--blue)] text-white w-full py-6 heading-brutal text-3xl italic"
            >
              JOIN US
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
