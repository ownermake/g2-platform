
import React from 'react';

interface NavbarProps {
  onJoinClick?: () => void;
  onNavigate: (view: 'home' | 'company' | 'vision') => void;
  currentView: 'home' | 'company' | 'vision';
}

const Navbar: React.FC<NavbarProps> = ({ onJoinClick, onNavigate, currentView }) => {
  return (
    <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] z-50 py-3 md:py-4 px-4 md:px-8 bg-white neo-border neo-shadow flex justify-between items-center">
      <div 
        className="text-2xl md:text-3xl font-black italic tracking-tighter heading-brutal cursor-pointer"
        onClick={() => onNavigate('home')}
      >
        G2<span className="text-[var(--blue)]">.</span>
      </div>
      
      <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-[0.2em]">
        <button 
          onClick={() => onNavigate('home')}
          className={`${currentView === 'home' ? 'text-[var(--blue)]' : 'hover:text-[var(--blue)]'} transition-colors uppercase`}
        >
          Home
        </button>
        <button 
          onClick={() => onNavigate('vision')}
          className={`${currentView === 'vision' ? 'text-[var(--blue)]' : 'hover:text-[var(--blue)]'} transition-colors uppercase`}
        >
          Vision
        </button>
        <button 
          onClick={() => onNavigate('company')}
          className={`${currentView === 'company' ? 'text-[var(--blue)]' : 'hover:text-[var(--blue)]'} transition-colors uppercase`}
        >
          Company
        </button>
      </div>

      <button 
        onClick={onJoinClick}
        className="neo-button bg-[var(--blue)] text-white px-4 md:px-5 py-2 text-[9px] md:text-[10px] font-black uppercase tracking-widest"
      >
        Join Us
      </button>
    </nav>
  );
};

export default Navbar;
