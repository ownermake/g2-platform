
import React from 'react';

interface TargetingProps {
  onActionClick?: () => void;
}

const Targeting: React.FC<TargetingProps> = ({ onActionClick }) => {
  return (
    <section id="targeting" className="bg-[#F2F2F2] py-20 md:py-32 px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* 1つの大きなネオ・ブルータリズム・ボックスに統合 */}
        <div className="neo-border neo-shadow-blue flex flex-col md:flex-row items-stretch overflow-hidden bg-white">
          
          {/* Path A: Affiliate Partner (PARTNER_SIDE) - 左側セクション */}
          <div className="flex-1 bg-[var(--blue)] text-white p-8 md:p-12 lg:p-16 flex flex-col items-start relative md:border-r-4 border-black">
            <div className="w-full h-full flex flex-col">
              <div className="bg-white text-[var(--blue)] inline-block px-4 py-1 text-[10px] md:text-xs font-black tracking-widest uppercase mb-10 neo-border-sm border-2 border-white self-start">
                PARTNER_SIDE
              </div>

              <div className="mb-10">
                <h3 className="heading-brutal text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none mb-0 tracking-tighter">
                  AFFILIATE
                </h3>
                <div className="heading-brutal text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none tracking-tighter text-black/20 -mt-2">
                  PARTNER
                </div>
              </div>

              <div className="flex gap-4 items-start mb-8">
                <div className="w-1.5 h-16 md:h-20 bg-white flex-shrink-0"></div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black italic leading-[1.1] tracking-tighter">
                  商品・サービスを紹介して<br />
                  収益を得たい方
                </p>
              </div>

              <p className="text-sm md:text-base font-bold mb-12 leading-relaxed opacity-90">
                発信力・広告運用・集客スキルを、成果報酬として正当に評価されたい方へ。
                G2は、案件数の多さを売りにするASPではありません。
                成果に向き合えるパートナーが、長く稼げる環境を提供します。
              </p>

              <div className="flex flex-col items-center gap-6 mt-auto">
                <div className="w-3 h-3 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.8)]"></div>
                <button 
                  onClick={onActionClick}
                  className="neo-button bg-white text-black px-6 py-4 md:py-5 font-black uppercase w-full tracking-tighter text-lg md:text-2xl italic hover:bg-black hover:text-white transition-colors"
                >
                  アフィリエイターとして登録する
                </button>
              </div>
            </div>
          </div>

          {/* Path B: Advertiser (MERCHANT_SIDE) - 右側セクション */}
          <div className="flex-1 bg-white text-black p-8 md:p-12 lg:p-16 flex flex-col items-start relative">
            <div className="w-full h-full flex flex-col">
              <div className="bg-black text-white inline-block px-4 py-1 text-[10px] md:text-xs font-black tracking-widest uppercase mb-10 self-start">
                MERCHANT_SIDE
              </div>

              <div className="mb-10">
                <h3 className="heading-brutal text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none mb-0 tracking-tighter">
                  ADVERTISER
                </h3>
                <div className="heading-brutal text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none tracking-tighter text-gray-200 -mt-2">
                  NETWORK
                </div>
              </div>

              <div className="flex gap-4 items-start mb-8">
                <div className="w-1.5 h-16 md:h-20 bg-black flex-shrink-0"></div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black italic leading-[1.1] tracking-tighter">
                  商品・サービスを広めたい<br />
                  事業者の方
                </p>
              </div>

              <p className="text-sm md:text-base font-bold mb-12 leading-relaxed text-gray-400">
                成果が出た分だけ支払う、無駄のない成果報酬型広告を検討中の方へ。
                G2は、短期的な露出ではなく、売上に直結する成果を重視したASPです。
              </p>

              <div className="mt-auto pt-8">
                <button 
                  onClick={onActionClick}
                  className="neo-button bg-black text-white px-6 py-4 md:py-5 font-black uppercase w-full tracking-tighter text-lg md:text-2xl italic hover:bg-[var(--blue)] transition-colors"
                >
                  広告主として登録する
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Targeting;
