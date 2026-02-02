
import React, { useState, useEffect } from 'react';

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const startTime = Date.now();

    const update = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth linear-ish progress for the bar
      setCount(Math.floor(progress * 100));

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setTimeout(() => {
          setIsDone(true);
          setTimeout(onComplete, 800);
        }, 800);
      }
    };

    requestAnimationFrame(update);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center transition-opacity duration-1000 ${isDone ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <style>{`
        .boot-font {
          font-family: 'Courier New', Courier, monospace;
          letter-spacing: 0.3em;
        }
        .logo-font {
          font-family: 'Archivo Black', sans-serif;
          letter-spacing: -0.05em;
        }
        .progress-line {
          height: 4px;
          background-color: var(--blue);
          transition: width 0.1s linear;
        }
      `}</style>

      <div className="w-full max-w-[85%] md:max-w-3xl flex flex-col">
        {/* G2 Logo Section */}
        <div className="flex justify-center mb-24">
          <div className="logo-font text-[18vw] md:text-[12rem] leading-none flex select-none">
            <span className="text-white">G</span>
            <span className="text-[var(--blue)]">2</span>
          </div>
        </div>

        {/* Progress Bar Line */}
        <div className="w-full bg-white/5 h-[4px] mb-6">
          <div 
            className="progress-line"
            style={{ width: `${count}%` }}
          ></div>
        </div>

        {/* System Log & Percentage */}
        <div className="flex justify-between items-center mb-24 boot-font text-[10px] md:text-sm font-bold text-gray-500 uppercase">
          <div className="flex gap-4">
            <span>S Y S T E M _ B O O T _ L O G</span>
          </div>
          <div className="flex items-center">
            <span>{count}%</span>
          </div>
        </div>

        {/* Status Message */}
        <div className="text-center h-8">
          <div className={`boot-font text-[10px] md:text-xs text-[var(--blue)] font-bold transition-opacity duration-500 ${count > 90 ? 'opacity-100' : 'opacity-0'}`}>
            READY FOR DEPLOYMENT.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
