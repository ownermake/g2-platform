
import React from 'react';

const Company: React.FC = () => {
  return (
    <section id="mission" className="py-24 md:py-40 px-6 md:px-10 bg-[var(--bg)] border-t-4 border-black">
      <div className="max-w-7xl mx-auto text-center">
        <div className="fade-in-up">
          <h2 className="heading-brutal text-5xl md:text-8xl mb-12 md:mb-16 tracking-tighter">
            OUR <span className="text-[var(--blue)]">MISSION</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-4xl sm:text-5xl md:text-7xl font-black italic leading-[0.9] mb-8">
              "BREAK THE LIMITS, <br />DESIGN THE GROWTH."
            </p>
            <div className="inline-block px-6 py-2 bg-black text-white neo-shadow-blue text-sm md:text-xl font-black uppercase tracking-widest">
              限界を突破し、成長をデザインする。
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
