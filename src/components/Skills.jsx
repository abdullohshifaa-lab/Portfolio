import React from 'react';

export default function Skills() {
  const skillsList = [
    { name: "HTML5", level: "95%", icon: "🌐" },
    { name: "CSS3 / Tailwind", level: "90%", icon: "🎨" },
    { name: "JavaScript (ES6+)", level: "85%", icon: "⚡" },
    { name: "React.js", level: "85%", icon: "⚛️" },
    { name: "Vite", level: "90%", icon: "⚡" },
    { name: "Git & GitHub", level: "80%", icon: "📦" },
  ];

  return (
    <section id="skills" className="py-24 bg-[#030712] text-white px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Sarlavha */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Texnik <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Ko'nikmalarim</span>
          </h2>
          <p className="text-gray-400 text-lg">Frontend dasturlash yo'nalishida foydalanadigan asosiy texnologiyalarim.</p>
        </div>

        {/* Ko'nikmalar Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skillsList.map((skill, index) => (
            <div 
              key={index}
              className="bg-gray-900/60 border border-white/5 rounded-2xl p-6 backdrop-blur-md shadow-xl hover:border-indigo-500/40 hover:-translate-y-1.5 transition-all duration-300 flex items-center gap-4"
            >
              <span className="text-3xl">{skill.icon}</span>
              <div>
                <h3 className="font-bold text-lg text-white">{skill.name}</h3>
                <span className="text-sm text-indigo-400 font-medium">Daraja: {skill.level}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}