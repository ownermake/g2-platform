
import React, { useState, useEffect } from 'react';

interface HeroProps {
  onActionClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onActionClick }) => {
  const [progress, setProgress] = useState(0);
  const [sysCode, setSysCode] = useState("G2_SYS_INIT");
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    // システムコードを高速で切り替え（構築中の演出）
    const codeInterval = setInterval(() => {
      const codes = [
        "BOOT_SEQUENCER", 
        "DATA_CALIBRATING", 
        "AES_ENCRYPTING", 
        "TRAFFIC_STABLE",
        "PROTOCOL_V3",
        "SCALING_NODES"
      ];
      setSysCode(codes[Math.floor(Math.random() * codes.length)]);
    }, 120);

    // プログレスバーを98%付近で細かく変動（最終調整の演出）
    const progInterval = setInterval(() => {
      setProgress(98 + Math.random() * 1.5);
    }, 80);

    // 視覚的な「グリッチ」演出
    const glitchInterval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 50);
    }, 2500);

    return () => {
      clearInterval(codeInterval);
      clearInterval(progInterval);
      clearInterval(glitchInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 md:pt-32 overflow-hidden bg-[#F2F2F2]">
      
      {/* Dynamic Status Header */}
      <div className="px-6 md:px-10 mb-8 fade-in-up">
        <div className="flex flex-col lg:flex-row gap-0 items-stretch">
          
          {/* Main Status & Schedule Block (Black) */}
          <div className="bg-black text-white neo-border px-8 py-6 flex flex-wrap items-center gap-x-12 gap-y-4 neo-shadow-blue z-10 relative overflow-hidden flex-grow">
            {/* Scanned Line Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-1/2 w-full animate-pulse pointer-events-none"></div>
            
            <div className="flex flex-col min-w-[180px]">
              <span className="text-[10px] font-black opacity-40 tracking-[0.4em] uppercase mb-1">Status</span>
              <span className="font-black text-xl md:text-2xl italic flex items-center gap-2">
                FINAL_CALIBRATION<span className="animate-pulse text-[var(--blue)]">_</span>
              </span>
            </div>
            
            <div className="w-px h-12 bg-white/20 hidden lg:block"></div>
            
            <div className={`flex flex-col transition-transform duration-75 ${glitch ? 'translate-x-1 skew-x-3' : ''}`}>
              <span className="text-[10px] font-black opacity-40 tracking-[0.4em] uppercase mb-1">Launch_Target</span>
              <div className="flex items-center gap-6 leading-none">
                <span className="font-black text-3xl md:text-5xl text-[var(--blue)] heading-brutal italic tracking-tighter uppercase">
                  MARCH <span className="text-white">2025</span>
                </span>
                <div className="flex flex-col border-l-2 border-[var(--blue)] pl-4">
                  <span className="font-black text-xl md:text-2xl uppercase tracking-tighter text-white">3月、始動。</span>
                  <span className="text-[9px] font-mono opacity-40 tracking-widest">GLOBAL_RELEASE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Real-time Barometer Block (Yellow) */}
          <div className="bg-[#FFDE03] text-black neo-border-t-0 lg:neo-border-t-3 lg:neo-border-l-0 neo-border px-8 py-6 flex flex-col justify-center min-w-[280px] lg:w-[380px] relative overflow-hidden">
             {/* Progress Bar Background fill */}
             <div 
               className="absolute left-0 top-0 bottom-0 bg-black/10 transition-all duration-75" 
               style={{ width: `${progress}%` }}
             ></div>
             
             <div className="relative z-10 flex justify-between items-center gap-4">
               <div className="flex flex-col">
                 <div className="flex items-center gap-2 mb-1">
                   <span className="w-2 h-2 bg-red-600 rounded-full animate-ping"></span>
                   <span className="text-[9px] font-black tracking-[0.2em] uppercase opacity-70">Core_Scaling</span>
                 </div>
                 <span className="font-black text-xs md:text-sm font-mono truncate bg-black text-[#FFDE03] px-2 py-0.5 inline-block">
                   {sysCode}
                 </span>
               </div>
               <div className="flex flex-col items-end shrink-0">
                 <span className="text-[9px] font-black opacity-50 uppercase tracking-widest">Stability</span>
                 <span className="font-black text-3xl md:text-4xl italic tracking-tighter leading-none">{progress.toFixed(1)}%</span>
               </div>
             </div>
          </div>
        </div>
        <p className="mt-5 text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] opacity-40 flex items-center gap-3">
          <span className="text-[var(--blue)] animate-pulse">●</span> 
          System infrastructure optimization in progress. G2 platform scales for March 2025.
        </p>
      </div>

      {/* Main Copy Area */}
      <div className="px-6 md:px-10 mb-12 md:mb-20 fade-in-up" style={{ transitionDelay: '0.1s' }}>
        <div className="mb-6 md:mb-8 inline-block px-4 py-1.5 neo-border bg-white text-[10px] md:text-xs font-black uppercase tracking-widest neo-shadow">
          Next Generation Performance Infrastructure
        </div>
        <h1 className="heading-brutal text-5xl sm:text-6xl md:text-8xl lg:text-[11rem] mb-6 leading-[0.85] break-words">
          BUILDING<br />
          THE <span className="text-[var(--blue)]">FUTURE</span>
        </h1>
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
          <p className="text-xl md:text-3xl font-black max-w-4xl border-l-8 border-black pl-4 md:pl-10 py-3 text-gray-800 uppercase italic leading-[1.1] tracking-tighter">
            "成果報酬"を再定義する。<br />
            3月の全面始動に向け、<br className="hidden md:block" />
            最終フェーズのシステム構築を実行中。
          </p>
          
          <div className="hidden xl:flex items-center gap-4 py-5 px-8 neo-border bg-black text-white neo-shadow-blue -rotate-1">
            <div className="text-5xl font-black italic text-[var(--blue)]">03.</div>
            <div className="text-[11px] font-black uppercase tracking-[0.2em] leading-tight">
              MARCH 2025<br />
              <span className="text-white/60">DEPLOYMENT</span>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee with Launch Message */}
      <div className="marquee-container -rotate-1 mb-10">
        <div className="marquee-content text-[15vw] md:text-[10vw]">
          &nbsp;LAUNCHING MARCH 2025 * SYSTEM ONLINE * G2 PERFORMANCE * 3月全面始動 *&nbsp;
          &nbsp;LAUNCHING MARCH 2025 * SYSTEM ONLINE * G2 PERFORMANCE * 3月全面始動 *&nbsp;
        </div>
      </div>

      {/* Primary Actions */}
      <div className="px-6 md:px-10 flex flex-col sm:flex-row gap-4 md:gap-6 fade-in-up" style={{ transitionDelay: '0.3s' }}>
        <button 
          onClick={onActionClick}
          className="neo-button bg-black text-white px-8 md:px-14 py-5 md:py-7 text-xl md:text-2xl font-black uppercase tracking-tighter w-full sm:w-auto"
        >
          ADVERTISER
        </button>
        <button 
          onClick={onActionClick}
          className="neo-button bg-white text-black px-8 md:px-14 py-5 md:py-7 text-xl md:text-2xl font-black uppercase tracking-tighter w-full sm:w-auto"
        >
          AFFILIATE
        </button>
      </div>
    </section>
  );
};

export default Hero;
