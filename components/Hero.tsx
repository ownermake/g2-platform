
import React, { useState, useEffect } from 'react';
import ThreeCube from './ThreeCube';

interface HeroProps {
  onActionClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onActionClick }) => {
  const [progress, setProgress] = useState(0);
  const [sysCode, setSysCode] = useState("G2_SYS_INIT");

  useEffect(() => {
    const codeInterval = setInterval(() => {
      const codes = ["BOOT_SEQ", "DATA_CALIB", "AES_ENC", "TRAFFIC_OK", "PROTOCOL_V3"];
      setSysCode(codes[Math.floor(Math.random() * codes.length)]);
    }, 150);

    const progInterval = setInterval(() => {
      setProgress(98 + Math.random() * 1.5);
    }, 100);

    return () => {
      clearInterval(codeInterval);
      clearInterval(progInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 md:pt-32 overflow-hidden bg-[#F2F2F2]">
      
      {/* Background Cube Visual */}
      <div className="absolute right-[-5%] top-[20%] w-[400px] h-[400px] opacity-20 hidden lg:block pointer-events-none">
        <ThreeCube />
      </div>

      <div className="px-6 md:px-10 mb-8 fade-in-up">
        <div className="flex flex-col lg:flex-row gap-0 items-stretch">
          <div className="bg-black text-white neo-border px-8 py-6 flex flex-wrap items-center gap-x-12 gap-y-4 neo-shadow-blue z-10 relative overflow-hidden flex-grow">
            <div className="flex flex-col min-w-[180px]">
              <span className="text-[10px] font-black opacity-40 tracking-[0.4em] uppercase mb-1">Status</span>
              <span className="font-black text-xl md:text-2xl italic">FINAL_CALIBRATION_</span>
            </div>
            <div className="w-px h-12 bg-white/20 hidden lg:block"></div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black opacity-40 tracking-[0.4em] uppercase mb-1">Launch_Target</span>
              <div className="flex items-center gap-6 leading-none">
                <span className="font-black text-3xl md:text-5xl text-[var(--blue)] heading-brutal italic tracking-tighter uppercase">
                  MARCH <span className="text-white">2025</span>
                </span>
              </div>
            </div>
          </div>

          <div className="bg-[#FFDE03] text-black neo-border-t-0 lg:neo-border-t-3 lg:neo-border-l-0 neo-border px-8 py-6 flex flex-col justify-center min-w-[280px] lg:w-[380px] relative overflow-hidden">
             <div className="absolute left-0 top-0 bottom-0 bg-black/10" style={{ width: `${progress}%` }}></div>
             <div className="relative z-10 flex justify-between items-center gap-4">
               <span className="font-black text-xs md:text-sm font-mono truncate bg-black text-[#FFDE03] px-2 py-0.5">{sysCode}</span>
               <span className="font-black text-3xl md:text-4xl italic tracking-tighter leading-none">{progress.toFixed(1)}%</span>
             </div>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-10 mb-12 md:mb-20 fade-in-up z-10" style={{ transitionDelay: '0.1s' }}>
        <div className="mb-4 inline-block px-4 py-2 bg-black text-white text-[10px] md:text-xs font-bold tracking-[0.1em] neo-shadow">
          成果報酬型広告プラットフォーム
        </div>
        <h1 className="heading-brutal text-7xl sm:text-9xl md:text-[12rem] lg:text-[15rem] mb-6 leading-[0.8] break-words flex flex-col">
          <span className="text-[var(--blue)]">G2</span>
          <span className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl -mt-2 shimmer-text">PERFORMANCE</span>
        </h1>
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
          <p className="text-xl md:text-3xl font-black max-w-4xl border-l-8 border-black pl-4 md:pl-10 py-3 text-gray-800 uppercase italic leading-[1.1] tracking-tighter">
            "成果報酬"を再定義する。<br />
            3月の全面始動に向け、最終構築中。
          </p>
        </div>
      </div>

      <div className="marquee-container -rotate-1 mb-10">
        <div className="marquee-content text-[15vw] md:text-[10vw]">
          &nbsp;LAUNCHING MARCH 2025 * SYSTEM ONLINE * G2 PERFORMANCE * 3月全面始動 *&nbsp;
          &nbsp;LAUNCHING MARCH 2025 * SYSTEM ONLINE * G2 PERFORMANCE * 3月全面始動 *&nbsp;
        </div>
      </div>

      <div className="px-6 md:px-10 flex flex-col sm:flex-row gap-4 md:gap-6 fade-in-up pb-20" style={{ transitionDelay: '0.3s' }}>
        <button onClick={onActionClick} className="neo-button bg-black text-white px-8 md:px-14 py-5 md:py-7 text-xl md:text-2xl font-black uppercase tracking-tighter w-full sm:w-auto">ADVERTISER</button>
        <button onClick={onActionClick} className="neo-button bg-white text-black px-8 md:px-14 py-5 md:py-7 text-xl md:text-2xl font-black uppercase tracking-tighter w-full sm:w-auto">AFFILIATE</button>
      </div>
    </section>
  );
};

export default Hero;
