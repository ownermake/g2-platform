
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 md:pt-32 overflow-hidden bg-[#F2F2F2]">
      
      <div className="px-6 md:px-10 mb-12 md:mb-20 fade-in-up visible z-10" style={{ transitionDelay: '0.1s' }}>
        <div className="mb-4 inline-block px-4 py-2 bg-black text-white text-[10px] md:text-xs font-bold tracking-[0.1em] neo-shadow uppercase">
          Performance Based Platform
        </div>
        <h1 className="heading-brutal text-7xl sm:text-9xl md:text-[12rem] lg:text-[15rem] mb-2 leading-[0.8] break-words flex flex-col">
          <span className="text-[var(--blue)]">REDEFINE</span>
          <span className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl -mt-2 shimmer-text font-black uppercase">Performance</span>
        </h1>
        <div className="mb-10">
          <span className="text-2xl md:text-5xl font-black italic tracking-tighter bg-black text-white px-6 py-2">
            成果報酬を再定義する。
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
          <p className="text-xl md:text-3xl font-black max-w-4xl border-l-8 border-black pl-4 md:pl-10 py-3 text-gray-800 italic leading-[1.3] tracking-tighter">
            次世代の成果報酬型プラットフォーム。<br />
            私たちは、広告の「質」と「信頼」に革命を起こします。
          </p>
        </div>
      </div>

      <div className="pb-20"></div>
    </section>
  );
};

export default Hero;
