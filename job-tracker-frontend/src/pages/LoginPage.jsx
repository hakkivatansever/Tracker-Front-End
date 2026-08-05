import { useState } from 'react';


const EyeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a21.62 21.62 0 0 1 5.06-6.06M9.9 4.24A10.94 10.94 0 0 1 12 4c7 0 11 8 11 8a21.6 21.6 0 0 1-2.57 3.83" />
    <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24" />
    <path d="M1 1l22 22" />
  </svg>
);

const GoogleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 18 18">
    <path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.9c1.7-1.57 2.7-3.87 2.7-6.62Z"/>
    <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.9-2.26c-.8.54-1.84.86-3.06.86-2.35 0-4.34-1.59-5.05-3.72H.98v2.33A9 9 0 0 0 9 18Z"/>
    <path fill="#FBBC05" d="M3.95 10.7A5.4 5.4 0 0 1 3.67 9c0-.59.1-1.17.28-1.7V4.97H.98A9 9 0 0 0 0 9c0 1.45.35 2.83.98 4.03l2.97-2.33Z"/>
    <path fill="#EA4335" d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 0 0 .98 4.97l2.97 2.33C4.66 5.17 6.65 3.58 9 3.58Z"/>
  </svg>
);

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log({ email, password, remember });
  };

  return (
    <div className="min-h-screen w-full bg-[floralwhite] flex">
      
      
      <div className="hidden lg:flex lg:w-[46%] relative bg-[midnightblue] overflow-hidden flex-col justify-between p-12 xl:p-16">
        <div className="relative z-10 flex items-center gap-2">
          <span className="text-[#F0B429] text-2xl tracking-tight" style={{ fontFamily: "'Fraunces', serif" }}>Job Application Tracker</span>
        </div>

        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 800" preserveAspectRatio="none" aria-hidden="true">
          <path className="akis-line-1" d="M -50 260 C 120 200, 260 340, 420 260 S 700 220, 650 300" stroke="gold" strokeWidth="1.5" fill="none" />
          <path className="akis-line-2" d="M -50 420 C 150 480, 300 340, 480 420 S 700 480, 650 400" stroke="lightsteelblue" strokeWidth="1" fill="none" />
          <path className="akis-line-3" d="M -50 560 C 180 520, 320 620, 500 540 S 700 560, 650 600" stroke="gold" strokeWidth="1" fill="none" />
        </svg>

      
      </div>

     
      <div className="flex-1 flex items-center justify-center px-6 py-12 sm:px-12">
        <div className="w-full max-w-sm">
          <div className="lg:hidden mb-10 text-center">
            <span className="text-blue text-2xl" style={{ fontFamily: "'Fraunces', serif" }}>Job Application Tracker</span>
          </div>

          <h2 className="text-2xl text-blue" style={{ fontFamily: "'Fraunces', serif" }}>Tekrar hoş geldin</h2>
          <p className="mt-2 text-sm text-[slategray]">Devam etmek için giriş yap.</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label htmlFor="email" className="block text-xs font-medium text-blue mb-1.5 tracking-wide uppercase">
                E-posta
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ornek@sirket.com"
                className="w-full rounded-lg border border-[gainsboro] bg-white px-4 py-2.5 text-blue placeholder-[silver] focus:outline-none focus:ring-2 focus:ring-[gold] focus:border-transparent transition"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="password" className="block text-xs font-medium text-blue tracking-wide uppercase">
                  Şifre
                </label>
                <a href="#" className="text-xs text-blue hover:text-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0B429] rounded transition">
                  Şifremi unuttum
                </a>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-[gainsboro] bg-white px-4 py-2.5 pr-11 text-blue placeholder-[silver] focus:outline-none focus:ring-2 focus:ring-[gold] focus:border-transparent transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[slategray] hover:text-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[gold] rounded"
                  aria-label={showPassword ? 'Şifreyi gizle' : 'Şifreyi göster'}
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
            </div>

            <label className="flex items-center gap-2 text-sm text-[dimgray] cursor-pointer select-none">
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
                className="rounded border-[gainsboro] accent-[gold] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[gold]"
              />
              Beni hatırla
            </label>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue py-3 text-sm font-medium text-[floralwhite] hover:bg-[darkslateblue] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[gold] focus-visible:ring-offset-2 transition"
            >
              Giriş yap
            </button>
          </form>

          <div className="mt-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-[gainsboro]" />
            <span className="text-xs text-[silver]">veya</span>
            <div className="h-px flex-1 bg-[gainsboro]" />
          </div>

          <button className="mt-6 w-full flex items-center justify-center gap-2 rounded-lg border border-[gainsboro] py-2.5 text-sm text-[midnightblue] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[gold] transition">
            <GoogleIcon /> Google ile devam et
          </button>

          <p className="mt-8 text-center text-sm text-[slategray]">
            Hesabın yok mu?{' '}
            <a href="#" className="text-blue font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[gold] rounded">
              Kayıt ol
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}