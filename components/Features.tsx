
import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-[var(--black)] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-16 md:mb-24 fade-in-up">
          <h2 className="heading-brutal text-5xl sm:text-7xl md:text-9xl mb-8 leading-none">
            真の<br /><span className="text-[var(--blue)]">推進力。</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          
          {/* Feature 01: Asset Design */}
          <div className="fade-in-up group">
            <div className="neo-border border-white/20 mb-10 bg-black relative aspect-video flex justify-center items-center overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full earth-grid"></div>
              </div>
              
              <div className="relative w-full h-full flex items-end justify-center px-12 pb-12">
                <svg viewBox="0 0 400 200" className="w-full h-48 overflow-visible">
                  {[...Array(12)].map((_, i) => (
                    <g key={i}>
                      <rect 
                        x={40 + i * 30} 
                        y="200" 
                        width="2" 
                        height="0" 
                        fill="var(--blue)" 
                        className="transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:fill-white"
                      >
                        <animate 
                          attributeName="height" 
                          from="0" 
                          to={60 + Math.sin(i * 0.5) * 40 + (i * 8)} 
                          dur="2s" 
                          begin={`${i * 0.1}s`} 
                          fill="freeze" 
                          calcMode="spline" 
                          keySplines="0.23, 1, 0.32, 1"
                        />
                        <animate 
                          attributeName="y" 
                          from="200" 
                          to={200 - (60 + Math.sin(i * 0.5) * 40 + (i * 8))} 
                          dur="2s" 
                          begin={`${i * 0.1}s`} 
                          fill="freeze"
                          calcMode="spline" 
                          keySplines="0.23, 1, 0.32, 1"
                        />
                      </rect>
                    </g>
                  ))}
                </svg>
              </div>
              
              <div className="absolute top-6 left-6 flex items-center gap-3">
                <div className="w-2 h-2 bg-[var(--blue)] rounded-full animate-ping"></div>
                <span className="font-mono text-[10px] tracking-[0.3em] text-white/40 uppercase">System_Asset_Build</span>
              </div>
            </div>
            
            <div className="flex items-center gap-6 mb-6">
              <span className="text-5xl font-black heading-brutal italic text-white/10">01</span>
              <h3 className="heading-brutal text-3xl md:text-5xl italic tracking-tighter">資産化設計</h3>
            </div>
            <p className="text-lg md:text-2xl font-black leading-relaxed max-w-lg border-l-2 border-[var(--blue)] pl-6 italic">
              積み上がる成果、揺るぎない構造。<br />
              一過性の数字を、永続的な資産へと変換する設計思想。
            </p>
          </div>

          {/* Feature 02: Absolute Transparency */}
          <div className="fade-in-up group" style={{ transitionDelay: '0.2s' }}>
            <div className="neo-border border-white/20 mb-10 bg-black relative aspect-video flex justify-center items-center overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full earth-grid"></div>
              </div>

              <div className="relative w-48 h-48 md:w-64 md:h-64">
                <div className="absolute inset-0 border border-white/20 rounded-full animate-rotate-slow"></div>
                <div className="absolute inset-2 border border-[var(--blue)]/40 rounded-full animate-rotate-fast" style={{ animationDirection: 'reverse' }}></div>
                <div className="absolute inset-8 bg-[var(--blue)]/5 backdrop-blur-sm rounded-full flex items-center justify-center overflow-hidden">
                  <div className="w-full h-px bg-[var(--blue)] shadow-[0_0_15px_var(--blue)] animate-pulse"></div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 mb-6">
              <span className="text-5xl font-black heading-brutal italic text-[var(--blue)]/20">02</span>
              <h3 className="heading-brutal text-3xl md:text-5xl text-[var(--blue)] italic tracking-tighter">絶対的透明性</h3>
            </div>
            <p className="text-lg md:text-2xl font-black leading-relaxed max-w-lg border-l-2 border-[var(--blue)] pl-6 italic">
              ノイズを排し、真実だけを抽出する。<br />
              すべてのトラフィックに、改ざん不能な証明を。
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
