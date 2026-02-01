
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="company" className="bg-[#121212] text-white pt-24 pb-24 px-6 md:px-10 relative border-t-8 border-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Company Info (Refined and Minimal) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-12">
            <div className="flex flex-col md:flex-row justify-between items-start gap-12 border-l-4 border-[var(--blue)] pl-8 py-2">
              <div>
                <div className="heading-brutal text-5xl md:text-8xl mb-2 italic leading-none">G2</div>
                <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] opacity-40 font-black">Your Performance Partner.</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-8 text-xs md:text-sm font-bold opacity-70 leading-relaxed uppercase tracking-widest">
                <div>
                  <p className="text-[9px] opacity-40 mb-2 font-black">CONTACT</p>
                  <p className="mb-1">06-XXXX-XXXX</p>
                  <p>contact@g2-platform.com</p>
                </div>
                <div>
                  <p className="text-[9px] opacity-40 mb-2 font-black">OFFICE</p>
                  <p className="mb-1">〒550-0001</p>
                  <p className="mb-1">大阪府大阪市西区土佐堀 2-1-3</p>
                  <p>G2 OSAKA HEADQUARTERS</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 pt-10 border-t border-white/10 flex justify-between items-center opacity-20">
          <p className="text-[8px] font-black tracking-[0.5em] uppercase">© 2025 G2. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
