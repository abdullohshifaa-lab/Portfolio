import React, { useState } from 'react';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: "QulayNarx",
      description: "Zamonaviy onlayn do'kon va mahsulotlar platformasi. React, Tailwind CSS va Vite yordamida yasalgan.",
      category: "React",
      tags: ["React", "Tailwind CSS", "Vite"],
      link: "https://qulay-narx.vercel.app/",
      logo: "/src/assets/qulaynarx-logo.png"
    },
    {
      title: "Dily.ru",
      description: "Internet-magazin va e'lonlar doskasi loyihasining zamonaviy versiyasi.",
      category: "HTML/CSS",
      tags: ["HTML", "CSS", "JS"],
      link: "https://dily-ru.vercel.app",
      logo: "/src/assets/dily-logo.png"
    },
    {
      title: "Havas",
      description: "Supermarket tarmoqlari uchun maxsus tayyorlangan veb-sayt va mahsulotlar katalogi platformasi.",
      category: "Vercel",
      tags: ["Git", "Vercel"],
      link: "https://havas2.vercel.app",
      logo: "https://havasfood.uz/wp-content/themes/havas/assets/images/logo.svg"
    },
    {
      title: "Antools",
      description: "Dizayner va dasturchilar uchun foydali vositalar va resurslar to'plami platformasi.",
      category: "HTML/CSS",
      tags: ["Tailwind", "HTML", "JS"],
      link: "https://antools.vercel.app/",
      logo: "/src/assets/antools-logo.png"
    },
    {
      title: "Whirl",
      description: "SaaS mahsulotlari uchun zamonaviy va avtomatlashtirilgan vazifalarni boshqarish veb-shabloni.",
      category: "HTML/CSS",
      tags: ["Webflow", "HTML", "CSS"],
      link: "https://whirl-lovat.vercel.app/",
      logo: "/src/assets/header-logo.svg"
    },
    {
      title: "Trafalgar",
      description: "Tibbiyot va sog'liqni saqlash xizmatlari uchun yaratilgan zamonaviy onlayn platforma.",
      category: "HTML/CSS",
      tags: ["HTML", "CSS", "JS"],
      link: "https://trafalgar-peach-one.vercel.app/",
      logo: "/src/assets/logo1.svg"
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" style={{ 
      backgroundColor: '#030712', 
      color: '#ffffff', 
      padding: '100px 24px', 
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Orqa fondagi yorug'lik effektlari (Glow background) */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(3, 7, 18, 0) 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        {/* Sarlavha */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: '800', marginBottom: '16px', letterSpacing: '-0.5px' }}>
            Saralangan <span style={{ background: 'linear-gradient(135deg, #818cf8 0%, #c084fc 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Loyihalarim</span>
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '1.15rem', maxWidth: '600px', margin: '0 auto' }}>
            Amalda bajargan va hozirda production'da ishlab turgan eng sara veb-ilovalarim bilan tanishing.
          </p>
        </div>

        {/* Filtr tugmalari */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '50px', flexWrap: 'wrap' }}>
          {['All', 'React', 'HTML/CSS', 'Vercel'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '10px 24px',
                borderRadius: '30px',
                border: filter === cat ? '1px solid #818cf8' : '1px solid rgba(255, 255, 255, 0.08)',
                backgroundColor: filter === cat ? 'rgba(129, 140, 248, 0.15)' : 'rgba(255, 255, 255, 0.02)',
                color: filter === cat ? '#818cf8' : '#9ca3af',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                if (filter !== cat) e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                if (filter !== cat) e.currentTarget.style.color = '#9ca3af';
              }}
            >
              {cat === 'All' ? 'Barchasi' : cat}
            </button>
          ))}
        </div>

        {/* Grid: Cardlar */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))', 
          gap: '28px' 
        }}>
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              style={{ 
                backgroundColor: 'rgba(17, 24, 39, 0.6)', 
                border: '1px solid rgba(255, 255, 255, 0.06)', 
                borderRadius: '24px', 
                padding: '32px', 
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)', 
                display: 'flex', 
                flexDirection: 'column',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                backdropFilter: 'blur(12px)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.borderColor = 'rgba(129, 140, 248, 0.3)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(99, 102, 241, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.4)';
              }}
            >
              
              {/* Logo va Sarlavha */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '14px', 
                  backgroundColor: 'rgba(255,255,255,0.04)', 
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  overflow: 'hidden',
                  padding: '8px'
                }}>
                  <img src={project.logo} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: '700', margin: 0, color: '#fff' }}>{project.title}</h3>
                  <span style={{ fontSize: '0.8rem', color: '#6366f1', fontWeight: '500' }}>{project.category}</span>
                </div>
              </div>

              {/* Tavsif */}
              <p style={{ color: '#9ca3af', marginBottom: '25px', lineHeight: '1.6', flexGrow: 1, fontSize: '0.95rem' }}>
                {project.description}
              </p>

              {/* Teglar */}
              <div style={{ display: 'flex', gap: '8px', marginBottom: '25px', flexWrap: 'wrap' }}>
                {project.tags.map((tag, tIndex) => (
                  <span key={tIndex} style={{ 
                    padding: '6px 14px', 
                    borderRadius: '20px', 
                    backgroundColor: 'rgba(129, 140, 248, 0.08)', 
                    border: '1px solid rgba(129, 140, 248, 0.15)',
                    color: '#818cf8', 
                    fontSize: '0.75rem', 
                    fontWeight: '600' 
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Ko'rish tugmasi */}
              <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ 
                display: 'flex', 
                alignItem: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '13px', 
                borderRadius: '14px', 
                background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)', 
                color: '#fff', 
                textDecoration: 'none', 
                fontWeight: '600', 
                textAlign: 'center',
                boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 6px 25px rgba(168, 85, 247, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(99, 102, 241, 0.4)';
              }}
              >
                Ko'rish 🚀
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}