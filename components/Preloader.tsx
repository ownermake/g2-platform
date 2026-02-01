
import React, { useState, useEffect } from 'react';

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let start = 0;
    const end = 100;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(100);
        clearInterval(timer);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(onComplete, 800);
        }, 300);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] ${isDone ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="relative overflow-hidden mb-8">
        <h1 className="heading-brutal text-white text-[15vw] leading-none select-none">
          G<span className="text-[var(--blue)]">2</span>
        </h1>
        <div className="absolute inset-0 bg-white/10 mix-blend-overlay animate-pulse"></div>
      </div>
      
      <div className="w-[80%] max-w-md h-1 bg-white/10 relative overflow-hidden mb-4">
        <div 
          className="absolute top-0 left-0 h-full bg-[var(--blue)] transition-all duration-100 ease-out" 
          style={{ width: `${count}%` }}
        ></div>
      </div>

      <div className="flex justify-between w-[80%] max-w-md font-mono text-[10px] text-white/40 tracking-[0.5em]">
        <span>SYSTEM_BOOT_LOG</span>
        <span>{count}%</span>
      </div>

      <div className="mt-12 overflow-hidden h-4">
        <div className="animate-bounce font-mono text-[8px] text-[var(--blue)] tracking-widest uppercase">
          {count < 30 && "Initializing core components..."}
          {count >= 30 && count < 60 && "Establishing secure protocols..."}
          {count >= 60 && count < 90 && "Calibrating traffic nodes..."}
          {count >= 90 && "Ready for deployment."}
        </div>
      </div>
    </div>
  );
};

export default Preloader;
