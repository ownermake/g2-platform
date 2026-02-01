
import React from 'react';

const ThreeCube: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center perspective-1000">
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .cube-wrapper {
          width: 200px;
          height: 200px;
          position: relative;
          transform-style: preserve-3d;
          animation: rotate-master 30s linear infinite;
        }
        .cube-container {
          width: 200px;
          height: 200px;
          position: absolute;
          transform-style: preserve-3d;
          animation: rotate-cube 15s linear infinite;
        }
        .inner-cube {
          width: 100px;
          height: 100px;
          position: absolute;
          transform-style: preserve-3d;
          animation: rotate-cube 10s linear infinite reverse;
        }
        .cube-face {
          position: absolute;
          border: 1px solid rgba(37, 99, 235, 0.4);
          background: rgba(37, 99, 235, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .face-outer { width: 200px; height: 200px; }
        .face-inner { width: 100px; height: 100px; border-color: rgba(255, 255, 255, 0.2); }

        /* Outer faces */
        .face-front  { transform: translateZ(100px); }
        .face-back   { transform: rotateY(180deg) translateZ(100px); }
        .face-right  { transform: rotateY(90deg) translateZ(100px); }
        .face-left   { transform: rotateY(-90deg) translateZ(100px); }
        .face-top    { transform: rotateX(90deg) translateZ(100px); }
        .face-bottom { transform: rotateX(-90deg) translateZ(100px); }

        /* Inner faces */
        .if-front  { transform: translateZ(50px); }
        .if-back   { transform: rotateY(180deg) translateZ(50px); }
        .if-right  { transform: rotateY(90deg) translateZ(50px); }
        .if-left   { transform: rotateY(-90deg) translateZ(50px); }
        .if-top    { transform: rotateX(90deg) translateZ(50px); }
        .if-bottom { transform: rotateX(-90deg) translateZ(50px); }

        @keyframes rotate-master {
          0% { transform: rotateX(0) rotateY(0); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }
        @keyframes rotate-cube {
          0% { transform: rotateZ(0); }
          100% { transform: rotateZ(360deg); }
        }
        .core-dot {
          width: 4px;
          height: 4px;
          background: #fff;
          border-radius: 50%;
          box-shadow: 0 0 10px #2563EB, 0 0 20px #2563EB;
          animation: core-pulse 2s infinite;
        }
        @keyframes core-pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(2.5); opacity: 1; }
        }
      `}</style>
      <div className="cube-wrapper">
        <div className="cube-container">
          <div className="cube-face face-outer face-front"></div>
          <div className="cube-face face-outer face-back"></div>
          <div className="cube-face face-outer face-right"></div>
          <div className="cube-face face-outer face-left"></div>
          <div className="cube-face face-outer face-top"></div>
          <div className="cube-face face-outer face-bottom"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="inner-cube">
            <div className="cube-face face-inner if-front"></div>
            <div className="cube-face face-inner if-back"></div>
            <div className="cube-face face-inner if-right"></div>
            <div className="cube-face face-inner if-left"></div>
            <div className="cube-face face-inner if-top"></div>
            <div className="cube-face face-inner if-bottom"></div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="core-dot"></div>
        </div>
      </div>
    </div>
  );
};

export default ThreeCube;
