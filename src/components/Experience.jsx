import React from 'react';

export default function Experience() {
  const experiences = [
    {
      year: "2025 — Hozirgi vaqt",
      role: "Frontend Dasturchi (Freelance)",
      company: "Mustaqil loyihalar & Vercel",
      description: "React, Tailwind CSS va Vite yordamida zamonaviy onlayn do'konlar va korporativ veb-saytlar yaratish va ularni serverga deploy qilish."
    },
    {
      year: "2024 — 2025",
      role: "Frontend o'quvchisi / Talaba",
      company: "Web Dasturlash kurslari",
      description: "HTML5, CSS3, JavaScript (ES6+) va React asoslarini chuqur o'rganib, amaliy topshiriqlar va real maketlarni kodlash."
    }
  ];

  return (
    <section id="experience" className="py-24 bg-[#030712] text-white px-6 relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Mening <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Tajribam</span>
          </h2>
          <p className="text-gray-400 text-lg">Dasturlash sohasidagi bosib o'tgan yo'lim va faoliyatim.</p>
        </div>

        <div className="border-l-2 border-indigo-500/30 pl-6 ml-4 sm:ml-8 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Nuqta chiziq ustida */}
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-[#030712] shadow-[0_0_10px_#6366f1]"></div>
              
              <span className="text-sm font-semibold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                {exp.year}
              </span>
              <h3 className="text-xl font-bold mt-2 text-white">{exp.role}</h3>
              <h4 className="text-gray-400 text-sm mb-3">{exp.company}</h4>
              <p className="text-gray-300 text-base leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}