import React, { useState } from 'react';

interface ContactPageProps {
  onNavigate?: (view: 'home' | 'company' | 'vision' | 'guide' | 'contact') => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert('送信に失敗しました。時間をおいて再度お試しください。');
      }
    } catch (error) {
      alert('通信エラーが発生しました。');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="pt-40 pb-32 px-6 md:px-10 min-h-screen flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white neo-border neo-shadow p-12">
            <h2 className="heading-brutal text-4xl md:text-6xl mb-6">
              THANK YOU<span className="text-[var(--blue)]">.</span>
            </h2>
            <p className="text-xl font-bold tracking-widest mb-8">
              お問い合わせを受け付けました。
            </p>
            <p className="text-sm font-bold opacity-60 mb-12 leading-relaxed">
              内容を確認の上、担当者よりご連絡させていただきます。<br />
              今しばらくお待ちくださいませ。
            </p>
            <button 
              onClick={() => onNavigate ? onNavigate('home') : window.location.reload()}
              className="bg-black text-white neo-button py-4 px-12 text-lg font-black tracking-widest uppercase hover:bg-[var(--blue)] transition-colors"
            >
              トップページへ戻る
            </button>
          </div>
        </div>
      </div>
    );
  }

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
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Web3Forms Access Key */}
            <input type="hidden" name="access_key" value="e3d23076-e75d-4243-8180-110012c70342" />
            <input type="hidden" name="subject" value="G2サイトからのお問い合わせ" />
            <input type="hidden" name="from_name" value="G2 お問い合わせフォーム" />
            
            <div>
              <label className="block text-sm font-black uppercase tracking-widest mb-3">
                お名前 <span className="text-[var(--blue)]">*</span>
              </label>
              <input 
                type="text" 
                name="name"
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
                name="email"
                className="w-full bg-[var(--bg)] neo-border p-4 font-bold focus:outline-none focus:ring-4 focus:ring-[var(--blue)]/20 transition-all"
                placeholder="info@g2-platform.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-black uppercase tracking-widest mb-3">
                お問い合わせ種別 <span className="text-[var(--blue)]">*</span>
              </label>
              <select name="category" className="w-full bg-[var(--bg)] neo-border p-4 font-bold focus:outline-none focus:ring-4 focus:ring-[var(--blue)]/20 transition-all appearance-none">
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
                name="message"
                className="w-full bg-[var(--bg)] neo-border p-4 font-bold h-48 resize-none focus:outline-none focus:ring-4 focus:ring-[var(--blue)]/20 transition-all"
                placeholder="お問い合わせ内容をご記入ください"
                required
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-[var(--blue)] text-white neo-button py-6 text-xl font-black tracking-widest uppercase transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
            >
              {isSubmitting ? '送信中...' : '送信する'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
