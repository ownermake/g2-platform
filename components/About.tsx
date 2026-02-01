
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-48 px-6 md:px-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 md:gap-32 items-start">
          
          <div className="lg:w-1/2 fade-in-up">
            <h2 className="heading-brutal text-6xl md:text-8xl lg:text-9xl mb-12 leading-none italic">
              DECODE<br /><span className="text-[var(--blue)]">THE VALUE.</span>
            </h2>
            <div className="max-w-md">
              <p className="text-xl md:text-2xl font-black leading-tight mb-8">
                成果は一度きりの爆発力ではなく、<br className="hidden md:block" />
                積み上がるべき資産。
              </p>
              <p className="text-base md:text-lg font-bold text-gray-400 leading-relaxed italic">
                私たちは、数字の向こう側にある「信頼の質量」を計測します。
                G2は、広告主とパートナーが共に高みへ登るための、最も純度の高い舞台です。
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 gap-12 fade-in-up" style={{ transitionDelay: '0.2s' }}>
            <div className="p-10 neo-border neo-shadow bg-[var(--bg)] relative group overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--blue)]/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
               <h3 className="heading-brutal text-3xl mb-6">OPTIMAL QUALITY</h3>
               <p className="font-bold text-gray-600 leading-relaxed">
                 厳選された案件、厳選されたパートナー。量より質。このシンプルな哲学が、ブランドの品位と爆発的な利益を両立させます。
               </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-12">
               <div className="flex-1 p-8 border-l-4 border-[var(--blue)]">
                 <h4 className="heading-brutal text-xl mb-4 text-[var(--blue)] italic">PURE DATA</h4>
                 <p className="text-sm font-bold opacity-60">すべてのトラフィックは透過される。不正の入り込む余地を完全に排除した、混じりけのない成果エビデンス。</p>
               </div>
               <div className="flex-1 p-8 border-l-4 border-black">
                 <h4 className="heading-brutal text-xl mb-4 italic">NOBLE TRUST</h4>
                 <p className="text-sm font-bold opacity-60">確実な支払い、迅速なサポート。ビジネスの根幹である「資本の流動性」を最高水準で保証します。</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
