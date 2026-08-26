import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#030712] text-white px-6 relative overflow-hidden">
      <div className="max-w-2xl mx-auto text-center relative z-10">
        
        <div className="bg-gray-900/60 border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-xl shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Bog'lanish <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">🚀</span>
          </h2>
          <p className="text-gray-400 mb-8 text-base sm:text-lg">
            Loyihangiz bormi yoki hamkorlik qilmoqchimisiz? Menga istalgan vaqtda yozishingiz yoki qo'ng'iroq qilishingiz mumkin!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://t.me/kadirov_a722" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/30 hover:opacity-90 hover:scale-105 transition-all duration-300"
            >
              Telegramdan yozish 📱
            </a>
            <a 
              href="tel:+998971690060"
              className="px-8 py-4 rounded-xl font-semibold text-gray-300 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              +998 97 169 00 60 📞
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}