
import React from 'react';

const Trust: React.FC = () => {
  const trustItems = [
    {
      title: '成果条件の明確化',
      desc: '曖昧さを排除した厳格な定義により、広告主とパートナー間の認識齟齬をゼロにします。'
    },
    {
      title: '不正行為の監視',
      desc: '独自の検知ロジックと、専任スタッフによるモニタリング体制で、アドフラウドや規約違反を未然に防ぎます。'
    },
    {
      title: 'ガイドライン遵守',
      desc: '媒体ごとの最新規約を常にアップデート。ブランドの品位を損なわない健全な運用を徹底。'
    },
    {
      title: '適正な報酬管理',
      desc: '支払遅延ゼロをコミット。透明性の高いシステムで、すべての収益を正確にトラッキング。'
    }
  ];

  return (
    <section className="py-20 md:py-32 px-6 md:px-10 bg-white">
      <div className="max-w-6xl mx-auto fade-in-up">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-20 items-start">
          
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <div className="inline-block px-3 py-1 bg-black text-white text-[10px] font-black uppercase tracking-widest mb-6">
              Security Standard
            </div>
            <h2 className="heading-brutal text-4xl md:text-5xl mb-8 leading-tight">
              SAFE AND<br /><span className="text-[var(--blue)]">STEADY</span>
            </h2>
            <p className="text-base font-bold text-gray-600 leading-relaxed italic">
              成果が正しく積み上がる環境を守るため、私たちは不正を一切許容しません。
              誇りを持てるビジネスを、この場所から。
            </p>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {trustItems.map((item, idx) => (
              <div 
                key={idx} 
                className="neo-border p-6 md:p-8 bg-[#F8F9FA] hover:bg-[var(--blue)] hover:text-white transition-all duration-300 group flex flex-col justify-between min-h-[200px]"
              >
                <div>
                  <div className="text-3xl font-black mb-4 opacity-20 group-hover:text-white group-hover:opacity-100 transition-all">
                    0{idx + 1}
                  </div>
                  <h3 className="font-black text-lg md:text-xl uppercase mb-4 tracking-tighter">
                    {item.title}
                  </h3>
                </div>
                <p className="font-bold text-xs md:text-sm leading-relaxed opacity-60 group-hover:opacity-100">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Trust;
