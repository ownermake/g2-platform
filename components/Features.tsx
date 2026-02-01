
import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-[var(--black)] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-16 md:mb-24 fade-in-up">
          <h2 className="heading-brutal text-5xl sm:text-7xl md:text-9xl mb-8 leading-none">REAL<br /><span className="text-[var(--blue)]">DRIVE</span></h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          
          {/* Feature 01: Asset Design (Growing Architecture) */}
          <div className="fade-in-up group">
            <div className="neo-border border-white overflow-hidden mb-8 neo-shadow-blue bg-black relative aspect-video flex justify-center items-center">
              {/* Background Grid */}
              <div className="absolute inset-0 earth-grid opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              
              {/* Animated Asset Visual */}
              <div className="relative z-10 w-full h-full flex justify-center items-center">
                <svg viewBox="0 0 200 120" className="w-4/5 h-4/5">
                  <defs>
                    <linearGradient id="scan-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="transparent" />
                      <stop offset="50%" stopColor="var(--blue)" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                  
                  {/* Scan Line Animation */}
                  <rect x="0" y="0" width="200" height="40" fill="url(#scan-grad)">
                    <animateTransform attributeName="transform" type="translate" from="0 -40" to="0 120" dur="3s" repeatCount="indefinite" />
                  </rect>

                  {/* Base Lines */}
                  <path d="M40 100 L160 100" stroke="white" strokeWidth="0.5" strokeDasharray="2 2" />
                  
                  {/* Stacking Monoliths (Asset Growth) */}
                  {[30, 55, 85, 65, 100].map((h, i) => (
                    <g key={i}>
                      <rect 
                        x={50 + i * 22} 
                        y={100 - h} 
                        width="18" 
                        height={h} 
                        fill="none" 
                        stroke="var(--blue)" 
                        strokeWidth="1"
                        className="animate-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                      {/* Inner Fill with transition */}
                      <rect 
                        x={50 + i * 22} 
                        y={100 - h} 
                        width="18" 
                        height={h} 
                        fill="var(--blue)" 
                        fillOpacity="0.1"
                        className="transition-all duration-1000 group-hover:fill-opacity-30"
                      />
                      {/* Top Cap Reflective */}
                      <line x1={50+i*22} y1={100-h} x2={68+i*22} y2={100-h} stroke="white" strokeWidth="2" className="animate-pulse" />
                    </g>
                  ))}
                  
                  {/* Floating Data Nodes */}
                  <circle cx="150" cy="30" r="1.5" fill="white" className="animate-ping" style={{ animationDuration: '3s' }} />
                  <circle cx="60" cy="40" r="1.2" fill="var(--blue)" className="animate-bounce" style={{ animationDuration: '4s' }} />
                </svg>
                {/* Central Glow */}
                <div className="absolute w-40 h-40 bg-[var(--blue)] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl font-black heading-brutal italic opacity-20">01</span>
              <h3 className="heading-brutal text-2xl md:text-3xl italic">資産化設計</h3>
            </div>
            <p className="text-base md:text-lg font-bold opacity-70 leading-relaxed max-w-lg">
              単発の収益で終わらせない。データに基づいた構造的アプローチにより、時間の経過とともに価値が増大する資産型インフラを構築します。
            </p>
          </div>

          {/* Feature 02: Absolute Transparency (Refractive Prism) */}
          <div className="fade-in-up group" style={{ transitionDelay: '0.2s' }}>
            <div className="neo-border border-white overflow-hidden mb-8 neo-shadow bg-black relative aspect-video flex justify-center items-center">
              {/* Background Grid */}
              <div className="absolute inset-0 earth-grid opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

              {/* Animated Transparency Visual */}
              <div className="relative z-10 w-full h-full flex justify-center items-center">
                <svg viewBox="0 0 200 120" className="w-3/5 h-3/5">
                  {/* Pure White Scan Sweep */}
                  <rect x="0" y="0" width="200" height="20" fill="white" fillOpacity="0.05">
                    <animate attributeName="y" from="-20" to="120" dur="4s" repeatCount="indefinite" />
                  </rect>

                  {/* Central Prism (Diamond Shape) */}
                  <g className="animate-rotate-slow" style={{ transformOrigin: 'center' }}>
                    {/* Outer frame */}
                    <path 
                      d="M100 20 L140 60 L100 100 L60 60 Z" 
                      fill="none" 
                      stroke="white" 
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />
                    {/* Inner crystal core */}
                    <path 
                      d="M100 30 L130 60 L100 90 L70 60 Z" 
                      fill="var(--blue)" 
                      fillOpacity="0.2"
                      stroke="var(--blue)" 
                      strokeWidth="1.5"
                    />
                    <circle cx="100" cy="60" r="4" fill="white" className="animate-ping" style={{ animationDuration: '2s' }} />
                  </g>
                  
                  {/* Digital Light Beams */}
                  {[1, 2, 3].map((i) => (
                    <line 
                      key={i}
                      x1="0" y1={40 + i * 10} 
                      x2="200" y2={40 + i * 10} 
                      stroke="white" 
                      strokeWidth="0.5" 
                      strokeOpacity="0.2"
                      strokeDasharray="10 190"
                    >
                      <animate attributeName="stroke-dashoffset" from="200" to="0" dur={`${1.5 + i}s`} repeatCount="indefinite" />
                    </line>
                  ))}
                </svg>
                {/* Intense Purity Glow */}
                <div className="absolute w-56 h-56 bg-white rounded-full blur-[100px] opacity-10 group-hover:opacity-30 transition-opacity"></div>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl font-black heading-brutal italic text-[var(--blue)]">02</span>
              <h3 className="heading-brutal text-2xl md:text-3xl text-[var(--blue)] italic">絶対的透明性</h3>
            </div>
            <p className="text-base md:text-lg font-bold opacity-70 leading-relaxed max-w-lg">
              すべてのトラフィックを可視化。ブラックボックスを排除し、広告主とパートナーが等しく真実のデータにアクセスできる環境を保証します。
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
