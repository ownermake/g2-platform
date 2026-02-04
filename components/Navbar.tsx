
import React, { useState } from 'react';

interface NavbarProps {
  onJoinClick?: () => void;
  onNavigate: (view: 'home' | 'company' | 'vision' | 'guide') => void;
  currentView: 'home' | 'company' | 'vision' | 'guide';
}

const Navbar: React.FC<NavbarProps> = ({ onJoinClick, onNavigate, currentView }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigate = (view: 'home' | 'company' | 'vision' | 'guide') => {
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
        
        {/* Desktop Links - 文字サイズを大きく変更 */}
        <div className="hidden md:flex gap-10 text-[14px] md:text-[16px] font-black uppercase tracking-[0.05em]">
          <button 
            onClick={() => handleNavigate('home')}
            className={`${currentView === 'home' ? 'text-[var(--blue)] underline underline-offset-8 decoration-4' : 'hover:text-[var(--blue)]'} transition-all`}
          >
            ホーム
          </button>
          <button 
            onClick={() => handleNavigate('guide')}
            className={`${currentView === 'guide' ? 'text-[var(--blue)] underline underline-offset-8 decoration-4' : 'hover:text-[var(--blue)]'} transition-all`}
          >
            アフィリエイトとは
          </button>
          <button 
            onClick={() => handleNavigate('vision')}
            className={`${currentView === 'vision' ? 'text-[var(--blue)] underline underline-offset-8 decoration-4' : 'hover:text-[var(--blue)]'} transition-all`}
          >
            ビジョン
          </button>
          <button 
            onClick={() => handleNavigate('company')}
            className={`${currentView === 'company' ? 'text-[var(--blue)] underline underline-offset-8 decoration-4' : 'hover:text-[var(--blue)]'} transition-all`}
          >
            会社概要
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={onJoinClick}
            className="neo-button bg-[var(--blue)] text-white px-5 md:px-7 py-2.5 text-[12px] md:text-[14px] font-black tracking-widest hidden sm:block"
          >
            新規登録
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-12 h-12 flex flex-col justify-center items-center gap-1.5 neo-border bg-black"
          >
            <span className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[55] bg-white transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-36 px-10 gap-8 overflow-y-auto pb-20 font-black">
          <button 
            onClick={() => handleNavigate('home')}
            className="text-5xl text-left italic border-b-4 border-black pb-4 flex justify-between items-end"
          >
            <span>ホーム</span>
            <span className="text-xs opacity-30">HOME</span>
          </button>
          <button 
            onClick={() => handleNavigate('guide')}
            className="text-5xl text-left italic border-b-4 border-black pb-4 flex justify-between items-end"
          >
            <span>アフィリエイトとは</span>
            <span className="text-xs opacity-30">AFFILIATE</span>
          </button>
          <button 
            onClick={() => handleNavigate('vision')}
            className="text-5xl text-left italic border-b-4 border-black pb-4 flex justify-between items-end"
          >
            <span>ビジョン</span>
            <span className="text-xs opacity-30">VISION</span>
          </button>
          <button 
            onClick={() => handleNavigate('company')}
            className="text-5xl text-left italic border-b-4 border-black pb-4 flex justify-between items-end"
          >
            <span>会社概要</span>
            <span className="text-xs opacity-30">COMPANY</span>
          </button>
          
          <div className="mt-10">
            <button 
              onClick={() => { onJoinClick?.(); setIsMobileMenuOpen(false); }}
              className="neo-button bg-[var(--blue)] text-white w-full py-6 text-3xl italic"
            >
              今すぐ始める
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
