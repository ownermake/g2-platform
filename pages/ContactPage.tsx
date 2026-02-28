import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-40 pb-32 px-6 md:px-10 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 fade-in-up">
          <h1 className="heading-brutal text-6xl md:text-8xl mb-6 uppercase">
            Contact<span className="text-[var(--blue)]">.</span>
          </h1>
          <p className="text-xl md:text-2xl font-bold tracking-widest border-l-8 border-[var(--blue)] pl-6 py-2">
            お問い合わせ
          </p>
        </div>

        <div className="bg-white neo-border neo-shadow p-8 md:p-12 fade-in-up" style={{ transitionDelay: '0.1s' }}>
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-black uppercase tracking-widest mb-3">
                お名前 <span className="text-[var(--blue)]">*</span>
              </label>
              <input 
                type="text" 
                className="w-full bg-[var(--bg)] neo-border p-4 font-bold focus:outline-none focus:ring-4 focus:ring-[var(--blue)]/20 transition-all"
                placeholder="山田 太郎"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-black uppercase tracking-widest mb-3">
                メールアドレス <span className="text-[var(--blue)]">*</span>
              </label>
              <input 
                type="email" 
                className="w-full bg-[var(--bg)] neo-border p-4 font-bold focus:outline-none focus:ring-4 focus:ring-[var(--blue)]/20 transition-all"
                placeholder="info@g2-platform.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-black uppercase tracking-widest mb-3">
                お問い合わせ種別 <span className="text-[var(--blue)]">*</span>
              </label>
              <select className="w-full bg-[var(--bg)] neo-border p-4 font-bold focus:outline-none focus:ring-4 focus:ring-[var(--blue)]/20 transition-all appearance-none">
                <option>サービスに関するお問い合わせ</option>
                <option>アフィリエイトに関するお問い合わせ</option>
                <option>採用に関するお問い合わせ</option>
                <option>その他</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-black uppercase tracking-widest mb-3">
                お問い合わせ内容 <span className="text-[var(--blue)]">*</span>
              </label>
              <textarea 
                className="w-full bg-[var(--bg)] neo-border p-4 font-bold h-48 resize-none focus:outline-none focus:ring-4 focus:ring-[var(--blue)]/20 transition-all"
                placeholder="お問い合わせ内容をご記入ください"
                required
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-[var(--blue)] text-white neo-button py-6 text-xl font-black tracking-widest uppercase hover:bg-blue-700 transition-colors"
            >
              送信する
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
