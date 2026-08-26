import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#030712] text-gray-400 py-12 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/5">
          
          {/* Logo / Ism */}
          <div className="text-center md:text-left">
            <a href="#hero" className="text-2xl font-extrabold text-white tracking-wider">
              Abdulloh<span className="text-indigo-500">.</span>dev
            </a>
            <p className="text-sm text-gray-400 mt-2">
              Zamonaviy va interaktiv veb-ilovalar yaratish bo'yicha professional dasturchi.
            </p>
          </div>

          {/* Tezkor havolalar */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <a href="#hero" className="hover:text-indigo-400 transition-colors">Bosh sahifa</a>
            <a href="#projects" className="hover:text-indigo-400 transition-colors">Loyihalar</a>
            <a href="#skills" className="hover:text-indigo-400 transition-colors">Ko'nikmalar</a>
            <a href="#experience" className="hover:text-indigo-400 transition-colors">Tajriba</a>
            <a href="#contact" className="hover:text-indigo-400 transition-colors">Bog'lanish</a>
          </div>

          {/* Ijtimoiy tarmoq havolalari */}
          <div className="flex items-center gap-4">
            <a 
              href="https://t.me/kadirov_a722" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-indigo-500/20 hover:border-indigo-500/50 hover:scale-110 transition-all duration-300"
              title="Telegram"
            >
              💬
            </a>
            <a 
              href="https://github.com/abdullohshifaa-lab" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-indigo-500/20 hover:border-indigo-500/50 hover:scale-110 transition-all duration-300"
              title="GitHub"
            >
              🐱
            </a>
          </div>

        </div>

        {/* Pastki mualliflik huquqi */}
        <div className="pt-8 text-center text-sm text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Abdulloh Kadirov. Barcha huquqlar himoyalangan.</p>
          <p className="flex items-center gap-1">
            React & Tailwind CSS yordamida <span className="text-red-500 animate-pulse">❤️</span> bilan yasaldi
          </p>
        </div>

      </div>
    </footer>
  );
}