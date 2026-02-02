
import React from 'react';

interface TargetingProps {
  onActionClick?: () => void;
}

const Targeting: React.FC<TargetingProps> = ({ onActionClick }) => {
  return (
    <section id="targeting" className="py-24 md:py-40 px-6 md:px-10 bg-white border-y-4 border-black relative overflow-hidden">
      {/* Decorative Background Text */}
      <div className="absolute top-0 right-0 heading-brutal text-[15vw] opacity-[0.02] pointer-events-none select-none leading-none">
        SELECT_PATH
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24 fade-in-up">
          <h2 className="heading-brutal text-4xl md:text-6xl mb-4 italic">
            あなたは、どちらの立場で<br className="sm:hidden" />
            <span className="text-[var(--blue)]">G2</span>に参加しますか？
          </h2>
          <p className="text-[10px] md:text-xs font-black tracking-[0.5em] opacity-30 uppercase">
            CHOOSE YOUR ROLE IN THE ECOSYSTEM
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          
          {/* Path A: Affiliate (Partner) */}
          <div className="bg-[var(--blue)] text-white p-8 md:p-14 lg:p-16 neo-border neo-shadow flex flex-col fade-in-up">
            <div className="mb-8 md:mb-10">
              <div className="inline-block px-3 py-1 bg-white text-[var(--blue)] text-[10px] font-black tracking-widest uppercase mb-6">
                PARTNER_SIDE
              </div>
              <h3 className="heading-brutal text-4xl md:text-5xl lg:text-6xl mb-6 leading-none">
                AFFILIATE<br />
                <span className="text-black/30">PARTNER</span>
              </h3>
              <p className="text-xl md:text-2xl font-black italic mb-6 leading-tight border-l-4 border-white pl-6">
                商品・サービスを紹介して<br />
                収益を得たい方
              </p>
              <p className="text-sm md:text-base font-bold opacity-80 mb-8 leading-relaxed min-h-[5rem]">
                発信力・広告運用・集客スキルを、成果報酬として正当に評価されたい方へ。
                G2は、案件数の多さを売りにするASPではありません。
                成果に向き合えるパートナーが、長く稼げる環境を提供します。
              </p>
            </div>

            <div className="mt-auto">
              <button 
                onClick={onActionClick}
                className="neo-button bg-white text-black px-8 py-6 font-black uppercase w-full tracking-tighter text-xl md:text-2xl italic hover:bg-black hover:text-white transition-colors"
              >
                アフィリエイターとして登録する
              </button>
              <div className="mt-4 flex items-center justify-center gap-2 opacity-60">
                <span className="w-1 h-1 bg-white rounded-full"></span>
                <p className="text-[10px] font-black tracking-[0.2em] uppercase whitespace-nowrap">※ 参加には所定の審査・選別があります</p>
              </div>
            </div>
          </div>

          {/* Path B: Advertiser */}
          <div className="bg-white text-black p-8 md:p-14 lg:p-16 neo-border neo-shadow-blue flex flex-col fade-in-up" style={{ transitionDelay: '0.1s' }}>
            <div className="mb-8 md:mb-10">
              <div className="inline-block px-3 py-1 bg-black text-white text-[10px] font-black tracking-widest uppercase mb-6">
                MERCHANT_SIDE
              </div>
              <h3 className="heading-brutal text-4xl md:text-5xl lg:text-6xl mb-6 leading-none">
                ADVERTISER<br />
                <span className="text-gray-200">NETWORK</span>
              </h3>
              <p className="text-xl md:text-2xl font-black italic mb-6 leading-tight border-l-4 border-black pl-6">
                商品・サービスを広めたい<br />
                事業者の方
              </p>
              <p className="text-sm md:text-base font-bold opacity-50 mb-8 leading-relaxed min-h-[5rem]">
                成果が出た分だけ支払う、無駄のない成果報酬型広告を検討中の方へ。
                G2は、短期的な露出ではなく、売上に直結する成果を重視したASPです。
              </p>
            </div>

            <div className="mt-auto">
              <button 
                onClick={onActionClick}
                className="neo-button bg-black text-white px-8 py-6 font-black uppercase w-full tracking-tighter text-xl md:text-2xl italic hover:bg-[var(--blue)] transition-colors"
              >
                広告主として登録する
              </button>
              <div className="mt-4 flex items-center justify-center gap-2 opacity-0">
                <p className="text-[10px]">Placeholder</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Targeting;
